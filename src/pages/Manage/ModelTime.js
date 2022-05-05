import React,{useState} from 'react';
import "./Model.css"
import {
  DatePicker,
  KeyboardDatePicker,
  MuiPickersUtilsProvider,
} from '@material-ui/pickers';
import DateFnsUtils from "@date-io/date-fns"
import TextField from '@mui/material/TextField';
import QueryBuilderIcon from '@mui/icons-material/QueryBuilder';
import { TimePicker } from 'antd';
import moment from 'moment';



const ModalTime = ({show, onClose }) => {
  const [selectedDate, setSelectedDate] = useState(new Date())
  const [value, setValue] = useState(0);

  const handleChange = (date) => {
    setSelectedDate(date)
  }
  function onChange(time, timeString) {
    console.log(time, timeString);
  }

  if (!show) return null;
  return (
    <div onClick={onClose} className='overlay Modal-box'>
      <div
        onClick={(e) => {
          e.stopPropagation();
        }}
        className='modalContainer modalTime'
      >
        <div className='modalRight'>
          <div style={{width: '28rem', margin: '20px auto'}} className='content'>
            <div style={{width: '28rem' , border: '1px solid #CCCCCC', borderRadius: '10px', paddingLeft: '10px'}}>
              <p style={{marginBottom: '0px'}} className="text-muted small" >Start With</p>
              <MuiPickersUtilsProvider utils={DateFnsUtils}>
                <KeyboardDatePicker
                    disableToolbar
                    variant="inline"
                    format="MM/dd/yyyy"
                    margin="normal"
                    id="date-picker-inline"
                    value={selectedDate}
                    onChange={handleChange}
                    KeyboardButtonProps={{
                    "aria-label": "change date",
                    }}
                    InputProps={{
                      disableUnderline: true,
                     }}                   
                    invalidDateMessage="Computer says no"
                />
                </MuiPickersUtilsProvider>
              </div>
          
              <div className="d-flex justify-content-between my-4">

               <div style={{ marginRight: "10px" , width: '210px'}} className="d-flex Timer">
               <TimePicker onChange={onChange} format="HH:mm a" use12Hours="true" bordered="false" placeholder="Start with" defaultOpenValue={moment('00:00', 'HH:mm')} />
            </div>

            <div style={{width: '210px'}} className="d-flex Timer">
               <TimePicker onChange={onChange} format="HH:mm a" use12Hours="true" bordered="false" placeholder="End with" defaultOpenValue={moment('00:00', 'HH:mm')} />
            </div>
          </div>
          </div>
        
        </div>
      </div>
    </div>
  );
};

export default ModalTime;