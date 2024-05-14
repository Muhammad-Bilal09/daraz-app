import './App.scss';
// bootstrap 
import "bootstrap/dist/js/bootstrap.bundle"
//components
import Header from "./components/Header"
import Footer from "./components/Footer"
import Data from './Pages/data/data'
function App() {
  return (
    
<>
<Header/>
<main>
<Data/>
</main>

<Footer/>
</>
  );
}

export default App;
