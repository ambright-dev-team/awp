import { AwpPoint } from "../../AwpPoint.js";
import { AwpUsi } from "./AwpUsi.js";

export type AwpInAirTouple = {
  USI: AwpUsi;
  start: AwpPoint;
  end: AwpPoint;
};
