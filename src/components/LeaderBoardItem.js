import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import UserAvatar from './UserAvatar';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '350px',
    marginTop: '1em',
  },
  centeredText: {
    textAlign: 'center',
  },
  avatar: {
    color: theme.palette.primary.contrastText,
    backgroundColor: theme.palette.primary.main,
  },
}));

const LeaderBoardItem = (props) => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Card variant="outlined">
        <CardContent>
          <Grid container spacing={2} justify="center" alignItems="center">
            <Grid item>
              <UserAvatar user={props.user} />
            </Grid>
            <Grid item>
              <Typography variant="h5" component="h2">
                {props.user.name}
              </Typography>
              <Typography variant="body2" component="p">
                Answered Question: {props.user.numberOfAnswers}
                <br />
                Created Questions: {props.user.numberOfQuestion}
              </Typography>
            </Grid>
            <Grid item className={classes.centeredText}>
              <Typography variant="h5" component="h2">
                Score
                <br />
                <Typography variant="h4" component="p">
                  {props.user.score}
                </Typography>
              </Typography>
            </Grid>
          </Grid>
        </CardContent>
      </Card>
    </div>
  );
};

export default LeaderBoardItem;
