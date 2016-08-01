if (process.env.NODE_ENV === 'development') {
  const chai           = require('chai');
  const chaiAsPromised = require('chai-as-promised');

  chai.use(chaiAsPromised);
  chai.should();
}
