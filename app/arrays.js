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
		return concat(arr1, arr2);
	},

	insert: function (arr, item, index) {

	},

	count: function (arr, item) {

	},

	duplicates: function (arr) {

	},

	square: function (arr) {

	},

	findAllOccurrences: function (arr, target) {

	}
};
