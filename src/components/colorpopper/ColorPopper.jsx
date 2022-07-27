import * as React from 'react';
import Box from '@mui/material/Box';
import Popper from '@mui/material/Popper';
import ColorLensOutlinedIcon from '@mui/icons-material/ColorLensOutlined';
import { updateColor } from '../../service/dataservice';

export default function ColorPopper(props) {
    const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(anchorEl ? null : event.currentTarget);
  };

  const open = Boolean(anchorEl);
  const id = open ? 'simple-popper' : undefined;

  const colors = ["#2ECC71", "#AF7AC5", "#F1948A", "#A3E4D7", "#F5B7B1", "#F5B041", "#DC7633", "#F1C40F",
  "#AAB7B8", "#F1948A", "#2ECC71", "#F5B041"]

const pickColor = (color) => {
  console.log(color, props.action)

  if (props.action === 'create') {
       props.listenToColorPoper(color)
  }
  else if (props.action === 'update') {

      let noteColorObj = { noteIdList: [props.id], color: color }

      updateColor(noteColorObj).then((response) => {
          console.log(response);
      }).catch((error) => {
          console.log(error)
      })
  }
}




  return (
    <div>
      
      
      <ColorLensOutlinedIcon className='icon' onClick={handleClick} />
            <Popper sx={{zIndex:20}} id={id} open={open} anchorEl={anchorEl}>
                <Box sx={{ border: 1, p: 1, bgcolor: 'background.paper', display: 'flex' }}>
                    {colors.map((color) => (<div style={{
                        width: '35px', height: '35px', borderRadius: '50%',
                        backgroundColor: color, marginLeft: '5px'
                    }} onClick={() => pickColor(color)}></div>))}
                </Box>
            </Popper>
    </div>
  );
}
