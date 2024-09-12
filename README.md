*ORM*

*Oque é um ORM?* 

- ORM (Object relational Mapper) é uma técnica de mapeamento de objeto relacional que nos permite fazer uma relação do objeto com os dados que os mesmos representam.
        - Exemplo de ORM: TypeOrm e Primsa.

    - npm i typeorm reflect-metadata sqlite3

    > Iremos utilizar o beekeeper Studio para conseguirmos visualizar o nosso Banco de dados.
  
     - Instale o beekeeper, ele tem uma tril free que dura 2 semenas, podemos utilizar outro visualizador de banco de dados, como: DBeaver.
       
        - https://www.beekeeperstudio.io/
          
        - Depois de fazer a instalação, crie uma pasta no seu projeto chamada database e dentro dessa pasta crie o arquivo db.sqlite.
          
        - No beekeeper crie um novo banco de dados e procure pelo arquivo db.sqlite do seu projeto. 

    >Alteração no tsconfig.json
    
-Precisamos descomentar o experimentalDecorators, emitDecoratorMetadata e allowJs no tsconfig.json

> Configuração do TypeORM
> 
  https://typeorm.io/data-source
  
  -Crie um DataSource na pasta de database, pode pegar o codigo que está na propria doc do typeORM apenas faça algumas modificações para se adequar à database. Exemplo de configuração:
  
        - {type: "sqlite", database: "./src/database/db.sqlite",  migrations: ["./src/database/migrations/*.ts"]}

  -Adicionar o script no package.json
  -     "typeorm": "typeorm-ts-node-common.js",
  -     "migration:create": "npm run typeorm migration:create -n"
  
  - Em seguida, no console escreva:
  -     npm run migration:create src/database/migrations/teste
  
    - Estamos testando se nossas migrações estão indo para o lugar certo.
  
    - Nas migrações podemos configurar nome da tabela e/ou colunas da tabela.
  
    - Toda migração tem duas classes up e down, oque estiver escrito no up precisa rodar a migração, caso quisessemos voltar ao estado anterior escrevemos o oposto do up no down.

  - Caso queira adicionar uma tabela, dentro da classe up faremos o seguinte:
  
                -await queryRunner.createTable(new Table({
                    name: "users",
                    columns: [{name: "id_user", type: "string", isPrimary: true},{name: "name", type: "string", isNullable: false},{name: "email", type: "string",isNullable: false, isUnique: true},{name: "password", type: "string", isNullable: false},]
                }))

  -Para Concluir estas migrações, rode no console:
  -     npx typeorm-ts-node-commonjs migration:run -d src/database/index.ts

  -Caso queira reverter tal migração ou excluir a tabela precisamos configurar dentro da migração na classe down. Exemplo de dropTable:
  
      await queryRunner.dropTable('users') ~~ Apenas precisamos passar o nome da tabela.
  
  -E depois rodar no console:
  -      npx typeorm-ts-node-commonjs migration:revert -d src/database/index.ts

  Precisa criar entities e repositories.
-Entities são objetos que representam conceitos do domínio da aplicação e possuem uma identidade única que persiste ao longo do tempo. Cada entidade corresponde a uma tabela no banco de dados, e cada instância de uma entidade representa uma linha nessa tabela. Por exemplo, em um sistema de gerenciamento de biblioteca, uma entidade poderia ser um “Livro” com atributos como título, autor e ISBN.
 
-Repositories são responsáveis por mediar o acesso aos dados persistidos, desacoplando a lógica de acesso a dados da lógica de negócios. Eles atuam como uma coleção de objetos de domínio em memória e fornecem métodos para adicionar, remover e recuperar esses objetos. Isso permite que a camada de negócios interaja com os dados sem precisar conhecer os detalhes de como esses dados são armazenados ou recuperados
