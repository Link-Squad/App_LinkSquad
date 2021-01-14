export const getRandomElementFromArray = arr => {
	const randNumber = Math.floor(Math.random() * arr.length);
	return arr[randNumber];
};

export const returnTruthyProperties = obj =>
	Object.entries(obj)
		.filter(e => e[1])
		.map(e => e[0]);

export const returnWIPmessage = () =>
	alert(
		'This feature is being worked on, be sure to check it out in the future   :)'
	);

export const removeUserFromArray = (array, userId) =>
	array.filter(u => u.id !== userId);
