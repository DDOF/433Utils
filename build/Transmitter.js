"use strict";
/**
 * 09/02/2020
 * @author Baudev
 */
Object.defineProperty(exports, "__esModule", { value: true });
var spawn = require('child_process').spawn;
var Transmitter = /** @class */ (function () {
    function Transmitter(pin) {
        if (pin === void 0) { pin = 0; }
        if (!Number.isInteger(pin)) {
            throw Error("PIN must be an integer.");
        }
        // we check the validity of the PIN
        this.pin = pin;
    }
    /**
     * Sends the message
     * @param systemCode
     * @param unitCode
     * @param command Command is 0 for OFF and 1 for ON
     * @param pulseLength
     */
    Transmitter.prototype.send = function (systemCode, unitCode, command, pulseLength) {
        var _this = this;
        if (pulseLength === void 0) { pulseLength = 0; }
        this.sniffer = spawn(__dirname + '/../custom433Utils/customSend ', [systemCode, unitCode, command, pulseLength, this.pin]);
        return new Promise((function (resolve) {
            _this.sniffer.stdout.on('data', function (data) {
                // for each message sent
                var values = data.split(",");
                return resolve([Number(values[0]), Number(values[1]), Number(values[2])]);
            });
        }));
    };
    return Transmitter;
}());
exports.default = Transmitter;
