const clients_json = require('./../data/clients.json');
const lodash = require('lodash');

function filterSorterClients(clients) {
    const clientsArray = clients['clients'];

    const clientsFilteredArray = clientsArray.filter(client => {
        return client['address']['city'].toLowerCase() === 'кунгур';
    })
    
    return lodash.orderBy(clientsFilteredArray, ['gender', 'age', 'name'], ['asc', 'desc', 'asc'])
}

console.log(filterSorterClients(clients_json));