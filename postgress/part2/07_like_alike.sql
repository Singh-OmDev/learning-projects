-- like - case  sensitive pattern matching

 --ilike -- case insensitive pattern matching

  --% -- means any no of chars
   -- exactly one char

    --the % after wirless means anything can come after it

     SELECT name , price
      FROM products
       WHERE name LIKE 'Wireless%';


       