CREATE  EXTENSION IF NOT EXISTS  pgcrypto;


 DROP TABLE IF EXISTS products;


  CREATE TABLE products (
     id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
      name TEXT NOT NULL,
       price NUMERIC (10, 2)  NOT NULL CHECK (price >= 0),
        stock INTEGER NOT NULL  DEFAULT 0  CHECK (stock >= 0),
         is_active BOOLEAN DEFAULT true,

         sku TEXT UNIQUE,
          description TEXT,
          created_at TIMESTAMP DEFAULT NOW()
  );

  

 INSERT INTO products (name, price, stock, is_active, sku, description)
  VALUES 
    ('Product A', 19.99, 10, true, 'SKU001', 'Description of Product A'),
    ('Product B', 29.99, 5, true, 'SKU002', 'Description of Product B'),
    ('Product C', 9.99, 20, false, 'SKU003', 'Description of Product C');

     SELECT * FROM products;