player1_Name = localStorage.getItem("player1_name");
player2_Name = localStorage.getItem("player2_name");

player1_score = 5;
player2_score = 5;
document.getElementById("player1_name").innerHTML = player1_Name + " : " ;
document.getElementById("player2_name").innerHTML = player2_Name + " : " ;

document.getElementById("player1_score").innerHTML = player1_score ;
document.getElementById("player2_score").innerHTML = player2_score ;

document.getElementById("player_question").innerHTML = "Question Turn - " + player1_Name;
document.getElementById("player_answer").innerHTML = "Answer Turn - " + player2_Name;

function send(){
    number1 = document.getElementById("number1").value;
     number2 = document.getElementById("number2").value;
    actual_answer = parseInt(number1) * parseInt(number2);
    console.log(actual_answer);
    
    
    question_number = "<h4>" + number1 + " X " + number2 + "</h4>";
    input_box = "<br>Answer : <input type='text' id='input_check_box'>";
    check_button = "<br><br><button class='btn btn-info' onclick='check()'>check</button>";
    row =   question_number+ input_box+check_button;
    document.getElementById("output").innerHTML = row;
    document.getElementById("number1").value=" ";
    document.getElementById("number2").value=" ";                                     
}
question_turn= "player1";
answer_turn= "player2";
function check()
{
    get_answer = document.getElementById("input_check_box").value;
    if(get_answer == actual_answer)
    {
        if(answer_turn == "player1")
        {
            player1_score = player1_score +1;
            document.getElementById("player1_score").innerHTML = player1_score;
            alert("Congartulations!" + " " + player1_Name + " . " + "your answer is correct.");
        }
        else
        {
            player2_score = player2_score +1;
             document.getElementById("player2_score").innerHTML = player2_score;
            alert("Congartulations!" + " " + player2_Name + " . " + "your answer is correct.");
            
        }
    }
    else
    {
     if(answer_turn == "player1")
        {
            player1_score = player1_score -1;
            document.getElementById("player1_score").innerHTML = player1_score;
            alert("Sorry" + " " + player1_Name + " . " + "your answer is wrong. Better Luck Next Time");
        }
        else
        {
            player2_score = player2_score -1;
             document.getElementById("player2_score").innerHTML = player2_score;
             alert("Sorry" + " " + player2_Name + " . " + "your answer is wrong. Better Luck Next Time");
            
        }   
    }
    
    if(question_turn == "player1")
        {
            question_turn = "player2"
            document.getElementById("player_question").innerHTML = "Question Turn - " + player2_Name;
        }
    else
        {
          question_turn = "player1"
            document.getElementById("player_question").innerHTML = "Question Turn - " + player1_Name;   
        }
     if(answer_turn == "player1")
        {
            answer_turn = "player2"
            document.getElementById("player_answer").innerHTML = "Answer Turn - " + player2_Name;
        }
    else
        {
          answer_turn = "player1"
            document.getElementById("player_answer").innerHTML = "Answer Turn - " + player1_Name;   
        }
    document.getElementById("output").innerHTML = " ";
}
    
