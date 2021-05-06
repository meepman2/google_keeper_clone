import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";

function App() {
  const [noteList, setNoteList] = useState([]);

  function addNote(note) {
    setNoteList((prevItems) => {
      return [...prevItems, note];
    });
  }

  function onDelete(id) {
    setNoteList((prevItems) => {
      return prevItems.filter((element, index) => {
        return index !== id;
      });
    });
  }

  return (
    <div>
      <Header />
      <CreateArea add={addNote} />
      {noteList.map((notes, index) => {
        return (
          <Note
            key={index}
            id={index}
            title={notes.title}
            content={notes.content}
            onCheck={onDelete}
          />
        );
      })}
      <Footer />
    </div>
  );
}

export default App;
