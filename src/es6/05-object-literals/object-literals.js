// enhanced object literals ----------------
function newUser(uId, user, age, country) {
  return {
    user,     // es6
    age,      // es6
    country,  // es6
    id: uId   // sin es6
  }
}

console.log(newUser(6, 'kboss', 22, 'PE'));