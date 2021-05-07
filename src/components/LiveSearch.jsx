import React, { useEffect, useState } from 'react';
import {TextField, withStyles, styled, Typography} from '@material-ui/core';
import Autocomplete from '@material-ui/lab/Autocomplete';
import match from 'autosuggest-highlight/match';
import parse from 'autosuggest-highlight/parse';
import { JobStat } from './JobStat';

import CircularProgress from '@material-ui/core/CircularProgress';

export default function LiveSearch(props) {
  const { selectedJob, selectedItem, onChange, apiEndPoint } = props;
  const [searchTerm, setSearchTerm] = useState('');
  const [open, setOpen] = React.useState(false);
  const [doSearch, setDoSearch] = useState(false);
  const [options, setOptions] = useState([]);

  const keyPress = (e) => {
    if (e.keyCode == 13) {
      setDoSearch(true);
    }
  };

  useEffect(() => {
    if (doSearch) {
      (async () => {
        const response = await fetch(`${apiEndPoint}${searchTerm}`);
        const data = await response.json();
        setOptions(data);
        setDoSearch(false);
      })();
    }
  }, [doSearch]);

  useEffect(() => {
    if (selectedItem) {
      setSearchTerm(selectedItem);
    }
  }, [selectedJob]);

  return (
    <Autocomplete

      options={options}
      getOptionLabel={(option) => option.name}
      onChange={(e, reason) => {
        onChange(reason ? reason.id : null);
        setSearchTerm(reason ? reason.name : '');
      }}
      size="small"
      open={open}
      onOpen={() => {
        setOpen(true);
      }}
      onClose={() => {
        setOpen(false);
      }}
      loading={doSearch}
      disabled={selectedItem && true}
      renderOption={(option, { inputValue }) => {
        const matches = match(option.name, inputValue);
        const parts = parse(option.name, matches);
        return (
          <div>
            {parts.map((part, index) => {
              return (
                <span
                  key={index}
                  style={{ ...(part.highlight && { color: '#1488FC' }) }}
                >
                  {part.text}
                </span>
              );
            })}
          </div>
        );
      }}
      inputValue={searchTerm}
      renderInput={(params) => (
        <TextField
          {...params}
          {...(!selectedItem && {label:"Select an Option"})}
          size = "small"
          autoFocus={!open}
          onChange={(e) => setSearchTerm(e.target.value)}
          variant="outlined"
          InputProps={{
            ...params.InputProps,
            endAdornment: (
              <React.Fragment>
                {doSearch ? (
                  <CircularProgress color="inherit" size={20} />
                ) : null}
                {params.InputProps.endAdornment}
              </React.Fragment>
            ),
          }}
          onKeyDown={keyPress}
        />
      )}
    />
  );
}
