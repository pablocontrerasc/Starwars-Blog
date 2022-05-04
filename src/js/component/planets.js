import React, { useContext } from "react";

import { Context } from "../store/appContext";
import "../../styles/characters.css";
import { Link } from "react-router-dom";

export const Planets = () => {

    const { store, actions } = useContext(Context);

    return <>
        {store.planets.map((item, index) => {
            return (


                <div key={index} className="card scroll_horizontal" >
                    <img className="card-img-top" src="https://fakeimg.pl/400x200/" alt="Card image cap" ></img>
                    <div className="card-body">
                        <h5 className="card-title">{item.name}</h5>
                        <p className="card-text">
                            <span>Popilation: {item.population}</span><br></br>
                            <span>Terrain: {item.terrain}</span><br></br>

                        </p>

                        <div className="brngrup">
                            <div className="btnMore">
                            <Link to={"/planet/" + item.uid}>
                                <button className="btn btn-outline-primary">Learn more!</button>
                            </Link>
                            </div>
                            <button className="btn btn-outline-warning">♡</button>
                        </div>

                    </div>

                </div>

            );
        })}



    </>
}
