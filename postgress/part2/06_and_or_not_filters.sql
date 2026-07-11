--AND -> every condition should be true
 --OR -> at least one condition should be true
 --NOT -> negate the condition

 

--AND USE 

 --give me the products where  it is  electronic and price >1000

SELECT  name , category , price
 FROM products 
 WHERE category  = 'Electronics'
  AND price > 1000;



-- OR USE

 --products where category is electronics or  furniture

 SELECT  name , category , price

  FROM products
   WHERE category = 'Electronics'
    OR category = 'Furniture';


     --NOT USE
     SELECT name , category
      FROM products

       WHERE NOT category = 'furniture';

       