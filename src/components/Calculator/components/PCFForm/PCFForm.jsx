import React from 'react';
import { Input } from './components/Input';
import { PCF } from '@/components/Calculator/data/constants';
import { PCFFormProvider, usePCFFormContext } from '../PCFFormProvider';
import { Row } from 'react-bootstrap';
import styles from './PCFForm.module.css';
import classNames from 'classnames';

const PCFForm = () => {
  const { elements, onChangeInput } = usePCFFormContext();

  return (<ul>{Object.entries(elements).map(([id, values]) => {
      const { name, weight, ...properties } = values;
      const onChange = ({ target }) => {
        const name = target.id.slice(0, target.id.indexOf('-'));
        let value = target.value;

        if (target.dataset.type === 'number') {
          value = target.value.replace(/\D+/g, '');
        }

        if (properties[name] !== value) {
          onChangeInput(id, target.dataset.type, { [name]: value });
        }
      };

      return (<li onChange={onChange} key={id} className={styles.wrapper}>
          <Input id={`name-${id}`} label='Название продукта' md={4} value={name} />
          <Row as='ul' className={classNames(styles.list, 'mb-3')}>
            {Object.keys(properties).map((key) => (<li key={key}>
                <Input id={`${key}-${id}`} label={PCF[key]} md={4} value={properties[key]} type='number' required />
              </li>))}
          </Row>
          <Row className='justify-content-md-center'>
            <Input smd={6} id={`weight-${id}`} label='Вес в граммах' value={weight} required />
          </Row>
        </li>);
    })}</ul>);
};

export default PCFForm;
