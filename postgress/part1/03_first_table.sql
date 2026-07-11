DROP  TABLE IF EXISTS basics.students ;

 CREATE TABLE basics.students (
     id SERIAL  PRIMARY KEY,

      name TEXT NOT NULL,

       email TEXT UNIQUE NOT NULL,

    

    age INTEGER CHECK(age >=18),

     created_at TIMESTAMP DEFAULT NOW ()
);


--insert data into table

 INSERT INTO basics.students (name, email , age)

   VALUES 
    ('John Doe', 'john.doe@example.com', 20),
    ('Jane Smith', 'jane.smith@example.com', 22);
