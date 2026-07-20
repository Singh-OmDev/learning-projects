CREATE EXTENSION  IF NOT EXISTS pgcrypto;

 DROP TABLE IF EXISTS   post_tags;
  DROP TABLE IF EXISTS comments;
   DROP TABLE IF EXISTS posts;
    DROP TABLE IF EXISTS tags;
       DROP TABLE IF EXISTS post_tags;


        CREATE TABLE users (
             
            id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
            name  TEXT NOT NULL
        );


         CREATE TABLE posts (
             id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
              user_id UUID NOT  NULL REFERENCES users (id) ,
               title TEXT NOT NULL,
                status  TEXT NOT NULL DEFAULT 'draft'
                 CHECK (status IN ('draft', 'published')),

                   views INTEGER NOT NULL DEFAULT 0  CHECK (views >= 0 )


         );


