/**
 * This file is an example.
 * 09/02/2020
 * @author Baudev
 */

import Receiver from "./src/Receiver";

console.log("Listening of PIN 0");

let receiver = new Receiver(0);
receiver.setOnReceiveListener((data) => {
    // handle data value
    console.log(data);
});