(function () {
  var INDICATOR_OPT = { key: 'ages', updateTime: 10 };

  Polymer({
    is: 'age-indicator',
    listeners: {
      'a-switch-btn.click': 'switchOn'
    },
    switchOn: function () {
      window.socket.send(JSON.stringify(INDICATOR_OPT));
      window.socket.onmessage = this.dataHandler.bind(this);
      this.classList.add('loader');
    },
    dataHandler: function (msg) {
      var data = JSON.parse(msg.data);

      if (data.key !== INDICATOR_OPT.key) return;

      this.classList.remove('loader');
      this.$['a-switch-btn'].style.opacity = 0;
      this.$.chart.rows = data.payload.map((el) => [el._id, el.value]);
    }
  });
})();
