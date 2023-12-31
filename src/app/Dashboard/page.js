import React from "react";
import Title from "../Components/Dashboard/Title";
import TextBoxes from "../Components/Dashboard/Boxes";
import Itemsfy from "../Components/Dashboard/Itemsfy";
import TrendingProds from "../Components/Dashboard/TrendingProds";
import WatchCatalogueCard from "../Components/Dashboard/WatchCatalogueCard";
import { dashboardBoxes } from "../layout";

const Dashboard = () => {
	try {
		return (
			<div className="container mx-auto py-32">
				<Title text="Dashboard" />
				<TextBoxes array={dashboardBoxes} />
				<Itemsfy />
				<TrendingProds />
				<WatchCatalogueCard />
			</div>
		);
	} catch (e) {
		return <div className="Loading">Loading...</div>;
	}
};

export default Dashboard;
