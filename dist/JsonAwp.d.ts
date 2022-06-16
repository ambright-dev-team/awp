import { AwpPoint } from "./AwpPoint.js";
import { AwpCanvasItem } from "./canvas/AwpCanvasItem.js";
import { BaseJsonAwp } from "./BaseJsonAwp.js";
import { AwpWirePath } from "./paths/wire/AwpWirePath.js";
import { AwpGluePath } from "./paths/glue/AwpGluePath.js";
import { AwpBoard } from "./boards/AwpBoard.js";
export declare type JsonAwp<WIRE_PATH extends AwpWirePath = AwpWirePath, GLUE_PATH extends AwpGluePath = AwpGluePath, BOARD extends AwpBoard = AwpBoard, POINT extends AwpPoint = AwpPoint> = BaseJsonAwp<WIRE_PATH, GLUE_PATH, BOARD, POINT> & {
    BoardPosList?: {
        Points: POINT[];
        name: string;
        usedColor: string;
        type?: string;
        id?: number;
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
