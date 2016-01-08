(function () {
  var INDICATOR_OPT = { key: 'genders', updateTime: 5 };

  Polymer({
    is: 'gender-indicator',
    listeners: {
      'g-switch-btn.click': 'switchOn'
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
      var total = payload[0][1] + payload[1][1];

      this.classList.remove('loader');
      this.$['g-switch-btn'].style.opacity = 0;

      this.$.genderChart.rows = payload.map(function (data) {
        // convert to %
        data[1] = +(data[1] / total).toFixed(2);
        return data;
      });
    }
  });
})();
