const readline = require('readline');

// Create an interface for reading lines from stdin and writing lines to stdout
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Display the welcome message
console.log('Welcome to Holberton School, what is your name?');

// Prompt the user for input
rl.question('', (answer) => {
    console.log(`Your name is: ${answer}`);
});

// Listen for the 'close' event to display a message when the readline interface is closed
rl.on('close', () => {
    console.log('This important software is now closing');
    process.exit(0);
});
