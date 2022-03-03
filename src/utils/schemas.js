import * as yup from 'yup';

export const messageSchema = yup.object().shape({
  name: yup.string().required('Please enter your name'),
  email: yup
    .string()
    .required('Please enter an email address')
    .email('Please enter a valid email address'),
  message: yup
    .string()
    .required('Please enter your message')
    .min(10, 'The message must be at least 10 characters'),
});
