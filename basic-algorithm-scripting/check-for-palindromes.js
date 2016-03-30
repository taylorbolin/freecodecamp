function palindrome(str) {
  var clean = str.replace(/[^A-Za-z0-9]/g, '').toLowerCase();
  var reverse = clean.split("").reverse().join("");
    return clean === reverse ? true : false; 
}

   



palindrome("almostomla");