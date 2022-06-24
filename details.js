const details = { name: 'Ore', height: '189cm', country: 'Nigeria' }

console.log(`My name is ${details.name}, I am ${details.height} tall and I'm from ${details.country}`)

const UI = document.querySelector('#details')

UI.innerHTML = `<p>My name is ${details.name}, I am ${details.height} tall and I'm from ${details.country}</p>`