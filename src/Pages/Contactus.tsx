import "../App.css";
import Header from "../components/Header";
import Footer from "../components/Footer";

const Contactus = () => {
  return (
    <div className="app-container">
      <Header />
      <div className="container">
			<div className="title">
				<h1>Conatct Us</h1>
			</div>
			<div className="contact-container">
				<p>
					Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatum
					eos tenetur beatae nihil dolorum possimus voluptate esse voluptatibus,
					aliquid ratione facere enim eveniet modi necessitatibus quas
					asperiores pariatur, amet velit?
				</p>
				<p>
					Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatum
					eos tenetur beatae nihil dolorum possimus voluptate esse voluptatibus,
					aliquid ratione facere enim eveniet modi necessitatibus quas
					asperiores pariatur, amet velit?
				</p>
			</div>
		</div>           
      <Footer />
    </div>
  );
};

export default Contactus;
