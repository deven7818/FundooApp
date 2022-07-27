import React from 'react';
import './Dashboard.css';
import { useState, useEffect } from 'react';
import { getNotes } from '../../service/dataservice';
import Header from '../../components/header/Header';
import Takenote1 from '../../components/takenote1/Takenote1';
import Takenote2 from '../../components/takenote2/Takenote2';
import Takenote3 from '../../components/takenote3/Takenote3';
import Drawer1 from '../../components/drawer/drawer';


function Dashboard() {

  const [view, setView] = useState(true);
  const [drawerObj , setDrawerObj] = useState(false);
  const [currentNoteChoice, setCurrentNoteChoice] = useState('notes');

  const viewone = (view) => {
    return (
      <>
        {view ? (
          <Takenote1 listenToNote1={listenToTakeNote1} />
        ) : (
          <Takenote2 listenToNote2={listenToTakeNote2} />
        )}
      </>
    );
  };
  const listenToSideNav =(noteType) =>{
    setCurrentNoteChoice(noteType)
  }

  const listenToTakeNote1 = () => {
    setView(!view);
  };

  const listenToTakeNote2 = () => {
    setView(!view);
  };

  const listenToHeader = () =>{
    setDrawerObj(!drawerObj)
  }
  const [notes, setNotes] = React.useState([])

 const GetNotes= () => {
  getNotes().then((response) => {
    let filter = []; 
    if(currentNoteChoice === 'notes'){
      filter=response.data.data.data.filter((note )=> {
        if(note.isArchived === false && note.isDeleted === false){
          return note
        }
      })
    }
    else if(currentNoteChoice === 'archive'){
      filter=response.data.data.data.filter((note )=> {
        if(note.isArchived === true && note.isDeleted === false){
          return note
        }
      })
    }
    else if(currentNoteChoice === 'delete'){
      filter=response.data.data.data.filter((note )=> {
        if(note.isArchived === false && note.isDeleted === true){
          return note
        }
      })
    }
    console.log(response);
    setNotes(filter)
  }).catch((error) => {
    console.log(error)
  })
 }

  React.useEffect(() => {
    GetNotes()
  }, [view,currentNoteChoice])

  return (
    <div>
      <Header listenToHeader={listenToHeader} />
      <Drawer1 drawerObj={drawerObj} listenToSideNav={listenToSideNav}/>
      {viewone(view)}
      <div className='noteCardList'>
        {notes.map((note) => (<Takenote3 key={note.id} note={note} />))}
      </div>
    </div>
  );
}

export default Dashboard;
