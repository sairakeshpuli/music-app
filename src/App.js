
import './App.css';
import { useEffect, useState } from "react";

function App() {

  const [tabdata, setTabdata] = useState([]);
  useEffect(() => {
    fetch('https://62da7ec69eedb699636fc58d.mockapi.io/todolist')
      .then(response => response.json())
      .then(json => setTabdata(json))
  }, []);
  return (
    <div className='App'>
      <h1 style={{ "fontFamily": "Roboto", "color": "yellow", "backgroundColor": "" }}> Music App</h1>
      <hr style={{ "width": "260px" }} />
      {tabdata.map((info) =>
        <div className='items'>
          <h1 style={{ "fontFamily": "Roboto", "color": "white" }}>{info.movie}</h1>

          <img src={info.img} alt="img" width={"300px"} height={"300px"} />
          <h3 style={{ "fontFamily": "Roboto", "color": "white" }}> {info.title}</h3>
          <audio controls >
            <source src={info.song} type="audio/mp3" />
          </audio>
          <hr style={{ "width": "300px" }} />

        </div>)}

    </div>

  );

}

export default App;
