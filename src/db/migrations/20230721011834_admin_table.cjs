/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
    return knex.schema.createTable('admins', function (table) {
        table.increments('id');
        table.string('login').notNullable().unique();
        table.string('password').notNullable();
        table.string('telephone').notNullable();
      });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
    return knex.schema.dropTable('admins');
};
