const express = require('express')
const app = express()
app.all('/', (req, res) => {
    console.log("Just got a request!")
    res.send('Yo!')
})
app.listen(process.env.PORT || 3000)
const jsonServer = require('json-server')
const cors = require('cors')
const path = require('path')

const server = jsonServer.create()
const router = jsonServer.router(path.join(__dirname, 'db.json'))
const middlewares = jsonServer.defaults()

server.use(cors())
server.use(jsonServer.bodyParser)
server.use(middlewares)
server.use(router)

const PORT = 8000

server.listen(PORT, () => {
  console.log(`JSON Server is running on http://localhost:${PORT}`)
})








// var informationApi = "http://localhost:3000/info";
// //Start 
// function Awake() {
// getInfo((info) => {renderInfo(info)});
// handleCreate();
// };
// Awake();
// //function 
// function getInfo(callback) {  
// fetch(informationApi)
//     .then((respond)=>{return respond.json();})
//     .then(callback)
// }

// // render info to html
// function renderInfo(info) {
//     var listInfomr = document.querySelector("ul");
//     var html = info.map(function (info) {
//         return `
//         <li> 
//         <p>${ info.id }</p>
//         <h4>${ info.name }</h4>
//         <p>${ info.school }</p>
//         <button onclick="deleteInfo(${info.id})">xoa</button>
//         </li>
//         `
//     });
//     listInfomr.innerHTML = html;
// };


// // take information from html form
// function createInfo(data , callback) {
//     var options = {
//         method:'POST',
//         headers:{
//             'Content-Type': 'application/json'
//         },
//         body:JSON.stringify(data)
//     }
//     fetch(informationApi,options)
//     .then(function(respond){
//         respond.json();
//     })
//     .then(callback)
// }
// // create new info in html
// function handleCreate(){
//     var name = document.querySelector('input[name="name"]').value;
//     var school = document.querySelector('input[name="school"]').value;
// var formData = {
//     name:name,
//     school:school
// }
// createInfo(formData)
// };
// // delete info
// function deleteInfo(id){
//     var options = {
//         method:'DELETE',
//         headers:{
//             'Content-Type': 'application/json'
//         }
//     }
//     fetch(informationApi+'/'+id,options)
//     .then(function(respond){
//         respond.json();
//     })
//     .then(callback)
// }
// // take info from form in html
// function UpdateInfo(id,formData) {
//     var id=document.querySelector('input[name="idUpdate"]').value;
//     var name = document.querySelector('input[name="updateName"]').value;
//     var school = document.querySelector('input[name="updateSchool"]').value;
// var formData = {
//     name:name,
//     school:school
// }
// handleUpdate(id,formData);
// }
// // handle update info
// function handleUpdate(id,dataUpdate) {
//     var options = {
//         method:'PUT',
//         headers:{
//             'Content-Type': 'application/json'
//         },
//         body:JSON.stringify(dataUpdate)
//     }
//     fetch(informationApi+'/'+id,options)
//     .then(function(respond){
//         respond.json();
//     })
//     .then(callback)

// }
