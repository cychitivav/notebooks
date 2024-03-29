const asyncFunction = () => {
	return new Promise((resolve, reject) => {
		true
			? setTimeout(() => resolve("Async!"), 2000)
			: reject(new Error("Error!"));
	});
};

const anotherFunction = async () => {
	const something = await asyncFunction();
	console.log(something);
	console.log("Hello");
};

console.log("Before");
anotherFunction(); // Async! Hello
console.log("After");
