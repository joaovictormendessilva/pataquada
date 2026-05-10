import { MigrationInterface, QueryRunner } from 'typeorm';

export class CreateUserUserEnergyAndWallet1778375406599 implements MigrationInterface {
  name = 'CreateUserUserEnergyAndWallet1778375406599';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `CREATE TABLE "energies" ("id" SERIAL NOT NULL, "energy" integer NOT NULL DEFAULT '5', CONSTRAINT "PK_1b243e3013d86127274af46ae41" PRIMARY KEY ("id"))`,
    );
    await queryRunner.query(
      `CREATE TABLE "users" ("id" SERIAL NOT NULL, "username" character varying NOT NULL, "first_name" character varying NOT NULL, "last_name" character varying NOT NULL, "email" character varying NOT NULL, "password" character varying NOT NULL, "created_at" TIMESTAMP NOT NULL DEFAULT now(), "updated_at" TIMESTAMP NOT NULL DEFAULT now(), "walletId" integer, "energyId" integer, CONSTRAINT "REL_0a95e6aab86ff1b0278c18cf48" UNIQUE ("walletId"), CONSTRAINT "REL_6b5a8883e927d65c61da187032" UNIQUE ("energyId"), CONSTRAINT "PK_a3ffb1c0c8416b9fc6f907b7433" PRIMARY KEY ("id"))`,
    );
    await queryRunner.query(
      `CREATE TABLE "wallets" ("id" SERIAL NOT NULL, "balance" numeric(10,2) NOT NULL DEFAULT '0', CONSTRAINT "PK_8402e5df5a30a229380e83e4f7e" PRIMARY KEY ("id"))`,
    );
    await queryRunner.query(
      `ALTER TABLE "users" ADD CONSTRAINT "FK_0a95e6aab86ff1b0278c18cf48e" FOREIGN KEY ("walletId") REFERENCES "wallets"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`,
    );
    await queryRunner.query(
      `ALTER TABLE "users" ADD CONSTRAINT "FK_6b5a8883e927d65c61da1870320" FOREIGN KEY ("energyId") REFERENCES "energies"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE "users" DROP CONSTRAINT "FK_6b5a8883e927d65c61da1870320"`,
    );
    await queryRunner.query(
      `ALTER TABLE "users" DROP CONSTRAINT "FK_0a95e6aab86ff1b0278c18cf48e"`,
    );
    await queryRunner.query(`DROP TABLE "wallets"`);
    await queryRunner.query(`DROP TABLE "users"`);
    await queryRunner.query(`DROP TABLE "energies"`);
  }
}
