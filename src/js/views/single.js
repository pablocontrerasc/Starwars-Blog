import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";

export const Single = props => {
	const { store, actions } = useContext(Context);
	const params = useParams();

	useEffect(
		() => {
			actions.getCharacter(parseInt(params.theid));

		}, []
	);
	console.log(params.theid)
	return (

		<>


			<div className="container-sm">
				<div className="row">
					<div className="col">
						<img className="https://thecurbsiders.com/wp-content/uploads/2020/05/placeholder-800x600-1.png" alt="Card image cap"></img>
					</div>
					<div className="col">
						<h1 className="text-center">{store.characters[params.theid].name}</h1>
						<p className="text-center">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam ac vulputate metus. Suspendisse potenti. Aenean tempor velit et est egestas,
							sit amet ornare nisi pretium. Sed quis vulputate mi. Sed ac metus efficitur, volutpat ipsum eu, ultrices libero.
							Duis et euismod diam, vitae bibendum elit. Integer euismod pulvinar eleifend.
							Etiam sollicitudin lacus ligula, ac ultricies mi vehicula vel.</p>
					</div>
				</div>
				<div className="row text-danger text-center">
					<div className="col">
						<p>Name</p>
						<span>{store.characters[params.theid].name}</span>
					</div>
					<div className="col">
					<p>Birth Vear</p>
					<span>{store.characters[params.theid].birth_year}</span>
					</div>
					<div className="col">
					<p>Gender</p>
					<span>{store.characters[params.theid].gender}</span>
					</div>
					<div className="col">
					<p>Height</p>
					<span>{store.characters[params.theid].height}</span>
					</div>
					<div className="col">
					<p>Skin Color</p>
					<span>{store.characters[params.theid].skin_color}</span>
					</div>
					<div className="col">
					<p>Eye Color</p>
					<span>{store.characters[params.theid].eye_color}</span>
					</div>
				</div>
			</div>



		</>
	);
};

Single.propTypes = {
	match: PropTypes.object
};
