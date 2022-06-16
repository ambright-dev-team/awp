/**
 *  only exist when a netplan was generated based on user input (Auto-Erzeugung -> Schaltplan erzeugen)
 */
export type OptionalNetlist = NetList | {};

export type NetList = {
  netlist: any[];
  circuitMapping: string[];
  circuitParameters: {
    ledCurrent: number;
    powerSupplyVoltage: number;
  };
};
