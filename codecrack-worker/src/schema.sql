DROP TABLE IF EXISTS codecrack_code_store;

CREATE TABLE codecrack_code_store (
    "codeshare_id" TEXT PRIMARY KEY,
    "created_date" TIMESTAMP,
    "updated_date" TIMESTAMP,
    "editor_code" TEXT,
    "original_code" TEXT,
    "modified_code" TEXT,
    "theme_mode" TEXT,
    "selected_language" TEXT,
    "editor_options" TEXT
);

/*
 For Local
 npx wrangler d1 execute codecrack --file=./src/schema.sql
 For Production
 npx wrangler d1 execute codecrack --remote --file=./src/schema.sql
 */