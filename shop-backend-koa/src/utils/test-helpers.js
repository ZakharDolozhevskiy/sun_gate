module.exports.getRandomUser = () => {
  const testUserName = `testUser${Math.random()}`;
  return {
    email:           `${testUserName}@test.com`,
    username:        testUserName,
    password:        '12345678',
    passwordConfirm: '12345678'
  };
};
