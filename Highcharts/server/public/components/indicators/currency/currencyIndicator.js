(function () {
  var INDICATOR_OPT = { key: 'currencies', updateTime: 7 };

  Polymer({
    is: 'currency-indicator',
    listeners: {
      'c-switch-btn.click': 'switchOn'
    },
    switchOn: function () {
      window.socket.send(JSON.stringify(INDICATOR_OPT));
      window.socket.onmessage = this.dataHandler.bind(this);
      this.classList.add('loader');
    },
    dataHandler: function (msg) {
      var data = JSON.parse(msg.data);

      if (data.key !== INDICATOR_OPT.key) return;

      console.log(data);
    }
  });
})();
