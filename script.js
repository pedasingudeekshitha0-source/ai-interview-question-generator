const questions = {

java:[
{
question:"What is JVM?",
answer:"JVM is Java Virtual Machine which executes Java bytecode.",
difficulty:"Easy"
},
{
question:"What is Inheritance?",
answer:"Inheritance allows one class to acquire properties of another class.",
difficulty:"Medium"
}
],

dbms:[
{
question:"What is Normalization?",
answer:"Normalization reduces data redundancy in databases.",
difficulty:"Easy"
},
{
question:"What is Primary Key?",
answer:"A Primary Key uniquely identifies each record.",
difficulty:"Easy"
}
],

os:[
{
question:"What is Deadlock?",
answer:"Deadlock occurs when processes wait indefinitely for resources.",
difficulty:"Medium"
},
{
question:"What is Paging?",
answer:"Paging is a memory management technique.",
difficulty:"Medium"
}
],

cn:[
{
question:"What is TCP?",
answer:"TCP is a connection-oriented communication protocol.",
difficulty:"Easy"
},
{
question:"What is IP Address?",
answer:"An IP Address uniquely identifies a device on a network.",
difficulty:"Easy"
}
]

};

function generateQuestion(){

const subject =
document.getElementById("subject").value;

const data =
questions[subject];

const random =
data[Math.floor(Math.random()*data.length)];

document.getElementById("output").innerHTML=`

<h2>${random.question}</h2>

<p><strong>Answer:</strong>
${random.answer}</p>

<p><strong>Difficulty:</strong>
${random.difficulty}</p>

`;

}
