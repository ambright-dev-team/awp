import { AwpBoard } from "./boards/AwpBoard";
import { AwpWirePath } from "./paths/wire/AwpWirePath";
import { AwpGluePath } from "./paths/glue/AwpGluePath";
import { JsonAwp } from "./JsonAwp";

export type StaticJsonAwp = JsonAwp<AwpWirePath, AwpGluePath, AwpBoard>;
