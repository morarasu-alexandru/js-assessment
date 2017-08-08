exports = typeof window === 'undefined' ? global : window;

exports.stringsAnswers = {
  reduceString: function(str, amount) {

  },

  wordWrap: function(str, cols) {

  },

  reverseString: function(str) {

	  var newstr = "";

	  for (i = str.length - 1; i >= 0; i--) {
		  newstr = newstr + str[i]
	  }
	  return newstr;
  }
};
