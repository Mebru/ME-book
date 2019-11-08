import { Props as SelectProps } from 'react-select/src/Select';
import { ActionMeta } from 'react-select/lib/types';
import { SelectComponents } from 'react-select/src/components';

//
//#region Enums
/**
 * @typedef SelectType
 * @default 'SingleSelect'
 */
// export enum SelectType { Default = 'Default', SingleSelect = 'SingleSelect', MultiSelect = 'MultiSelect' };
export type SelectTypes = 'Default' | 'SingleSelect' | 'MultiSelect' |
  'AsyncSelect' | 'GroupSelect' | 'CascadingSelect';
export type OptionType = { [type: string]: any };
export type OptionsType = Array<OptionType>;
export type ValueType = OptionType | OptionsType | null | void;
export type GroupType = {
  [name: string]: any, // group label
  options: OptionsType,
};
// passed as the second argument to `onChange`
export type ActionTypes = 'clear' | 'create-option' | 'deselect-option' | 'pop-value' | 'remove-value' | 'select-option' | 'set-value';

/**
 *
 * @typedef CommonProps
 */
export type CommonProps = {
  emotion?: any;
  /**
   * generate an HTML input with this name, containing the current value
   *
   * @type {string}
   */
  name?: string;
  /**
   * apply a className to the control
   *
   * @type {string}
   */
  className?: string;
  /**
   * apply classNames to inner elements with the given prefix
   *
   * @type {string}
   */
  classNamePrefix?: string;
  /**
   *
   *
   * @type {SelectProps}
   */
  selectProps?: SelectProps;
  /**
   * focus the control when it mounts
   *
   * @type {boolean}
   */
  autoFocus?: boolean;
  /**
   *
   *
   * @type {boolean}
   */
  hasValue?: boolean;
  /**
   * allow the user to select multiple values
   *
   * @type {boolean}
   */
  isMulti?: boolean;
  /**
   * disable the control
   *
   * @type {boolean}
   */
  isDisabled?: boolean;
  /**
   * allow the user to search for matching options
   *
   * @type {boolean}
   */
  isSearchable?: boolean;
  /**
   *
   *
   * @type {OptionsType}
   */
  options: OptionsType;
  /**
   * change the text displayed when no option is selected
   *
   * @type {string}
   */
  placeholder?: string;
  /**
   *
   *
   * @type {*}
   */
  components?: any;
  /**
   *
   *
   * @type {SelectComponents<OptionType>}
   */
  defaultComponents?: SelectComponents<OptionType>;

  /**
   * Get the styles of a particular part of the select. Pass in the name of the
   * property as the first argument, and the current props as the second argument.
   * See the `styles` object for the properties available.
   *
   * @function getStyles(name: string, props: any)
   */
  getStyles?: (name: string, props: any) => {};
  /**
   * get the input value aka (option: OptionType ... mostly)
   *
   * @function getValue?: () => OptionsType
   */
  getValue?: () => ValueType;
  /**
   *
   * @function clearValue()
   */
  clearValue?: () => void;
  /**
   *
   * @function selectOption(option: OptionType)
   */
  selectOption?: (option: OptionType) => void;
  /**
   *
   * @function setValue(value: ValueType, action: ActionTypes)
   */
  setValue?: (value: ValueType, action: ActionTypes) => void;
  /**
   * subscribe to change events
   * &&||
   * specify the current value of the control
   *
   * @function
   */
  onChange?: (value: OptionType, action?: ActionMeta) => undefined
};

export type ControlProps = {
  /**
   *
   *
   * @type {string}
   */
  defaultInputValue?: string;
  /**
   *
   *
   * @type {boolean}
   */
  defaultMenuIsOpen?: boolean;
  // defaultValue: object | Array<object> | null | undefined,
  defaultValue?: OptionType;

  /**
   *
   *
   * @type {string}
   */
  inputValue?: string;
  /**
   * control whether the menu is open
   *
   * @type {boolean}
   */
  // menuIsOpen?: boolean;
  // value: object | Array<object> | null | undefined,
  value?: OptionType,
  /**
   *
   *
   * @type {boolean}
   */
  isSelected?: boolean;
  /**
   *
   *
   * @type {boolean}
   */
  isDisabled?: boolean;

  /**
   *  control whether the menu is open
   *
   * @function onMenuOpen()
   */
  onMenuOpen?: () => undefined;
  /**
   *  control whether the menu is open
   *
   * @function onMenuOpen()
   */
  onMenuClose?: () => undefined;
};

/**
 *
 *
 * @export
 * @interface ISelectProps
 * @extends {CommonProps}
 * @extends {ControlProps}
 */
export interface ISelectProps extends CommonProps, ControlProps {
  /**
   *
   *
   * @type {string}
   * @memberof ISelectProps
   */
  id: string;
  /**
   *
   *
   * @type {SelectTypes}
   * @memberof ISelectProps
   */
  selectType: SelectTypes;
};

/**
 *
 *
 * @export
 * @interface ISelectState
 */
export interface ISelectState {
  /**
   *
   *
   * @type {OptionType}
   * @memberof ISelectState
   */
  value?: OptionType,
  /**
   *
   *
   * @type {boolean}
   * @memberof ISelectState
   */
  menuIsOpen?: boolean;
  /**
   *
   *
   * @type {boolean}
   * @memberof ISelectState
   */
  isSelected?: boolean;
  /**
   *
   *
   * @type {boolean}
   * @memberof ISelectState
   */
  isDisabled?: boolean;
};

//#endregion Interfaces
//----------------------------------------------------
declare const SingleSelect: React.ComponentType<SelectProps>;

export default SingleSelect;
