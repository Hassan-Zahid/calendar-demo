import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import CurrencyTextField from '@unicef/material-ui-currency-textfield';
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
  },
})(OutlinedInput);

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  margin: {
    marginBottom: 20,
  },
  textField: {
    width: '25ch',
  },
}));

const InvoiceForm = (props) => {
  const classes = useStyles();
  const { selectedJob, setSelectedJob, setWarning } = props;

  return (
    <Grid container>
      <Grid item xs={4}>
        <TextWrapper>
          <Typography> Amount</Typography>
        </TextWrapper>
      </Grid>
      <Grid item xs={1} />
      <Grid item xs={7}>
        <FormControl fullWidth className={classes.margin} variant="outlined">
          <CurrencyTextField
            style={{ width: 250 }}
            variant="outlined"
            size="medium"
            currencySymbol="$"
            minimumValue="0"
            maximumValue={String(
              parseFloat(selectedJob.invoices.remaining_amount) +
                parseFloat(selectedJob.invoice.current_amount)
            )}
            outputFormat="number"
            disabled={
              parseFloat(selectedJob.invoices.remaining_amount) +
                parseFloat(selectedJob.invoice.current_amount) ===
              0
            }
            decimalCharacter="."
            digitGroupSeparator=","
            value={selectedJob.invoice.amount}
            onChange={(e) => {
              setWarning('');
              setSelectedJob({
                ...selectedJob,
                invoice: {
                  ...selectedJob.invoice,
                  amount: e.target.value,
                },
              });
            }}
          />
        </FormControl>
      </Grid>
      <Grid item xs={4}>
        <TextWrapper>
          <Typography> Invoice Description</Typography>
        </TextWrapper>
      </Grid>
      <Grid item xs={1} />
      <Grid item xs={7}>
        <StyledOutlinedInput
          style={{ width: 250, height: 100 }}
          size="small"
          id="outlined-adornment-amount"
          value={selectedJob.invoice.description}
          onChange={(e) => {
            setSelectedJob({
              ...selectedJob,
              invoice: { ...selectedJob.invoice, description: e.target.value },
            });
          }}
        />
      </Grid>
    </Grid>
  );
};

export default InvoiceForm;
