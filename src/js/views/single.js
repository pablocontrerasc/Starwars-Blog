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
	let imagen= "https://raw.githubusercontent.com/tbone849/star-wars-guide/master/build/assets/img/characters/"+params.theid+".jpg"
	console.log(params.theid)
	return (

		<>

			<div className="container-sm">
				<div className="row">
					<div className="col">
						<img src={imagen} alt="Card image cap"></img>
					</div>
					<div className="col">
						<h1 className="text-center">{store.single.name}</h1>
						<h3 className="text-center">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam ac vulputate metus. Suspendisse potenti. Aenean tempor velit et est egestas,
							sit amet ornare nisi pretium. Sed quis vulputate mi. Sed ac metus efficitur, volutpat ipsum eu, ultrices libero.
							Duis et euismod diam, vitae bibendum elit. Integer euismod pulvinar eleifend.
							Etiam sollicitudin lacus ligula, ac ultricies mi vehicula vel.</h3>
					</div>
				</div>
				<hr style={{color:"red"}}></hr>
				<div className="row text-danger text-center">
					<div className="col">
						<p>Name</p>
						<span>{store.single.name}</span>
					</div>
					<div className="col">
					<p>Birth Vear</p>
					<span>{store.single.birth_year}</span>
					</div>
					<div className="col">
					<p>Gender</p>
					<span>{store.single.gender}</span>
					</div>
					<div className="col">
					<p>Height</p>
					<span>{store.single.height}</span>
					</div>
					<div className="col">
					<p>Skin Color</p>
					<span>{store.single.skin_color}</span>
					</div>
					<div className="col">
					<p>Eye Color</p>
					<span>{store.single.eye_color}</span>
					</div>
				</div>
			</div>



		</>
	);
};

Single.propTypes = {
	match: PropTypes.object
};
