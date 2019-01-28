// add solution here
// The Beatles Play
let theBeatlesPlay = (arr1, arr2) => {
	// arr1 = musicians, arr2 = instrument, arr3 = phrases
	let arr3 = [];
	for (var i = 0; i < arr2.length; i++) {
		arr3.push(`${arr1[i]} plays ${arr2[i]}`);
	}
	return arr3;
};

// John Lennon Facts
let johnLennonFacts = (factsArr) => {
	let i = 0;
	let j = factsArr.length;
	let k = [];
	while (i < j) {
		k.push(`${factsArr[i]}!!!`);
		i++;
	}
	return k;
};

// iLoveTheBeatles
let iLoveTheBeatles = (num) => {
	let k = [];
	do {
		k.push(`I love the Beatles!`);
		num++;
	} while (num < 15);
	return k;
};