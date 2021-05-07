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
    fondtWeight: 'bold'
  },
});

const StyledCheckBox = styled(Checkbox)({
  padding:0,
  marginTop:5,
  marginBottom:5
});

const StyledOutlinedInput = withStyles({
  root: {
    maxWidth: 300, height: 40
  },
  input: {
    fontSize: 16
  },
})(OutlinedInput);

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap'
  },
  margin: {
    marginBottom: 5,
    marginTop: 5,
    minWidth:'75%'
  },
  textField: {
    maxWidth: '25ch',
  },
}));

const AppointmentFields = (props) => {
  const classes = useStyles();
  const { selectedJob, setSelectedJob, setWarning } = props;

  return (
    <Grid container spacing={1}>
      <Grid item xs={4}>
        <TextWrapper>Users</TextWrapper>
      </Grid>
      <Grid item xs={1} />
      <Grid item xs={7}>
        <FormControl className={classes.margin} variant="outlined">
            <StyledOutlinedInput
              size="large"
              id="outlined-adornment-amount"
            />
        </FormControl>
      </Grid>

      <Grid item xs={4}>
        <TextWrapper>Service Areas</TextWrapper>
      </Grid>
      <Grid item xs={1} />
      <Grid item xs={7}>
        <FormControl className={classes.margin} variant="outlined">
          <StyledOutlinedInput
            size="large"
            id="outlined-adornment-amount"
          />
        </FormControl>
      </Grid>

      <Grid item xs={4}>
        <TextWrapper>Start time</TextWrapper>
      </Grid>
      <Grid item xs={1} />
      <Grid item xs={7}>
        <FormControl className={classes.margin} style={{width:'100%'}} variant="outlined">
          <StyledOutlinedInput
            size="large"
            id="outlined-adornment-amount"
            type="datetime-local"
            defaultValue="2017-05-24T10:30"
            InputLabelProps={{
              shrink: true,
            }}
          />
        </FormControl>
      </Grid>

      <Grid item xs={4}>
        <TextWrapper>End time</TextWrapper>
      </Grid>
      <Grid item xs={1} />
      <Grid item xs={7}>
        <FormControl className={classes.margin} style={{width:'100%'}} variant="outlined">
            <StyledOutlinedInput
              size="sm"
              id="outlined-adornment-amount"
              type="datetime-local"
              defaultValue="2017-05-24T10:30"
              InputLabelProps={{
                shrink: true,
              }}
            />
        </FormControl>
      </Grid>

      <Grid item xs={4}>
        <TextWrapper>Recurring</TextWrapper>
      </Grid>
      <Grid item xs={1} />
      <Grid item xs={7}>
        <FormControl className={classes.margin} variant="outlined">
          <StyledCheckBox
            checked="true"
            size="small"
            // onChange={handleChange}
            name="checkedB"
            color="primary"
          />
        </FormControl>
      </Grid>

      <Grid item xs={4}>
        <TextWrapper>New Note</TextWrapper>
      </Grid>
      <Grid item xs={1} />
      <Grid item xs={7}>
        <FormControl className={classes.margin} variant="outlined">
          <StyledOutlinedInput
            style={{ maxWidth: 300, height: 100}}
            size="large"
            id="outlined-adornment-amount"
          />
        </FormControl>
      </Grid>
    </Grid>
  );
};

export default AppointmentFields;
