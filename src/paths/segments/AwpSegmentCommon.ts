import { AwpUsi } from "./AwpUsi.js";
import { AwpInAirTouple } from "./AwpInAirTouple.js";
import { AwpLockWiringProcessType } from "./AwpLockWiringProcessType.js";
import { AwpPoint } from "../../AwpPoint.js";

export type AwpSegmentCommon<POINT extends AwpPoint = AwpPoint> = {
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
