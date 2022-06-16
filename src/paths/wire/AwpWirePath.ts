import { AwpPathCommon } from "../AwpPathCommon";
import { AwpPoint } from "../../AwpPoint";

export type AwpWirePath<POINT extends AwpPoint = AwpPoint> = {
  pathType: "wire";
} & AwpPathCommon<POINT>;
