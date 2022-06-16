import { AwpPoint } from "./AwpPoint";

export type AwpReferencePoint<POINT extends AwpPoint = AwpPoint> = {
  center: POINT;
  doDrill: number; // almost never used, so default doDrill=0
  isActive: number; // since we hardcode RefPlates manually, points are always active
};
