/*setTimeout(() => {
    console.log('test')
    console.debug('debug')
}, 2000);*/

/*setInterval(() => {
    console.warn('hi')
}, 2000);*/

// let a = [100,200,10,1];
// let b = a.filter((ele) => ele <= 10);
// let c = b.sort()
// console.log(b);

// let a = [13,21,45,1];
// let b = a.sort()
// let c = b.pop(45)

// console.log(b);

// let a = [5,1,7,0];
// let b = a.filter((ele) => ele <= 0);
// console.log(b)


// let a = [10,3,4,1,2];
// let b = a.sort()
// let c = b.filter((ele) => ele <=3);
// console.log(c)

// let a = [20,13,14,11,12];
// let b = a.sort()
// let c = b.filter((ele) => ele > 12);
// console.log(c)



// let b = ["abc", "xyza", "abcde","abdef"]
// let c = b.pop("abc", "xyza")
// console.log(c);

// let c = ["cars", "bike", "cycle"]
// let d = c.slice(1).join(" and ")
// console.log(d)

// let c = ["abc", "xyza", "namey"]
// let d = c.every(val => val.length>2)
// if (d)
// {
//    console.log("hello")
// }
// else {
//     console.log("HII")
// }

// let a = [30,40,50]
// let b = [2,3,4]
// let c = b.concat(a)
// console.log(c)

// let a = [30,40,50]
// let b = [2,3,4]
// let c = a.concat(b)
// console.log(c)

// let a = "Hi IM developer";
// let b = a.split(' ');
// let c = b.filter(val => val.length === 2).join( " & ")
// console.log(c)

// let c = [{name:"r", age:60}, {name:"B", age:1}, {name:"Z", age:10}]
// console.log(c.filter(val => val.age>10  & val.length != 3))

// let a = [19,20,30]
// let b = a.filter((ele) => ele >20);
// console.log(b)

// let obj={
//     name:"R"
// }
// let b = JSON.stringify(obj)
// console.log(b)

// function rajat()
// {
//     let a = [a,b]
//     localstorage.setItem('obj'.JSON.stringify(a));
//     localstorage.getItem('obj')



// function localsave() {
//     localStorage.setItem("Name", "rajat");
// }
// function sessionsave() {
//     sessionStorage.setItem("Name2", "rajat");
//      sessionStorage.removeItem("Name2", "rajat");
// }


const [ab,ba] = [1,2,3,4]
console.log(ab)
console.log(ba)

const [cd,de,...p] = [1,2,3,4]
console.log(p)

const{fname,lname} = {fname:'rajat', lname:'yadav'}
console.log(fname)
console.log(lname)

//spread operator

const aa = [34,5]
const bb = [10,14,11]
const cc = [aa,bb]

console.log({cc});

const dd = [...aa,...bb]
console.log({dd});


const a = [1,0,3,4]
let [b,d,...e] = [1,3,6,8,9]
console.log(b)
console.log(d)
console.log(...e)