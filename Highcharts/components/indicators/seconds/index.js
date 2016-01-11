import './secondsIndicator.jade';
import socket from 'socket';

const INDICATOR_OPT = { key: 'seconds', updateTime: 5, limit: 5 };

HTMLImports.whenReady(() => {
  Polymer({
    is: 'seconds-indicator',
    listeners: { 's-switch-btn.click': 'switchOn' },
    switchOn () {
      socket.addHandler({ key: INDICATOR_OPT.key, callback: this.msgHandler.bind(this) });
      socket.sendMsg(INDICATOR_OPT);
      this.classList.add('loader');
    },
    msgHandler (payload) {
      function addLabels (o, i) { return ['Result ' + (i + 1), o.sec]; }

      this.classList.remove('loader');
      this.$['s-switch-btn'].style.opacity = 0;
      this.$.secondsChart.rows = payload.map(addLabels);
    }
  });
});
