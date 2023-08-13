import Card from "./Card";
import { FiChevronRight, FiChevronLeft } from "react-icons/fi";
import { useState } from "react";

function Testimonial({ userReviews }) {
	const review = userReviews;

	const [index, setIndex] = useState(0);

	function leftClickHandler() {
		if (index - 1 < 0) {
			setIndex(userReviews.length - 1);
		} else {
			setIndex(index - 1);
		}
	}
	function rightClickHandler() {
		if (index + 1 > userReviews.length) {
			setIndex(0);
		} else {
			setIndex(index + 1);
		}
	}
	function surpriseHandler() {
		setIndex(Math.floor(Math.random()* userReviews.length));
	}

	return (
		<div className="w-[600px]  mx-auto pb-8 mt-8 bg-white rounded-sm shadow-lg">
			<Card review={review[index]} />

			<div className="flex gap-4 items-center justify-center mt-8 text-violet-400">
				<button onClick={leftClickHandler}>
					<FiChevronLeft size={23} />
				</button>
				<button onClick={rightClickHandler}>
					<FiChevronRight size={23} />
				</button>
			</div>
			<div className="mx-auto w-fit">
				<button
					onClick={surpriseHandler}
					className="mt-6 bg-violet-500 rounded text-white text-sm font-semibold px-6 py-2 hover:bg-violet-600 transition duration-200"
				>
					Surprise Me
				</button>
			</div>
		</div>
	);
}

export default Testimonial;
