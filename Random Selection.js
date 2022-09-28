//options to fill the popup message
let greeting = ['Hey you!', 'Good day!', 'Happy to see you!', 'Hope today has been great!', 'Welcome back!'];
let compliment = ['You rock!', 'You are awesome!', 'You are incredible as you are!', 'You have all the right moves!', "You are the bee's knees!"];
let sendOff = ['Have a great day!', 'Keep that chin up!', 'Learn something new every day!', 'Find your happy!', "You are someone's reason to keep going!"];

//function to create popup message. Takes one choice from each of the 3 sections
const popupMessage = (a, b, c) => {
    let message = a[Math.floor(Math.random() * a.length)] + b[Math.floor(Math.random() * b.length)] + c[Math.floor(Math.random() * c.length)]
    return message
};
