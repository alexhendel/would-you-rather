import React from 'react';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import LinearProgress from '@material-ui/core/LinearProgress';

const useStyles = makeStyles((theme) => ({
  fullWidth: {
    width: '100%',
  },
  card: {
    padding: '1em',
  },
  badge: {
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.primary.contrastText,
    width: '80px',
    height: '25px',
    borderRadius: '5px',
    textAlign: 'center',
    marginBottom: '0.3em',
  },
}));

const QuestionResult = (props) => {
  const users = useSelector((state) => state.users);
  const classes = useStyles();

  return (
    <Paper className={classes.card} variant="outlined">
      <Grid container spacing={1} alignItems="center" alignContent="center">
        <Grid item xs={12}>
          {props.myVote ? (
            <>
              <div className={classes.badge}>
                <Typography variant="caption">Your Vote</Typography>
              </div>
              <Typography>
                {props.question[props.optionKey]
                  ? 'Would you rather '.concat(
                      props.question[props.optionKey].text
                    )
                  : ''}
              </Typography>
            </>
          ) : (
            <Typography>
              {props.question[props.optionKey]
                ? 'Would you rather '.concat(
                    props.question[props.optionKey].text
                  )
                : ''}
            </Typography>
          )}
        </Grid>
        <Grid item xs={12}>
          <LinearProgress
            className={classes.fullWidth}
            variant="determinate"
            value={
              (props.question[props.optionKey].votes.length * 100) /
              Object.keys(users).length
            }
          />
        </Grid>
        <Grid item xs={12}>
          {`${props.question[props.optionKey].votes.length} out of ${
            Object.keys(users).length
          }`}
        </Grid>
      </Grid>
    </Paper>
  );
};

QuestionResult.propTypes = {
  question: PropTypes.object.isRequired,
  optionKey: PropTypes.string.isRequired,
  myVote: PropTypes.bool,
};

export default QuestionResult;
