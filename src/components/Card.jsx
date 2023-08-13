import { FaQuoteLeft, FaQuoteRight } from "react-icons/fa";
function Card({ review }) {
	return (
		<div className="h-fit px-12 relative">
			<img
				className="w-[110px] object-cover rounded-full absolute -top-[6.6rem] left-10 z-10"
				src={review.image}
				alt="profile"
			></img>
			<div className="w-[110px] h-[110px] absolute -top-[6.8rem] left-[3.1rem] bg-violet-500 rounded-full z-0"></div>

			<div className="text-center mt-12">
				<h2 className="font-bold text-2xl -tracking-tight">{review.name}</h2>
				<h3 className="font-light text-violet-400 text-sm uppercase">
					{review.job}
				</h3>
			</div>
			<div className="flex flex-col justify-center items-center mt-4 gap-4">
				<div>
					<FaQuoteLeft fontSize={15} className="text-violet-500" />
				</div>
				<p className="text-slate-500 text-center">{review.text}</p>
				<div>
					<FaQuoteRight fontSize={15} className="text-violet-500" />
				</div>
			</div>
			
		</div>
	);
}

export default Card;
