var questionBank= [
    {
        question : 'It is a technique in which each frame is created by hand.',
        option : ['Hand Animation','Traditional Animation','Old Animation','3D Animation'],
        answer : 'Traditional Animation'
    },
    {
        question : 'This is the phase where polishing takes place. Depending on the method of distribution the audio or voice recordings could be mastered or engineered with the film to create the full animated film.',
        option : ['Post-Production','Storyboard','Design ','Voice Recording'],
        answer : 'Post-Production'
    },
    {
        question : 'is the 1st process, allows the animation team to plan the flow of the plot and the composition of the imagery.',
        option : ['Post-Production','Storyboard','Design','Voice Recording'],
        answer : 'Storyboard'
    },
    {
        question : 'Is used to create 2D characters and environments that are flat.',
        option : ['2-Directional Animation','2-Dimensional Animation','2 by 2 Animation','2nd Animation Process'],
        answer : '2-Dimensional Animation'
    },
    {
        question : 'These are different styles for animation that can help communicate an objective in various manners.',
        option : ['ANIMATION TECHNIQUES','ANIMATION RULES','ANIMATION','ANIMATION FACTORS'],
        answer : 'ANIMATION TECHNIQUES'
    }
]

var question= document.getElementById('question');
var quizContainer= document.getElementById('quiz-container');
var scorecard= document.getElementById('scorecard');
var option0= document.getElementById('option0');
var option1= document.getElementById('option1');
var option2= document.getElementById('option2');
var option3= document.getElementById('option3');
var next= document.querySelector('.next');
var points= document.getElementById('score');
var span= document.querySelectorAll('span');
var i=0;
var score= 0;

//function to display questions
function displayQuestion(){
    for(var a=0;a<span.length;a++){
        span[a].style.background='none';
    }
    question.innerHTML= 'Q.'+(i+1)+' '+questionBank[i].question;
    option0.innerHTML= questionBank[i].option[0];
    option1.innerHTML= questionBank[i].option[1];
    option2.innerHTML= questionBank[i].option[2];
    option3.innerHTML= questionBank[i].option[3];
    stat.innerHTML= "Question"+' '+(i+1)+' '+'of'+' '+questionBank.length;
}

//function to calculate scores
function calcScore(e){
    if(e.innerHTML===questionBank[i].answer && score<questionBank.length)
    {
        score= score+1;
        document.getElementById(e.id).style.background= 'limegreen';
    }
    else{
        document.getElementById(e.id).style.background= 'tomato';
    }
    setTimeout(nextQuestion,300);
}

//function to display next question
function nextQuestion(){
    if(i<questionBank.length-1)
    {
        i=i+1;
        displayQuestion();
    }
    else{
        points.innerHTML= score+ '/'+ questionBank.length;
        quizContainer.style.display= 'none';
        scoreboard.style.display= 'block'
    }
}

//click events to next button
next.addEventListener('click',nextQuestion);

//Back to Quiz button event
function backToQuiz(){
    location.reload();
}

//function to check Answers
function checkAnswer(){
    var answerBank= document.getElementById('answerBank');
    var answers= document.getElementById('answers');
    answerBank.style.display= 'block';
    scoreboard.style.display= 'none';
    for(var a=0;a<questionBank.length;a++)
    {
        var list= document.createElement('li');
        list.innerHTML= questionBank[a].answer;
        answers.appendChild(list);
    }
}


displayQuestion();