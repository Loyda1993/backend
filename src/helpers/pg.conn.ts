import { Pool } from "pg";
require('dotenv').config();

const port = process.env.PORT || 5432;
const dbHost = process.env.DB_HOST;
const dbUser = process.env.DB_USER;
const dbName = process.env.DB_DATABASE;
const dbPassword = process.env.DB_PASSWORD;

const pool = new Pool({
    user: dbUser,
    host: dbHost,
    database: dbName,
    password: dbPassword,
    port: port, 
    ssl: true
});

pool.connect()
    .then(()=>{
        console.log('Conectado a la base de datos')
    })
    .catch((error) => {
        console.error('Error al conectar a la base de datos'+ error)
    })

export default pool;
