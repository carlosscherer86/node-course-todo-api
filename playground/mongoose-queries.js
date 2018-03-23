const {ObjectID} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');


User.findById('5ab1a959e5a20929ecb45f22')
    .then((user) => {
        if(!user){
            return console.log('User not found');
        }

        console.log(user);
    }).catch((e)=>{
        console.log(e);
    });

// var id = '5ab28ed738f38e2e801ee9501';
// if (ObjectID.isValid(id)) {
//     console.log('Id not valid');
// }

// Todo.find({
//     _id: id
// }).then((todos) => {
//     console.log('Todos ',todos);
// });

// Todo.findOne({
//     _id: id
// }).then((todo) => {
//     console.log('Todo ', todo);
// });

// Todo.findById(id)
// .then((todo) => {
//     if(!todo){
//         return console.log('Id not found');
//     }
//     console.log('Todo by id ', todo);
// }).catch((e) => {
//     console.log(e);
// });
