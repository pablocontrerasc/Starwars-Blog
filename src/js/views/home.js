import React from "react";
import "../../styles/home.css";
import { Characters } from "../component/characters";


export const Home = () => (
	<>
		<div className="container-fluid">
			<h1 className="text-danger">Characters</h1></div>
		<div className="mt-5 scroll_horizontal">

			<Characters />
		</div>
	</>
);
