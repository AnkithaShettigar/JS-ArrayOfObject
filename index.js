//"Question 1 : We are interested in retrieving only the name of the students and all the names should be in caps.

// ['JOHN', 'BABA', 'YAGA', 'WICK']
// "

let studentRecords = [
    { name: "John", id: 123, marks: 98 },
    { name: "Baba", id: 101, marks: 23 },
    { name: "yaga", id: 200, marks: 45 },
    { name: "Wick", id: 115, marks: 75 },
  ];
  
    let data = [];
    for(let i=0;i<studentRecords.length;i++){
    data.push(studentRecords[i].name.toUpperCase());
    }
    console.log(data);

//"Question 2: Suppose we have the same dataset as above but this time we want to get the details of students who scored more than 50 marks.

// [{name: 'John', id: 123, marks : 98 },{name: 'Wick', id: 115, marks : 75 }]"

let data1=[];
for(let i=0;i<studentRecords.length;i++){
    if(studentRecords[i].marks>50){
        data1.push(studentRecords[i]);
    }
}
console.log(data1);

// Question 3: Retrieve the details of students who scored more than 50 marks and have id greater than 120.

for(let i=0;i<studentRecords.length;i++){
    if(studentRecords[i].marks>50 && studentRecords[i].id>120){
        console.log(studentRecords[i]);
    }
}

// Question 4: Consider the same scenario we have discussed above, but this time we would like to know the sum total of the marks of the students.
let sum=0;
for(let i=0;i<studentRecords.length;i++){
     sum+=studentRecords[i].marks;
    }
    console.log(sum);

//Question 5: This time we want to get only the names of the students who scored more than 50 marks from the same dataset used above.

let data2=[];
for(let i=0;i<studentRecords.length;i++){
    if(studentRecords[i].marks>50){
        data2.push(studentRecords[i].name);
    }
}
console.log(data2);

// Question 6: This time we are required to print the sum of marks of the students with id > 120.

let sum1=0;
for(let i=0;i<studentRecords.length;i++){
     if(studentRecords[i].id>120){
        sum1+=studentRecords[i].marks;
     }
    }
    console.log(sum1);



//Question 7: This time we are required to print the total marks of the students with marks greater than 50 after a grace of 15 marks has been added to those students who scored less than 50.



// let grandtotal=0;

// for (let i = 0; i < studentRecords.length; i++) {
//     if (studentRecords[i].marks > 50) {
//         grandtotal += studentRecords[i].marks;
//     }elseif (studentRecords[i].marks > 50){
//         grandtotal += studentRecords[i].marks +15;
//     }
// }

// console.log(grandtotal);

let grandtotal=0;
for (let i = 0; i < studentRecords.length; i++){
    if (studentRecords[i].marks > 50){
        grandtotal+=studentRecords[i].marks;
    }else if (studentRecords[i].marks+15> 50){
        grandtotal+=studentRecords[i].marks +15;
    }
}
console.log(grandtotal);



// question 8:Create 6 objects , each object will have name, class, roll no as properties. Store these objects in an array of objects. 



 function Student (fName, class1, rollno) {
    this.fName = fName;
    this.class1 = class1;
    this.rollno = rollno;
}

const newArr = [new Student("Ankitha", "A-sec", 120), new Student("sushmitha", "B-Sec",131), new Student("Disha", "IIB", 150), new Student("Shamiksha", "IIA-sec", 182), new Student("Mithish", "B-sec", 130), new Student("Akshatha", "K-sec", 129)];


console.log(newArr);