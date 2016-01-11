import './currencyIndicator.jade';
import socket from 'socket';

const INDICATOR_OPT = { key: 'currencies', updateTime: 7 };

HTMLImports.whenReady(() => {
  Polymer({
    is: 'currency-indicator',
    listeners: { 'c-switch-btn.click': 'switchOn' },
    switchOn () {
      socket.addHandler({ key: INDICATOR_OPT.key, callback: this.msgHandler.bind(this) });
      socket.sendMsg(INDICATOR_OPT);

      this.classList.add('loader');
    },
    msgHandler (payload) {
      this.$['c-switch-btn'].style.opacity = 0;
      this.classList.remove('loader');

      this.$.currencyChart.rows = payload;
    }
  });
});
