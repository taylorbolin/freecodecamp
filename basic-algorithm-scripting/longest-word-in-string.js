function findLongestWord(string) {
   var str = string.split(" ");
    var longest = 0;
    var word = null;
    str.forEach(function(str) {
        if (longest < str.length) {
            longest = str.length;
            word = str;
        }
    });
    return word.length;

}

findLongestWord("The quick brown fox jumped over the lazy dog");