import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class CreateUsers1615228072409 implements MigrationInterface {

  public async up(queryRunner: QueryRunner): Promise<void> { // Up na migrations
    await queryRunner.createTable(
      new Table({
        name: "users",
        columns: [
          {
            name: "id",
            type: "uuid",
            isPrimary: true,
          },
          {
            name: "name",
            type: "varchar",
          },
          {
            name: "email",
            type: "varchar"
          },
          {
            name: "created_at",
            type: "timestamp",
            default: "now()",
          },
        ]
      })
    )
  }

  public async down(queryRunner: QueryRunner): Promise<void> { // Remove migration

    await queryRunner.dropTable("users")
    
  }
}
