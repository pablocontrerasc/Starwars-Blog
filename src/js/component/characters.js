import React, { useContext } from "react";

import { Context } from "../store/appContext";
import "../../styles/characters.css";
import { Link } from "react-router-dom";

export const Characters = () => {

    const { store, actions } = useContext(Context);

    return <>
        {store.characters.map((item, index) => {
            return (


                <div key={index} className="card scroll_horizontal" >
                    <img className="card-img-top" src="https://fakeimg.pl/400x200/" alt="Card image cap"></img>
                    <div className="card-body">
                        <h5 className="card-title">{item.name}</h5>
                        <p className="card-text">
                            <span>Gender: {item.gender}</span><br></br>
                            <span>Hair color: {item.hair_color}</span><br></br>
                            <span>Eye color: {item.eye_color}</span>
                        </p>

                        <div className="brngrup">
                            <div className="btnMore">
                            <Link to={"/single/" + index}>
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
