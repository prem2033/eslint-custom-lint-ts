//let's say getPayment is deprected,Suggest to use getLatestPayment
function getPaymet() {
    console.log("hello there")
    return true;
}

function getLatestPayment() {
    return true;
}

getPaymet()
getLatestPayment()
//inValid function name
function FlagFunction() {
    return true
}