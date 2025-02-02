


const strlength = (inputName, inputFunc) => {
    inputFunc(inputName)
}

const inputFunc = name => {
    console.log(name.length)
}

strlength("Veekshith", inputFunc)
