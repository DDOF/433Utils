/**
 * 09/02/2020
 * @author Baudev
 */

const { spawn } = require( 'child_process' );

export default class Receiver {

    protected sniffer: any;
    protected pin: number;

    constructor(pin: number = 0) {
        this.pin = pin;
        // we check the validity of the PIN
        if(!Number.isInteger(this.pin)){
            throw Error("PIN must be an integer.");
        }
        this.sniffer = spawn(__dirname + '/../custom433Utils/customRFSniffer ', [ this.pin ], { shell: true });
    }

    /**
     * For each data received
     * @param onReceiveListener
     */
    setOnReceiveListener(onReceiveListener: (data: number) => void) {
        this.sniffer.stdout.on( 'data', (data: number) => {
            // for each message received
            onReceiveListener(Number(data));
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