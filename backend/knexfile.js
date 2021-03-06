// Update with your config settings.

module.exports = {

  development: {
    client: 'sqlite3',
    connection: {
      filename: './src/database/db.sqlite',  // diretório da criação do banco
      host : 'localhost',
    user : 'carlossts',
    password : 'c1a2r3s4#A',
    database : 'SemanaOmniStack11'
    },
    migrations: {
      directory: './src/database/tabela' // diretório das tabelas "MIGRATIONS"
    },
    useNullAsDefault: true,  //para suportar valores padrões 'NULOS'
  },

  staging: {
    client: 'postgresql',
    connection: {
      database: 'my_db',
      user:     'username',
      password: 'password'
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  },

  production: {
    client: 'postgresql',
    connection: {
      database: 'my_db',
      user:     'username',
      password: 'password'
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  }

};
