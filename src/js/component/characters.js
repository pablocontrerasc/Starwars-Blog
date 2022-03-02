import React,{ useContext} from "react";

import { Context} from "../store/appContext";

export const Characters = () => {
    const { store, actions} = useContext(Context);

    return <>
    {store.characters.map((item, index) => {
					return (
						<li
							key={index}
							className="list-group-item d-flex justify-content-between"
						>
							<span> {item.name}</span>
							<span> {item.url}</span>
						</li>
					);
				})}

    </>
}
