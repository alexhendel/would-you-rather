import React from 'react';
import { useHistory } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import * as API from '../api/_DATA';
import { handleInitialData } from '../actions/shared';
import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '550px',
  },
  fullWidth: {
    width: '100%',
  },
  formRoot: {
    marginTop: theme.spacing(8),
  },
}));

const NewQuestion = () => {
  const authedUser = useSelector((state) => state.authedUser);
  const loading = useSelector((state) => state.loading);
  const history = useHistory();
  const classes = useStyles();
  const dispatch = useDispatch();
  const [optionOne, setOptionOne] = React.useState('');
  const [optionTwo, setOptionTwo] = React.useState('');

  const updateOptionOneValue = (event) => {
    setOptionOne(event.target.value);
  };
  const updateOptionTwoValue = (event) => {
    setOptionTwo(event.target.value);
  };
  const handleSubmit = (event) => {
    event.preventDefault();

    const newQuestion = {
      optionOneText: optionOne,
      optionTwoText: optionTwo,
      author: authedUser,
    };

    API._saveQuestion(newQuestion).then(
      dispatch(handleInitialData()).then(history.push('/'))
    );
  };

  return (
    <Box display="flex" alignItems="center" flexDirection="column">
      <Card variant="outlined" className={classes.root}>
        <CardContent>
          <Typography variant="h5" component="h2">
            Create New Question
          </Typography>
          <Typography variant="body2" component="p">
            Complete the question:
          </Typography>
          <Typography className={classes.formRoot} variant="h6">
            <Box display="flex" alignItems="center" flexDirection="column">
              <form className={classes.fullWidth} autoComplete="off">
                <span className={classes.fullWidth}>Would you rather...</span>
                <TextField
                  className={classes.fullWidth}
                  required
                  id="option-one"
                  label="Required"
                  value={optionOne}
                  onChange={updateOptionOneValue}
                  placeholder="Enter option one here."
                />
                <div>
                  <span className={classes.fullWidth}></span>
                  <span>- OR -</span>
                  <span className={classes.fullWidth}></span>
                </div>
                <TextField
                  className={classes.fullWidth}
                  required
                  id="option-two"
                  label="Required"
                  value={optionTwo}
                  onChange={updateOptionTwoValue}
                  placeholder="Enter option two here."
                />
              </form>
            </Box>
          </Typography>
        </CardContent>
        <CardActions>
          <Button
            className={classes.fullWidth}
            variant="contained"
            color="primary"
            onClick={handleSubmit}
            disabled={!optionOne || !optionTwo || loading}
          >
            Submit
          </Button>
        </CardActions>
      </Card>
    </Box>
  );
};

export default NewQuestion;
