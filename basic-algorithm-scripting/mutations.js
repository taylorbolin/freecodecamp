function mutation(arr) {  
  var elem0 = arr[0].toLowerCase();
  var elem1 = arr[1].toLowerCase();

  for(var i = 0; i < elem1.length; i++){
    var check = elem0.indexOf(elem1[i]);
    if (check === -1){
      return false;
    }
  }
  return true;
}

mutation(['hello', 'hey']);  