import { useForm } from 'react-hook-form';
const FormEx = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  console.log(errors);

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input {...register('firstName')} />

        <input {...register('lastName', { required: true })} />
        {errors.lastName && <span>This field is required</span>}

        <button>Send</button>
      </form>
    </>
  );
};

export default FormEx;
