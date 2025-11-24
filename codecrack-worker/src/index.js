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

		const startTime = Date.now();
		const url = new URL(request.url);
		const method = request.method;

		if (url.pathname == "/push" && method == "POST") {
			return pushCode(request, env, ctx);
		} else if (url.pathname == "/pull" && method == "GET") {
			return pullCode(request, env, ctx);
		} else {
			return Response.json(
				{
					success: false,
					message: "Not Found",
					timestamp: new Date().toISOString(),
					processingTimeMs: Date.now() - startTime
				}, { status: 404 }
			)
		}
	},
};

async function pushCode(request, env, ctx) {
	const startTime = Date.now();
	const {
		id,
		codeshare_id,
		created_date,
		updated_date,
		editor_code,
		original_code,
		modified_code,
		theme_mode,
		selected_language,
		editor_options
	} = await request.json();

	const result = await env.codecrackD1.prepare(`
		INSERT INTO codecrack_code_store (
			id, 
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
		VALUES (?, ?, ?, ?)
	`).bind(
		id,
		codeshare_id,
		created_date,
		updated_date,
		editor_code,
		original_code,
		modified_code,
		theme_mode,
		selected_language,
		editor_options
	).run();

	if (result.success) {
		return Response.json(
			{
				success: true,
				"message": "Code saved successfully",
				timestamp: new Date().toISOString(),
				processingTimeMs: Date.now() - startTime
			}, { status: 200 }
		);
	} else {
		return Response.json(
			{
				success: false,
				message: "Failed to save the code",
				timestamp: new Date().toISOString(),
				processingTimeMs: Date.now() - startTime
			}, { status: 500 }
		)
	}
}

async function pullCode(request, env, ctx) {
	const startTime = Date.now();
	const url = new URL(request.url);
	const codeShareId = url.searchParams.get("codeShareId");

	if (!codeShareId) {
		return Response.json(
			{
				success: false,
				data: {},
				message: "Missing codeShareId in query parameter",
				timestamp: new Date().toISOString(),
				processingTimeMs: Date.now() - startTime
			}, { status: 204 }
		)
	}

	const row = await env.codecrackD1.prepare(`
		SELECT * FROM codecrack_code_store WHERE codeshare_id = ?
	`).bind(codeShareId).first();

	if (row) {
		return Response.json(
			{
				success: true,
				data: row,
				"message": "Code fetched successfully",
				timestamp: new Date().toISOString(),
				processingTimeMs: Date.now() - startTime
			}, { status: 200 }
		);
	} else {
		return Response.json(
			{
				success: false,
				data: {},
				message: "Failed to fetch the code",
				timestamp: new Date().toISOString(),
				processingTimeMs: Date.now() - startTime
			}, { status: 404 }
		)
	}
}