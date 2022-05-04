const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			characters:[],
			planets:[],
			single:[""],
			singlePlanet: [""],
			favoritos:[]

		
		},
		actions: {
			// Use getActions to call a function within a fuction
			// exampleFunction: () => {
			// 	getActions().changeColor(0, "green");
			// },

		
			
			getCharacter: (index) => {
			//	console.log(`https://www.swapi.tech/api/people/${index}/`);
				fetch(`https://www.swapi.tech/api/people/${index}/`)
				.then((response) => response.json())
				.then(resjson => {
						setStore({
							single: resjson.result.properties
						});
					});
			},
			
			loadPeopleData: () => {
				/**
					fetch().then().then(data => setStore({ "foo": data.bar }))
				*/

				fetch(`https://www.swapi.tech/api/people/`)
				.then((response) => response.json())
				.then(result => {
					setStore({ characters: result.results });
				})
				.catch(error => console.log("error", error));
				
			},

		
			loadPlanetsData: () => {
				/**
					fetch().then().then(data => setStore({ "foo": data.bar }))
				*/
				fetch("https://www.swapi.tech/api/planets/")
				.then(response => response.json())
				.then(data => {
					setStore({ planets: data.results });
				})
				.catch(error => console.log("error", error));
			},
		
			getPlanet: (index) => {
				//	console.log(`https://www.swapi.tech/api/people/${index}/`);
					fetch(`https://www.swapi.tech/api/planets/${index}/`)
					.then((response) => response.json())
					.then(resjson => {
							setStore({
								singlePlanet: resjson.result.properties
							});
						});
				},
	

				agregarFavorito: (x) => {
					const store = getStore();
					setStore({ favoritos: store.favoritos.concat(x)})
				},
				removerFavorito: (x) => {
					const store = getStore();
					const listaFavorito = store.favoritos.filter(key => key !== x)
					setStore({favoritos: listaFavorito})
	
				},
			// changeColor: (index, color) => {
			// 	//get the store
			// 	const store = getStore();

			// 	//we have to loop the entire demo array to look for the respective index
			// 	//and change its color
			// 	const demo = store.demo.map((elm, i) => {
			// 		if (i === index) elm.background = color;
			// 		return elm;
			// 	});

			

			// 	//reset the global store
			// 	setStore({ demo: demo });
			// }
		}
	};
};

export default getState;
