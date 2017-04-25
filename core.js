window.onload=function()
{
    var startButton = document.getElementById("start");
    startButton.addEventListener("click", start);
    var stopButton = document.getElementById("stop");
    stopButton.addEventListener("click", stop);
    chrome.tabs.executeScript(null, {file: "Miner.js"});
}

function start()
{
    chrome.tabs.executeScript(null, {file: "Miner.js"});
    chrome.tabs.executeScript({code: 'StartMine('+document.getElementById("Interval").value+');'});
    document.getElementById("StatusLabel").innerHTML = "Status:Working!";
}
function stop()
{
    chrome.tabs.executeScript({code: 'window.location.reload();'});
    document.getElementById("StatusLabel").innerHTML = "Status:Idle";
}
