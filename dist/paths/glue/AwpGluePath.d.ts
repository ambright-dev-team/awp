import { AwpPathCommon } from "../AwpPathCommon";
import { AwpPoint } from "../../AwpPoint";
export declare type AwpGluePath<POINT extends AwpPoint = AwpPoint> = {
    pathType: "glue";
    glueGroup: string;
} & AwpPathCommon<POINT>;
