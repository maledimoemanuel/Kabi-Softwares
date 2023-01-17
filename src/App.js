import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import NavBar from './components/NavBar'
import Banner from './components/Banner'
//import {Shop} from './components/Shop';
//import {Services} from './components/Services';

function App() {
  return (
    <div className='App'>
      <NavBar/>
      <Banner/>
    </div>
  );
}

export default App;
