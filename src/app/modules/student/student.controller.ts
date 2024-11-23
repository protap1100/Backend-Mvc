import { NextFunction, Request, Response } from 'express';
import { StudentServices } from './student.service';
import sendResponse from '../../utils/sendResponse';
import httpStatus from 'http-status';
// import { studentValidationSchema } from './student.validation';

const getAllStudent = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const result = await StudentServices.getAllStudentFromDB();
    // console.log('hi');
    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'Student Retrieved successfully',
      data: result,
    });
  } catch (error) {
    next(error);
  }
};

const getSingleStudentFromDB = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const { studentId } = req.params;
    const result = await StudentServices.getSingleStudentFromDB(studentId);
    // console.log('hi');
    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'One Student Retrieved successfully',
      data: result,
    });
  } catch (error) {
    next(error);
  }
};

const deleteStudent = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const { studentId } = req.params;
    const result = await StudentServices.deleteStudentFromDB(studentId);
    // console.log('hi');
    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'Student Deleted successfully',
      data: result,
    });
  } catch (error) {
    next(error);
  }
};

export const StudentControllers = {
  getAllStudent,
  getSingleStudentFromDB,
  deleteStudent,
};
