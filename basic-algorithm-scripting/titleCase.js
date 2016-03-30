function titleCase(str) {
  var string = str.toLowerCase().split(' ');
  var arr = [];
  for (var i = 0; i < string.length; i++) {
    var word = string[i].charAt(0).toUpperCase()+string[i].substring(1);
    arr.push(word);
  }
  return arr.join(' ');
}

titleCase("I'm a little tea pot");