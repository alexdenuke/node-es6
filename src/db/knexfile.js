// Update with your config settings.

/**
 * @type { Object.<string, import("knex").Knex.Config> }
 */
const database = {

  development: {
    client: 'pg',
    connection: {
      host : '127.0.0.1',
      user : 'postgres',
      password : 'zombi119',
      database : 'oilmarketpd'
    }
  },

  test: {
    client: 'pg',
    connection: {
      host : '127.0.0.1',
      user : 'postgres',
      password : 'testpassword',
      database : 'oilmarketpd_test'
    }
  },

  production: {
    client: 'pg',
    connection: process.env.DATABASE_URL,
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  },

};

export default database;
