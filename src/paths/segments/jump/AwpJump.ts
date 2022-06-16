import { AwpUPI } from "./AwpUPI";
import { AwpSegmentCommon } from "../AwpSegmentCommon";
import { AwpPoint } from "../../../AwpPoint";

export type AwpJump<POINT extends AwpPoint = AwpPoint> = {
  segmentType: "jump";
  p1: POINT;
  p2: POINT;
  length?: number;
  rotation?: number;
  jumpsOverUPI: AwpUPI;
} & AwpSegmentCommon<POINT>;
