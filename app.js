function add(a, b) { return a + b; }

function login(username, password) {
  if (username === 'admin' && password === '1234') {
    return 'Login Successful';
  }
  return 'Invalid Credentials';
}

module.exports = { add, login };
