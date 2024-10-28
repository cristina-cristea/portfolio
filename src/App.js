import './App.css';
import { Contacts } from './components/Contacts';
import { Welcome } from './components/Welcome';
import { NavBar } from './components/NavBar';
import { Projects } from './components/Projects';
import { Skills } from './components/Skills';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Footer } from './components/Footer';

function App() {

  return (
    <div className='App'>
      <NavBar/>
      <Welcome />
      <Skills />
      <Projects />
      <Contacts />
      <Footer />
    </div>
  );
}

export default App;
