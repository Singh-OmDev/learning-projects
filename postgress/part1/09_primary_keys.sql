DROP TABLE IF EXISTS basics.sales;

 CREATE TABLE basics.sales(
     id SERIAL PRIMARY KEY,
      title TEXT NOT NULL,
    
        price NUMERIC (10, 2) NOT NULL DEFAULT 0,
         created_at TIMESTAMP DEFAULT NOW()


 );
 
  INSERT INTO basics.sales (title, price)
   VALUES 
    ('Sale 1', 19.99),
    ('Sale 2', 29.99),
    ('Sale 3', 9.99);

     SELECT * FROM basics.sales;
