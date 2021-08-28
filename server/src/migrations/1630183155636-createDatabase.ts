import { query } from 'express';
import { MigrationInterface, QueryRunner } from 'typeorm';

export class createDatabase1630183155636 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    queryRunner.createDatabase('cars', true);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    queryRunner.dropDatabase('cars', true);
  }
}
