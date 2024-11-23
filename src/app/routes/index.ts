import { Router } from 'express';
import { StudentRoutes } from '../modules/student/student.route';
import { UserRouter } from '../modules/user/user.route';

const router = Router();

const moduleRoute = [
  {
    path: '/users',
    route: UserRouter,
  },
  {
    path: '/students',
    route: StudentRoutes,
  },
];

moduleRoute.forEach((route) => router.use(route.path, route.route));

export default router;
