import './App.css'
import Header from './Header.js'
import Banner from './Banner';
import Shows from './Shows';
import Reviews from './Reviews';
function App() {

  return (
    <div className="app">
      <Header />
      <Banner />
      <Shows />
      <Reviews />
    </div>
  );
}

export default App;
