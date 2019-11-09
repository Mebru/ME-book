import * as React from 'react';
import { storiesOf } from '@storybook/react';
import ME_Select from '../ME-Select';
import { ISelectProps } from '../single-select/types';

const DefaultSelectProps: ISelectProps = {
  selectType: 'Default',
  className: '',
  options: [
    { value: 'red', label: 'red' },
    { value: 'blue', label: 'blue' }
  ]
};
const SingleSelectProps: ISelectProps = {
  name: 'SingleSelect',
  selectType: 'SingleSelect',
  className: '',
  classNamePrefix: '',
  isMulti: false,
  options: [
    { value: 'red', label: 'red' },
    { value: 'blue', label: 'blue' }
  ]
};

const ME_DefaultSelect = () => {
  const { selectType, options, className } = DefaultSelectProps;
  return (
    <div style={{ display: 'flex', width: '400px', height: '38px' }}>
      <ME_Select
        id={selectType + '_' + className}
        selectType={selectType}
        options={options}
      />
    </div>
  );
};
const ME_SingleSelect = () => {
  const { selectType, name, className, classNamePrefix, isMulti, options, ...rest } = SingleSelectProps;
  return (
    <div style={{ display: 'flex', width: '400px', height: '38px' }}>
      <ME_Select
        id={selectType + '_' + className}
        selectType={selectType}
        name={name}
        className={className}
        classNamePrefix={classNamePrefix}
        isMulti={isMulti}
        options={options}
        {...rest}
      />
    </div>
  );
};

storiesOf('ME-Select', module)
  .add('Default Select Dropdown', ME_DefaultSelect)
  .add('Single Select Dropdown', ME_SingleSelect)