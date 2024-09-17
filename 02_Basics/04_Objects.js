/*
//const tinderUser = new Object() -> singleton object
const tinderUser = {}    //       -> non-singleton object

tinderUser.id = "123abc"
tinderUser.name = "Sammy"
tinderUser.isLoggedIn = false

const regularUser = {
    email: "some@gmail.com",
    fullName: {     //object inside object
          userfullName: {
            firstname: "mamta",
            lastName: "rajera"
          }
    }

}

console.log(regularUser.fullName.userfullName.firstname)


//copying object

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "a", 4: "b"}

//const obj3 = { obj1, obj2}  //yeh to as it object ko copy krta hai

//console.log(obj3)


/* here first argument is target object isme changes hote hai or vhi return hota hai
const obj3 = Object.assign(obj1,obj2) //yha pe obj1 me obj2 copy hua. mtlb obj1 me changes hue
console.log(obj3)
console.log(obj1)
console.log(obj1 == obj3) //here dono ka content same hai
*/

//hence use {} as first argument

/*
const obj4 = Object.assign({}, obj1, obj2) //yha pe obj1 or obj2 dono {} -> iss empty object me assign hue esliye unke ander koe change nhi hua
console.log(obj4)
console.log(obj1)
console.log(obj1== obj4) //here dono ka content alag alag hai


//most used way is spread operator

const obj5 = {...obj1, ...obj2}
console.log(obj5)


//Jab database se value aati hai

//so object inside array
const users = [{name: "mamta"},{name: "mamta1"},{name: "mamta2"}]

console.log(users[1].name)


console.log(tinderUser)


//kisi object ki saari keys chiye
console.log(Object.keys(tinderUser))  //return an array

//kisi object ki saari values chiye
console.log(Object.values(tinderUser))


//check krna hai ki kya object pass koe property hai a nhi

console.log(tinderUser.hasOwnProperty('isLoggedIn'))

console.log(tinderUser.hasOwnProperty('isLogged'))

*/



//Object destructing (Array ki bhi destructing hoti hai) (react me bhi use hota hai)


const course = {
    coursename: "js in hindi",
    price: "999",
    courseInstructor: "hitesh"
}


//to access value from object we do
//course.courseInstructor   //but jitni bar use krni hai value utni bar yeh likhna padega


//doing same thing using object destructing

const {courseInstructor} = course
console.log(courseInstructor)  //ab course.courseIntructor nhi likhna padega

const {courseInstructor: instructor} = course //ab courseInstructor ka bhi name assign krna hai to
console.log(instructor)   //ab courseInstructor bhi likhe ki need ni 


const navbar = () => {

}



//API, JSON

