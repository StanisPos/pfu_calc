import React, { useId, useState } from 'react';
import { PCF } from '@/components/Calculator/data/constants';
import { Button, Form } from 'react-bootstrap';

const PCFkeys = Object.keys(PCF);

const PCFFormContext = React.createContext({
  pfc: {},
});

const initialPcfState = PCFkeys.reduce(
  (acc, key) => ({ ...acc, [key.toLowerCase()]: null }),
  { name: null, weight: null },
);

const PCFFormProvider = ({ children }) => {
  const [elements, setElements] = useState({ [1]: { ...initialPcfState } });
  const [isNotValid, setIsNotValid] = useState(false);
  const [pfc, setPfc] = useState(initialPcfState);
  const [result, setResult] = useState('');

  const onChange = ({ target }, id) => {
    const value = target.value.replace(/[^+\d]/g, '');

    if (value) {
      setPfc({ ...pfc, [id]: +value || 0 });
    }
  };

  const onClick = () => {
    const rate = pfc.weight / 100;
    const totalCalories =
      (pfc.proteins * 4 + pfc.carbs * 4 + pfc.fats * 9) * rate;
    const bjeCalories = (totalCalories - pfc.carbs * 4).toFixed(2);
    const bje = (bjeCalories / 100).toFixed(2);
    setResult(
      `Общая пищевая ценность: ${totalCalories.toFixed(2)} ккал. ХЕ: ${(
        (pfc.carbs * rate) /
        12
      ).toFixed(
        2,
      )}. БЖЕ: ${bje}`,
    );
  };

  const onSubmit = (evt) => {
    evt.preventDefault();
    if (!evt.currentTarget.checkValidity()) {
      setIsNotValid(true);
    }
    console.log(elements);
    onClick();
  };

  const addForm = () => {
    const lastId = Object.keys(elements).at(-1);
    setElements({
      ...elements,
      [+lastId + 1]: { ...initialPcfState },
    });
  };

  const onChangeInput = (id, type, data) => {
    setElements({ ...elements, [id]: { ...elements[id], ...data } });
  };

  const value = {
    pfc,
    elements,
    onChange,
    onChangeInput,
  };

  return (
    <PCFFormContext.Provider value={value}>
      <Form noValidate validated={isNotValid} onSubmit={onSubmit}>
        {children}
      </Form>
      <Button variant='link' onClick={addForm}>Добавить</Button>
      <p style={{ fontSize: '48px', color: 'red' }}>{result}</p>
    </PCFFormContext.Provider>
  );
};

export const usePCFFormContext = () => React.useContext(PCFFormContext);

export default React.memo(PCFFormProvider);
