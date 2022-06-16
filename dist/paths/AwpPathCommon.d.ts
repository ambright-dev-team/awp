import { AwpSegment } from "./segments/AwpSegment";
import { AwpPoint } from "../AwpPoint";
export declare type AwpPathCommon<POINT extends AwpPoint = AwpPoint> = {
    segment: AwpSegment<POINT>[];
    id: number | undefined;
};
