import Joi from 'joi';

// creating a schema validation suring joi
const userNameValidationSchema = Joi.object({
  firstName: Joi.string().trim().required().max(20).messages({
    'string.empty': 'First Name is required',
    'string.max': 'First Name cannot be more than 20 characters',
    'string.pattern.base': '{#label} must start with a capital letter',
  }),
  middleName: Joi.string().trim().optional().allow(''),
  lastName: Joi.string()
    .trim()
    .required()
    .pattern(/^[a-zA-Z]+$/)
    .messages({
      'string.empty': 'Last Name is required',
      'string.pattern.base': '{#label} is not valid',
    }),
});

// Joi schema for guardian
const guardianValidationSchema = Joi.object({
  father: Joi.string().trim().required().messages({
    'string.empty': 'Father’s name is required',
  }),
  fatherOccupation: Joi.string().trim().required().messages({
    'string.empty': 'Father’s occupation is required',
  }),
  fatherContactNo: Joi.string().trim().required().messages({
    'string.empty': 'Father’s contact number is required',
  }),
  mother: Joi.string().trim().required().messages({
    'string.empty': 'Mother’s name is required',
  }),
  motherOccupation: Joi.string().trim().required().messages({
    'string.empty': 'Mother’s occupation is required',
  }),
  motherContactNo: Joi.string().trim().required().messages({
    'string.empty': 'Mother’s contact number is required',
  }),
});

// Joi schema for localGuardian
const localGuardianValidationSchema = Joi.object({
  name: Joi.string().trim().required().messages({
    'string.empty': 'Local guardian’s name is required',
  }),
  occupation: Joi.string().trim().required().messages({
    'string.empty': 'Local guardian’s occupation is required',
  }),
  contactNo: Joi.string().trim().required().messages({
    'string.empty': 'Local guardian’s contact number is required',
  }),
  address: Joi.string().trim().required().messages({
    'string.empty': 'Local guardian’s address is required',
  }),
});

// Joi schema for student
export const studentValidationSchema = Joi.object({
  id: Joi.string().trim().required().messages({
    'string.empty': 'Student ID is required',
  }),
  name: userNameValidationSchema.required().messages({
    'any.required': 'Student’s full name is required',
  }),
  gender: Joi.string()
    .trim()
    .valid('male', 'female', 'others')
    .required()
    .messages({
      'any.only': '{#label} is not a valid gender',
      'string.empty': 'Gender is required',
    }),
  dateOfBirth: Joi.string().trim().required().messages({
    'string.empty': 'Date of Birth is required',
  }),
  email: Joi.string().trim().email().required().messages({
    'string.empty': 'Email address is required',
    'string.email': '{#label} is not a valid email',
  }),
  contactNumber: Joi.string().trim().required().messages({
    'string.empty': 'Contact number is required',
  }),
  emergencyContactNo: Joi.string().trim().required().messages({
    'string.empty': 'Emergency contact number is required',
  }),
  bloodGroup: Joi.string()
    .trim()
    .valid('A+', 'A-', 'B+', 'B-', 'AB+', 'AB-', 'O+', 'O-')
    .optional(),
  presentAddress: Joi.string().trim().required().messages({
    'string.empty': 'Present address is required',
  }),
  permanentAddress: Joi.string().trim().required().messages({
    'string.empty': 'Permanent address is required',
  }),
  guardian: guardianValidationSchema.required().messages({
    'any.required': 'Guardian details are required',
  }),
  localGuardian: localGuardianValidationSchema.required().messages({
    'any.required': 'Local guardian details are required',
  }),
  profileImg: Joi.string().trim().optional().allow(''),
  isActive: Joi.string().trim().valid('active', 'blocked').default('active'),
});
