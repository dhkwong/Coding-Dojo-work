const express = require('express');
const router = express.Router();
const catchallRoute = require('./catchall.routes');
const apiRouter = express.Router();
const kickbackRoutes = require('./kickback.routes');
apiRouter.use('/kickback', kickbackRoutes);
router.use('/api', apiRouter)
  .use(catchallRoute);

module.exports = router;