import React, { useState } from 'react';
import NoteContext from './NoteContext';

const NoteState = (props) => {
  const host = "http://localhost:55000"; // Ensure the port matches your backend
  const [message, setMessage] = useState([]);
  const [alert, setAlert] = useState({ message: "", type: "" }); // State for alert

  // Add a Note
  const addNote = async (name, email, subject, message) => {
    try {
      const response = await fetch(`${host}/api/addmessage`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          "auth-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoiVW1hciIsImVtYWlsIjoibWR1bWFyazc2YWE4N0BnbWFpbC5jb20iLCJpYXQiOjE3MjE0MjE1NDd9.1qlBAbc6eWUOdkMRPblNlTkyY_CczPeeDIISyGLfIYU"

        },
        body: JSON.stringify({ name, email, subject, message })
      });

      const data = await response.json();
      if (response.ok) {
        setAlert({ message: "Message sent successfully!", type: "success" });
      } else {
        setAlert({ message: "Error sending message. Please try again.", type: "error" });
      }
    } catch (err) {
      setAlert({ message: "Error adding note. Please try again.", type: "error" });
      console.error('Error adding note:', err);
    }
  };

  return (
    <NoteContext.Provider value={{ message, addNote, alert }}>
      {props.children}
    </NoteContext.Provider>
  );
};

export default NoteState;
