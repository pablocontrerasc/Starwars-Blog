const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			demo: [
				{
					title: "FIRST",
					background: "white",
					initial: "white"
				},
				{
					title: "SECOND",
					background: "white",
					initial: "white"
				}
			],
			characters:[],
			planets:[]
		
		},
		actions: {
			// Use getActions to call a function within a fuction
			// exampleFunction: () => {
			// 	getActions().changeColor(0, "green");
			// },
			loadPeopleData: () => {
				/**
					fetch().then().then(data => setStore({ "foo": data.bar }))
				*/

				fetch("https://www.swapi.tech/api/people/")
				.then((response) => response.json())
				.then(data => {
					let personajes = getStore().characters;
					for(let i =0; i  < data.results.length; i++){
						fetch(data.results[i].url)
							.then(response => response.json())
							.then(dataP => { 
								personajes.push(dataP.results.properties);
								setStore({ characters:[...personajes]})
							})
					}
				})


				.catch((error) => console.log(error));
				
			},
		
			loadPlanetsData: () => {
				/**
					fetch().then().then(data => setStore({ "foo": data.bar }))
				*/
				fetch("https://www.swapi.tech/api/planets/")
				.then(response => response.json())
				.then(data => setStore({planets:data.results}))
				.catch((error) => console.log(error));
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
