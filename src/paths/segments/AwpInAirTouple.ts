import { AwpPoint } from "../../AwpPoint";
import { AwpUsi } from "./AwpUsi";

export type AwpInAirTouple = {
  USI: AwpUsi;
  start: AwpPoint;
  end: AwpPoint;
};
