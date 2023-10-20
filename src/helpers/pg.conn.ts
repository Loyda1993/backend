import { Pool } from "pg";

// postgres://root:7dpdYQTSZjTTz0WO0emX7xXLNZEPcdb5@dpg-ckoui2oujous73b95480-a.oregon-postgres.render.com/app_venta
const pool = new Pool({
    user: 'root',
    host: 'dpg-ckoui2oujous73b95480-a.oregon-postgres.render.com',
    database: 'app_venta',
    password: '7dpdYQTSZjTTz0WO0emX7xXLNZEPcdb5',
    port: 5432, 
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
