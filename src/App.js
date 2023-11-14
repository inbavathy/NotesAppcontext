
import './App.css';

function App() {
  return (
  <div className="App">
    <h1> React Notes</h1>
    <div className="create-note "> 
      <form>
        <input type="text" placeholder="title" name="title" />
        <textarea name="note" 
        id="" 
        cols="30" 
        rows="10" 
        placeholder="note"
        ></textarea>
          <button type="submit">Add Note</button>
       
      </form>
      </div>
      <div className="notes-container">
        <div className="note">
          <button className=" delete-note">X</button>
        <h3>Hello World</h3>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate culpa quibusdam</p>
       
      </div>

    </div>
  </div>
  )
   
}

export default App;
