function confirmEnding(str, target) {
  var ending = target.length;
  console.log(ending);
  console.log(target);
  return str.substr(-ending) === target ? true : false;
}

confirmEnding("Bastian", "n");