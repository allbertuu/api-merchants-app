import pkg from "pg";
const { Pool } = pkg;

const pool = new Pool({
  user: process.env.POSTGRES_USER,
  host: process.env.POSTGRES_HOST,
  database: process.env.POSTGRES_DATABASE,
  password: process.env.POSTGRES_PASSWORD,
  port: process.env.POSTGRES_PORT,
});

export const getMerchants = () => {
  return new Promise((resolve, reject) => {
    pool.query("SELECT * FROM merchants ORDER BY id", (error, results) => {
      if (error) {
        reject(error);
      }
      resolve(results.rows);
    });
  });
};

export const createMerchant = (body) => {
  return new Promise((resolve, reject) => {
    const { name, email } = body;
    pool.query(
      "INSERT INTO merchants (name, email) VALUES ($1, $2) RETURNING *",
      [name, email],
      (error, results) => {
        if (error) {
          reject(error);
        }
        resolve(`Um novo mercador foi adicionado.\nBem-vindo ${results.rows[0].name}! 👋🏼\n\nSeu ID é: ${results.rows[0].id}`);
      }
    );
  });
};

export const deleteMerchant = (id) => {
  return new Promise((resolve, reject) => {
    pool.query(
      "DELETE FROM merchants WHERE id = $1",
      [id],
      (error, results) => {
        if (error) {
          reject(error);
        }
        resolve(`Mercador com ID: ${id} deletado com sucesso ✅`);
      }
    );
  });
};
