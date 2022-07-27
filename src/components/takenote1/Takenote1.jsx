import React from 'react'
import './Takenote1.css'
import CheckBoxOutlinedIcon from '@mui/icons-material/CheckBoxOutlined';
import BrushOutlinedIcon from '@mui/icons-material/BrushOutlined';
import ImageOutlinedIcon from '@mui/icons-material/ImageOutlined';

function Takenote1(props) {
    return (
        <div onClick={() => props.listenToNote1()} className='mainSection'>
            <div className='mainnote1'>
                <h4 className='takeanotepara'>Take a note...</h4>
                <div className='btnTakeNote'>
                    <CheckBoxOutlinedIcon />
                    <BrushOutlinedIcon />
                    <ImageOutlinedIcon />
                </div>
            </div>
        </div>
    )
}

export default Takenote1;