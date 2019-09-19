/*****TITLE: Lambda Class Constructor Project*****/

/*****REQUIREMENTS*****/
/*Person
    First we need a Person class. This will be our base-class
    Person receives name age location all as props
    Person receives speak as a method.
    This method logs out a phrase 'Hello my name is Fred, I am from Bedrock' where name and location are the object's own props
*/
class Person {
    constructor(attributes){
        this.name = attributes.name,
        this.age = attributes.age,
        this.location = attributes.location 
    }
    speak(){
        return `Hello my name is ${this.name}, I am from ${this.location}.`;
    }
}

/*Instructor
    Now that we have a Person as our base class, we'll build our Instructor class.
    Instructor uses the same attributes that have been set up by Person
    
    Instructor has the following unique props:
        specialty what the Instructor is good at i.e. 'redux'
        favLanguage i.e. 'JavaScript, Python, Elm etc.'
        catchPhrase i.e. Don't forget the homies
    Instructor has the following methods:
        1. demo receives a subject string as an argument and logs out the phrase 'Today we are learning about {subject}' where subject is the param passed in.
        2. grade receives a student object and a subject string as arguments and logs out '{student.name} receives a perfect score on {subject}'
*/
class Instructor extends Person {
    constructor(instructorAttrs){
        super(instructorAttrs)
        this.specialty = instructorAttrs.specialty;
        this.favLanguage = instructorAttrs.favLanguage;
        this.catchPhrase = instructorAttrs.catchPhrase;
    }
    demo(subject){
        //logs out the phrase 'Today we are learning about {subject}' where subject is the param passed in.
        return `Today we are learning about ${subject}.`;
    }
    //Need Help here
    grade(student, subject){
        //logs out '{student.name} receives a perfect score on {subject}'
        return `${student} receives a perfect score on ${subject}!`;
    }
}

/*Student
    Now we need some students!
    Student uses the same attributes that have been set up by Person
    
    Student has the following unique props:
        previousBackground i.e. what the Student used to do before Lambda School
        className i.e. CS132
        favSubjects. i.e. an array of the student's favorite subjects ['Html', 'CSS', 'JavaScript']
    Student has the following methods:
        1. listsSubjects a method that logs out all of the student's favoriteSubjects one by one.
        2. PRAssignment a method that receives a subject as an argument and logs out that the student.name has submitted a PR for {subject}
        3. sprintChallenge similar to PRAssignment but logs out student.name has begun sprint challenge on {subject}
*/
class Student extends Person {
    constructor(studentAttrs){
        super(studentAttrs)
        this.previousBackgroun = studentAttrs.previousBackground;
        this.favSubjects = studentAttrs.favSubjects;
    }
    listSubjects(){
        //logs out all of the student's favoriteSubjects one by one
        return `${this.favSubjects}`;
    }
    PRAssignment(subject){
        //logs out that the student.name has submitted a PR for {subject}
        return `${this.name} has submitted a PR for ${subject}.`
    }
    sprintChallenge(subject){
        //logs out student.name has begun sprint challenge on {subject}
        return `${this.name} has begun sprint challenge on ${subject}.`;
    }
}

/*Project Manager
        Now that we have instructors and students, we'd be nowhere without our PM's
        ProjectManagers are extensions of Instructors

        ProjectManagers have the following unique props:
            gradClassName: i.e. CS1
            favInstructor: i.e. Sean
        ProjectManagers have the following Methods:
            1. standUp a method that takes in a slack channel and logs `{name} announces to {channel}, @channel standy times!​​​​​
            2. debugsCode a method that takes in a student object and a subject and logs out {name} debugs {student.name}'s code on {subject}
*/
class ProjectManager extends Instructor {
    constructor(pmAttrs){
        super(pmAttrs)
        this.gradClassName = pmAttrs.gradClassName;
        this.favInstructor = pmAttrs.favInstructor;
    }
    standUp(){
        //takes in a slack channel and logs `{name} announces to {channel}, @channel standy times!​​​​​
    }
    debugsCode(){
        //takes in a student object and a subject and logs out {name} debugs {student.name}'s code on {subject}
    }
}

/*****BREAK*****/

//INSTRUCTOR WAREHOUSE
const fred = new Instructor({
    name: 'Fred',
    location: 'Bedrock',
    age: 37,
    favLanguage: 'JavaScript',
    specialty: 'Front-end',
    catchPhrase: `Don't forget the homies`
});

const gunny = new Instructor({
    name: 'Gunnery Sgt Hartmann',
    location: 'Parris Island',
    age: 42,
    favLanguage: 'Sailor',
    specialty: 'amphibious operations',
    catchPhrase: `Hey slimeball!`
});

const hodgert = new Instructor({
    name: 'Mr Hodgert',
    location: 'Willamette High School',
    age: 48,
    favLanguage: 'Scientific Jargon',
    specialty: 'Physics',
    catchPhrase: `Hee-Hee-Hee!`
});

//STUDENT WAREHOUSE

const sam = new Student({
    name: 'Sam',
    location: 'Eugene',
    age: 40,
    favLanguage: 'Python',
    specialty: 'Front-end',
    catchPhrase: `Let's Party!`,
    favSubjects: ['sailing', 'carpentry', 'classical music']
});

const mike = new Student({
    name: 'Michael',
    location: 'USA',
    age: 28,
    favLanguage: 'Ruby',
    specialty: 'making zoom meetings',
    catchPhrase: `Yip Kay Yay!`,
    favSubjects: ['html', 'css', 'javascript']
});

const joe = new Student({
    name: 'Joseph',
    location: 'Quantum Realm',
    age: 31,
    favLanguage: 'C#',
    specialty: 'eating pizza',
    catchPhrase: `Hi Morpheus, I'm in the matrix!`,
    favSubjects: ['basketball', 'movies', 'travel']
});

//PROJECT MANAGER WAREHOUSE

const don = new ProjectManager({
    name: 'Don',
    location: 'South',
    age: 44,
    favLanguage: 'Cajun',
    specialty: 'recording lectures',
    catchPhrase: `How can I help you?`
});

const jim = new ProjectManager({
    name: 'James',
    location: 'Westeros',
    age: 33,
    favLanguage: 'Valyrian',
    specialty: 'herding cats',
    catchPhrase: `You are correct!`
});

const matt = new ProjectManager({
    name: 'Matt Foley',
    location: 'MidWest',
    age: 55,
    favLanguage: 'Chicago accent',
    specialty: 'motivational speaking',
    catchPhrase: `I live in a van down by the river!`
});

//CONSOLE LOG TESTS
console.log(fred.speak());
console.log(gunny.demo('marksmanship'));
console.log(hodgert.grade('Sam','marksmanship'));
console.log(sam.listSubjects());
console.log(mike.PRAssignment('React'));
console.log(joe.sprintChallenge('chemistry'));

/*****BREAK*****/

/*Stretch Problem
1. Extend the functionality of the Student by adding a prop called grade and setting it equal to a number between 1-100.
2. Now that our students have a grade build out a method on the Instructor (this will be used by BOTH instructors and PM's) that will randomly add or subtract points to a student's grade. Math.random will help.
3. Add a graduate method to a student.
    a. This method, when called, will check the grade of the student and see if they're ready to graduate from Lambda School
    b. If the student's grade is above a 70% let them graduate! Otherwise go back to grading their assignments to increase their score.
*/