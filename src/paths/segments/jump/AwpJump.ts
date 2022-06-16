import { AwpUPI } from "./AwpUPI.js";
import { AwpSegmentCommon } from "../AwpSegmentCommon.js";
import { AwpPoint } from "../../../AwpPoint.js";

export type AwpJump<POINT extends AwpPoint = AwpPoint> = {
  segmentType: "jump";
  p1: POINT;
  p2: POINT;
  length?: number;
  rotation?: number;
  jumpsOverUPI: AwpUPI;
} & AwpSegmentCommon<POINT>;
