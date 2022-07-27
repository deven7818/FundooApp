import React, { useState } from 'react'
import './Takenote3.css'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import PushPinOutlinedIcon from '@mui/icons-material/PushPinOutlined';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import AddAlertOutlinedIcon from '@mui/icons-material/AddAlertOutlined';
import PersonAddAltOutlinedIcon from '@mui/icons-material/PersonAddAltOutlined';
import PhotoOutlinedIcon from '@mui/icons-material/PhotoOutlined';
import ArchiveOutlinedIcon from '@mui/icons-material/ArchiveOutlined';
import MoreVertOutlinedIcon from '@mui/icons-material/MoreVertOutlined';
import { archiveUp, trashNote, updateNote } from '../../service/dataservice';
import ColorPopper from '../colorpopper/ColorPopper';
import FormControl, { useFormControl } from '@mui/material/FormControl';
import InputBase from '@mui/material/InputBase';
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';


import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import { Button } from '@mui/material';



function Takenote3(props) {


  const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    boxShadow: 24,
    p: 4,
  };

  const [open, setOpen] = React.useState(false);
  const handleOpen = (note) => {
    setEditNote({ noteId: note.id, title: note.title, description: note.description });
    setOpen(true)
  };

  const [editNote, setEditNote] = useState({ noteId: '', title: '', description: '' })

  const [hoverCard, setHoverCad] = useState(false);
  console.log(hoverCard);
  const handleChange = () => {
    setHoverCad(!hoverCard)
  };

  const handleClose = () => {
    setOpen(false)
  };

  const deleteNote = (id) => {
    let deleteData = { noteIdList: [id], isDeleted: true }
    trashNote(deleteData).then((response) => {
      console.log(response);
    }).catch((error) => {
      console.log(error)
    })
  }

  const updateArchive = (id) => {
    console.log("Note id is ", id);
    let data = { noteIdList: [id], isArchived: true }
    archiveUp(data).then((response) => {
      console.log(response);
    }).catch((error) => {
      console.log(error)
    })
  }


  const takeTitle = (event) => {
    setEditNote((prevState) => ({
      ...prevState, title: event.target.value
    }))
  }

  const takeDescription = (event) => {
    setEditNote((prevState) => ({
      ...prevState, description: event.target.value
    }))
  }


  const closeNote = () => {
    updateNote(editNote).then((response) => {
      console.log(response);

    }).catch((error) => {
      console.log(error)
    })
    console.log("edit note", editNote)
  }

  return (

    <div onMouseEnter={handleChange} onMouseLeave={ ()=> setHoverCad(false)} className='cardbox'>
      <Card style={{ backgroundColor: props.note.color }} sx={{ minWidth: 275 }}>
        <div className='pinIcon' style={hoverCard ? { display: 'flex'} : { display: 'none'  }}>
          <CheckCircleIcon />
          <PushPinOutlinedIcon />
        </div>
        <CardContent onClick={() => handleOpen(props.note)}>
          <Typography >
            <div className='cardBody'>{props.note.title}</div>
            <div className='cardBody'>{props.note.description}</div>
          </Typography>
        </CardContent>

        <div className='cardicon' style={hoverCard ? { display: 'flex'} : { display: 'none'  }}>
          <AddAlertOutlinedIcon />
          <PersonAddAltOutlinedIcon />
          <ColorPopper action="update" id={props.note.id} />
          <DeleteOutlineOutlinedIcon onClick={() => deleteNote(props.note.id)} />
          <ArchiveOutlinedIcon onClick={() => updateArchive(props.note.id)} />
          <MoreVertOutlinedIcon />
        </div>
      </Card>

      <Modal 
        sx={{zIndex:10}}
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box
          className="modalBox" sx={style}>
          <FormControl className='inputClass1' sx={{ width: '38ch' }}>
            <InputBase onChange={takeTitle} defaultValue={editNote.title} type='string' placeholder='Title' />
          </FormControl><FormControl className='inputClass1' sx={{ width: '38ch' }}>
            <InputBase onChange={takeDescription} defaultValue={editNote.description} type='string' placeholder='Note' />
          </FormControl>


          <div className='modelbottomSection'>

            <div className='modelicon'>
              <AddAlertOutlinedIcon />
              <PersonAddAltOutlinedIcon />
              <ColorPopper action="update" id={props.note.id} />
              <DeleteOutlineOutlinedIcon onClick={() => deleteNote(props.note.id)} />
              <ArchiveOutlinedIcon onClick={() => updateArchive(props.note.id)} />
              <MoreVertOutlinedIcon />
            </div>

            <div className='modelBtn'>
              <Button onClick={closeNote} variant="text">close</Button>
            </div>

          </div>
        </Box>

      </Modal>
    </div>



  )
}
export default Takenote3