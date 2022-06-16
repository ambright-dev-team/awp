import { NumberString } from "../NumberString";

export type AwpFloatOptionItem = {
  default: NumberString;
  descr: string;
  type: "float";
  value: NumberString;
  modified?: boolean;
  tooltip?: string;
};
