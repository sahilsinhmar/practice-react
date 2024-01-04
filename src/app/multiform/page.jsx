'use client'
// MultiStepForm.jsx
import React, { useState } from 'react';
import { useForm, FormProvider, useFormContext, useWatch } from 'react-hook-form';
import Step1 from '@/components/Step1';
import Step2 from '@/components/Step2';
import Step3 from '@/components/Step3';




const MultiStepForm = () => {
  const methods = useForm({
    defaultValues: {
      name: '',
      email: '',
      message: '',
    },
  });
  const { handleSubmit, formState, register } = methods;
  const { isSubmitting } = formState;

  const [currentStep, setCurrentStep] = useState(0);

  const onSubmit = (data) => {
    console.log(data);
    // Perform your submission logic here
  };

  const moveToNextStep = () => {
    setCurrentStep((prevStep) => prevStep + 1);
  };

  const moveToPreviousStep = () => {
    setCurrentStep((prevStep) => prevStep - 1);
  };

  const steps=[Step1,Step2,Step3]
  const CurrentStepComponent = steps[currentStep];



  return (
    <FormProvider {...methods}>
      <form onSubmit={handleSubmit(onSubmit)}>
      <CurrentStepComponent/>

        {currentStep > 0 && (
          <button type="button" onClick={moveToPreviousStep} disabled={isSubmitting}>
            Back
          </button>
        )}
        {currentStep < 2 && (
          <button type="button" onClick={moveToNextStep} disabled={isSubmitting}>
            Next
          </button>
        )}
        {currentStep === 2 && (
          <button type="submit" disabled={isSubmitting}>
            Submit
          </button>
        )}
      </form>
    </FormProvider>
  );
};

export default MultiStepForm;
