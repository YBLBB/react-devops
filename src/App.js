
import { useEffect } from 'react';
import './App.css';
import axios from'axios';
function App() {
  useEffect(()=>{
      axios.get('/app').then((res)=>{
        console.log(res.data)
      })
  },[])
  return (
    <div className="App">
     111
    </div>
  );
}

export default App;
