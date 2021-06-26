import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Connection } from 'typeorm';

@Module({
  imports: [TypeOrmModule.forRoot()],
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
