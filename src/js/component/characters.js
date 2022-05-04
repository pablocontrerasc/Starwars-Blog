import React, { useContext, useEffect, useState } from "react";

import { Context } from "../store/appContext";
import "../../styles/characters.css";
import { Link, useParams } from "react-router-dom";

export const Characters = (props) => {
    const params = useParams();
    const { store, actions } = useContext(Context);
    const [data, setData] = useState([])

 
    return <>
        {store.characters.map((item, index) => {
            let imagen = "https://raw.githubusercontent.com/tbone849/star-wars-guide/master/build/assets/img/characters/" + item.uid + ".jpg"
           
            return (
                <div key={index} className="card scroll_horizontal" >
                    <img className="card-img-top" src={imagen} alt="Card image cap" style={{ width: '18rem' }}></img>
                    <div className="card-body">
                        <h5 className="card-title">{item.name}</h5>

                        <p className="card-text">
                            <span>Gender: {item.gender}</span><br></br>
                            <span>Hair color: {item.hair_color}</span><br></br>
                            <span>Eye color: {item.eye_color}</span>
                        </p>


                        <div className="brngrup">
                            <div className="btnMore">
                                <Link to={"/single/" + item.uid}>
                                    <button className="btn btn-outline-primary">Learn more!</button>
                                </Link>
                            </div>
                            <button className="btn btn-outline-warning" onClick={() => { actions.agregarFavorito(item.name) }}>♡</button>
                        </div>

                    </div>

                </div>

            );
        })}



    </>
}
