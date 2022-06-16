/**
 *  only exist when a netplan was generated based on user input (Auto-Erzeugung -> Schaltplan erzeugen)
 */
export declare type OptionalNetlist = NetList | {};
export declare type NetList = {
    netlist: any[];
    circuitMapping: string[];
    circuitParameters: {
        ledCurrent: number;
        powerSupplyVoltage: number;
    };
};
