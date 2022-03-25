import { MigrationInterface, QueryRunner, TableColumn } from 'typeorm';

export class RemoveUpdatedAtColumnFromCategories1626575115342
  implements MigrationInterface
{
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropColumn('categories', 'updated_at');
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.addColumn(
      'categories',
      new TableColumn({
        name: 'updated_at',
        type: 'timestamp',
        default: 'now()',
      }),
    );
  }
}
