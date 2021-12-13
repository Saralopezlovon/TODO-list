import './App.css';
import Header from './components/Header/Header'
import Main from './components/Main/Main'
import Footer from './components/Footer/Footer'

//Importamos esto cuando despues de hacer npm install react-router-dom
import { BrowserRouter } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <BrowserRouter>  
        <Header/>
        <Main/>
      </BrowserRouter>
    
      <Footer/>
    </div>
  );
}

export default App;

