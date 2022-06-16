import { AwpPoint } from "./AwpPoint";
export declare type AwpReferencePoint<POINT extends AwpPoint = AwpPoint> = {
    center: POINT;
    doDrill: number;
    isActive: number;
};
