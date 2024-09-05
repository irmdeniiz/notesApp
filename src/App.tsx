import { BrowserRouter, Route, Routes } from "react-router-dom";
import Main from "./pages/Main";
import Create from "./pages/Create";
import Detail from "./pages/Detail";
import Edit from "./pages/Edit";
import { Note, NoteData, Tag } from "./types";
import { useLocalStorage } from "@uidotdev/usehooks";
import { v4 } from "uuid";
import Layout from "./components/Layout";

const App = () => {
  const [notes, setNotes] = useLocalStorage<Note[]>("NOTES", []);
  const [tags, setTags] = useLocalStorage<Tag[]>("TAGS", []);

  const createTag = (tag: Tag): void => {
    setTags((prev) => [...prev, tag]);
  };

  const createNote = (noteData: NoteData): void => {
    
    const newNote: Note = { id: v4(), ...noteData };

    setNotes((prev) => [...prev, newNote]);
  };

  const deleteNote = (id: string): void => {
    if (!confirm("silmek istediğnizden emin misiniz?")) return;

    setNotes((prev) => prev.filter((i) => i.id !== id));
  };

  const updateNote = (id: string, updatedData: NoteData): void => {
    const updatedArr = notes.map((note) =>
      note.id === id ? { id, ...updatedData } : note
    );

    setNotes(updatedArr);
  };

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={<Main notes={notes} availableTags={tags} />}
        />

        <Route
          path="/new"
          element={
            <Create
              createTag={createTag}
              handleSubmit={createNote}
              availableTags={tags}
            />
          }
        />

        <Route path="/note/:id" element={<Layout notes={notes} />}>
          <Route index element={<Detail deleteNote={deleteNote} />} />

          <Route
            path="edit"
            element={
              <Edit
                handleSubmit={updateNote}
                createTag={createTag}
                availableTags={tags}
              />
            }
          />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
