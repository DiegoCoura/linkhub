import mysql from "mysql";

export const db = mysql.createConnection({
  hots: "localhost",
  user: "root",
  password: "*Diegodida1302",
  database: "linkhub_db",
});
