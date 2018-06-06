
var question = 0;
var maxQuestion = 7;
var arrayOfQuestions = [ 
    {
    question: "What is the height of mt.Everest?",
    option1: "7.93 miles",
    option2: "5.47 miles",
    option3: "50.23 miles",
    option4: "13.01 miles",
    answer: "5.47 miles"
    },
    {
    question: "Who is the real voice behind 'siri'?",
    option1: "J.K Rowling",
    option2: "Maria Carrey",
    answer: "Susan Bennett",
    option3: "Katie Perry",
    option4: "Susan Bennett"
    },
    {
    question: "Who is the first American Idol?",
    option1: "David Cook",
    option2: "kelly Clarkson",
    option3: "Taylor Hicks",
    option4: "Thomas Benjamin",
    answer: "kelly Clarkson"
    },
    {
    question: "Perrie Coffins is the creator of?",
    option1: "Donald Duck",
    option2: "Mickey Mouse",
    option3: "Minnions",
    option4: "spongeBob",
    answer: "Minnions"
    },
    {
    question: "What is Carlie Lloyd associated with?",
    option1: "Volley Ball",
    option2: "Soccer",
    option3: "Hockey",
    option4: "Badminton",
    answer: "Soccer"
    }, 
    {
    question: "Who is the first woman to run for President of USA?",
    option1: "Sarah Palin",
    option2: "Hillary Clinton",
    option3: "Victoria Woodhull",
    option4: "Christina Ramsey",
    answer: "Victoria Woodhull"
    },
    {
    question: "The only bachelor president of USA?",
    option1: "Richard Nixo",
    option2: "Calvin Coolidge",
    option3: "Grover Cleveland",
    option4: "James Buchanan",
    answer: "James Buchanan"
    } 
 ];
  var interval;
  var correct = 0;
  var wrong = 0;
  $( document ).ready(function() {
    $("#content").hide();
    $("#scre").hide();
        
    $("#btn").click(function(){
        $("#content").show();
        $("#scre").hide();
        $("#strt").hide();      
        showQuestion(question);  
    });

    $("#ans1").click(function(){
        var selectedOption1 = document.getElementById("ans1").text;
        if(selectedOption1 == arrayOfQuestions[question].answer){
            alert("You got it!");
            correct = correct + 1;
        }else{
            alert("Sorry");
            wrong = wrong + 1;
        }
        clearInterval(interval);
        question = question + 1;
        setTimeout(function() {
            showQuestion(question);
        }, 1000);          
    });
    $("#ans2").click(function(){
        var selectedOption2 = document.getElementById("ans2").text;
        if(selectedOption2 == arrayOfQuestions[question].answer){
            alert("You got it!");
            correct = correct + 1;
        }else{
            alert("Sorry");
            wrong = wrong + 1;
        }
        clearInterval(interval);
        question = question + 1;
        setTimeout(function() {
            showQuestion(question);
        }, 1000);          
    });
    $("#ans3").click(function(){
        var selectedOption3 = document.getElementById("ans3").text;
        if(selectedOption3 == arrayOfQuestions[question].answer){
            alert("You got it!");
            correct = correct + 1;
        }else{
            alert("Sorry");
            wrong = wrong + 1;
        }
        clearInterval(interval);
        question = question + 1;
        setTimeout(function() {
            showQuestion(question);
        }, 1000);          
    });
    $("#ans4").click(function(){
        var selectedOption4 = document.getElementById("ans4").text;
        if(selectedOption4 == arrayOfQuestions[question].answer){
            alert("You got it!");
            correct = correct + 1;
        }else{
            alert("Sorry");
            wrong = wrong + 1;
        }
        clearInterval(interval);
        question = question + 1;
        setTimeout(function() {
        showQuestion(question);
        }, 1000);          
    });
    
    $("#restart-game").click(function(){
        wrong = 0;
        correct = 0; 
        question = 0;
        $("#content").hide();
        $("#scre").hide();
        $("#strt").show();  
    });
  });

function showQuestion(question){
    if (question < maxQuestion){
    $("#querry").text(arrayOfQuestions[question].question);
    $("#ans1").text(arrayOfQuestions[question].option1);
    $("#ans2").text(arrayOfQuestions[question].option2);
    $("#ans3").text(arrayOfQuestions[question].option3);
    $("#ans4").text(arrayOfQuestions[question].option4);
    var secondsLeft = 12;
    document.getElementById("remain").innerHTML = secondsLeft;
    interval = setInterval(function(){
        secondsLeft = secondsLeft - 1;
        document.getElementById('remain').innerHTML = secondsLeft;
        
        if (secondsLeft <= 0){            
            document.getElementById('remain').innerHTML = 'Timeout!!';
            question = question + 1;
            clearInterval(interval);
            showQuestion(question);            
        }
    },1000);

    }else{
        clearInterval(interval);
        $("#content").hide();
        $("#scre").show();
        $("#strt").hide(); 
        document.getElementById("correct").innerHTML = correct;
        document.getElementById("wrong").innerHTML = wrong;

 }}




