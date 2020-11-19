export const getRandomElementFromArray = arr => {
	const randNumber = Math.floor(Math.random() * arr.length);
	return arr[randNumber];
};

export const returnTruthyProperties = obj =>
	Object.entries(obj)
		.filter(e => e[1])
		.map(e => e[0]);
