import "./index.css";
import { useState } from "react";
import reviews from "./data";
import Testimonial from "./components/Testimonial";

function App() {
	const [userReviews, setUserReviews] = useState(reviews);

	return (
		<div className="bg-gray-300 h-screen flex flex-col justify-center items-center">
			<div className="">
				<h1 className="font-bold text-3xl text-center">Our Testimonials</h1>
				<div className="bg-purple-500 h-1 w-40 mx-auto mt-2"></div>
			</div>
			<Testimonial userReviews={userReviews}/>
		</div>
	);
}

export default App;
