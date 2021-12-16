
import './App.css';
import { Button } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';


import axios from 'axios'

const Login = () => {
  const tes = axios
  return (
    <div className='open'>
      coba
    </div>
  )
}
function App() {
  return (
    <div className="App">
      <nav class="navbar">
        <div className="navbar-container">
          <p>test</p>
          <Login />
          <div class="navbar-brand">
            <a href="index.html">
              <img src="img/cart.png" width="50" height="50"></img>
              <a>Food&Drink</a>
            </a>

          </div>
        </div>
      </nav>
    </div>
  );
}

export default App;
