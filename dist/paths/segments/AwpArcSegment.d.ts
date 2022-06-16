import { AwpSegmentCommon } from "./AwpSegmentCommon.js";
import { AwpPoint } from "../../AwpPoint.js";
export declare type AwpArcSegment<POINT extends AwpPoint = AwpPoint> = {
    segmentType: "curve";
    p1: POINT;
    p2: POINT;
    center: POINT;
    radius: number;
    angle: number;
} & AwpSegmentCommon<POINT>;
