if(window.Worker) {
    console.log('Spawning worker.');
    var myWorker = new Worker("worker.js");

    myWorker.onmessage = function(e) {
        console.log('Worker Replyed.');

        document.getElementById("result").innerHTML = e.data;
    }

    myWorker.postMessage("Hello");
}
else {
    document.getElementById("result").innerHTML = "Sorry, your browser does not support Web Workers...";
}