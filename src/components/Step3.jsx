import { useFormContext,useWatch } from "react-hook-form";
const Step3 = () => {
  const { register } = useFormContext();
  const message = useWatch({ name: 'message' });

  return (
    <div>
      <label>Message:</label>
      <textarea {...register('message')} />
      <p>{message}</p>
    </div>
  );
};

export default Step3