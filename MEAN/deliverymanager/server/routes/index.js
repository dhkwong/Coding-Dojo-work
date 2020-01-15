const express = require('express');
const router = express.Router();
const catchallRoute = require('./catchall.routes');
const apiRouter = express.Router();
const customerRoutes = require('./customer.routes');
apiRouter.use('/customers', customerRoutes);
router.use('/api', apiRouter)
  .use(catchallRoute);
module.exports = router;
