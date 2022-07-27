import React from 'react'
import "./Header.css";

import imgKeep from "../Images/keep_Icon.png"

import FormatAlignJustifyIcon from '@mui/icons-material/FormatAlignJustify';
import ToggleButton from '@mui/material/ToggleButton';
import SearchIcon from '@mui/icons-material/Search';
import { styled, alpha } from '@mui/material/styles';
import InputBase from '@mui/material/InputBase';

import RedoIcon from '@mui/icons-material/Redo';
import ReorderIcon from '@mui/icons-material/Reorder';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import AppsOutlinedIcon from '@mui/icons-material/AppsOutlined';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import ViewAgendaOutlinedIcon from '@mui/icons-material/ViewAgendaOutlined';
import {connect} from 'react-redux';


const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginRight: theme.spacing(2),
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(3),
    width: 'auto',
  },
}));



const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: '20ch',
    },
  },
}));


function Header(props) {
  return (
    <div className='HeaderMain'>

      <div className='HeaderBox1'>
        <ToggleButton onClick={props.listenToHeader} value="justify" >
          <FormatAlignJustifyIcon />
        </ToggleButton>
        <div className='keepImg'>
          <img src={imgKeep} />
          <h3 className='keepName'>{props.title}</h3>
        </div>
      </div>

      <div className='search'>
        <Search>
          <SearchIconWrapper>
            <SearchIcon />
          </SearchIconWrapper>
          <StyledInputBase
            placeholder="Search"
          />
        </Search>
      </div>

      <div className='iconsRight'>
        <div className='righticons'>
          <RedoIcon />
          <ViewAgendaOutlinedIcon />
          <SettingsOutlinedIcon />
          <AppsOutlinedIcon />
          <AccountCircleOutlinedIcon />
        </div>
      </div>

    </div>
  )
}

const mapStateToProps = (state) => {
  console.log(state)
  return {
      title: state.drawerReducer.title,
  };
};

export default connect(mapStateToProps)(Header)
