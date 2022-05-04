import React from "react";
import "../../styles/home.css";
import { Characters } from "../component/characters";
import { Planets } from "../component/planets";


export const Home = () => (
	<>
		<div className="container-fluid">
			<h1 className="text-danger">Characters</h1></div>
		<div className="mt-5 scroll_horizontal">

			<Characters />

		</div>


		<div className="container-fluid">
			<h1 className="text-danger">Planet</h1></div>
		<div className="mt-5 scroll_horizontal">

			<Planets />

		</div>


	</>
);
