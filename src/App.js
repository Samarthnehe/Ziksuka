import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import Logo from './components/Logo';
import Input from './components/Input';
import Title from './components/Title';
import Login from './components/Login'
import {Container } from 'react-bootstrap';
import Footer from './components/Footer'

function App() {
  return (
    
       <div className="App">
         <Container>
         <Logo/>
        <Title/>
        <Input/>
        <Login/>
        
        </Container>
        <Footer/>
       
      </div>
   
   
  );
}

export default App;
