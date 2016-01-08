(function () {
  var INDICATOR_OPT = {
    key: 'seconds',
    updateTime: 5,
    limit: 5
  };

  Polymer({
    is: 'seconds-indicator',
    listeners: {
      's-switch-btn.click': 'switchOn'
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
      function addLabels (o, i) { return ['Result ' + (i + 1), o.sec]; }

      this.classList.remove('loader');
      this.$['s-switch-btn'].style.opacity = 0;

      this.$.secondsChart.rows = payload.map(addLabels);
    }
  });
})();
