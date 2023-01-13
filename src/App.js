import './App.css';
import Cards from './components/Cards';
import Header from './components/header/index';
import Filter from './components/Filter';


function App() {
  return (
    <div className="App">
      <Header/>
      <Filter/>
      <Cards/>
    </div>
  );
}

export default App;
