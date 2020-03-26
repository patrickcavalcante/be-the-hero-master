const express = require('express');
const cors = require('cors');
const routes = require('./routes');
const app = express();
app.use(cors());
app.use(express.json());
app.use(routes);

/**
 * Rota / Recurso
 */

 /**
  * Métodos HTTP:
  * 
  * GET: Buscar uma informação do back-end
  * POST: Criar uma informação no back-end
  * PUT: Alterar uma informação no Back-end
  * DELETE: Deleta uma informação no Back-end
  */

  /**
   * Tipos de parâmetros:
   * 
   * Quary params: parâmetros nomeados enviados na rota após "?" (filtros/paginação) 
   * Routes params: utilizados para identificar recursos
   * Request Body: Corpo da requisição, utilizado para criar ou alterar recursos
   *   
   */

   /**
    * SQL: mysql e etc
    */


app.listen(3333);