import React, { useState } from 'react';
import NoteContext from './NoteContext';

const NoteState = (props) => {
  const host = "http://localhost:5000";
  const notesInitial = [];
  const [notes, setNotes] = useState(notesInitial);
  const [alert, setAlert] = useState({ message: "", type: "" }); // State for alert

  // Get all Notes
  const getNotes = async () => {
    try {
      const response = await fetch(`${host}/api/notes/fetchallnotes`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          "auth-token": localStorage.getItem('token'),
        },
      });
      const json = await response.json();
      setNotes(json);
    } catch (error) {
      console.error('Error fetching notes:', error);
    }
  };

  // Add a Note
  const addNote = async (name, email, subject, message) => {
    const token = localStorage.getItem('token'); // Get token from localStorage or another secure place
  
    try {
      const response = await fetch(`${host}/api/notes/addnote`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'auth-token': token // Send the token in the headers
        },
        body: JSON.stringify({ name, email, subject, message })
      });
    
      const data = await response.json();
      if (response.ok) {
        setNotes(notes.concat(data));
        showAlert("Message send successfully!", "success");
      } else {
        showAlert("Error sending message. Please try again.", "error");
      }
    } catch (err) {
      showAlert("Error adding note. Please try again.", "error");
      console.error('Error adding note:', err);
    }
  };

  // Function to show alert
  const showAlert = (message, type) => {
    setAlert({ message, type });
    setTimeout(() => {
      setAlert({ message: "", type: "" });
    },3000); // Alert duration: 3 seconds
  };

  return (
    <NoteContext.Provider value={{ notes, addNote, getNotes, alert }}>
      {props.children}
    </NoteContext.Provider>
  );
};

export default NoteState;
