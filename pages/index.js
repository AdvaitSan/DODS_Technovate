
import Home from '../components/hero/Home';
import Carousel from '../components/hero/Carousel'
import About from '../components/hero/About';
import Campaign from '../components/hero/Campaign';
import About2 from '../components/hero/About2';
import Footer from '../components/hero/Footer';
import Link from 'next/link';
function Index() {
  return (
    <div className="App">
      <Home/>
      <Carousel/>
      <About/>
      <Campaign/>
      <About2/>
      <Footer/>
    </div>
  );
}
export default Index