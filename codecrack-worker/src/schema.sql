CREATE TABLE codecrack_code_store (
    "id" integer primary key,
    "codeshare_id" integer,
    "created_date" text,
    "updated_date" text,
    "editor_code" text,
    "original_code" text,
    "modified_code" text,
    "theme_mode" text,
    "selected_language" text,
    "editor_options" text
);

/*
 For Local
 npx wrangler d1 execute codecrack --file=./src/schema.sql
 For Production
 npx wrangler d1 execute codecrack --remote --file=./src/schema.sql
 */