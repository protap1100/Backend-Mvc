import { Student } from './student.models';
import { TStudent } from './student-interface';

const createStudentIntoDB = async (studentData: TStudent) => {
  if (await Student.isUserExists(studentData.id)) {
    throw new Error('User Already Exists');
  }
  const result = await Student.create(studentData); //in static method

  // const student = new Student(studentData); // create an instance
  // if (await student.isUserExist(studentData.id)) {
  //   throw new Error('User Already Exists');
  // }

  // const result = await student.save(); //built in instance method

  return result;
};

const getAllStudentFromDB = async () => {
  const result = await Student.find();
  return result;
};

const getSingleStudentFromDB = async (id: string) => {
  const result = await Student.findOne({ id });
  return result;
};

const deleteStudentFromDB = async (id: string) => {
  const result = await Student.updateOne({ id }, { isDeleted: true });
  return result;
};

export const StudentServices = {
  createStudentIntoDB,
  getAllStudentFromDB,
  getSingleStudentFromDB,
  deleteStudentFromDB,
};
