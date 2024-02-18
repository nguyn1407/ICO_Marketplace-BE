import express from 'express';
import authRoute from './auth.route';
import userRoute from './user.route';
import itemRoute from './item.route';
import transactionRoute from './transaction.route';

const router = express.Router();

const defaultRoutes = [
  {
    path: '/auth',
    route: authRoute,
  },
  {
    path: '/users',
    route: userRoute,
  },
  {
    path: '/items',
    route: itemRoute,
  },
  {
    path: '/transactions',
    route: transactionRoute,
  }
];

defaultRoutes.forEach((route) => {
  router.use(route.path, route.route);
});

export default router;