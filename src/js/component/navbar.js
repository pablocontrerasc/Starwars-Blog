import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from '../store/appContext'

export const Navbar = () => {
	const { store, actions } = useContext(Context);
	return (
		<nav className="navbar navbar-light bg-light mb-3">
			<Link to="/">
				<span className="navbar-brand mb-0 h1">
					<img src="https://1000marcas.net/wp-content/uploads/2019/12/Star-Wars-Logo-5.png" alt="logo" width={"100px"} />
				</span>
			</Link>

			<div className="col-2">
				<div className="btn-group">
					<button type="button" className="btn btn-primary dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
						Favorites <span className=''>{store.favoritos.length}</span>
					</button>
					{(store.favoritos.length>0) ? 
					<ul className="dropdown-menu">
				
						{store.favoritos.map((item, index) => {

							return (
								<div   >
									<li key={index}>{item} <span onClick={(index) => { actions.removerFavorito(item) }}> <svg  xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-trash-fill" viewBox="0 0 16 16">
										<path d="M2.5 1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1H3v9a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V4h.5a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H10a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1H2.5zm3 4a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5zM8 5a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7A.5.5 0 0 1 8 5zm3 .5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 1 0z" />
									</svg></span></li>

								</div>

							);
						})}
						
					
					</ul>
					:	
					<ul className="dropdown-menu">
								<li>(empty)</li>
					</ul>
					}
				</div>

			</div>
		</nav>
	);
};
