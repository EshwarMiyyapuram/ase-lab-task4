const { add, login } = require('./app');

test('adds 1 + 2 to equal 3', () => {
  expect(add(1, 2)).toBe(3);
});

test('login successful with valid credentials', () => {
  expect(login('admin', '1234')).toBe('Login Successful');
});
