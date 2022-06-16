import { AwpSegmentCommon } from "./AwpSegmentCommon";
import { AwpPoint } from "../../AwpPoint";

export type AwpArcSegment<POINT extends AwpPoint = AwpPoint> = {
  segmentType: "curve";
  p1: POINT;
  p2: POINT;
  center: POINT;
  radius: number;
  angle: number;
} & AwpSegmentCommon<POINT>;
