import { DataSource } from 'typeorm';
import { join } from "path";

import config from './config';

// export const ormConfig: TypeOrmModuleOptions = {
//   type: 'postgres',
//   host: config.db.host,
//   port: 5432,
//   username: config.db.user,
//   password: config.db.password,
//   database: config.db.name,
//   entities: [join(__dirname, '**', '*.entity.{ts,js}')],
//   synchronize: false,
//   migrations: ['src/migration/*{.ts,.js}'],
// }

const dbDataSource = new DataSource({
  type: 'postgres',
  port: config.db.port,
  host: config.db.host,
  username: config.db.user,
  password: config.db.password,
  database: config.db.name,
  synchronize: false,
  logging: false,
  entities: [join(__dirname, '**', '*.entity.{ts,js}')],
  migrations: ['./dist/migrations/*.{ts,js}'],
});

export default dbDataSource;