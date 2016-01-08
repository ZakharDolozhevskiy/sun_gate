(function () {
  var INDICATOR_OPT = { key: 'ages', updateTime: 10 };

  Polymer({
    is: 'age-indicator',
    listeners: {
      'a-switch-btn.click': 'switchOn'
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
      this.$['a-switch-btn'].style.opacity = 0;
      this.$.ageChart.rows = payload.map((el) => [el._id, el.value]);
    }
  });
})();
