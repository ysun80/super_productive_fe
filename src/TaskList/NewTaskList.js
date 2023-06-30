import React from 'react'
import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
import ListItemText from '@mui/material/ListItemText'
import AddIcon from '@mui/icons-material/Add'
import IconButton from '@mui/material/IconButton'
import TextField from '@mui/material/TextField'
import ListItemIcon from '@mui/material/ListItemIcon'
import SVG from 'react-inlinesvg'
import bed from '../svg/bed.svg'
import gym from '../svg/gym.svg'
import meditate from '../svg/meditate.svg'
import walk from '../svg/walk.svg'
import water from '../svg/water.svg'
import wakeup from '../svg/wakeup.svg'
import { useState } from 'react'

export default function CurrentTaskList(props) {
  const [customField, setCustomField] = useState('')
  const handleClick = (name) => {
    props.setCurrentTaskList([...props.currentTaskList, name])
    console.log(props.currentTaskList)
  }
  const handleCustomField = (e) => {
    console.log(e.target.value)
    setCustomField(e.target.value) 
  }
  return (
    <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
      <ListItem
        secondaryAction={
          <IconButton edge='end' aria-label='add'>
            <AddIcon onClick={() => handleClick('wakeup')}/>
          </IconButton>
        }
      >
        <ListItemIcon>
          <SVG src={wakeup} style={{ height: 100, width: 50 }} />
        </ListItemIcon>
        <ListItemText primary='Wake up early' />
      </ListItem>
      <ListItem
        secondaryAction={
          <IconButton edge='end' aria-label='add'>
            <AddIcon onClick={() => handleClick('bed')}/>
          </IconButton>
        }
      >
        <ListItemIcon>
          <SVG src={bed} style={{ height: 100, width: 50 }} />
        </ListItemIcon>
        <ListItemText primary='Make my bed' />
      </ListItem>
      <ListItem
        secondaryAction={
          <IconButton edge='end' aria-label='add'>
            <AddIcon onClick={() => handleClick('water')}/>
          </IconButton>
        }
      >
        <ListItemIcon>
          <SVG src={water} style={{ height: 100, width: 50 }} />
        </ListItemIcon>
        <ListItemText primary='Drink water' />
      </ListItem>
      <ListItem
        secondaryAction={
          <IconButton edge='end' aria-label='add'>
            <AddIcon onClick={() => handleClick('walk')}/>
          </IconButton>
        }
      >
        <ListItemIcon>
          <SVG src={walk} style={{ height: 100, width: 50 }} />
        </ListItemIcon>
        <ListItemText primary='Step outside for a walk' />
      </ListItem>
      <ListItem
        secondaryAction={
          <IconButton edge='end' aria-label='add'>
            <AddIcon onClick={() => handleClick('meditate')}/>
          </IconButton>
        }
      >
        <ListItemIcon>
          <SVG src={meditate} style={{ height: 100, width: 50 }} />
        </ListItemIcon>
        <ListItemText primary='Take time to meditate' />
      </ListItem>
      <ListItem
        secondaryAction={
          <IconButton edge='end' aria-label='add'>
            <AddIcon onClick={() => handleClick('gym')}/>
          </IconButton>
        }
      >
        <ListItemIcon>
          <SVG src={gym} style={{ height: 100, width: 50 }} />
        </ListItemIcon>
        <ListItemText primary='Workout in the gym' />
      </ListItem>
      <ListItem
        secondaryAction={
          <IconButton edge='end' aria-label='add'>
            <AddIcon onClick={() => handleClick(customField)}/>
          </IconButton>
        }
      >
        <TextField id='filled-basic' placeholder='Enter a custom task' onChange={(e) => handleCustomField(e)}/>
      </ListItem>
    </List>
  )
}