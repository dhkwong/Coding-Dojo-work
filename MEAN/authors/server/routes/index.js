const express = require('express');
const router = express.Router();
const catchallRoute = require('./catchall.routes');
const apiRouter = express.Router();
const authorRoutes = require('./author.routes');
apiRouter.use('/authors', authorRoutes); //apiRouter.user('/author', authorRoutes)
router.use('/api', apiRouter)
  .use(catchallRoute);
module.exports = router;
