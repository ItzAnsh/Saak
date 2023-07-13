"use client";

import React, { useState } from "react";
import "../style.css";

const Arrow = (props) => {
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			width={props.width}
			height="9"
			viewBox="0 0 20 9"
			fill="none"
		>
			<path
				d="M19.3536 4.85355C19.5488 4.65829 19.5488 4.34171 19.3536 4.14645L16.1716 0.964466C15.9763 0.769204 15.6597 0.769204 15.4645 0.964466C15.2692 1.15973 15.2692 1.47631 15.4645 1.67157L18.2929 4.5L15.4645 7.32843C15.2692 7.52369 15.2692 7.84027 15.4645 8.03553C15.6597 8.2308 15.9763 8.2308 16.1716 8.03553L19.3536  4.85355ZM0 5H19V4H0V5Z"
				fill="black"
			/>
		</svg>
	);
};

const BuyBtn = () => {
	const [arrowLen, setArrowLen] = useState(20);
	return (
		<button
			className="bg-[#d8d1d0] font-light font-Cabinet gap-x-[10px] py-[6px] px-[12px] flex items-center text-[#404040] rounded-xl buyBtn"
			onHover={() => setArrowLen(100)}
		>
			Buy Now
			<Arrow len={arrowLen} />
		</button>
	);
};

export default BuyBtn;
