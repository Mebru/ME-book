// import ME_Select from './single-select/ME_Select';
// import GroupedSelect from './grouped-select/GroupedSelect';
// import AsyncSelect from './async-select/AsyncSelect';

// export default { ME_Select, GroupedSelect, AsyncSelect };

import * as React from 'react';
import { default as Select } from 'react-select';
import { ISelectProps } from './single-select/types';
import { DropdownContainer } from './single-select/Styles/defaultStyles.styled';
import { SelectContainer, Control } from './single-select/Components/selectComponents';

/**
 * Main DropDown class, used to render correct Dropdown Type (Single, Multi etc).
 *
 * @class ME_Select
 * @extends {React.Component<ISelectProps>}
 */
class ME_Select extends React.Component<ISelectProps> {
  public static defaultProps: ISelectProps = {
    id: 'ME_Select',
    selectType: 'SingleSelect',
    className: '',
    classNamePrefix: '',
    hasValue: false,
    isMulti: false,
    options: []
    // menuIsOpen: false
  }

  // constructor(props: ISelectProps) {
  //   super(props);
  // }

  //
  //#region Lifecycle Functions
  componentDidMount(): void {
    console.log('DB - <ME_Select> componentDidMount()');
  }

  componentWillReceiveProps(nextProps: ISelectProps): void {
    console.log('DB - <ME_Select> componentWillReceiveProps()');
  }

  shouldComponentUpdate(nextProps: ISelectProps): boolean {
    console.log('DB - <ME_Select> shouldComponentUpdate()');
    return true;
  }

  componentDidUpdate(prevProps: ISelectProps): boolean {
    console.log('DB - <ME_Select> componentDidUpdate()');
    return true;
  }

  componentWillUnmount(): void {
    console.log('DB - <ME_Select> componentWillUnmount()');
  }
  //#endregion Lifecycle Functions
  //----------------------------------------------------

  render(): React.ReactNode {
    return (
      this.renderDropdown()
    );
  }

  public renderDropdown(): React.ReactNode {
    const { id, className, selectType, options, components, ...rest } = this.props;

    switch (selectType) {
      case 'Default':
        return (
          <DropdownContainer id={'MEbook' + selectType + '_' + className}>
            <Select
              options={options}
              components={{ SelectContainer, Control }
              }
              {...rest}
            />
          </DropdownContainer>
        );
      case 'SingleSelect':
        return (
          <DropdownContainer id={'ME-' + selectType} className={className}>
            <Select options={options} components={{ SelectContainer, Control }} {...rest} />
          </DropdownContainer>
        );
      case 'MultiSelect':
        return (
          <DropdownContainer id={'ME-' + selectType} className={className}>
            <Select options={options} components={{ SelectContainer, Control }} isMulti={true} {...rest} />
          </DropdownContainer>
        );
      default:
        return (
          <DropdownContainer id={'ME-' + selectType} className={className} >
            <Select options={options} components={components} />
          </DropdownContainer>
        );
    }
  }
}

// ME_Select.propTypes = {

// };

export default ME_Select;
