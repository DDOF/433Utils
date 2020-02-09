const { spawn } = require( 'child_process' );

export default class Transmitter {

    protected sniffer: any;
    protected pin: number;
    protected systemCode: number;
    protected unitCode: number;
    protected pulseLength: number;
    protected command: number; // Command is 0 for OFF and 1 for ON


    constructor(systemCode: number, unitCode: number, command: number, pulseLength: number = 0, pin: number = 0) {
        this.pin = pin;
        this.systemCode = systemCode;
        this.unitCode = unitCode;
        this.command = command;
        this.pulseLength = pulseLength;

        // we check the validity of the PIN
        if(!Number.isInteger(this.pin)){
            throw Error("PIN must be an integer.");
        }
        this.sniffer = spawn(__dirname + '/../custom433Utils/customSend ', [ this.systemCode, this.unitCode, this.command, this.pulseLength, this.pin ]);
    }

    /**
     * For each data received
     * @param onSendListener
     */
    setOnSendListener(onSendListener: (systemCode: number, unitCode: number, command: number) => void) {
        this.sniffer.stdout.on( 'data', (data: string) => {
            // for each message sent
            let values = data.split(",");
            onSendListener(Number(values[0]), Number(values[1]), Number(values[2]));
        } );
    }

    /**
     * When the child process exited
     * @param onCloseListener
     */
    setOnCloseListener(onCloseListener: (code: number) => void) {
        this.sniffer.on( 'close', (code: number) => {
            return onCloseListener(code);
        } );
    }



}