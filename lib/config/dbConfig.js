module.exports = {
  development: {
    username: process.env.DB_DEV_USERNAME,
    password: process.env.DB_DEV_PASSWORD,
    database: process.env.DB_DEV_NAME,
    host: process.env.DB_DEV_HOST,
    dialect: process.env.DB_DEV_DIALECT,
    pool: {
      max: parseInt(process.env.DB_DEV_POOL_MAX),
      min: parseInt(process.env.DB_DEV_POOL_MIN),
      acquire: parseInt(process.env.DB_DEV_POOL_ACQUIRE),
      idle: parseInt(process.env.DB_DEV_POOL_IDLE),
    },
  },
  stage: {
    username: process.env.DB_STAGE_USERNAME,
    password: process.env.DB_STAGE_PASSWORD,
    database: process.env.DB_STAGE_NAME,
    host: process.env.DB_STAGE_HOST,
    dialect: process.env.DB_STAGE_DIALECT,
    pool: {
      max: parseInt(process.env.DB_STAGE_POOL_MAX),
      min: parseInt(process.env.DB_STAGE_POOL_MIN),
      acquire: parseInt(process.env.DB_STAGE_POOL_ACQUIRE),
      idle: parseInt(process.env.DB_STAGE_POOL_IDLE),
    },
  },
}[process.env.NODE_ENV || 'development'];
// || development present only for sequelize-cli migrations

