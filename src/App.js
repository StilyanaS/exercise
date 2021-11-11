import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import SearchArea from './components/SearchArea/SearchArea';
import data from './components/data';

function App() {
  return (
    <div className="App">
      <SearchArea data={data}/>
    </div>
  );
}

export default App;
