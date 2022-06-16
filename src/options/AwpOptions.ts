import { AwpTextOptionItem } from "./AwpTextOptionItem";
import { AwpIntOptionItem } from "./AwpIntOptionItem";
import { AwpBoolOptionItem } from "../AwpBoolOptionItem";
import { AwpFloatOptionItem } from "./AwpFloatOptionItem";

export type AwpOptions = {
  autoRouting: {
    descr: string;
    items: {
      normMatrix: AwpTextOptionItem;
      referenceCorner: AwpIntOptionItem;
    };
  };
  milling: {
    descr: string;
    items: {
      mirrorMillingSVG: AwpBoolOptionItem;
      wireGrooveExtensionDistance: AwpFloatOptionItem;
    };
  };
  stapling: {
    descr: string;
    items: {
      stapleLength: AwpFloatOptionItem;
      staplingEnabled: AwpBoolOptionItem;
      wireHopMaximumHoppingDistance: AwpFloatOptionItem;
      wireHopMinimumCurveLength: AwpFloatOptionItem;
      wireHopMinimumHoppingDistance: AwpFloatOptionItem;
    };
  };
  wireHop: {
    descr: string;
    items: {
      wireHopEnabled: AwpBoolOptionItem;
      wireHopMaxDistance: AwpFloatOptionItem;
      wireHopMinPlaceLength: AwpFloatOptionItem;
    };
  };
  wireSquashing: {
    descr: string;
    items: {
      squashAfterDistance: AwpFloatOptionItem;
      squashBeforeDistance: AwpFloatOptionItem;
    };
  };
};
