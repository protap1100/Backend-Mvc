import { Request, Response } from 'express';
import { StudentServices } from './student.service';
// import { studentValidationSchema } from './student.validation';
import { StudentZodValidationSchema } from './student.zod.validation';

const createStudent = async (req: Request, res: Response) => {
  try {
    const { student: StudentData } = req.body;

    // Data validated by joi
    // const { error, value } = studentValidationSchema.validate(StudentData);
    // console.log({ error }, { value });

    // data validation by zod
    const zodParsedData = StudentZodValidationSchema.parse(StudentData);

    const result = await StudentServices.createStudentIntoDB(zodParsedData);

    // if (error) {
    //   res.status(500).json({
    //     success: false,
    //     message: 'Something Went wrong',
    //     error: error,
    //   });
    // }
    //will call service function to send this data

    // console.log(StudentData);
    //   send response
    res.status(200).json({
      success: true,
      message: 'Student is Created Successfully',
      data: result,
    });
  } catch (error: any) {
    res.status(500).json({
      success: false,
      message: error.message || 'Something Went wrong',
      error: error,
    });
  }
};

const getAllStudent = async (req: Request, res: Response) => {
  try {
    const result = await StudentServices.getAllStudentFromDB();
    console.log('hi');
    res.status(200).json({
      success: true,
      message: 'Student Retrieved Successfully',
      data: result,
    });
  } catch (error: any) {
    res.status(500).json({
      success: false,
      message: 'Something Went wrong',
      error: error,
    });
  }
};

const getSingleStudentFromDB = async (req: Request, res: Response) => {
  try {
    const { studentId } = req.params;
    const result = await StudentServices.getSingleStudentFromDB(studentId);
    // console.log('hi');
    res.status(200).json({
      success: true,
      message: 'One Student Retrieved Successfully',
      data: result,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Something Went wrong',
      error: error,
    });
  }
};

const deleteStudent = async (req: Request, res: Response) => {
  try {
    const { studentId } = req.params;
    const result = await StudentServices.deleteStudentFromDB(studentId);
    // console.log('hi');
    res.status(200).json({
      success: true,
      message: 'Student Deleted Successfully',
      data: result,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Something Went wrong',
      error: error,
    });
  }
};

export const StudentControllers = {
  createStudent,
  getAllStudent,
  getSingleStudentFromDB,
  deleteStudent,
};
