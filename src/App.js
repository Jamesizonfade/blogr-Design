import Features from './components/features';
import Footer from './components/footer';
import Header from './components/header';
import Infrastructure from './components/infrastructure';
import Offers from './components/offers';


function App() {
  return (
    <div className='app'>
      <Header/>
      <Features/>
      <Infrastructure/>
      <Offers/>
      <Footer/>
    </div>
   
  );
}

export default App;
