import { NextFunction, Request, Response } from 'express';
import { UserService } from './user.service';
import httpStatus from 'http-status';
import sendResponse from '../../utils/sendResponse';

const createStudent = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const { password, student: StudentData } = req.body;

    const result = await UserService.createStudentIntoDB(password, StudentData);

    // res.status(200).json({
    //   success: true,
    //   message: 'Student is Created Successfully',
    //   data: result,
    // });
    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'Student Created successfully',
      data: result,
    });
  } catch (error) {
    next(error);
  }
};

export const userControllers = {
  createStudent,
};
