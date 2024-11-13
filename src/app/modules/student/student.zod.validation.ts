import { z } from 'zod';

// Schema for the userName
const userNameValidationSchema = z.object({
  firstName: z
    .string()
    .trim()
    .min(1, { message: 'First Name is required' })
    .max(20, { message: 'First Name cannot be more than 20 characters' }),

  middleName: z.string().trim(),
  lastName: z.string().trim().min(1, { message: 'Last Name is required' }),
});

// Schema for guardian
const guardianValidationSchema = z.object({
  father: z.string().trim().min(1, { message: 'Father’s name is required' }),
  fatherOccupation: z
    .string()
    .trim()
    .min(1, { message: 'Father’s occupation is required' }),
  fatherContactNo: z
    .string()
    .trim()
    .min(1, { message: 'Father’s contact number is required' }),
  mother: z.string().trim().min(1, { message: 'Mother’s name is required' }),
  motherOccupation: z
    .string()
    .trim()
    .min(1, { message: 'Mother’s occupation is required' }),
  motherContactNo: z
    .string()
    .trim()
    .min(1, { message: 'Mother’s contact number is required' }),
});

// Schema for localGuardian
const localGuardianValidationSchema = z.object({
  name: z
    .string()
    .trim()
    .min(1, { message: 'Local guardian’s name is required' }),
  occupation: z
    .string()
    .trim()
    .min(1, { message: 'Local guardian’s occupation is required' }),
  contactNo: z
    .string()
    .trim()
    .min(1, { message: 'Local guardian’s contact number is required' }),
  address: z
    .string()
    .trim()
    .min(1, { message: 'Local guardian’s address is required' }),
});

// Main student schema
const studentSchema = z.object({
  id: z.string().trim().min(1, { message: 'Student ID is required' }),
  name: userNameValidationSchema,
  password: z.string().max(20),
  gender: z.enum(['male', 'female', 'others'], {
    errorMap: () => ({
      message: "Gender must be one of 'male', 'female', or 'others'",
    }),
  }),
  dateOfBirth: z
    .string()
    .trim()
    .min(1, { message: 'Date of Birth is required' }),
  email: z.string().trim().email({ message: 'Invalid email address' }),
  contactNumber: z
    .string()
    .trim()
    .min(1, { message: 'Contact number is required' }),
  emergencyContactNo: z
    .string()
    .trim()
    .min(1, { message: 'Emergency contact number is required' }),
  bloodGroup: z
    .enum(['A+', 'A-', 'B+', 'B-', 'AB+', 'AB-', 'O+', 'O-'])
    .optional(),
  presentAddress: z
    .string()
    .trim()
    .min(1, { message: 'Present address is required' }),
  permanentAddress: z
    .string()
    .trim()
    .min(1, { message: 'Permanent address is required' }),
  guardian: guardianValidationSchema,
  localGuardian: localGuardianValidationSchema,
  profileImg: z.string().trim().optional(),
  isActive: z.enum(['active', 'blocked']).default('active'),
  isDeleted: z.boolean(),
});

// Export the schema
export const StudentZodValidationSchema = studentSchema;
