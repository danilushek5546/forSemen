import { MigrationInterface, QueryRunner } from "typeorm";

export class  $npmConfigName1689083076360 implements MigrationInterface {
    name = ' $npmConfigName1689083076360'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "product" ("id" SERIAL NOT NULL, "name" character varying NOT NULL, "price" integer NOT NULL, "description" character varying NOT NULL, "rating" real NOT NULL DEFAULT '0', "image" character varying, CONSTRAINT "PK_bebc9158e480b949565b4dc7a82" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "characteristic" ("id" SERIAL NOT NULL, "name" character varying NOT NULL, CONSTRAINT "PK_88f998ec743440a5c758e08ece4" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "user" ("id" SERIAL NOT NULL, "firstName" character varying, "lastName" character varying, "email" character varying NOT NULL, "password" character varying NOT NULL, CONSTRAINT "PK_cace4a159ff9f2512dd42373760" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "product_characteristics_characteristic" ("productId" integer NOT NULL, "characteristicId" integer NOT NULL, CONSTRAINT "PK_0eb60e1c0ae47dbb875d20ee9da" PRIMARY KEY ("productId", "characteristicId"))`);
        await queryRunner.query(`CREATE INDEX "IDX_7d7c4a21da98c4082a62151d12" ON "product_characteristics_characteristic" ("productId") `);
        await queryRunner.query(`CREATE INDEX "IDX_5711c19974cde696f48165d150" ON "product_characteristics_characteristic" ("characteristicId") `);
        await queryRunner.query(`ALTER TABLE "product_characteristics_characteristic" ADD CONSTRAINT "FK_7d7c4a21da98c4082a62151d12d" FOREIGN KEY ("productId") REFERENCES "product"("id") ON DELETE CASCADE ON UPDATE CASCADE`);
        await queryRunner.query(`ALTER TABLE "product_characteristics_characteristic" ADD CONSTRAINT "FK_5711c19974cde696f48165d1508" FOREIGN KEY ("characteristicId") REFERENCES "characteristic"("id") ON DELETE CASCADE ON UPDATE CASCADE`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "product_characteristics_characteristic" DROP CONSTRAINT "FK_5711c19974cde696f48165d1508"`);
        await queryRunner.query(`ALTER TABLE "product_characteristics_characteristic" DROP CONSTRAINT "FK_7d7c4a21da98c4082a62151d12d"`);
        await queryRunner.query(`DROP INDEX "public"."IDX_5711c19974cde696f48165d150"`);
        await queryRunner.query(`DROP INDEX "public"."IDX_7d7c4a21da98c4082a62151d12"`);
        await queryRunner.query(`DROP TABLE "product_characteristics_characteristic"`);
        await queryRunner.query(`DROP TABLE "user"`);
        await queryRunner.query(`DROP TABLE "characteristic"`);
        await queryRunner.query(`DROP TABLE "product"`);
    }

}
