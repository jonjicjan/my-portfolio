import React, { useState } from 'react';
import NoteContext from './NoteContext';

const NoteState = (props) => {
  const host = "http://localhost:55000"; // Ensure the port matches your backend
  const [messages, setMessages] = useState([]);
  const [alert, setAlert] = useState({ message: "", type: "" }); // State for alert

  // Add a Message
  const addMessage = async (name, email, subject, message) => {
    try {
      const response = await fetch(`${host}/api/addmessage`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'auth-token': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoiVW1hciIsImVtYWlsIjoibWR1bWFyazc2YWE4N0BnbWFpbC5jb20iLCJpYXQiOjE3MjE0NjUyNjV9.mwE-rtKd1QnipUARLvWVkdROhNWZjBbN6-EcBvolgNg' // Replace with actual token or secure method
        },
        body: JSON.stringify({ name, email, subject, message })
      });

      const data = await response.json();

      if (response.ok) {
        setMessages([...messages, data]);
        setAlert({ message: "Message sent successfully!", type: "success" });
      } else {
        setAlert({ message: "Error sending message. Please try again.", type: "error" });
      }

      // Clear alert after 3 seconds
      setTimeout(() => {
        setAlert({ message: "", type: "" });
      }, 3000);

    } catch (err) {
      setAlert({ message: "Error adding message. Please try again.", type: "error" });
      console.error('Error adding message:', err);

      // Clear alert after 3 seconds
      setTimeout(() => {
        setAlert({ message: "", type: "" });
      }, 3000);
    }
  };

  return (
    <NoteContext.Provider value={{ messages, addMessage, alert, setAlert }}>
      {props.children}
    </NoteContext.Provider>
  );
};

export default NoteState;
