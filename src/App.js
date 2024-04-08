
import { useEffect, useState } from 'react';
import './App.css';
import axios from 'axios';
function App() {
  let [data, setData] = useState('初始值')
  useEffect(() => {
    console.log(1111);
  }, [data])



  function getData() {
    axios.get('/app').then((res) => {
      console.log(res.data)
      setData(res.data)
    })
  }

  return (
    <div className="App">
      <h2>{{ data }}</h2>


      <button onClick={getData}></button>
    </div>
  );
}

export default App;
