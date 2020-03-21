/**
 * 09/02/2020
 * @author Baudev
 */
export default class Receiver {
    protected sniffer: any;
    protected pin: number;
    constructor(pin?: number);
    /**
     * For each data received
     * @param onReceiveListener
     */
    setOnReceiveListener(onReceiveListener: (data: number) => void): void;
    /**
     * When the child process exited
     * @param onCloseListener
     */
    setOnCloseListener(onCloseListener: (code: number) => void): void;
}
