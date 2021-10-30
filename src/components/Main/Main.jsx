import React, { useContext } from "react";
import List from "./List/List";
import Form from "./Form/Form";
import useStyles from "./styles";
import { ExpenseTrackerContext } from "../../context/context";
import {
  Card,
  CardContent,
  CardHeader,
  Typography,
  Grid,
  Divider,
} from "@material-ui/core";

const Main = () => {
  const { balance } = useContext(ExpenseTrackerContext);
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardHeader title="Expense Tracker" subheader="Powered by speechly" />
      <CardContent>
        <Typography align="center" variant="h5">
          Total Balance : ${balance}
        </Typography>
        <Typography
          variant="subtitle1"
          style={{
            lineHeight: "1.5em",
            marginTop: "20px",
            textAlign: "center",
            padding: "20px 0",
          }}
        >
          Try saying Add Income for $100 in category salary on next monday....
        </Typography>
        <Divider />
        <Form />
      </CardContent>
      <CardContent className={classes.cartContent}>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <List />
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
};

export default Main;
