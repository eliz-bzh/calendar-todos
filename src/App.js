import { useState } from 'react';
import './App.css';
import { Calendar, Drawer } from './components';

function App() {

  const [clickedDate, setClickedDate] = useState(new Date());

  const click = (date)=> {
    setClickedDate(date);
}

  return (
    <div className='content'>
      <Calendar click={click} />
      <Drawer dateTodos={clickedDate} />
    </div>
  );
}

export default App;
