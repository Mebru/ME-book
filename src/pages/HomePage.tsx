import { Button, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import * as React from "react";
import { useSelector } from "react-redux";
import { RouteComponentProps } from "react-router-dom";
import HomeBox from "../components/ME-Todo/HomeBox";
import { RootState } from "../reducers";
import { ISelectProps } from "../components/ME-Select/single-select/types";
import WithPromises from "../components/ME-Select/async-select/AsyncSelect";
import ME_Select from "../components/ME-Select/ME-Select";

interface Props extends RouteComponentProps<void> { }

function HomePage(props: Props) {
  const classes = useStyles();
  const [boxColor, setBoxColor] = React.useState("red");
  const todoList = useSelector((state: RootState) => state.todoList);

  const onButtonClick = () =>
    setBoxColor(boxColor === "red" ? "blue" : "red");

  const ddWrapStyleME: React.CSSProperties = {
    display: 'flex',
    flexDirection: 'column',
    width: '350',
    minHeight: '20',
    justifyContent: 'flex-start',
    alignItems: 'center'
  }
  const defaultDDProps: ISelectProps = {
    id: '',
    className: '',
    selectType: 'Default',
    hasValue: false,
    isMulti: false,
    options: [
      { value: 'red', label: 'red' },
      { value: 'blue', label: 'blue' }
    ]
  }

  return (
    <div className={classes.root}>
      <Typography variant="h4" gutterBottom>
        You have {todoList.length} TODOs in your list!
			</Typography>
      <div className={classes.centerContainer}>
        <HomeBox size={300} color={boxColor} />
        <Button
          className={classes.button}
          onClick={onButtonClick}
          variant="outlined"
          color="primary"
        >
          Change Color
				</Button>
        <div id={'HomePageDDsWrap'} style={ddWrapStyleME}>
          <ME_Select options={defaultDDProps.options} selectType={defaultDDProps.selectType} />
          <WithPromises />
        </div>
      </div>
    </div>
  );
}

const useStyles = makeStyles({
  root: {
    height: "100%",
    textAlign: "center",
    paddingTop: 20,
    paddingLeft: 15,
    paddingRight: 15,
  },

  centerContainer: {
    flex: 1,
    height: "90%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column",
  },

  button: {
    marginTop: 20,
  },
});

export default HomePage;
