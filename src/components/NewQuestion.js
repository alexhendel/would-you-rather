import React from 'react';
import { useSelector } from 'react-redux';
import * as API from '../api/_DATA';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';

const NewQuestion = () => {
  const authedUser = useSelector((state) => state.authedUser);

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('submit for ', authedUser ?? authedUser.id);
  };

  return (
    <Box display="flex" alignItems="center" flexDirection="column">
      <Card variant="outlined">
        <CardContent></CardContent>
        <CardActions>
          <Button variant="contained" color="primary" onClick={handleSubmit}>
            Submit
          </Button>
        </CardActions>
      </Card>
    </Box>
  );
};

export default NewQuestion;
