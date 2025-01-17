let arr = [
  { id: 1, name: 'john', age: 18, profession: 'developer' },
  { id: 2, name: 'jack', age: 20, profession: 'developer' },
  { id: 3, name: 'karen', age: 19, profession: 'admin' },
];

// Don't worry about consoling these functions, they are already being called on the button clicks.
// Please don't change anything in the index.html file.

function PrintDeveloper() {
  //Write your code here , just console.log
  console.log(arr.filter((employee)=>
  employee.profession==='developer')
)
};

function addData() {
  //Write your code here, just console.log
  arr.push({
    id: 4, name: 'suzanne', age: 23 , profession: 'developer'
  });
  console.log(arr);
}

function removeAdmin() {
  //Write your code here, just console.log
  arr = arr.filter((employee)=> employee.profession!='admin')
  console.log(arr);
}

function concatenateArray() {
  //Write your code here, just console.log
  let concatenatedArray = [
    { id: 5, name: 'Kalim', age: 24, profession:'developer' },
    { id: 6, name: 'Shaikh', age: 23, profession: 'tech head' }
  ]

  arr = arr.concat(concatenatedArray);
  console.log(arr);
}

// Here is an example of how functions work,
// basically a function is a block of code which can directly access your 'arr' variable since arr is global.
// If I have a function called consoleArr(), that can directly access arr like this to console it.

function consoleArr() {
  console.log('Consoling Array Variable', arr);
  // Over here I can directly access the variable.
}
