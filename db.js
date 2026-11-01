import {Pool} from "pg";

const pool = new Pool({
    user: 'postgres',
    host: "localhost",
    database: "crud-db",
    password: "america@786",
    port: 5432

})

export default pool;