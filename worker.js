onmessage = function(e) {

    console.log('Message received from main script. Replying');

    postMessage("Worked");
}