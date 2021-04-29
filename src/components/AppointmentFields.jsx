import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import Checkbox from '@material-ui/core/Checkbox';
import {
  Grid,
  Box,
  styled,
  Typography,
  withStyles,
  InputAdornment,
  FormControl,
} from '@material-ui/core';

const TextWrapper = styled(Box)({
  height: '100%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-end',
  wordBreak: 'break-all',
  fontSize: '16px',
  '& > p': {
    color: '#333333',
    fontSize: 16,
  },
});

const StyledOutlinedInput = withStyles({
  input: {
    fontSize: 16,
    marginBottom: 30,
    marginTop: 30,
  },
})(OutlinedInput);

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  margin: {
    marginBottom: 25,
    marginTop: 25,
  },
  textField: {
    width: '25ch',
  },
}));

const AppointmentFields = (props) => {
  const classes = useStyles();
  const { selectedJob, setSelectedJob, setWarning } = props;

  return (
    <Grid container>
      
      <Grid item xs={4}>
        <TextWrapper>
          <Typography>Users</Typography>
        </TextWrapper>
      </Grid>
      <Grid item xs={1} />
      <Grid item xs={7}>
        <FormControl fullWidth className={classes.margin} variant="outlined">
            <StyledOutlinedInput
              style={{ width: 400, height: 50}}
              size="large"
              id="outlined-adornment-amount"
            />
        </FormControl>
      </Grid>

      <Grid item xs={4}>
        <TextWrapper>
          <Typography>Service Areas</Typography>
        </TextWrapper>
      </Grid>
      <Grid item xs={1} />
      <Grid item xs={7}>
        <FormControl fullWidth className={classes.margin} variant="outlined">
          <StyledOutlinedInput
            style={{ width: 400, height: 50}}
            size="large"
            id="outlined-adornment-amount"
          />
        </FormControl>
      </Grid>

      <Grid item xs={4}>
        <TextWrapper>
          <Typography>Start time</Typography>
        </TextWrapper>
      </Grid>
      <Grid item xs={1} />
      <Grid item xs={7}>
        <FormControl fullWidth className={classes.margin} variant="outlined">
          <form className={classes.container} noValidate>
          <StyledOutlinedInput
            style={{ width: 400, height: 50}}
            size="large"
            id="outlined-adornment-amount"
            type="datetime-local"
            defaultValue="2017-05-24T10:30"
            className={classes.textField}
            InputLabelProps={{
              shrink: true,
            }}
          />
          </form>
        </FormControl>
      </Grid>

      <Grid item xs={4}>
        <TextWrapper>
          <Typography>End time</Typography>
        </TextWrapper>
      </Grid>
      <Grid item xs={1} />
      <Grid item xs={7}>
          <form className={classes.container} noValidate>
            <StyledOutlinedInput
              style={{ width: 400, height: 50}}
              size="large"
              id="outlined-adornment-amount"
              type="datetime-local"
              defaultValue="2017-05-24T10:30"
              className={classes.textField}
              InputLabelProps={{
                shrink: true,
              }}
            />
          </form>
      </Grid>

      <Grid item xs={4}>
        <TextWrapper>
          <Typography>Recurring</Typography>
        </TextWrapper>
      </Grid>
      <Grid item xs={1} />
      <Grid item xs={7}>
        <FormControl fullWidth className={classes.margin} variant="outlined">
          <Checkbox
            checked="true"
            // onChange={handleChange}
            name="checkedB"
            color="primary"
          />
        </FormControl>
      </Grid>

      <Grid item xs={4}>
        <TextWrapper>
          <Typography> New Note</Typography>
        </TextWrapper>
      </Grid>
      <Grid item xs={1} />
      <Grid item xs={7}>
        <StyledOutlinedInput
          style={{ width: 300, height: 100 }}
          size="large"
          id="outlined-adornment-amount"
        />
      </Grid>
    </Grid>
  );
};

export default AppointmentFields;
