window.onload=function() {
    let fakeTipsButton = document.getElementById("fake-tips");
    let naturalNailsButton = document.getElementById("natural-nails");
    let startButton = document.getElementById("start-button");
    let question1 = document.getElementById("question1");
    let quiz = document.getElementById("quiz");
    let quizPage = document.getElementById("quiz-page");

    question1.style.display = "none";
    startButton.addEventListener("click", function() {
        question1.style.display = "flex";
        startButton.style.display = "none";
        quizPage.appendChild(question1);
    });
    quiz.appendChild(quizPage);

    fakeTipsButton.addEventListener("click", function() {
        question1.style.display = "none";
        startButton.style.display = "none";

        let question2 = document.createElement("div");
        question2.id = "question-2";
        question2.innerHTML = "Do you like a fancy design or a simple one?" +
                                "<br><br>" +
                                "<button id='fancy-nails'>Fancy</button>" +
                                "<button id='simple-nails'>Simple</button>";
        quizPage.appendChild(question2);

        let fancyNailsButton = document.getElementById("fancy-nails");
        let simpleNailsButton = document.getElementById("simple-nails");

        fancyNailsButton.addEventListener("click", function() {
            let answer1 = document.createElement("div");
            question2.style.display = "none";
            answer1.innerHTML = "You should book Design X Pro Extensions Full Nail Art" +
                                "<br></br>" +
                                "<button id='reset-button'>Still Unsure? Try Again!</button>";
            answer1.classList.add("success-message");
            quizPage.appendChild(answer1);

            let resetButton = answer1.querySelector("button");
            resetButton.addEventListener("click", function() {
                quizPage.removeChild(question2);
                quizPage.removeChild(answer1);
                question1.style.display = "none";
                startButton.style.display = "block";
                fancyNailsButton.removeEventListener("click", fancyNailsButton);
            });
        });

        simpleNailsButton.addEventListener("click", function() {
            let answer1 = document.createElement("div");
            question2.style.display = "none";
            answer1.innerHTML = "You should book Design X Pro Extensions Basic Nail Art" +
                                "<br></br>" +
                                "<button id='reset-button'>Still Unsure? Try Again!</button>";
            answer1.classList.add("success-message");
            quizPage.appendChild(answer1);

            let resetButton = answer1.querySelector("button");
            resetButton.addEventListener("click", function() {
                quizPage.removeChild(question2);
                quizPage.removeChild(answer1);
                question1.style.display = "none";
                startButton.style.display = "block";
                simpleNailsButton.removeEventListener("click", simpleNailsButton);
            });
        });
    });

    naturalNailsButton.addEventListener("click", function() {
        question1.style.display = "none";
        startButton.style.display = "none";

        let question2 = document.createElement("div");
        question2.id = "question-2";
        question2.innerHTML = "Are you happy with your nail length or are you trying to grow them?" +
            "<br><br>" +
            "<button id='happy-nails'>Happy</button>" +
            "<button id='grow-nails'>Grow</button>";
        quizPage.appendChild(question2);

        let happyNailsButton = document.getElementById("happy-nails");
        let growNailsButton = document.getElementById("grow-nails");

        happyNailsButton.addEventListener("click", function() {
            question1.style.display = "none";
            question2.style.display = "none";
            startButton.style.display = "none";

            let question3 = document.createElement("div");
            question3.id = "question-3";
            question3.innerHTML = "Do you like a fancy design or a simple one?" +
            "<br><br>" +
            "<button id='fancy-nails-2'>Fancy</button>" +
            "<button id='simple-nails-2'>Simple</button>";
            quizPage.appendChild(question3);

            let fancyNailsButtonHappy = document.getElementById("fancy-nails-2");
            let simpleNailsButtonHappy = document.getElementById("simple-nails-2");

            let answerQuestion3 = function(answer) {
            let answer1 = document.createElement("div");
            question3.style.display = "none";
            answer1.innerHTML = answer +
                "<br></br>" +
                "<button id='reset-button'>Still Unsure? Try Again!</button>";
            answer1.classList.add("success-message");
            quizPage.appendChild(answer1);

            let resetButton = answer1.querySelector("button");
            resetButton.addEventListener("click", function() {
                quizPage.removeChild(question2);
                quizPage.removeChild(answer1);
                question1.style.display = "none";
                startButton.style.display = "block";
                fancyNailsButtonHappy.removeEventListener("click", answerQuestion3);
                simpleNailsButtonHappy.removeEventListener("click", answerQuestion3);
            });
            };

            fancyNailsButtonHappy.addEventListener("click", function() {
            answerQuestion3("You should book Gel Polish Manicure Full Nail Art");
            });

            simpleNailsButtonHappy.addEventListener("click", function() {
            answerQuestion3("You should book Gel Polish Manicure Basic Nail Art");
            });
        });
        
        growNailsButton.addEventListener("click", function() {
            question1.style.display = "none";
            question2.style.display = "none";
            startButton.style.display = "none";

            let question3 = document.createElement("div");
            question3.id = "question-3";
            question3.innerHTML = "Do you like a fancy design or a simple one?" +
                                "<br><br>" +
                                "<button id='fancy-nails-3'>Fancy</button>" +
                                "<button id='simple-nails-3'>Simple</button>";
            quizPage.appendChild(question3);

            let fancyNailsButtonGrow = document.getElementById("fancy-nails-3");
            let simpleNailsButtonGrow = document.getElementById("simple-nails-3");

            fancyNailsButtonGrow.addEventListener("click", function() {
                let answer1 = document.createElement("div");
                question3.style.display = "none";
                answer1.innerHTML = "You should book BIAB Manicure Full Nail Art" +
                                    "<br></br>" +
                                    "<button id='reset-button'>Still Unsure? Try Again!</button>";
                answer1.classList.add("success-message");
                quizPage.appendChild(answer1);

                let resetButton = answer1.querySelector("button");
                resetButton.addEventListener("click", function() {
                    quizPage.removeChild(question2);
                    quizPage.removeChild(question3);
                    quizPage.removeChild(answer1);
                    question1.style.display = "none";
                    startButton.style.display = "block";
                    fancyNailsButtonGrow.removeEventListener("click", fancyNailsButtonGrow);
                });
            });

            simpleNailsButtonGrow.addEventListener("click", function() {
                let answer1 = document.createElement("div");
                question3.style.display = "none";
                answer1.innerHTML = "You should book BIAB Manicure Basic Nail Art" +
                                    "<br></br>" +
                                    "<button id='reset-button'>Still Unsure? Try Again!</button>";
                answer1.classList.add("success-message");
                quizPage.appendChild(answer1);

                let resetButton = answer1.querySelector("button");
                resetButton.addEventListener("click", function() {
                    quizPage.removeChild(question2);
                    quizPage.removeChild(question3);
                    quizPage.removeChild(answer1);
                    question1.style.display = "none";
                    startButton.style.display = "block";
                    simpleNailsButtonGrow.removeEventListener("click", simpleNailsButtonGrow);
                });
            });
        });
    });
};