import 'date-fns';
import React from 'react';
import DateFnsUtils from '@date-io/date-fns';
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker,
} from '@material-ui/pickers';


export default function MaterialUIPickers({onChange, value, name}) {
  // The first commit of Material-UI

  return (
    <MuiPickersUtilsProvider utils={DateFnsUtils}>   
        <KeyboardDatePicker fullWidth
          disableToolbar
          variant="inline"
          format="MM/dd/yyyy"
          margin="normal"
          id="date-picker-inline"
          value={value}
          onChange={onChange}
          name={name}
          KeyboardButtonProps={{
            'aria-label': 'change date',
          }}
        />
    </MuiPickersUtilsProvider>
  );
}
