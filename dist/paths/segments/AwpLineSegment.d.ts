import { AwpSegmentCommon } from "./AwpSegmentCommon.js";
import { AwpPoint } from "../../AwpPoint.js";
export declare type AwpLineSegment<POINT extends AwpPoint = AwpPoint> = {
    segmentType: "line";
    p1: POINT;
    p2: POINT;
    length: number;
    rotation: number;
} & AwpSegmentCommon<POINT>;
