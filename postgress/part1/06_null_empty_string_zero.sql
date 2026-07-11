-- NULL = unknown / missing value
-- Empty string = known value but no characters
-- Zero = actual numeric value


DROP TABLE IF EXISTS basics.value_examples;


CREATE TABLE basics.value_examples (

    id SERIAL PRIMARY KEY,

    nickname TEXT,

    bio TEXT,

    score INTEGER

);


INSERT INTO basics.value_examples
(
    nickname,
    bio,
    score
)

VALUES

(NULL, 'learning db', 10),

('', 'empty nickname', 20),

('om', '', 0);



SELECT * 
FROM basics.value_examples;