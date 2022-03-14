// const server = "https://authentionappbackend.herokuapp.com/";
const server = "http://localhost:3000/";
const apiLogin = `${server}api/login`;
const serverUser = `${server}user`;
const apiRegister = `${server}api/register`;
const apiDelete = `${server}api/user/delete`;

module.exports = {server, apiLogin, apiRegister, serverUser, apiDelete};