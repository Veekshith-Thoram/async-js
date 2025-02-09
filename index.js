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


//set interval
const intervalFunc = (msg, delay) => {
    setInterval(()=>{
        console.log(msg);
    }, delay);
}

// intervalFunc("Sadhvi Thalli", 1000);

const countdownFunc = num => {
    var timeleft = num;
    const intervalId = setInterval(()=>{
        // console.log(timeleft);
        timeleft--;

        if(timeleft <= 0){
            clearInterval(intervalId);
            console.log("timeup")
        }
        // console.log(intervalId)
    }, 1000)
}

// countdownFunc(10);

// fake fetch call
function fakeFetch(message, shouldReject){
    return new Promise((resolve, reject)=> {
        setTimeout(()=> {
            if(shouldReject){
                reject(`rejecteddd ${message} sorry`);
            }
            resolve(`server from message ${message}`)
        }, 3000)
    })
};

const errorHandler = event => console.error(event);

// fakeFetch("thalliiiiiii", true).then(data => console.log(data)).catch(errorHandler)

const getServerResponseLength = msg => {
    fakeFetch(msg).then(data => console.log(data.length)).catch(errorHandler);
}

// getServerResponseLength("SadhviKannamma")

//waterfall data
const synCallsToServer = (msg1, msg2) => {
    fakeFetch(msg1).then(data => fakeFetch(msg2).then(data2 => console.log({data, data2})))
}

// synCallsToServer("thalli", "sadhvee")

//async await

const printDataFromServer = async (msg1, msg2) => {
    try{
        const returnData = await fakeFetch("BUjjamma");
        console.log(returnData)
    } catch(err){
        console.error(err)
    }
}

printDataFromServer();

//waterfall using async await

const syncCallServer2 = async (msg1, msg2) => {
    const data1 = await fakeFetch(msg1);
    const data2 = await fakeFetch(msg2);
    console.log({data1, data2})
}

syncCallServer2("SadhVee", "Kannamma")

const syncCallServer3 = async (msg1, msg2) => {
    const [data1, data2]  = await Promise.all([
        fakeFetch(msg1),
        fakeFetch(msg2)
    ])
    console.log(data1, data2)
}

syncCallServer3("Kannamma", "I love you chitti thalli")