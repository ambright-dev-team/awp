import { AwpPoint } from "./AwpPoint.js";
import { AwpReferencePoint } from "./AwpReferencePoint.js";
import { AwpCanvasItem } from "./canvas/AwpCanvasItem.js";
import { AwpOptions } from "./options/AwpOptions.js";
import { OptionalNetlist } from "./OptionalNetlist.js";
import { AwpWirePath } from "./paths/wire/AwpWirePath.js";
import { AwpGluePath } from "./paths/glue/AwpGluePath.js";
import { AwpBoard } from "./boards/AwpBoard.js";

export type BaseJsonAwp<
  WIRE_PATH extends AwpWirePath = AwpWirePath,
  GLUE_PATH extends AwpGluePath = AwpGluePath,
  BOARD extends AwpBoard = AwpBoard,
  POINT extends AwpPoint = AwpPoint
> = {
  biggestPoint: POINT;
  board: BOARD[];
  referencePoint: AwpReferencePoint<POINT>[];
  canvas: AwpCanvasItem[];
  gluingPlan?: GLUE_PATH[];
  wiringPlan: WIRE_PATH[];
  materialId: number;

  /**
   * these only exist after a fullcheck and derive from the materialconfig settings
   * can differ form the materialconfig as values can be set in the campp-project-editor
   */
  options?: AwpOptions;

  side: string;
  version: {
    AWPJsonVersion?: string;
    backendVersion: string;
    boardConfigFile: string;
    json: string;
    materialConfigFile: string;
  };
} & OptionalNetlist;
