const { spawn } = require( 'child_process' );

export default class Receiver {

    protected sniffer: any;
    protected pin: number;

    constructor(pin: number) {
        this.pin = pin;
        if(!Number.isInteger(this.pin)){
            throw Error("PIN must be an integer.");
        }
        this.sniffer = spawn('./../custom433Utils/customRFSniffer ' + this.pin);
    }

    /**
     * For each data received
     * @param listener
     */
    onReceive(listener: (data: number) => {}) {
        this.sniffer.stdout.on( 'data', (data: number) => {
            // for each message received
            listener(data);
        } );
    }

    /**
     * When the child process exited
     * @param listener
     */
    onClose(listener: (code: number) => {}) {
        this.sniffer.on( 'close', (code: number) => {
            return listener(code);
        } );
    }



}