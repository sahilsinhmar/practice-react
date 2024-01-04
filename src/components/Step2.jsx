import { useFormContext,useWatch } from "react-hook-form";
const Step2 = () => {
  const { register } = useFormContext();
  const email = useWatch({ name: 'email' });

  return (
    <div>
      <label>Email:</label>
      <input {...register('email')} />
      <p>{email}</p>
    </div>
  );
};

export default Step2