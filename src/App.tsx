// App.js
import { Routes, Route } from 'react-router-dom';
import Home from './Pages/Home';
import About from './Pages/About';
import Contact from './Pages/Contactus';
import Privacy from './Pages/Privacy';
import Terms from './Pages/Terms';

 
const App = () => {
   return (
      <>
         <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/privacy" element={<Privacy />} />
            <Route path="/terms" element={<Terms />} />
         </Routes>
      </>
   );
};
 
export default App;
