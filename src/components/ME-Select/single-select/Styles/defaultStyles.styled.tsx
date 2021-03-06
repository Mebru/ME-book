import styled, { StyledComponent } from 'styled-components';

export const DropdownContainer: StyledComponent<"div", any, {}, never> = styled.div({
  display: 'box',
  position: 'relative',
  justifyContent: 'center',
  alignItems: 'center',
  minWidth: '350px',
  minHeight: '38px',
  padding: '10px',
  margin: '5px',
});

export const SelectContainerWrap: StyledComponent<"div", any, {}, never> = styled.div({
  display: 'flex',
  justifyContent: 'flex-start',
  alignItems: 'center',
  width: '100%',
  height: '100%',
  minHeight: '20px',
  minWidth: '115px'
});

// Adapting based on props
// const DropdownWrap = styled.div((props) => ({
//   background: props.background,
//   height: '50px',
//   width: '50px'
// }));

export const ControlWrap: StyledComponent<"div", any, {}, never> = styled.div({
  display: 'flex',
  // flexDirection: 'column',
  justifyContent: 'flex-start',
  alignItems: 'center',
  width: '100%',
  height: '100%',
  minHeight: '20px',
  minWidth: '115px',
  borderRadius: '1px solid black',
  padding: '5px',
  background: 'ghostwhite',
  color: 'white',
});

