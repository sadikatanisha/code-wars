function accum(s) {
	return s.split('').map((el,i)=>el.toUpperCase() + el.toLowerCase().repeat(i)).join("-")
}

function accum(str) {
	var letters = str.split('');
  var result = [];
  for (var i = 0; i < letters.length; i++) {
    result.push(letters[i].toUpperCase() + Array(i + 1).join(letters[i].toLowerCase()));
  }
  return result.join('-');
}