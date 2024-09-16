//Date object 


let myDate = new Date();
console.log(myDate)
console.log(myDate.toString())
console.log(myDate.toDateString())
console.log(myDate.toLocaleString())
console.log(typeof myDate)

let myCreatedDate = new Date(2023, 0, 23)
console.log(myCreatedDate.toLocaleString())
console.log(myCreatedDate.toDateString())

let myCreatedDate1 = new Date("2023-01-14") //yy mm dd -> not prefer inINDIA

let myCreatedDate2 = new Date("01-14-2023")// mm dd yy -> prefer in INDIA

let myTimeStamp = Date.now()

console.log(myTimeStamp) //return in millisecond
console.log(myCreatedDate1)
console.log(myCreatedDate2.getTime()) //return time in milisecond from 1 Jan 1970

console.log(Math.floor(Date.now()/1000)) //convert time into second => gives decimal value => Hence taken floor of it



// +++++++++ Some More Methods +++++++++++++++++++++++++++++++





let newDate = new Date();

console.log(newDate.getMonth())


 //using this method=> you can define what all you want in the output string
newDate.toLocaleString('default', {
    weekday: "long"
})