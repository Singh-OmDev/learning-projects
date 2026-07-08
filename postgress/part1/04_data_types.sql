DROP TABLE IF EXISTS basics.products_basics;

 CREATE TABLE basics.products_basics (
      id SERIAL PRIMARY KEY,

       name VARCHAR (100) NOT NULL,

       description TEXT,

        stock INTEGER DEFAULT 0,

         
          total_views BIGINT DEFAULT 0,

           price NUMERIC (10, 3),

           id_active BOOLEAN DEFAULT true

 );

  INSERT INTO basics.products_basics (name , description , stock , total_views, price , id_active)
   VALUES 
    ('Product 1', 'Description of Product 1', 10, 100, 19.99, true),
    ('Product 2', 'Description of Product 2', 5, 50, 29.99, false),
    ('Product 3', 'Description of Product 3', 20, 200, 9.99, true);


    SELECT *FROM basics.products_basics;