
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
      <h1>{data}</h1>


      <button className='btn'  onClick={getData}>请求</button>
    </div>
  );
}

export default App;
