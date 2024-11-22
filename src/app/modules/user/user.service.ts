import config from '../../config';
import { TStudent } from '../student/student-interface';
import { Student } from '../student/student.models';
import { TUser } from './user.interface';
import { User } from './user.model';

const createStudentIntoDB = async (password: string, studentData: TStudent) => {
  // if password is not given use default password

  //   set student role

  const userData: Partial<TUser> = {};
  userData.password = password || (config.default_pass as string);
  if (!password) {
    userData.password = config.default_pass as string;
  } else {
    userData.password = password;
  }
  userData.role = 'student';
  //   manually generated id
  userData.id = '2030100001';

  const newUser = await User.create(userData);
  //   create a student
  if (Object.keys(newUser).length) {
    studentData.id = newUser.id;
    studentData.user = newUser._id; //reference id

    const newStudent = await Student.create(studentData);
    return newStudent;
  }
  return newUser;
};

export const UserService = {
  createStudentIntoDB,
};
