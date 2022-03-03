import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { messageSchema } from '../utils/schemas';

const FormYup = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(messageSchema),
  });

  const onSubmit = (data) => {
    console.log(data);
  };

  console.log(errors);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input {...register('name')} placeholder='Your name...' />
      {errors.name && <span>{errors.name.message}</span>}

      <input {...register('email')} placeholder='Your email...' />
      {errors.email && <span>{errors.email.message}</span>}

      <textarea {...register('message')} placeholder='Your message...' />
      {errors.message && <span>{errors.message.message}</span>}

      <button>Send</button>
    </form>
  );
};

export default FormYup;
