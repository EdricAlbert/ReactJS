import './App.css';
import Header from './Header';
import NavigationBar from './Navigation';
import IndexSection from './IndexSection';
import ContentSection from './ContentSection';
import FoorterSection from './Footer';
function App() {
  return (
    <div className="App">
      <Header />
      <NavigationBar />
      <div className='container'>
        <IndexSection />
        <ContentSection />
      </div>
      <FoorterSection />
    </div>
  );
}

export default App;
