import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Connection, getConnectionOptions } from 'typeorm';
import { __prod__ } from 'src/constants';

@Module({
  imports: [
    TypeOrmModule.forRootAsync({
      useFactory: async () => {
        return Object.assign(await getConnectionOptions(__prod__ ? 'prod' : 'dev'));
      },
    }),
  ],
  exports: [TypeOrmModule],
})
export class DatabaseModule {
  constructor(private connection: Connection) {
    this.initDB();
  }

  initDB() {
    // console.log('connection', this.connection);
    if (this.connection.isConnected) {
      console.log('DB connnecting successfully');
    }
  }
}
