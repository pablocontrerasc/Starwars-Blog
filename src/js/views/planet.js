import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";

export const Planet = props => {
	const { store, actions } = useContext(Context);
	const params = useParams();

	useEffect(
		() => {
			actions.getPlanet(parseInt(params.theid));

		}, []
	);
	console.log(params.theid)

    let imagen= "https://github.com/tbone849/star-wars-guide/blob/master/build/assets/img/planets/"+params.theid +".jpg?raw=true"
	return (

		<>


			<div className="container-sm">
				<div className="row">
					<div className="col">
						<img src={imagen} alt="Card image cap" style={{ width: '40rem' }}></img>
					</div>
					<div className="col">
						<h1 className="text-center">{store.singlePlanet.name}</h1>
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
						<span>{store.singlePlanet.name}</span>
					</div>
					<div className="col">
					<p>Climate</p>
					<span>{store.singlePlanet.climate}</span>
					</div>
					<div className="col">
					<p>Popualation</p>
					<span>{store.singlePlanet.population}</span>
					</div>
					<div className="col">
					<p>Orbital Period</p>
					<span>{store.singlePlanet.orbital_period}</span>
					</div>
					<div className="col">
					<p>Rotation Period</p>
					<span>{store.singlePlanet.rotation_period}</span>
					</div>
					<div className="col">
					<p>Diameter</p>
					<span>{store.singlePlanet.diameter}</span>
					</div>
				</div>
			</div>



		</>
	);
};

Planet.propTypes = {
	match: PropTypes.object
};
