import * as React from 'react';
import { ControlWrap, SelectContainerWrap } from '../Styles/defaultStyles.styled';
import { components } from 'react-select';

/**
 *
 *
 * @param {*} props
 * @returns {React.ReactElement}
 */
export const SelectContainerME = (props: any): React.ReactElement => {
  const { children, ...rest } = props;

  return (
    <SelectContainerWrap id={'SelectContainerWrap'} {...rest}>
      {children}
    </SelectContainerWrap>
  );
};
/**
 *
 *
 * @param {*} props
 * @returns {React.ReactElement}
 */
export const SelectContainerD = (props: any): React.ReactElement => {
  const { className, ...rest } = props;

  return (
    <SelectContainerWrap id={'SelectContainerWrap'}>
      <components.SelectContainer {...rest} />
    </SelectContainerWrap>
  );
};

// export const SingleSelectContainer = (props: any) => {
//   const { options, ...rest } = props;
//   return (
//     <SelectContainerWrap id={'SelectContainerWrap'} {...props} />
//   )
// }

/**
 *
 *
 * @param {*} props
 * @returns {React.ReactElement}
 */
export const SelectContainer = (props: any): React.ReactElement => {
  console.log('DB - SelectContainer props: ', props);
  const { children, className, getStyles, innerProps, isDisabled, isRtl } = props;
  return (
    <SelectContainerWrap id={'SelectContainerWrap'}
      css={getStyles('container', props)}
      className={className}
      isDisabled={isDisabled}
      isRtl={isRtl}
      {...innerProps}
    >
      {children}
    </SelectContainerWrap>
  );
};

/**
 *
 *
 * @param {*} props
 * @returns {React.ReactElement}
 */
export const ControlME = (props: any): React.ReactElement => {
  return (
    <ControlWrap id={'ControlWrap'}>
      {<p>Custom Control</p>}
      <components.Control {...props} />
    </ControlWrap>
  );
};

/**
 *
 *
 * @param {*} props
 * @returns {React.ReactElement}
 */
export const Control = (props: any): React.ReactElement => {
  console.log('DB - Control props: ', props);
  const { children, cx, getStyles, className, innerRef, ...rest } = props;

  return (
    <ControlWrap
      id={'ControlWrap'}
      ref={innerRef}
      css={getStyles('control', props)}
      className={className}
      {...rest}
    >
      {children}
    </ControlWrap>
  );
};
