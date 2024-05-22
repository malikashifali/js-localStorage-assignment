// footer year ]
let year = new Date().getFullYear()
document.getElementById("year").innerHTML = year

// javaScript String

const createString = () => {
    localStorage.setItem("userName", "kashif")
}
const readString = () => {
    let userName = localStorage.getItem("userName")
    console.log(userName)
    document.getElementById("userName").innerHTML = userName
}
const updateString = () => {
    localStorage.setItem("userName", "kashif malik")
}
const deleteString = () => {
    localStorage.removeItem("userName")
}



// javaScript Array 

const createArray = () => {
    let users = [{"fullName": "kashif"}, {"fullName": "ali"}]
    let usersInString = JSON.stringify(users)
    localStorage.setItem("users", usersInString)
}
const readArray = () => {
    const users = localStorage.getItem("users")
    const usersInArrFormat = JSON.parse(users)
    console.log(usersInArrFormat)
}
const updateArray = () => {
let newUser = {"fullName": "sufyan rehmani"}
const users = JSON.parse(localStorage.getItem("users"))
users.push(newUser)
localStorage.setItem("users", JSON.stringify(users))
}
const deleteArray = () => {
    localStorage.removeItem("users")
}


window.onload = () => {
    readString()
}