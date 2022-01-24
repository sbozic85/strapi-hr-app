module.exports = ({ env }) => ({
  connection: {
    client: "postgres",
    connection: {
      host: env("DATABASE_HOST", "127.0.0.1"),
      port: env.int("DATABASE_PORT", 5432),
      database: env("DATABASE_NAME", "internship-hr-app"),
      user: env("DATABASE_USERNAME", "root"),
      password: env("DATABASE_PASSWORD", "r00t"),
      ssl: env.bool("DATABASE_SSL", false),
    },
  },
});
