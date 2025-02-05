const strlength = (inputName, cb) => {
    cb(inputName.length)
}

const cb = nameLength => {
    console.log(`you name is ${nameLength} characters long!`)
}

strlength("Veekshithhh", cb)

const willThanosKillMe = (ipname, cb1, cb2) => {
    if(ipname.length%2 === 0){
        cb1();
    } else {
        cb2();
    }
}

const thanosAlive = () => {
    console.log("Yay i love sadhvika");
}

const thanosDead = () => {
    console.log("Yay i anyway love sadhvika");
}

willThanosKillMe("Sadhvikaa", thanosAlive, thanosDead)

const timeoutFunc = (message, delay) => {
    setTimeout(()=>{
        console.log(message);
    }, delay);
}

timeoutFunc("Sadhvika", 2000);
