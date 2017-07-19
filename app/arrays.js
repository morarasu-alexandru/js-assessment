exports = typeof window === 'undefined' ? global : window;

exports.arraysAnswers = {
	indexOf: function (arr, item) {
		return arr.indexOf(item);
	},
	sum: function (arr) {
		var sum = 0;
		arr.forEach(function (elem) {
			sum = sum + elem;
		});
		return sum;
	},

	remove: function (arr, item) {

		for (var i = arr.length - 1; i >= 0; i--) {
			if (arr[i] === item) {
				arr.splice(i, 1);
			}
		}
		return arr;

	},

	removeWithoutCopy: function (arr, item) {
		for (var i = arr.length - 1; i >= 0; i--) {
			if (arr[i] === item) {
				arr.splice(i, 1);
			}
		}
		return arr;

	},

	append: function (arr, item) {

		arr.push(item);
		return arr;
	},

	truncate: function (arr) {
	var last = _.last(arr);
	arr.pop(last);

	return arr;
	},

	prepend: function (arr, item) {
		arr.unshift(item);
		return arr;

	},

	curtail: function (arr) {
		var first = _.first(arr);
		arr.shift(first);

		return arr;

	},

	concat: function (arr1, arr2) {
		var result =  arr1.concat(arr2);

		return result;
	},

	insert: function (arr, item, index) {

	    arr.splice(index, 0, item);

        return arr;

	},

	count: function (arr, item) {
	    var count = 0;

	    arr.forEach(function (elem) {
           if (elem === item) { count ++ }
        });

        return count;
	},

	duplicates: function (arr) {

	},

	square: function (arr) {

	    var arr2=[];
        var c;

        for(i=0; i < arr.length; i++) {
            c = Math.pow(arr[i],2);
            arr2.push(c);
        }
        return arr2;
	},

	findAllOccurrences: function (arr, target) {
    var count = 0;

    for(  var i=0; i < arr.length; i++) {
        if(arr[i] == target) {
            count++
        }
    }

    return count;
	}
};
