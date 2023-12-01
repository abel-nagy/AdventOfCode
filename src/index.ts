import * as fs from "fs";
import { Trebuchet } from "./2023/Day 1/trebuchet";

function importInputFile(path: string) {
	return fs.readFileSync(path, "utf-8");
}

const trebuchet = new Trebuchet();
trebuchet.run(trebuchet.exampleInput);
trebuchet.run(importInputFile(trebuchet.inputPath));
