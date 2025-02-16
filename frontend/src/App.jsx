import './App.css'
import { useState } from 'react'
import Canvas from './components/Canvas'
import Toolbar from './components/Toolbar'
import Chatbox from './components/Chatbox'

function App() {
  const [selectedTool, setSelectedTool] = useState('pencil');
  const [brushColor, setBrushColor] = useState('#000000');
  const [backgroundColor, setBackgroundColor] = useState('#FFFFFF');
  const [clearTrigger, setClearTrigger] = useState(false);
  const [fillMode, setFillMode] = useState(false);


  const clearCanvas = () => {
    setClearTrigger(true);
    setTimeout(() => setClearTrigger(false), 100); // Reset trigger after clearing
  };
  
  return (
    <><div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", height: "100vh", padding: "10px" }}>
      <div style={{margin: "10px"}}>
      <Canvas 
        selectedTool={selectedTool} 
        brushColor={brushColor} 
        backgroundColor={backgroundColor} 
        clearTrigger={clearTrigger}
        setFillMode={setFillMode}
      />
      <Toolbar 
        setSelectedTool={setSelectedTool} 
        setBrushColor={setBrushColor} 
        setBackgroundColor={setBackgroundColor} 
        clearCanvas={clearCanvas}
        setFillMode={setFillMode}
        fillMode={fillMode}
      />      
      </div>
      <Chatbox/>
      </div>
    </>

  )

}

export default App
