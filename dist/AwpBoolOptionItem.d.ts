import { BoolString } from "./BoolString.js";
export declare type AwpBoolOptionItem = {
    default: BoolString;
    descr: string;
    type: "bool";
    value: BoolString;
    modified?: boolean;
    tooltip?: string;
};
