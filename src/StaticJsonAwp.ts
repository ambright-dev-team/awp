import { AwpBoard } from "./boards/AwpBoard.js";
import { AwpWirePath } from "./paths/wire/AwpWirePath.js";
import { AwpGluePath } from "./paths/glue/AwpGluePath.js";
import { JsonAwp } from "./JsonAwp.js";

export type StaticJsonAwp = JsonAwp<AwpWirePath, AwpGluePath, AwpBoard>;
