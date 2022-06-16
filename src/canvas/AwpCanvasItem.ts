import { AwpShape } from "./shape/AwpShape";

export type AwpCanvasItem = {
  blocked: boolean;
  generated?: boolean;
  gluePath?: boolean;
  name: string;
  shape: AwpShape;
  shapeArea?: number;
  glueGroup?: "primary" | "secondary";
};
