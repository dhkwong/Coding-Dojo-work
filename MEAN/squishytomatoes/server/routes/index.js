const express = require('express');
const router = express.Router();
const catchallRoute = require('./catchall.routes');
const apiRouter = express.Router();
const movieRoutes = require('./movie.routes');
apiRouter.use('/movies', movieRoutes); // uses routes from frontend e.g /movies/:id
router.use('/api', apiRouter) // appends api to route e.g /api/movies/:id
  .use(catchallRoute);
module.exports = router;
