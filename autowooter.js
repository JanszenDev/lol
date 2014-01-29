(function() {

  var wootButton = document.getElementById("woot");
  var mehButton = document.getElementById("meh");

  hook = function(apiEvent, callback) {
    return API.on(apiEvent, callback);
  };

  djAdvanceEvent = function(data)
  {
    var rand = Math.ceil(Math.random() * 20);
    var wait = rand * 1000;
    setTimeout(function() {
      wootButton.click();
    }, wait);
  };

  apiHooks = [
    {
      'event': API.DJ_ADVANCE,
      'callback': djAdvanceEvent
    }
  ];

  initHooks = function() {
    var pair, _i, _len, _results;
    _results = [];
    for (_i = 0, _len = apiHooks.length; _i < _len; _i++) {
      pair = apiHooks[_i];
      _results.push(hook(pair['event'], pair['callback']));
    }
    return _results;
  };

  initialize = function() {
    initHooks();
    wootButton.click();
    API.sendChat("/Official FrozenFlake Autowooter!/");
  };

  initialize();

}).call(this);
