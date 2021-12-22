
import './App.css';
import Img from './img/cart.png';
import Img1 from './img/marker.png';
import { Button } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';


import axios from 'axios'

// const Login = () => {
//   const tes = axios
//   return (
//     <div className='open'>
//       coba
//     </div>
//   )
// }
function App() {
  return (
    <nav className="navbar">
      <div class="navbar-container">
        <div class="navbar-brand">
          <a href="index.html">
            <img src={Img} width="50" height="50" />
            <a>Food&Drink</a>
          </a>
        </div>

        <ul class="navbar-nav-left">
          <li class="nav-item active">
            <a class="nav-link" href="#">Menu</a>
          </li>
          <li class="nav-item active">
            <a class="nav-link" href="#">Rewards</a>
          </li>
          <li>
            <a href="#">Message</a>
          </li>
          <li>
            <a href="#">Saran</a>
          </li>
        </ul>

        <ul class="navbar-nav-right">
          <li>
            <a href="#">
              <img src={Img1} width="50" height="50"></img>
              <span>Location a store </span>
            </a>
          </li>
          <li>
            <button class="btn btn-dark-outline">sign in</button>
            <button class="btn btn-dark">join now</button>
          </li>

        </ul>
      </div>
    </nav>
  )
};
export default App;

