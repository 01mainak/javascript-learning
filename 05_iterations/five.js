const coding = ["js", "ruby", "java", "python", "cpp"];
// @audit 'for_each' is mostly used incase of ARRAYS
// @audit 'for_each' is mostly used incase of ARRAYS of OBEJCTS [{},{},{},{},{}]

// coding.forEach( function (val){
//     console.log(val);
// } )

// coding.forEach( (item) => {
//     console.log(item);
// } )

// function printMe(item){
//     console.log(item);
// }

// coding.forEach(printMe)
// @audit-info when we are passing a different funtion inplace of callback
// then we only have to give a reference 'printMe'✅ not execute the function 'printMe()'❎

// coding.forEach( (item, index, arr)=> {
//     console.log(item, index, arr);
// } )
// @audit actually 3 parameters come in for_each loop

// @audit-info array of objects 'for_each loop'
const myCoding = [
  {
    languageName: "javascript",
    languageFileName: "js",
  },
  {
    languageName: "java",
    languageFileName: "java",
  },
  {
    languageName: "python",
    languageFileName: "py",
  },
];

myCoding.forEach((item) => {
  console.log(item.languageName);
});
