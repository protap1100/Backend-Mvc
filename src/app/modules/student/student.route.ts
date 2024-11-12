import express from 'express';
import { StudentControllers } from './student.controller';

const router = express.Router();

// will call controller
router.post('/create-student', StudentControllers.createStudent);
router.get('/', StudentControllers.getAllStudent);
router.get('/:studentId', StudentControllers.getSingleStudentFromDB);

export const StudentRoutes = router;
