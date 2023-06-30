import React from "react";
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import { useState } from "react";
import { GetDates } from "../Utils/DateUtils";

function getStartDate(currentDate){
    return new Date(currentDate.setDate(currentDate.getDate() - 3));
}



export default function BasicButtonGroup(props) {
  const [selectDate, setSelectDate] = useState(new Date())
  console.log(selectDate)
  let startDate = getStartDate(selectDate)
  function handleBack(){
    setSelectDate(new Date(selectDate.setDate(selectDate.getDate() - 1)))
  }
  
  function handleForward(){
    setSelectDate(new Date(selectDate.setDate(selectDate.getDate() + 1)))
  }

  return (
    <ButtonGroup variant="contained" aria-label="outlined primary button group">
     <Button onClick={handleBack}><ArrowBackIosIcon /></Button>
      {GetDates(startDate, 7).map(element => {
        let dateArr = element.split(',')
        return(
      <Button style={{ display: "block", textAlign: "center" }}>
      <div>{dateArr[0]}</div>
      <div>{dateArr[1]}</div>
      </Button>)})}
      <Button onClick={handleForward}><ArrowForwardIosIcon /></Button>
    </ButtonGroup>
  );
}
