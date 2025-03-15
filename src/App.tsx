import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";

const App = () => {
  return (
    <div className="app-container">
      <Header />      
      <main className="splash-container">
        <div className="overlay">
          <h1>Welcome to Security Benefit</h1>
          <p>Helping you plan for your financial future.</p>
          <a href="https://www.securitybenefit.com" className="cta-button">Learn More</a>
        </div>
      </main>      
      <Footer />
    </div>
  );
};

export default App;
