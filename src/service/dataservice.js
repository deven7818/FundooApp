import axios from "axios"


const headerConfig = {
    headers: {
        // Authorization: localStorage.getItem('token')
        Authorization: localStorage.getItem('token')
    }
}

export const getNotes = async () => {
    console.log(headerConfig)
    let response = await axios.get("http://fundoonotes.incubation.bridgelabz.com/api/notes/getNotesList", headerConfig)
    return response
}



export const createNotes = async (createNoteObj) => {
    let response = await axios.post("http://fundoonotes.incubation.bridgelabz.com/api/notes/addNotes",createNoteObj, headerConfig)
    return response
}



export const archiveUp = async (createNoteObj) => {
    let response = await axios.post("http://fundoonotes.incubation.bridgelabz.com/api/notes/archiveNotes",createNoteObj, headerConfig)
    return response
}




export const updateColor = async (createNoteObj) => {
    let response = await axios.post("http://fundoonotes.incubation.bridgelabz.com/api/notes/changesColorNotes",createNoteObj, headerConfig)
    return response
}


export const updateNote = async (createNoteObj) => {
    let response = await axios.post("http://fundoonotes.incubation.bridgelabz.com/api/notes/updateNotes",createNoteObj, headerConfig)
    return response
}


export const trashNote = async (createNoteObj) => {
    let response = await axios.post("http://fundoonotes.incubation.bridgelabz.com/api/notes/trashNotes",createNoteObj, headerConfig)
    return response
}



