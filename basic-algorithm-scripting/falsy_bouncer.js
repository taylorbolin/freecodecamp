function bouncer(arr) {  
  var filtered = arr.filter(beatIt);
  return filtered;

  function beatIt(value){
    return Boolean(value);
  }
}
bouncer([7, 'ate', '', false, 9]);