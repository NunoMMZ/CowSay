const userInfo = require('./information');
const cowsay=require("cowsay");

console.log(cowsay.say({text: `Hi, my name is ${userInfo.name} and I'm based in ${userInfo.campus}`, e: "o0", T:"U "}));
