import { Link } from "react-router-dom";
import './App.css'

function App() {
  return (
    <div className="App">
      <h1>Recoil Sync with history API Demo</h1>
      <div>
        <Link to="/counter">counter</Link>
      </div>
    </div>
  )
}

export default App
