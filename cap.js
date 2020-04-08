let char = ['mario','yoshi','dk']


for (let i = 0; i < char.length; i++) {
    if (typeof char[i] === 'string') {
        char[i] = char[i].toUpperCase();
        console.log(char[i])
    }
}
