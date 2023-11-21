// function checkName(name) {
//     if (name[0].toLowerCase() === "a") {
//         alert('good')
//     } else {
//         alert("bad")
//     }
// }
// checkName("alex")
// checkName("bob")
// checkName("safir")
// checkName("amir")



// 1 //
function isAdult(num) {
  if (num >= 18) {
    alert("Welcome!")
  } else if (num < 18 && num > 0) {
    alert("Get a hell!")
  } else {
    alert("Down, mf!")
  }
}
let age = prompt("Enter your age!")
isAdult(age)



// 2 //
function longestName(name1, name2, name3) {
  if (name1.length > name2.length && name1.length > name3.length) {
    console.log(name1);
  } else if (name2.length > name1.length && name2.length > name3.length) {
    console.log(name2);
  } else if (name3.length > name1.length && name3.length > name2.length) {
    console.log(name3);
  }
}
longestName('Alex', 'George', 'Michael')



// 3 //
function proportion(total, broken) {
  console.log("The persontage:", (broken * 100 / total).toFixed(2) + "%");
}
proportion(10000, 2500)



// extra task //
// function minNum(...nums) {
//   console.log(Math.min(...nums));
// }
// minNum(1, 2)