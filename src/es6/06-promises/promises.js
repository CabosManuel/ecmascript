// PROMISES ---------------------------------
const helloPromise = () => {
  return new Promise( (resolve, reject) => {

    let testBoolean = Math.random() > .5;

    if(testBoolean) resolve('Hello!');
    else reject('Whoops!');

  });
}

helloPromise()
  .then(response => console.log(response))
  .catch(error => console.log(error));