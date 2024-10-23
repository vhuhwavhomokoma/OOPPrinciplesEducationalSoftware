const { Pool, Client } = require('pg');

const client = new Client({
    user: 'postgres',
    host: 'localhost',
    password: 'admin',
    port: 5432
});

(async () => {
    try {
        await client.connect();

        // Check if the database already exists
        const result = await client.query(
            `SELECT datname FROM pg_database WHERE datname = 'master_oop_db'`
        );

        if (result.rows.length > 0) {

            console.log('The database "master_oop_db" exists.');

            await client.query(`
                -- Drop the tables in reverse order of creation
                DROP TABLE IF EXISTS person;
            `);

            client.end();
        } 
        else 
        {
            console.log('The database "master_oop_db" does not exist.');
            console.log('Creating database master_oop_db..........');

            await client.query('CREATE DATABASE master_oop_db');

            client.end();
        }

        const clientNew = new Client({
            user: 'postgres',
            host: 'localhost',
            password: 'admin',
            port: 5432,
            database:'master_oop_db'
        });

        await clientNew.connect();

        // Now you can create tables or perform other operations in the database
        // Example: create a 'users' table
        await clientNew.query(`

            CREATE TABLE IF NOT EXISTS "person" (
                id SERIAL PRIMARY KEY,
                email VARCHAR(60),
                fname VARCHAR(100),
                lname VARCHAR(100),
                age INT,
                total_points INT,
                class_object_uml_points INT,
                polymorphism_points INT,
                encapsulation_points INT,
                inheritence_points INT,
                relationship_points INT,
                abstraction_points INT
            );            
        `);

        await clientNew.query(`
            INSERT INTO person (email, fname, lname, age, total_points, class_object_uml_points, polymorphism_points, encapsulation_points, inheritence_points, relationship_points, abstraction_points)
            VALUES ('player@gmail.com', 'player', 'one', 18, 0, 0, 0, 0, 0, 0, 0);
        `);

        const results=await clientNew.query('SELECT * FROM person');

        if(results)
        {
            console.log('Database and tables created successfully.');
            clientNew.end();
        }
        else
        {
            console.log('Database and tables installation unsuccessful.');
        }

        
    } catch (error) {
        console.error('Error:', error);
    } 
})();