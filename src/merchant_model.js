import pkg from "pg";
const { Pool } = pkg;

const connectionString = 'postgres://xwxxukycswsmcr:582fa4e2b8137747f0abc018d33499f5cb14662208bc426ad91dcfe583a1f384@ec2-18-214-35-70.compute-1.amazonaws.com:5432/db52csd839qusm'

const pool = new Pool({
  connectionString,
});

export const getMerchants = () => {
  return new Promise((resolve, reject) => {
    pool.query("SELECT NOW()", (error, results) => {
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
