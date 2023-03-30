const users_json = require('./../data/users.json');
const lodash = require('lodash');

function slicerFilterOrder(users) {
    const usersArrayFiltered = users.filter(user => Number(user.address['geo']['lat']) < 0);

    const usersArraySliced = [];
    usersArrayFiltered.forEach(user => {
        usersArraySliced.push({ "username": user.username, "city": user.address.city });
    });

    return lodash.orderBy(usersArraySliced, 'city', 'desc');
}

console.log(slicerFilterOrder(users_json));