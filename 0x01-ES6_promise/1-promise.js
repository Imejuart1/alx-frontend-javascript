// only fake promise
function getFullResponseFromAPI(success)
return new promise((resolve, reject)=> {
if (sucsses) {
resolve({
status: 200
body: 'sucsses',
});
} else {
reject(new Error('The fake API is not working currently'));
}
});
}

export default getFullResponseFromAPI;
