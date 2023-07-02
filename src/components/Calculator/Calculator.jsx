import React from 'react';
import { PCFFormProvider } from './components/PCFFormProvider';
import { PCFForm } from './components/PCFForm';
import { SubmitBtn } from './components/SubmitBtn';

const Calculator = () => (
  <PCFFormProvider>
    <PCFForm />
    <SubmitBtn />
  </PCFFormProvider>
);

export default Calculator;
