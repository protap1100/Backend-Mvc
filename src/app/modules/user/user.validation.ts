import { z } from 'zod';

const userValidationSchema = z.object({
  // id: z.string(),
  password: z
    .string({
      invalid_type_error: 'Password must be a string',
    })
    .max(20, { message: 'Password cannot be more than 20 letter' })
    .optional(),
  // needPasswordChange: z.boolean().optional().default(true),
  // role: z.enum(['student', 'faculty', 'admin']),
});

export const UserValidation = {
  userValidationSchema,
};
