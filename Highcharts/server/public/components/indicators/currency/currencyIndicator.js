(function () {
  var INDICATOR_OPT = { key: 'currencies', updateTime: 7 };

  Polymer({
    is: 'currency-indicator',
    listeners: {
      'c-switch-btn.click': 'switchOn'
    },
    switchOn: function () {
      this.classList.add('loader');

      window.socket.addHandler({
        key: INDICATOR_OPT.key,
        callback: this.msgHandler.bind(this)
      });

      window.socket.sendMsg(INDICATOR_OPT);
    },
    msgHandler: function (payload) {
      this.classList.remove('loader');
      this.$.currencyChart.rows = payload;
      this.$['c-switch-btn'].style.opacity = 0;
    }
  });
})();
