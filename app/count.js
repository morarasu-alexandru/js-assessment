exports = typeof window === 'undefined' ? global : window;

exports.countAnswers = {
	count: function (start, end) {
		count = start;

		function counter() {
			setTimeout(function () {
				if (count < end) {
					return count;
					counter();
					count++
				}
			}, 100);
		}

		counter();

	}
};
