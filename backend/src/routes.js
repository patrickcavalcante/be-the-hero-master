const express = require('express');
const routes = express.Router();
const OngControllers = require('./controllers/OngControllers');
const IncidentControllers = require('./controllers/IncidentControllers');
const ProfileControllers = require('./controllers/ProfileControllers');
const SessionControllers = require('./controllers/SessionControllers');


routes.post('/sessions', SessionControllers.create);
routes.get('/ongs', OngControllers.index);
routes.post('/ongs', OngControllers.create);

routes.get('/profile', ProfileControllers.index);

routes.get('/incidents', IncidentControllers.index);
routes.post('/incidents', IncidentControllers.create);
routes.delete('/incidents/:id', IncidentControllers.delete);

module.exports = routes;