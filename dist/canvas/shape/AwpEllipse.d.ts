import { AwpPoint } from "../../AwpPoint";
export declare type AwpEllipse = {
    rx: number;
    ry: number;
    center: AwpPoint;
    /**
     * @deprecated The rotation should not be used
     */
    rotation?: number;
};
