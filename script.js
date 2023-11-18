const quizApp = [
            {
                questions: 'What is the capital of France',
                choices: ['Marseille', 'Paris', 'Nice', 'Lyon'],
                correctAnswer: 'Paris'
            },
            {
                questions: 'What is the capital of Australia',
                choices: ['Sydney', 'Melbourne', 'Canberra', 'Brisbane'],
                correctAnswer: 'Canberra'
            },
            {
                questions: 'What is the largest ocean in the world',
                choices: ['Arctic', 'Atlantic', 'Pacific', 'Indian'],
                correctAnswer: 'Pacific'
            },
            {
                questions: 'What is the longest river in the world',
                choices: ['Nile River', 'Niger River', 'Ganges River', 'Congo'],
                correctAnswer: 'Nile River'
            }
        ];

        const displayQuestions = () => {
            const questionEl = document.querySelector("#questions");
            const choicesEl = document.querySelector("#choices");
            const submitBtn = document.querySelector("#submit-btn");
            const scoreEl = document.querySelector("#score");
            const quizEl = document.querySelector(".quiz1");
            const startBtn = document.querySelector("#startagain");
            console.log(startBtn);

            const handleSelection = (selectedChoice, correctAnswer, btn) => {    
           if(selectedChoice === correctAnswer){
            btn.classList.add("correct");
            btn.style.color = "white";
            score++;
            scoreEl.innerHTML = `Score: ${score} out of ${quizApp.length}`
           } else {
            btn.classList.add("incorrect");
            btn.style.color = "white";
           }

           const allButtons = choicesEl.querySelectorAll("button");
           allButtons.forEach((button) => {
           button.disabled = true;         
         });
         /*btn.classList.add("selected");*/
        };
            
            let currentQuestionIndex = 0;
            let score = 0;

           const displayNextQuestion = () => {
            if(currentQuestionIndex < quizApp.length){
            const {questions, choices, correctAnswer} = quizApp[currentQuestionIndex];

            questionEl.textContent = questions;

            choicesEl.innerHTML = '';

            choices.forEach((choice) =>{
              const btnContainer = document.createElement("div");
              const btn = document.createElement("button");
              btn.textContent = choice;
              btnContainer.appendChild(btn);
              choicesEl.appendChild(btnContainer);

              btn.addEventListener("click", (event) => {
                const selectedChoice = event.target.textContent;
                handleSelection(selectedChoice, correctAnswer, btn);
              });
            });  

           currentQuestionIndex++;
           } else{
            quizEl.innerHTML = "";
            quizEl.innerHTML = `Quiz is completed <br> Score: ${score} out of ${quizApp.length}`
            scoreEl.innerHTML = `Score: ${score} out of ${quizApp.length}`
            startBtn.addEventListener("click", reStartQuip);
           }      
        };
                    
           submitBtn.addEventListener("click", () => {
            displayNextQuestion();
        });
        displayNextQuestion();

        const reStartQuip = () => {
            displayQuestions();
            console.log("click")
          }
        };
        
        window.addEventListener("load", () => {
            displayQuestions();
        });