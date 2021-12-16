import { useState } from 'react';
import './App.css';
function App() {
  let [count,setCount]=useState(0)
  return (
    <div className="App">
      <div className="body">
        <div className="rectangle">
         <div className='line3'>

         </div>
         <div className='line2'>

         </div>
         <div className='line1'>

         </div>
         <div className='text-0'>
           <h4>{count}</h4>
         </div>
         <div className='increment' onClick={()=>setCount(count+1)}>
          <h6>+</h6>
         </div>
         <div className='decrement'onClick={()=>setCount(count-1)}>
         <h6>-</h6>
         </div>
         <div className='heading'>
          <h3>The Counter</h3>
         </div>
         <div className='discription'>
          <p>Click the plus or minus buttons to add or subtract from the the number shown just above it </p>
         </div>
         <div className='reset'onClick={()=>setCount(count=0)}>
          <h3>Reset Counter to 0</h3>
         </div>
        </div>

      </div>
    </div>
  );
}

export default App;
