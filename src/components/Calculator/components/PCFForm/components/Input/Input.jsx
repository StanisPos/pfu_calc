import React from 'react';
import { Col, FloatingLabel, Form, InputGroup } from 'react-bootstrap';
import { usePCFFormContext } from '@/components/Calculator/components/PCFFormProvider';

const Input = ({ id, label, required, md, value, type }) => (<Form.Group as={Col} md={md} controlId={`validation${id}`}>
  <FloatingLabel label={label} controlId={`float${id}`} className='mb-3'>
    <Form.Control
      as='input'
      size='lg'
      id={id}
      type='text'
      placeholder={label}
      required={required}
      value={value}
      data-type={type}
    />
  </FloatingLabel>
  <Form.Control.Feedback type='invalid'>
    Please provide a valid zip.
  </Form.Control.Feedback>
</Form.Group>);

export default React.memo(Input);
