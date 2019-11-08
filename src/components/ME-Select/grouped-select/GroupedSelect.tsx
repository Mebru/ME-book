import * as React from 'react';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import Input from '@material-ui/core/Input';
import MenuItem from '@material-ui/core/MenuItem';
import ListSubheader from '@material-ui/core/ListSubheader';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    formControl: {
      margin: theme.spacing(1),
      minWidth: 120,
    },
  }),
);

/**
 *
 * @export
 * @returns
 */
export default function GroupedSelect() {
  const classes = useStyles();

  return (
    <>
      <FormControl className={classes.formControl}>
        <InputLabel htmlFor="grouped-select"> Grouping </InputLabel>
        <Select defaultValue="" input={< Input id="grouped-select" />}>
          <MenuItem value="">
            <em>None </em>
          </MenuItem>
          <ListSubheader > Category 1 </ListSubheader>
          <MenuItem value={1} > Option 1 </MenuItem>
          <MenuItem value={2} > Option 2 </MenuItem>
          <ListSubheader > Category 2 </ListSubheader>
          <MenuItem value={3} > Option 3 </MenuItem>
          <MenuItem value={4} > Option 4 </MenuItem>
        </Select>
      </FormControl>
    </>
  );
}
