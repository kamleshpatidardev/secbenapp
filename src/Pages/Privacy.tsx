import "../App.css";
import Header from "../components/Header";
import Footer from "../components/Footer";

const Privacy = () => {
  return (
    <div className="app-container">
      <Header />
      <div className="container">
			<div className="title">
				<h1>Privacy</h1>
			</div>
			<div className="about-container">
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

export default Privacy;
