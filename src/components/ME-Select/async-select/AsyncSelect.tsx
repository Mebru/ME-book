import AsyncSelect from 'react-select/async';
import * as React from 'react';
import { SelectContainerWrap } from '../single-select/Styles/defaultStyles.styled';
import { ISelectProps, SelectTypes } from '../single-select/types';

type State = {
  inputValue: string,
};

const options = [
  { value: 'chocolate', label: 'Chocolate' },
  { value: 'strawberry', label: 'Strawberry' },
  { value: 'vanilla', label: 'Vanilla' },
];

const sweeties = (inputValue: string) => {
  return options.filter(i =>
    i.label.toLowerCase().includes(inputValue.toLowerCase())
  );
};

const promiseOptions = (inputValue: any) =>
  new Promise(resolve => {
    setTimeout(() => {
      resolve(sweeties(inputValue));
    }, 1000);
  });

export default class WithPromises extends React.Component<ISelectProps, State> {
  public static defaultProps: ISelectProps = {
    id: 'SingleSelectDD',
    selectType: 'AsyncSelect',
    className: '',
    classNamePrefix: '',
    hasValue: false,
    isMulti: false,
    options: []
    // menuIsOpen: false
  }

  state = { inputValue: '' };
  handleInputChange = (newValue: string) => {
    const inputValue = newValue.replace(/\W/g, '');
    this.setState({ inputValue });
    return inputValue;
  };
  render() {
    return (
      <SelectContainerWrap>
        <AsyncSelect
          cacheOptions
          defaultOptions={options}
          loadOptions={promiseOptions}
        />
      </SelectContainerWrap>
    );
  }
}
