//import logo from './logo.svg';
import Mensaje from './Mensaje.js'
import './App.css';



const Description = () => {
  return <p> Esta es la app del curso fullstack bootcamp</p>
}

function App() {
 
  return (
    <div className="App">
      <Mensaje color = 'red'   message = 'Estamos trabajando' />
      <Mensaje color = 'green' message = 'En un curso'/>
      <Mensaje color = 'yellow' message = 'De React' />
      <Description />
    
    </div>
  );
}

export default App;
