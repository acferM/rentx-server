import { MigrationInterface, QueryRunner, TableColumn } from 'typeorm';

export class RemoveTypeColumnFromCars1648242873157
  implements MigrationInterface
{
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropColumn('cars', 'type');
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.addColumn(
      'cars',
      new TableColumn({
        name: 'type',
        type: 'varchar',
      }),
    );
  }
}
