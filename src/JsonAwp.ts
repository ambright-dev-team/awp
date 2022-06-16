import { AwpPoint } from "./AwpPoint";
import { AwpCanvasItem } from "./canvas/AwpCanvasItem";
import { BaseJsonAwp } from "./BaseJsonAwp";
import { AwpWirePath } from "./paths/wire/AwpWirePath";
import { AwpGluePath } from "./paths/glue/AwpGluePath";
import { AwpBoard } from "./boards/AwpBoard";

export type JsonAwp<
  WIRE_PATH extends AwpWirePath = AwpWirePath,
  GLUE_PATH extends AwpGluePath = AwpGluePath,
  BOARD extends AwpBoard = AwpBoard,
  POINT extends AwpPoint = AwpPoint
> = BaseJsonAwp<WIRE_PATH, GLUE_PATH, BOARD, POINT> & {
  BoardPosList?: {
    Points: POINT[];
    name: string;
    usedColor: string;
    type?: string; //if you do not select any boards during importing, you will still have the other values but not this
    id?: number; //if you do not select any boards during importing, you will still have the other values but not this
  }[];
  error: any[];
  FrontendMetaData: {
    generatedGluePaths?: AwpCanvasItem[];
  };
  /**
   * @deprecated legacy should also be removed
   */
  modded?: any;
  project_size?: POINT;

  /**
   * @deprecated
   * Data for the ruler tool
   */
  currentGraphTool?: {
    startPoint: POINT;
    currCursorPoint: POINT;
    type: "measurement";
  };
};
