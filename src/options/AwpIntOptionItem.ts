import { NumberString } from "../NumberString";

export type AwpIntOptionItem = {
  default: NumberString;
  descr: string;
  type: "int";
  value: NumberString;
  modified?: boolean;
  tooltip?: string;
};
