// PROMISES ---------------------------------
const helloPromise = () => {
  return new Promise( (resolve, reject) => {

    let randomBoolean = Math.random() > .5;

    if(randomBoolean) resolve('Hello!');
    else reject('Whoops!');

  });
}

helloPromise()
  .then(response => console.log(response))
  .catch(error => console.log(error));