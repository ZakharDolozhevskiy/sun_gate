import './ageIndicator.jade';

import socket from 'socket';

const INDICATOR_OPT = { key: 'ages', updateTime: 10 };

HTMLImports.whenReady(() => {
  Polymer({
    is: 'age-indicator',
    listeners: {
      'a-switch-btn.click': 'switchOn'
    },
    switchOn () {
      this.classList.add('loader');

      socket.addHandler({
        key: INDICATOR_OPT.key,
        callback: this.msgHandler.bind(this)
      });

      socket.sendMsg(INDICATOR_OPT);
    },
    msgHandler (payload) {
      this.classList.remove('loader');
      this.$['a-switch-btn'].style.opacity = 0;

      this.$.ageChart.rows = payload.map((el) => [el._id, el.value]);
    }
  });
});
