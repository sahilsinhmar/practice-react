import { useFormContext,useWatch } from "react-hook-form";
const Step1 = () => {
  const { register } = useFormContext();
  const name = useWatch({ name: 'name' });

  return (
    <div>
      <label>Name:</label>
      <input {...register('name')} />
      <p>{name}</p>
    </div>
  );
};

export default Step1