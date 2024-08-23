import './App.css';
import Footer from './components/Common/Footer';
import Header from './components/Common/Header';
import MainComponent from './components/LandingPage/MainComponents';


function App() {
  return (
    <div className="App">
      <Header/>
      <MainComponent/>
      {/* <Footer/> */}
    </div>
  );
}

export default App;
