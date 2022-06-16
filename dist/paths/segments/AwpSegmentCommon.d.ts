import { AwpUsi } from "./AwpUsi";
import { AwpInAirTouple } from "./AwpInAirTouple";
import { AwpLockWiringProcessType } from "./AwpLockWiringProcessType";
import { AwpPoint } from "../../AwpPoint";
export declare type AwpSegmentCommon<POINT extends AwpPoint = AwpPoint> = {
    USI: AwpUsi;
    inAir?: AwpInAirTouple[];
    lockWiringProcess?: AwpLockWiringProcessType;
    UJEI?: {
        boardId: number;
        jumpId: number;
        padGroupId: number;
        padId: number;
        jumpSide: number;
    };
    corner?: POINT;
};
