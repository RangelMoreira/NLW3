import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class createImages1605812519270 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(new Table({
            name: 'images',
            columns:[
                {
                    name: 'id',
                    type: 'integer',
                    unsigned: true,
                    isPrimary: true,
                    isGenerated: true,
                    generationStrategy: 'increment'
                },
                {
                    name: 'path',
                    type: 'varchar'
                },
                {
                   name:'orphanages_id',
                   type: 'integer',
                }
            ],
            foreignKeys:[
                {
                  name: 'ImageOrphanage', //nome da foreign key
                  columnNames: ['orphanages_id'],//nome da coluna que vai armazenar o id
                  referencedTableName: 'orphanages',
                  referencedColumnNames: ['id'],
                  //atualiza os ids das imagens caso o id do orfanato 
                  //tenha sido atualizado
                  onUpdate: 'CASCADE', 
                  //deleta as imagens caso o orfanato seja excluído
                  onDelete: 'CASCADE'
                }
            ]
        }))

        
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('images');
    }

}
