import './App.css';
import Menu from './components/AssetsPieces/Menu/Menu';
import Footer from './components/Guset/Home/Footer/Footer';

function App() {
  return (
    <div className="App">
      <Menu />
      <div className="backgroundI">
        <div className="container">
          <h1 className="HomeCover_title">ESCAPE WITH THE<br /> LOUVRE</h1>
          <a href="/register" ><button type="button" class="btn button-1 btn-lg">Join Us</button></a>
        </div>
      </div>
      <div className="backgroundII">
        <h1 className="secondCover_title">        Louvre at home</h1>
        <p className="third_title">
          What you wait for ? Join us Now
        </p>
      </div>

      <Footer />
    </div>
  );
}

export default App;
