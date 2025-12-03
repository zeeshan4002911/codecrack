/**
 * Welcome to Cloudflare Workers! This is your first worker.
 *
 * - Run `npm run dev` in your terminal to start a development server
 * - Open a browser tab at http://localhost:8787/ to see your worker in action
 * - Run `npm run deploy` to publish your worker
 *
 * Learn more at https://developers.cloudflare.com/workers/
 */

export default {
	async fetch(request, env, ctx) {
		// return new Response("Welcome to codecrack worker!");
		const headers = new Headers();
		const allowedOrigins = ['http://localhost:4200', 'https://codecrack.pages.dev'];
		const origin = request.headers.get('Origin');

		if (allowedOrigins.includes(origin))
			headers.set('Access-Control-Allow-Origin', origin);
		headers.set('Access-Control-Allow-Methods', 'GET', 'POST');
		headers.set('Access-Control-Allow-Headers', 'Content-Type, Authorization');

		// For pre-flight requests (OPTIONS)
		if (request.method == "OPTIONS") {
			return new Response(null, {
				status: 204,
				headers: headers
			});
		}

		const startTime = Date.now();
		const url = new URL(request.url);
		const method = request.method;

		let response = {};
		if (url.pathname == "/push" && method == "POST") {
			response = await pushCode(request, env, ctx);
		} else if (url.pathname == "/pull" && method == "GET") {
			response = await pullCode(request, env, ctx);
		} else {
			response = {
				success: false,
				status: 404,
				body: { message: "Not Found" }
			};
		}

		response.body.timestamp = new Date().toISOString();
		response.body.processingTimeMs = Date.now() - startTime;

		// For these status code the response body should not be there
		if ([101, 204, 205, 304].includes(response.status))
			return new Response(null, {
				status: 204,
				headers: headers
			});

		return Response.json(response.body, {
			status: response.status,
			statusText: response.success ? "SUCCESS" : "FAILED",
			headers: headers
		})
	},
};

async function pushCode(request, env, ctx) {
	let {
		codeShareId,
		editorCode,
		originalCode,
		modifiedCode,
		themeMode,
		selectedLanguage,
		editorOptions
	} = await request.json();

	const result = await env.codecrackD1.prepare(`
		INSERT OR REPLACE INTO codecrack_code_store (
			codeshare_id, 
			created_date, 
			updated_date,
			editor_code,
			original_code,
			modified_code,
			theme_mode,
			selected_language,
			editor_options
		)
		VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)
	`).bind(
		codeShareId,
		null,
		Date.now(),
		editorCode ?? null,
		originalCode ?? null,
		modifiedCode ?? null,
		themeMode ?? null,
		selectedLanguage ?? null,
		editorOptions ?? null
	).run();

	if (result.success) {
		return {
			success: true,
			status: 200,
			body: { message: "Code saved successfully" }
		};
	} else {
		return {
			success: false,
			status: 500,
			body: { message: "Failed to save the code" }
		};
	}
}

async function pullCode(request, env, ctx) {
	const url = new URL(request.url);
	const codeShareId = url.searchParams.get("codeShareId");

	if (!codeShareId) {
		return {
			success: false,
			status: 204,
			body: {
				data: {},
				message: "Missing codeShareId in query parameter",
			}

		};
	}

	const row = await env.codecrackD1.prepare(`
		SELECT * FROM codecrack_code_store WHERE codeshare_id = ?
	`).bind(codeShareId).first();

	if (row) {
		return {
			success: true,
			status: 200,
			body: {
				data: row,
				message: "Code fetched successfully"
			}
		};
	} else {
		return {
			success: false,
			status: 404,
			body: {
				data: {},
				message: `No Record exists for ${codeShareId}`
			}
		};
	}
}