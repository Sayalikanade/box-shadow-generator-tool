import React,{useState} from 'react';
import './App.css';

function App() {
  const [Hori, setHori] = useState(10)
  const [Veri, setVeri] = useState(10)
  const [Blur, setBlur] = useState(10)
  const [Color, setColor] = useState("black")
  const [CheckOn, setCheckon] = useState(false)




  return (
    <div className="App">
      <div className="Controls">
        <label>Horizontal Length</label>
        <input type="range" min="-200" max="200" value={Hori} onChange={(e) => setHori(e.target.value)} />
        <label>Vertical Length</label>
        <input type="range" min="-200" max="200" value={Veri} onChange={(e) => setVeri(e.target.value)} />
        <label>Blur</label>
        <input type="range" min="0" max="200" value={Blur} onChange={(e) => setBlur(e.target.value)} />
        <label>Color</label>
        <input type="Color" value={Color} onChange={(e) => setColor(e.target.value)} />
        <div class="switch">
          <label>
            Outline
            <input type="checkbox" checked={CheckOn} onChange={()=>setCheckon(!CheckOn)} />
              <span className="lever"></span>
              inset
            </label>
        </div>
        </div>
      <div className="Output">
      <div className="box" style={{boxshadow:'${checkon ?"inset":""} ${Hori}px ${Veri}px ${blur}px ${Color}' }}>
        <p>box-shadow:{Hori}px {Veri}px {Blur}px {Color}</p>
      </div>
    </div>
     </div>
     );
}

export default App;

