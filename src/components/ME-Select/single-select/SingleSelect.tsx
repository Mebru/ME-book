import * as React from 'react';
import { ISelectProps } from './types';
import { DropdownContainer } from './Styles/defaultStyles.styled';
import { SelectContainer, Control } from './Components/selectComponents';
import { default as Select } from 'react-select'
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    SelectContainer: {
      margin: theme.spacing(1),
      minWidth: 120,
    }
  })
);

/**
 * SFC returning SingleSelect Dropdown Component.
 * @param {ISelectProps} props
 * @returns {React.ReactNode} SingleSelect
 */
const SingleSelect = (props: ISelectProps): React.ReactElement => {
  const { id, className, selectType, options, components, ...rest } = props;
  const classes = useStyles();

  return (
    <DropdownContainer id={'MEbook' + selectType} className={classes.SelectContainer}>
      <Select
        options={options}
        components={{ SelectContainer, Control }}
        {...rest} />
    </DropdownContainer>
  );
};


// /**
//  * Main DropDown class, used to render correct Dropdown Type (Single, Multi etc).
//  *
//  * @class SingleSelect
//  * @extends {React.Component<ISelectProps>}
//  */
// class SingleSelect extends React.Component<ISelectProps> {
//   public static defaultProps: ISelectProps = {
//     id: 'SingleSelectDD',
//     selectType: 'SingleSelect',
//     className: '',
//     classNamePrefix: '',
//     hasValue: false,
//     isMulti: false,
//     options: []
//     // menuIsOpen: false
//   }

//   // constructor(props: ISelectProps) {
//   //   super(props);
//   // }

//   //
//   //#region Lifecycle Functions
//   componentDidMount(): void {
//     console.log('DB - <SingleSelect> componentDidMount()');
//   }

//   componentWillReceiveProps(nextProps: ISelectProps): void {
//     console.log('DB - <SingleSelect> componentWillReceiveProps()');
//   }

//   shouldComponentUpdate(nextProps: ISelectProps): boolean {
//     console.log('DB - <SingleSelect> shouldComponentUpdate()');
//     return true;
//   }

//   componentDidUpdate(prevProps: ISelectProps): boolean {
//     console.log('DB - <SingleSelect> componentDidUpdate()');
//     return true;
//   }

//   componentWillUnmount(): void {
//     console.log('DB - <SingleSelect> componentWillUnmount()');
//   }
//   //#endregion Lifecycle Functions
//   //----------------------------------------------------

//   render(): React.ReactNode {
//     const tempProps = this.props;
//     return (
//       this.renderSingleSelect(tempProps)
//     );
//   }

//   public renderSingleSelect(props: ISelectProps): React.ReactNode {
//     const { id, className, selectType, options, components, ...rest } = props;

//     return (
//       <DropdownContainer id={'MEbook' + selectType}>
//         <Select options={options} components={{ SelectContainer, Control }} {...rest} />
//       </DropdownContainer>
//     );
//   }

//   // public renderDropdown(): React.ReactNode {
//   //   const { id, className, selectType, options, components, ...rest } = this.props;

//   //   switch (selectType) {
//   //     case 'Default':
//   //       return (
//   //         <DropdownContainer id={'MEbook' + selectType + '_' + className}>
//   //           <Select
//   //             options={options}
//   //             components={{ SelectContainer, Control }}
//   //             {...rest}
//   //           />
//   //         </DropdownContainer>
//   //       );
//   //     case 'SingleSelect':
//   //       return (
//   //         <DropdownContainer id={'MEbook' + selectType + '_' + className}>
//   //           <Select options={options} components={{ SelectContainer, Control }} {...rest} />
//   //         </DropdownContainer>
//   //       );
//   //     case 'MultiSelect':
//   //       return (
//   //         <DropdownContainer id={'MEbook' + selectType + '_' + className}>
//   //           <Select options={options} components={{ SelectContainer, Control }} isMulti={true} {...rest} />
//   //         </DropdownContainer>
//   //       );
//   //     default:
//   //       return (
//   //         <DropdownContainer id={'MEbook' + selectType + '_' + className}>
//   //           <Select options={options} components={components} />
//   //         </DropdownContainer>
//   //       );
//   //   }
//   // }
// }

// // SingleSelect.propTypes = {

// // };

export default SingleSelect;
