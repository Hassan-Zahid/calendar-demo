import React from 'react';
import {
  Grid,
  Box,
  styled,
  withStyles,
  DialogContentText,
} from '@material-ui/core';

const StyledDialogContentText = withStyles({
  root: {
    marginBottom: 5,
    fontSize: 16,
  },
})(DialogContentText);

const TextWrapper = styled(Box)({
  height: '100%',
  fontSize: '16px',
  marginBottom: '10px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-end',
  wordBreak: 'break-all',
  '& > p': {
    color: '#333333',
  },
});

export const JobStat = ({ label, content }) => {
  return (
    <React.Fragment>
      <Grid item xs={4}>
        <TextWrapper>
          <StyledDialogContentText>{label}</StyledDialogContentText>
        </TextWrapper>
      </Grid>
      <Grid item xs={1} />
      <Grid item xs={7}>
        {' '}
        <StyledDialogContentText>{content}</StyledDialogContentText>
      </Grid>
    </React.Fragment>
  );
};
