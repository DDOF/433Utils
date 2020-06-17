/**
 * 09/02/2020
 * @author Baudev
 */

const { spawn } = require('child_process');

export default class Transmitter {

    protected sniffer: any;
    protected pin: number;

    constructor(pin: number = 0) {
        if (!Number.isInteger(pin)) {
            throw Error("PIN must be an integer.");
        }
        // we check the validity of the PIN
        this.pin = pin;
    }

    /**0sudo  !
     * Sends the message
     * @param systemCode
     * @param unitCode
     * @param command Command is 0 for OFF and 1 for ON
     * @param pulseLength
     */
    send(systemCode: number, unitCode: number, command: number, pulseLength: number = 0): Promise<[number, number, number]> {
        this.sniffer = spawn(__dirname + '/../custom433Utils/customSend ', [systemCode, unitCode, command, pulseLength, this.pin], { shell: true });

        return new Promise((resolve => {
            this.sniffer.stdout.on('data', (data: string) => {
                // for each message sent
                let values = data.split(",");
                return resolve([Number(values[0]), Number(values[1]), Number(values[2])]);
            });
        }));
    }
    /**
     * Sends the message
     * @param decimalCode
     * @param protocol
     * @param pulseLength
     */
    codeSend(decimalCode: number, protocol: number, pulseLength: number = 0): Promise<[number]> {
        this.sniffer = spawn(__dirname + '/../custom433Utils/customCodeSend ', [decimalCode, this.pin, protocol, pulseLength], { shell: true });

        return new Promise((resolve => {
            this.sniffer.stdout.on('data', (data: number) => {
                return resolve([Number(data)]);
            });
        }));
    }
}