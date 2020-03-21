/**
 * 09/02/2020
 * @author Baudev
 */
export default class Transmitter {
    protected sniffer: any;
    protected pin: number;
    constructor(pin?: number);
    /**
     * Sends the message
     * @param systemCode
     * @param unitCode
     * @param command Command is 0 for OFF and 1 for ON
     * @param pulseLength
     */
    send(systemCode: number, unitCode: number, command: number, pulseLength?: number): Promise<[number, number, number]>;
}
