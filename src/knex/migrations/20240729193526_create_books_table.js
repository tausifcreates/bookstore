/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
    return knex.schema.createTable('books', function (table) {
        table.increments('id').primary();
        table.string('title').notNullable();
        table.text('description').nullable();
        table.date('published_date').notNullable();
        table.integer('author_id').unsigned().notNullable();
        table.foreign('author_id').references('authors.id');
        table.timestamps(true, true);
      });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
    return knex.schema.dropTable('books');
};
