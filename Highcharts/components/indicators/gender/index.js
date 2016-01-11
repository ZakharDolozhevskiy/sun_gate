import './genderIndicator.jade';
import socket from 'socket';

const INDICATOR_OPT = { key: 'genders', updateTime: 5 };

HTMLImports.whenReady(() => {
  Polymer({
    is: 'gender-indicator',
    listeners: {
      'g-switch-btn.click': 'switchOn'
    },
    switchOn () {
      socket.addHandler({ key: INDICATOR_OPT.key, callback: this.msgHandler.bind(this) });
      socket.sendMsg(INDICATOR_OPT);
      this.classList.add('loader');
    },
    msgHandler (payload) {
      const total = payload[0][1] + payload[1][1];

      this.classList.remove('loader');
      this.$['g-switch-btn'].style.opacity = 0;

      this.$.genderChart.rows = payload.map((data) => {
        // convert to %
        data[1] = +(data[1] / total).toFixed(2);
        return data;
      });
    }
  });
});
