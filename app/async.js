exports = typeof window === 'undefined' ? global : window;

exports.asyncAnswers = {
  async: function(value) {

    return value;

  },

  manipulateRemoteData: function(url) {

    return url.body.value;

  }
};
