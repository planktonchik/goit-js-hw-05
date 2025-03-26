/*
const getUsersWithFriend = (users, friendName) => 
  users.filter(user => user.friends.includes(friendName));

// Масив користувачів для перевірки
const allUsers = [
  { name: "Moore Hensley", friends: ["Sharron Pace"] },
  { name: "Sharlene Bush", friends: ["Briana Decker", "Sharron Pace"] },
  { name: "Ross Vazquez", friends: ["Marilyn Mcintosh", "Padilla Garrison", "Naomi Buckner"] },
  { name: "Elma Head", friends: ["Goldie Gentry", "Aisha Tran"] },
  { name: "Carey Barr", friends: ["Jordan Sampson", "Eddie Strong"] },
  { name: "Blackburn Dotson", friends: ["Jacklyn Lucas", "Linda Chapman"] },
  { name: "Sheree Anthony", friends: ["Goldie Gentry", "Briana Decker"] }
];

// Перевірка роботи функції
console.log(getUsersWithFriend(allUsers, "Briana Decker")); 
// Очікуваний результат: [{ name: "Sharlene Bush", friends: [...] }, { name: "Sheree Anthony", friends: [...] }]

console.log(getUsersWithFriend(allUsers, "Goldie Gentry"));
// Очікуваний результат: [{ name: "Elma Head", friends: [...] }, { name: "Sheree Anthony", friends: [...] }]

console.log(getUsersWithFriend(allUsers, "Adrian Cross")); 
// Очікуваний результат: []
*/

const getUsersWithFriend = (users, friendName) =>
  users.filter((user) => user.friends.includes(friendName));

// Перевірка роботи функції
const allUsers = [
  { name: "Moore Hensley", friends: ["Sharron Pace"] },
  { name: "Sharlene Bush", friends: ["Briana Decker", "Sharron Pace"] },
  {
    name: "Ross Vazquez",
    friends: ["Marilyn Mcintosh", "Padilla Garrison", "Naomi Buckner"],
  },
  { name: "Elma Head", friends: ["Goldie Gentry", "Aisha Tran"] },
  { name: "Carey Barr", friends: ["Jordan Sampson", "Eddie Strong"] },
  { name: "Blackburn Dotson", friends: ["Jacklyn Lucas", "Linda Chapman"] },
  { name: "Sheree Anthony", friends: ["Goldie Gentry", "Briana Decker"] },
];

console.log(getUsersWithFriend(allUsers, "Briana Decker"));
// Очікуваний результат: [{ name: "Sharlene Bush", friends: ["Briana Decker", "Sharron Pace"] }, { name: "Sheree Anthony", friends: ["Goldie Gentry", "Briana Decker"] }]

console.log(getUsersWithFriend(allUsers, "Goldie Gentry"));
// Очікуваний результат: [{ name: "Elma Head", friends: ["Goldie Gentry", "Aisha Tran"] }, { name: "Sheree Anthony", friends: ["Goldie Gentry", "Briana Decker"] }]

console.log(getUsersWithFriend(allUsers, "Adrian Cross"));
// Очікуваний результат: []
