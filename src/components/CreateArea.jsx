import React, { useState } from "react";
import AddIcon from "@material-ui/icons/Add";
import Fab from "@material-ui/core/Fab";
import Zoom from "@material-ui/core/Zoom";

function CreateArea(props) {
  const [style, setStyle] = useState(false);
  const [note, setNote] = useState({
    title: "",
    content: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setNote((previousValue) => {
      return { ...previousValue, [name]: value };
    });
  };

  const handelClick = () => {
    setStyle(true);
  };

  return (
    <div>
      <form className="create-note">
        {style && (
          <input
            name="title"
            placeholder="Title"
            value={note.title}
            onChange={handleChange}
          />
        )}

        <textarea
          name="content"
          placeholder="Take a note..."
          rows={style ? 3 : 1}
          value={note.content}
          onChange={handleChange}
          onClick={handelClick}
        />
        <Zoom in={style}>
          <Fab
            onClick={(event) => {
              props.add(note);
              setNote({ title: "", content: "" });
              event.preventDefault();
            }}
          >
            <AddIcon />
          </Fab>
        </Zoom>
      </form>
    </div>
  );
}

export default CreateArea;
