import React from 'react';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { handleSaveQuestionAnswer } from '../actions/questions';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    padding: '1em',
  },
  fullWidth: {
    width: '100%',
  },
}));

const QuestionVote = (props) => {
  const authedUser = useSelector((state) => state.authedUser);
  const loading = useSelector((state) => state.loading);
  const history = useHistory();
  const classes = useStyles();
  const dispatch = useDispatch();
  const [choice, setChoice] = React.useState('optionOne');

  const handleChange = (event) => {
    setChoice(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(
      handleSaveQuestionAnswer(authedUser, props.question.id, choice)
    ).then(() => {
      history.push('/');
      history.push(`/questions/${props.question.id}`);
    });
  };

  return (
    <Paper className={classes.root} variant="outlined">
      <Grid container spacing={1}>
        <Grid item xs={12}>
          <Typography variant="h6">Would you rather...</Typography>
        </Grid>
        <Grid item xs={12}>
          <FormControl component="fieldset">
            <RadioGroup name="options" value={choice} onChange={handleChange}>
              <FormControlLabel
                value="optionOne"
                control={<Radio />}
                label={props.question.optionOne.text}
              />
              <FormControlLabel
                value="optionTwo"
                control={<Radio />}
                label={props.question.optionTwo.text}
              />
            </RadioGroup>
          </FormControl>
        </Grid>
        <Grid item xs={12}>
          <Button
            color="primary"
            className={classes.fullWidth}
            variant="contained"
            disabled={loading}
            onClick={handleSubmit}
          >
            Submit
          </Button>
        </Grid>
      </Grid>
    </Paper>
  );
};

QuestionVote.propTypes = {
  question: PropTypes.object.isRequired,
};

export default QuestionVote;
