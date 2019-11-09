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
    id: '',
    selectType: 'Default',
    className: '',
    classNamePrefix: '',
    hasValue: false,
    isMulti: false,
    options: []
    // menuIsOpen: false
  }

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
    switch (this.props.selectType) {
      case 'Default':
        return this._renderDefault();
      case 'SingleSelect':
        return this._renderSingleSelect();
      case 'MultiSelect':
        return this._renderMultiSelect();
      default:
        return this._renderDefault();
    }
  }

  _renderDefault = (): React.ReactNode => {
    const { selectType, options, className } = this.props;
    return (
      <DropdownContainer id={'MEbook' + selectType + '_' + className}>
        <Select options={options} />
      </DropdownContainer>
    );
  };
  _renderSingleSelect = (): React.ReactNode => {
    const { id, className, selectType, options, components, ...rest } = this.props;
    return (
      <DropdownContainer id={'ME-' + selectType} className={className}>
        <Select options={options} components={{ SelectContainer, Control }} {...rest} />
      </DropdownContainer>
    );
  };
  _renderMultiSelect = (): React.ReactNode => {
    const { id, className, selectType, options, components, ...rest } = this.props;
    return (
      <DropdownContainer id={'ME-' + selectType} className={className}>
        <Select options={options} components={{ SelectContainer, Control }} isMulti={true} {...rest} />
      </DropdownContainer>
    );
  };
}

// ME_Select.propTypes = {

// };

export default ME_Select;
