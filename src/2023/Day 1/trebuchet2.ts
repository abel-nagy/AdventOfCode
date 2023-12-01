type Pair = {
	key: string;
	value: number;
};

export class Trebuchet2 {
	exampleInput = "two1nine\neightwothree\nabcone2threexyz\nxtwone3four\n4nineeightseven2\nzoneight234\n7pqrstsixteen";
	inputPath = "src/2023/Day 1/input2.txt";
	pairs: Pair[];

	constructor() {
		this.pairs = [
			{ key: "one", value: 1 },
			{ key: "two", value: 2 },
			{ key: "three", value: 3 },
			{ key: "four", value: 4 },
			{ key: "five", value: 5 },
			{ key: "six", value: 6 },
			{ key: "seven", value: 7 },
			{ key: "eight", value: 8 },
			{ key: "nine", value: 9 },
			{ key: "zero", value: 0 },
		];
	}

	run(input: string) {
		const lines = input.split("\n");
		console.log(lines);
		const letterSwappedLines = lines.map((line) => {
			line.split("")
            .filter(char => char >= "0" && char <= "9")
		});

		console.log(letterSwappedLines);
	}
}

const trebuchet = new Trebuchet2();
trebuchet.run(trebuchet.exampleInput);
