REM =/*

echo "TODO: find node.js and fire it up" 



: ' */0

function detectAndRun() {
  if (typeof module !== "undefined" && module
    && typeof process !== "undefined" && process
    && typeof console !== "undefined" && console && typeof console.log === "function") {
    startNode();
  }
  else if (typeof WScript !== "undefined" && WScript) {
    startWSH();
  }
}

function startNode() {
  console.log("node " + process.version + " on " + process.platform);
}

function startWSH() {
  WScript.Echo("WScript start! ");
}

detectAndRun();

// '