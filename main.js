// let str = 'baghalipolo ba mohsen';
// let arr = str.split('');
// let newArray = [];
// console.log(arr);

// for (let i = 0; i < arr.length; i++) {
//      if(!(arr[i]=== 'a' || arr[i]=== 'e' || arr[i]=== 'o' || arr[i]=== 'u' || arr[i]=== 'i') ) {
//        newArray += arr[i];

//      }
// }
// console.log(newArray);

// function vowelSound(str) {
//      // let str = '';
// let arr = str.split('');
// let newArray = [];
// console.log(arr);

// for (let i = 0; i < arr.length; i++) {
//      if(!(arr[i]=== 'a' || arr[i]=== 'e' || arr[i]=== 'o' || arr[i]=== 'u' || arr[i]=== 'i') ) {
//        newArray += arr[i];

//      }
// }
// return newArray;
// }
// console.log(vowelSound('baghalipolo ba mohsen'));

// let arr = [0,1,2,3,4,5,1,2,3];

// function removeDuplicates(arr) {
//      // debugger
//      let unique = [];
//      for (i = 0; i < arr.length; i++) {
//    if (unique.indexOf(arr[i]) === -1) {
//        unique.push(arr[i]);

//       }
//     }

// return unique;
// }
// console.log(removeDuplicates(arr));
// console.log(arr.indexOf(5));
// const numbers = [1,2,3,4,5,2,2,2,2];
// function findDuplicates(array) {
//      const duplicates = [];

//      for (let i = 0; i < array.length; i++) {
//        for (let j = i + 1; j < array.length; j++) {
//          if (array[i] === array[j] && !duplicates.includes(array[i])) {
//            duplicates.push(array[i]);

//          }
//        }
//      }

//      return duplicates;
//    }
//    console.log(findDuplicates(numbers));

//  var arr = [100,100,200,200,200,300,300,300,400,400,400];
//  let counts = [];
//  let max = 0;
//  let result;
//  for (let i = 0; i <arr.length; i++ ) {
//    counts[arr[i]] = (counts[arr[i]] || 0) + 1;
//    if (counts[arr[i]] > max) {
//      max = counts[arr[i]];
//      result = arr[i];
//    }

//  }
//  console.log(result + " occurs " + counts[result] + " times");

//   let a = ['a','a','a','b','b','b','c','c','c'];

// function repetitiveItems(arr) {
//     // debugger
//     let max = 1;
//     let maxItem = [];
//     for (let i = 0; i < arr.length; i++) {
//       let count = 1;

//         for(let j = i + 1; j < arr.length; j++) {
//             if(arr[i] === arr[j]) {
//                 // mostRepetitive.push(arr[i]);
//                 count += 1;
//                 // max = count;
//             }
//         }
//         if (count >= max) {
//           max = count;
//           maxItem.push(arr[i]);
//         }
//     }
//     return (`${maxItem} is  ${max} times`);

// }
// let x = repetitiveItems(a);
// console.log(x);

//========================== object  call by reference =====================

// let user = {name:'John'};
// let admin = user;
// admin.name = 'Pete';
// console.log(user.name);

//========================== remove ========================
// let someArray = [
//   {name:"Kristian", lines:"2,5,10"},
//   {name:"John", lines:"1,19,26,96"},
//   {name:"Kristian", lines:"2,58,160"},
//   {name:"Felix", lines:"1,19,26,96"}
// ];

// someArray = someArray.filter(person => person.name != 'John');
// console.log(someArray);

//==============================array method slice ====================
// let arr = ["t", "e", "s", "t"];
// console.log(arr.slice(1,3));

// let arr = [1, 2];

// let arrayLike = {
//   0: "something",
//   length: 1
// };

// alert( arr.concat(arrayLike) );

// let arr = [1, 2];

// let arrayLike = {
//   [Symbol.isConcatSpreadable]: true,
//   0: "something",

//   1: "else",

//   length: 2,

// };

// console.log(arr.concat(arrayLike));

// ["Bilbo", "Gandalf", "Nazgul"].forEach(alert);

// ["Bilbo", "Gandalf", "Nazgul"].forEach((item, index, array) => {
//   alert(`${item} is at index ${index} in ${array}`);
// });

// let fruits = ['Apple', 'Orange', 'Apple','Apple','papaya','Orange']

// // alert( fruits.indexOf('Apple') ); // 0 (first Apple)
// console.log(fruits.lastIndexOf('Orange')); // 2 (last Apple)

// let users = [
//   {id: 1, name: "John"},
//   {id: 2, name: "Pete"},
//   {id: 3, name: "Mary"}
// ];

// let user = users.find(item => item.id == 1);

// alert(user.name); // John

// let codes = {
//   "+49": "Germany",
//   "+41": "Switzerland",
//   "+44": "Great Britain",
//   // ..,
//   "+1": "USA"
// };

// for (let code in codes) {
//  console.log(+code);// 49, 41, 44, 1
// }

// let array =[1,2,3,4,5];
// array[99] = 75;
// console.log(array.length);
// for (let index = 0; index < array.length; index++) {
//    console.log(array[index]);

// }

// document.getElementById('login').addEventListener('click', function() {
//   const email = document.getElementById('email').value;
//   const password = document.getElementById('password').value;
//   const message = document.getElementById('message');

//   if (email === '' || password.length < 8) {
//       message.textContent = 'Invalid email or password (must be at least 8 characters)';
//       return;
//   }

//   const loginData = {
//       email: email,
//       password: password
//   };

//   console.log(loginData);
//   message.textContent = '';

//   // Perform login logic here

// });

// let pageTitle = document.getElementById('page-title');
// let grayBoxes = document.getElementById('gray-boxes');
// let grayBox = document.getElementById('gray-box');
// console.log(pageTitle);
// console.log(pageTitle.innerHTML);
// console.log(grayBox.innerHTML);
// console.log(document.getElementsByTagName('div'));
// console.log(document.querySelectorAll('.header p'));

//=============================================
//=============================================
//=============================================
//=============================================
//=============================================
//=============================================
//=============================================
//=============================================
//================================================================   week 5 ========================================================

// function userRowGenerator2(user) {
//   return ` <tr>
//                 <td>${user.firstName}</td>
//                 <td>${user.lastName}</td>
//                 <td>${user.city}</td>
//                 <td>${user.position}</td>
//                 <td><button onclick ="removeUser('${user.uid}')">Delete</button></td>
//             </tr> `;
// }
// function removeUser(id){
// let index = users.findIndex((el)=> el.uid === Number(id));
// users.splice(index,1);
// render();

// }
// function render() {
//   let html = "";
//   for (const user of users) {
//     html += userRowGenerator2(user);
//   }
//   document.getElementById("table-body").innerHTML = html;
// }
// let users = [];
// function initialization() {
//   for (const pdata of personData) {
//     const apdata = additionalPersonData.find((el) => el.uid === pdata.uid);
//     users.push({ ...pdata, ...apdata });
//   }
//   render();
// }
// document.addEventListener("DOMContentLoaded", initialization);

//================================================================   week 6 ========================================================
// const user1 = prompt("Enter first user name");
// const user2 = prompt("Enter second user name");
// const container = document.querySelector(".container");

// const user1States = [];
// const user2States = [];
// const userSymbol = ["X", "O"];
// let turn = 0;
// let stopped = false;

// function checkWinner(states) {
//   if (states.length < 3) return false;

//   const rowsCount = {};
//   const columnsCount = {};
//   for (const s of states) {
//     if (!rowsCount[s.x]) {
//       rowsCount[s.x] = 1;
//     } else {
//       rowsCount[s.x] += 1;
//     }
//     if (!columnsCount[s.y]) {
//       columnsCount[s.y] = 1;
//     } else {
//       columnsCount[s.y] += 1;
//     }
//   }
//   if (
//     Object.values(rowsCount).includes(3) ||
//     Object.values(columnsCount).includes(3)
//   ) {
//     return true;
//   }

//   let crossCount = 0;
//   for (const s of states) {
//     if (s.x === s.y) {
//       crossCount++;
//     }
//   }
//   if (crossCount === 3) return true;

//   crossCount = 0;
//   for (const s of states) {
//     if (Number(s.x) + Number(s.y) === 4) {
//       crossCount++;
//     }
//   }

//   if (crossCount === 3) return true;

//   return false;
// }

// function result() {
//   const user1Winner = checkWinner(user1States);
//   const user2Winner = checkWinner(user2States);
//   if (user1Winner) {
//     stopped = true;
//     renderTurnMessage(`${user1} barande shoooooood`);
//   } else if (user2Winner) {
//     stopped = true;
//     renderTurnMessage(`${user2} barande shoooooood`);
//   }
// }

// function renderTurnMessage(message) {
//   document.getElementById("message").innerText = !!message
//     ? message
//     : `${turn === 0 ? user1 : user2}'s turn`;
// }
// renderTurnMessage();

// container.addEventListener("click", (event) => {
//   if (stopped) return;
//   if (!event.target.dataset.x || !event.target.dataset.y) return;
//   const symbol = userSymbol[turn];
//   const states = [...user1States, ...user2States];
//   const exist = states.find(
//     (el) =>
//       Number(el.x) === Number(event.target.dataset.x) &&
//       Number(el.y) === Number(event.target.dataset.y)
//   );
//   if (!!exist) return;
//   if (turn === 0) {
//     user1States.push(event.target.dataset);
//     turn = 1;
//   } else {
//     user2States.push(event.target.dataset);
//     turn = 0;
//   }
//   event.target.innerHTML = `<p class="xo">${symbol}</p>`;
//   renderTurnMessage();
//   result();
// });

// // console.log(document.querySelector(".cell").dataset);
//================================================  week 6 myself ====================================================
// const user1 = prompt("Enter first name player :");
// const user2 = prompt("Enter second name player :");
// const container = document.querySelector(".container");

// const user1States = [];
// const user2States = [];
// const userSymbol = ["X", "O"];
// let turn = 0;
// let stopped = false;

// function checkWinner(states) {
//   if (states.length < 3) return false;
//   const rowsCount = {};
//   const columnsCount = {};
//   for (const s of states) {
//     if (!rowsCount[s.x]) {
//       rowsCount[s.x] = 1;
//     } else {
//       rowsCount[s.x] += 1;
//     }
//     if (!columnsCount[s.y]) {
//       columnsCount[s.y] = 1;
//     } else {
//       columnsCount[s.y] += 1;
//     }
//   }
//   if (
//     Object.values(rowsCount).includes(3) ||
//     Object.values(columnsCount).includes(3)
//   )
//     return true;

//   let crossCount = 0;
//   for (const s of states) {
//     if (s.x === s.y) {
//       crossCount++;
//     }
//   }
//   if (crossCount === 3) return true;

//   crossCount = 0;
//   for (const s of states) {
//     if (Number(s.x) + Number(s.y) === 4) {
//       crossCount++;
//     }
//   }
//   if (crossCount === 3) return true;

//   return false;
// }

// function result() {
//   const user1Winner = checkWinner(user1States);
//   const user2Winner = checkWinner(user2States);
//   if (user1Winner) {
//     stopped = true;
//     renderTurnMessage(`${user1} is winner`);
//   } else if (user2Winner) {
//     stopped = true;
//     renderTurnMessage(`${user2} is winner`);
//   }
// }

// function renderTurnMessage(message) {
//   document.getElementById("message").innerHTML = !!message
//     ? message
//     : `${turn === 0 ? user1 : user2}'s turn`;
// }
// renderTurnMessage();

// container.addEventListener("click", (event) => {
//   if (stopped) return;
//   if (!event.target.dataset.x || !event.target.dataset.y) return;
//   const symbol = userSymbol[turn];
//   const states = [...user1States, ...user2States];
//   const exist = states.find(
//     (el) => el.x === event.target.dataset.x &&
//             el.y === event.target.dataset.y
//             );
//   if (!!exist) return;
//   if (turn === 0) {
//     user1States.push(event.target.dataset);
//     turn = 1;
//   } else {
//     user2States.push(event.target.dataset);
//     turn = 0;
//   }
//   event.target.innerHTML = `<p class= "xo">${symbol}</p>`;
//   renderTurnMessage();
//   result();
// });
//==============================================================  week 7  mouse event  in class   =============================================

// function checkAge(key) {
//   // console.log(key);
//   return Number(key) > 0 && Number(key) < 9;
// }
// document.getElementById("username-inp").addEventListener("keyup", onKeyUp);
// document.getElementById("username-inp").addEventListener("keydown", onKeyDown);
// document.getElementById("username-inp").addEventListener("keypress", onPress);
// document.getElementById("username-inp").addEventListener("change", onChange);
// document.getElementById("username-inp").addEventListener("blur", onBlur);
// document.getElementById("username-inp").addEventListener("focus", onfocus);

// function onfocus() {
//   console.log("focus");
// }

// function onBlur() {
//   console.log("blur");
// }

// function onChange(event) {
//   console.log("change", event.target.value);
// }

// function onPress(event) {
//   console.log("onPress", event.target.value);
// }
// function onKeyDown(event) {
//   console.log("keydown", event.target.value);
// }
// function onKeyUp(event) {
//   console.log("keyup", event.target.value);
// }
//====================================================== week 7-thursday -XHR ========================================
// const responseBody = `{"page":1,"per_page":6,"total":12,"total_pages":2,"data":
// [{"id":1,"email":"george.bluth@reqres.in","first_name":"George","last_name":"Bluth","avatar":"https://reqres.in/img/faces/1-image.jpg"},
// {"id":2,"email":"janet.weaver@reqres.in","first_name":"Janet","last_name":"Weaver","avatar":"https://reqres.in/img/faces/2-image.jpg"},
// {"id":3,"email":"emma.wong@reqres.in","first_name":"Emma","last_name":"Wong","avatar":"https://reqres.in/img/faces/3-image.jpg"},
// {"id":4,"email":"eve.holt@reqres.in","first_name":"Eve","last_name":"Holt","avatar":"https://reqres.in/img/faces/4-image.jpg"},
// {"id":5,"email":"charles.morris@reqres.in","first_name":"Charles","last_name":"Morris","avatar":"https://reqres.in/img/faces/5-image.jpg"},
// {"id":6,"email":"tracey.ramos@reqres.in","first_name":"Tracey","last_name":"Ramos","avatar":"https://reqres.in/img/faces/6-image.jpg"}],
// "support":{"url":"https://reqres.in/#support-heading","text":"To keep ReqRes free, contributions towards server costs are appreciated!"}}`;

// console.log(responseBody);
// const data = JSON.parse(responseBody);
// console.log(data);
// console.log(data);

// const person = {name: 'ali'}
// const personJson = JSON.stringify(person);
// console.log( typeof personJson);

//============== Factory function =====
// function Book(name,isbn) {
//   return {name,isbn};
// }
// console.log(Book("Grapes of anger",123456));

//============== constructor =====
// function Book2(_name,_isbn) {
//   this.name = _name;
//   this.isbn = _isbn;
// }
// console.log( new Book2("Secret Garden",111222));

//------------------------------------xhr
// const root = document.getElementById("root");

// function Card({ first_name, last_name, email, avatar }) {
//   return `<div class="card">
//     <p>${first_name} ${last_name}</p>
//     <p>${email}</p>
//     <img
//       alt="User Avatar"
//       src="${avatar}"
//     />
//   </div>`;
// }

// function render(usersList) {
//   let html = "";
//   for (const user of usersList) {
//     html += Card(user);
//   }
//   root.innerHTML = html;
// }

// const xhttp = new XMLHttpRequest();
// xhttp.onreadystatechange = function () {
//   if (this.readyState === 4 && this.status === 200) {
//     const responseBody = JSON.parse(this.responseText);
//     render(responseBody.data);

//     // ======== deconstruction, destruction: start ========
//     // const user1 = responseBody.data[0];
//     // console.log(user1);
//     // const {first_name: firstName, last_name: lastName} = user1;
//     // console.log(firstName, lastName);
//     // ======== deconstruction, destruction: end ========
//   } else if (this.readyState === 4) {
//     console.log("Something went wrong");
//   }
// };
// xhttp.open("GET", "https://reqres.in/api/users", true);
// xhttp.send();



// ============================================ week 7-friday ===================================
// function greeting() {
//   console.log("salam");
// greeting2();
// }
// // debugger
// function greeting2() {
//   console.log("salam22");

// }
// setTimeout(() => {
//   console.log("ok");
// },2000);

// setTimeout(() => {
//   console.log("ok2");
// },2000);

// greeting();


//====================Async function
// function resolveAfter2Seconds() {
//   return new Promise((resolve) => {
//     setTimeout(() => {
//       resolve('resolved');
//     }, 2000);
//   });
// }

// async function asyncCall() {
//   const result = await resolveAfter2Seconds();
//   console.log('calling');
//   // const result = await resolveAfter2Seconds();
//   console.log(result);
//   // Expected output: "resolved"
// }

// asyncCall();
// let x = Math.ceil(Math.random()*10);
// if(x < 0 || x > 6) {
//   return x;
// }
console.log(x);
