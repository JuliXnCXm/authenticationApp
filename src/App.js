import Home from './pages/Home';
import './styles/App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import { useEffect } from 'react';

function App() {

  useEffect(() => {
    let btn = document.getElementById('chk');

    btn.addEventListener("change", () => {
      document.body.classList.toggle("dark");
    });
  }, []);



  return (
    <div className="App">
      <div>
        <input type="checkbox" class="checkbox" id="chk" />
        <label class="label" for="chk">
          <span class="material-icons material-icons-outlined fa-moon">nightlight_round</span>
          <span class="material-icons material-icons-outlined fa-sun">
            brightness_5
          </span>
          <div class="ball"></div>
        </label>
      </div>
      <Home />
    </div>
  );
}

export default App;
