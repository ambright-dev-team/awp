import { AwpPoint } from "./AwpPoint.js";
export declare type AwpReferencePoint<POINT extends AwpPoint = AwpPoint> = {
    center: POINT;
    doDrill: number;
    isActive: number;
};
