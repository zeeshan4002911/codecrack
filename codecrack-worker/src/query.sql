/*
 For Local
 npx wrangler d1 execute codecrack --file=./src/query.sql
 npx wrangler d1 execute codecrack --command="SELECT * FROM codecrack_code_store where codeshare_id = 'zeesh';"
 
 For Production
 npx wrangler d1 execute codecrack --remote --file=./src/query.sql
 */
-- 
-- Query Here 
--
/*
-- Insert query for testing the D1 binding
INSERT INTO
    codecrack_code_store (
        'codeshare_id',
        'created_date',
        'updated_date',
        'editor_code',
        'original_code',
        'modified_code',
        'theme_mode',
        'selected_language',
        'editor_options'
    )
VALUES
    (
        'zeesh',
        datetime('now'),
        NULL,
        'D1 Hello World!',
        '',
        '',
        'light',
        '',
        NULL
    );
*/

SELECT
    *
FROM
    codecrack_code_store;