exports = typeof window === 'undefined' ? global : window;

exports.countAnswers = {
	count: function (start, end) {

	    var count = start;

        var b = setInterval(function(){

            if(count < end) {
                console.log(count);
                return count;
            } else if ( count >= end) {
                clearInterval(b);
            }
            count++;
        }, 100);


    }

};
