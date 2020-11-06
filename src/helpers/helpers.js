export const getRandomElementFromArray = arr => {
	const randNumber = Math.floor(Math.random() * arr.length);
	return arr[randNumber];
};
