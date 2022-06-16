import { AwpPoint } from "../AwpPoint.js";
import { AwpBoardType } from "./AwpBoardType.js";

export type AwpBoard<POINT extends AwpPoint = AwpPoint> = {
  /**
   * The unique id in the awp project, usually a number starting from 0
   */
  id: number;

  /**
   * For led26 the boardType is led
   */
  boardType: AwpBoardType;
  /**
   * For led26 the typeId is 26
   */
  typeId: number;

  rotationCenter: POINT;

  /**
   * degrees
   * In campp gui sieht man 10, in jsonAWP steht -10! :facepalm:
   */
  rotation: number;

  /**
   * only LED boards have this (not even experimental), and its true by default
   */
  isReferenceLed?: number;

  doMark: number;

  doWeld: number;

  group?: number;
};
