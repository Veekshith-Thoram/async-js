


const strlength = (inputName, cb) => {
    cb(inputName.length)
}

const cb = nameLength => {
    console.log(nameLength)
}

strlength("Veekshithhh", cb)
