(function(){ x = document.getElementById("browser"); x.innerText = 'browserNameHere'; delete(x); })();

checkExist = setInterval(function() {
  if ($('#browser').length) {
    console.log("Exists!");
    clearInterval(checkExist);
    delete(checkExist);
  } else {
    // Do this if it doesn't exist
    
  }
}, 1000); // check every 1000ms (1 second)
