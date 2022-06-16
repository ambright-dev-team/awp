import { AwpArcSegment } from "./AwpArcSegment";
import { AwpLineSegment } from "./AwpLineSegment";
import { AwpJump } from "./jump/AwpJump";
import { AwpPoint } from "../../AwpPoint";
export declare type AwpSegment<POINT extends AwpPoint = AwpPoint> = AwpArcSegment<POINT> | AwpLineSegment<POINT> | AwpJump<POINT>;
