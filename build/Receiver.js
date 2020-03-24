"use strict";
/**
 * 09/02/2020
 * @author Baudev
 */
Object.defineProperty(exports, "__esModule", { value: true });
var spawn = require('child_process').spawn;
var Receiver = /** @class */ (function () {
    function Receiver(pin) {
        if (pin === void 0) { pin = 0; }
        this.pin = pin;
        // we check the validity of the PIN
        if (!Number.isInteger(this.pin)) {
            throw Error("PIN must be an integer.");
        }
        this.sniffer = spawn(__dirname + '/../custom433Utils/customRFSniffer ', [this.pin], { shell: true });
    }
    /**
     * For each data received
     * @param onReceiveListener
     */
    Receiver.prototype.setOnReceiveListener = function (onReceiveListener) {
        this.sniffer.stdout.on('data', function (data) {
            // for each message received
            onReceiveListener(Number(data));
        });
    };
    /**
     * When the child process exited
     * @param onCloseListener
     */
    Receiver.prototype.setOnCloseListener = function (onCloseListener) {
        this.sniffer.on('close', function (code) {
            return onCloseListener(code);
        });
    };
    return Receiver;
}());
exports.default = Receiver;
