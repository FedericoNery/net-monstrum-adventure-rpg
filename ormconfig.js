module.exports = {
  seeds: ['src/seeds/**/*{.ts,.js}'],
  factories: ['src/factories/**/*{.ts,.js}'],
  type: 'mongodb',
  host: 'localhost',
  port: 27017,
  username: 'root',
  password: '',
  database: 'digimon-db',
  entities: [],
  synchronize: true,
};
