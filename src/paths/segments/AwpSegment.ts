import { AwpArcSegment } from "./AwpArcSegment.js";
import { AwpLineSegment } from "./AwpLineSegment.js";
import { AwpJump } from "./jump/AwpJump.js";
import { AwpPoint } from "../../AwpPoint.js";

export type AwpSegment<POINT extends AwpPoint = AwpPoint> =
  | AwpArcSegment<POINT>
  | AwpLineSegment<POINT>
  | AwpJump<POINT>;
