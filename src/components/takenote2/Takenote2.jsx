import React, { useState } from 'react'
import './Takenote2.css'
import ClickAwayListener from "@mui/base/ClickAwayListener";

import { Button } from '@mui/material';
import PushPinOutlinedIcon from '@mui/icons-material/PushPinOutlined';
import AddAlertOutlinedIcon from '@mui/icons-material/AddAlertOutlined';
import PersonAddAltOutlinedIcon from '@mui/icons-material/PersonAddAltOutlined';
import ColorLensOutlinedIcon from '@mui/icons-material/ColorLensOutlined';
import PhotoOutlinedIcon from '@mui/icons-material/PhotoOutlined';
import ArchiveOutlinedIcon from '@mui/icons-material/ArchiveOutlined';
import MoreVertOutlinedIcon from '@mui/icons-material/MoreVertOutlined';
import ReplayOutlinedIcon from '@mui/icons-material/ReplayOutlined';
import RedoOutlinedIcon from '@mui/icons-material/RedoOutlined';
import { createNotes, getNotes } from '../../service/dataservice';
import ColorPopper from '../colorpopper/ColorPopper';


function Takenote2(props) {
    const [createNoteObj, setCreateNoteObj] = useState({ title: '', description: '', isArchived: false , color: ''});

    const takeTitle = (event) => {
        setCreateNoteObj((prevState) => ({ ...prevState, title: event.target.value }));
    };

    const takeDescription = (event) => {
        setCreateNoteObj((prevState) => ({ ...prevState, description: event.target.value }));

    };

    const submit = () => {
        createNotes(createNoteObj).then((response) => {
            console.log(response);
            getNotes()


        }).catch((error) => {
            console.log(error)
        })
    }
    const setArchive = () => {
        setCreateNoteObj((prevState) => ({ ...prevState, isArchived: true }))
    }

    const listenToColorPoper = (color)=>{
        setCreateNoteObj((prevState) => ({ ...prevState, color: color }))
    }

    return (
        <ClickAwayListener onClickAway={() => props.listenToNote2()}>
            <div style={{backgroundColor: createNoteObj.color}} className='mainsectionNote1'>
                <div  className='titleSection'>
                    <input style={{backgroundColor: createNoteObj.color}} onChange={takeTitle} className='titleInput' type="text" placeholder='Title' />
                    <div className='iconTakeNote'>
                        <PushPinOutlinedIcon />
                    </div>
                </div>
                <div className='descriptionSection'>
                    <input style={{backgroundColor: createNoteObj.color}}
                        onChange={takeDescription} className='titleDescription' placeholder="Take a note..." />
                </div>

                <div className='section3'>
                    <div className='cardIcons'>
                        <AddAlertOutlinedIcon />
                        <PersonAddAltOutlinedIcon />
                        <ColorPopper listenToColorPoper={listenToColorPoper} action="create" />
                        <PhotoOutlinedIcon />
                        <ArchiveOutlinedIcon onClick={setArchive} />
                        <MoreVertOutlinedIcon />
                        <ReplayOutlinedIcon />
                        <RedoOutlinedIcon />
                    </div>
                    <div className='cardButton'>
                        <Button onClick={submit} size="small">Close</Button>
                    </div>
                </div>
            </div>
        </ClickAwayListener>
    )
}

export default Takenote2
