export class Trebuchet {
	exampleInput = "1abc2\npqr3stu8vwx\na1b2c3d4e5f\ntreb7uchet";
	inputPath = "src/2023/Day 1/input.txt";

	run(input: string) {
		const lines = input.split("\n");
		const numbers = lines.map((line) =>
			line
				.split("")
				.filter((char) => char >= "0" && char <= "9")
				.map((char) => parseInt(char))
		);

		const sum = numbers
			.map((number) => {
				return [number[0], number[number.length - 1]];
			})
			.map((number) => parseInt(number.join("")))
			.reduce((a, b) => a + b);

		console.log(sum);
	}
}
