import { useState, useEffect } from 'react';
import "../App.css";
import Header from "../components/Header";
import Footer from "../components/Footer";

const About = () => {
	const [quotes, setQuotes] = useState([]);
	useEffect(() => {
		const fetchData = async () => {
			try {
				const response = await fetch('https://dummyjson.com/quotes/random');
				const result = await response.json();
				console.log(result);
				setQuotes(result);
			} catch (error) {
				console.error('Error fetching data:', error);
			}
		};

		fetchData();
	}, []);
	return (
		<div className="app-container">
			<Header />
			<div className="container">
				<div className="title">
					<h1>About</h1>
				</div>
				<blockquote>
					{quotes.quote}
					<span>{quotes.author}</span>
				</blockquote>
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

export default About;
