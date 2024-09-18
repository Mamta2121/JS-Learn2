//for in loop 


//iterating Objects
const myObject = {
    js: 'javascript',
    cpp: 'C++',
    rb: 'ruby',
    swift: "swift by apple"

}

for (const key in myObject) {
    //console.log(key) ;   //only keys will be displayed 
    console.log(myObject[key])  //only values will be displayed
    console.log( ` ${key} shortcut is for ${myObject[key]}`) //both together 
}

//iterating array

const programming = ["js", "rb", "py", "java", "cpp"]

for(const key in programming)
{
    console.log(key) //for array key is index
    console.log(programming[key])
}

//iterating map  -> not iteratable using for in

const mp = new Map()
mp.set('IN', "India")
mp.set('USA', "United States of America")
mp.set('Fr', "France")

for (const key in mp) {
    console.log(key)
}