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
            var answer1 = document.createElement("div");
            var quiz = document.getElementById("quiz");
            question2.style.display = "none";
            answer1.innerHTML = "You should book Design X Pro Extensions Full Nail Art";
            answer1.classList.add("success-message");
            quizPage.appendChild(answer1);
        });

        simpleNailsButton.addEventListener("click", function() {
            var answer1 = document.createElement("div");
            var quiz = document.getElementById("quiz");
            question2.style.display = "none";
            answer1.innerHTML = "You should book Design X Pro Extensions Basic Nail Art";
            answer1.classList.add("success-message");
            quizPage.appendChild(answer1);
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
                                "<button id='fancy-nails'>Fancy</button>" +
                                "<button id='simple-nails'>Simple</button>";
            quizPage.appendChild(question3);
        
            let fancyNailsButton = document.getElementById("fancy-nails");
            let simpleNailsButton = document.getElementById("simple-nails");
        
            fancyNailsButton.addEventListener("click", function() {
                var answer1 = document.createElement("div");
                var quiz = document.getElementById("quiz");
                question3.style.display = "none";
                answer1.innerHTML = "You should book Gel Polish Manicure Full Nail Art";
                answer1.classList.add("success-message");
                quizPage.appendChild(answer1);
            });
        
            simpleNailsButton.addEventListener("click", function() {
                var answer1 = document.createElement("div");
                var quiz = document.getElementById("quiz");
                question3.style.display = "none";
                answer1.innerHTML = "You should book Gel Polish Manicure Basic Nail Art";
                answer1.classList.add("success-message");
                quizPage.appendChild(answer1);
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
                                    "<button id='fancy-nails'>Fancy</button>" +
                                    "<button id='simple-nails'>Simple</button>";
                quizPage.appendChild(question3);
            
                let fancyNailsButton = document.getElementById("fancy-nails");
                let simpleNailsButton = document.getElementById("simple-nails");
            
                fancyNailsButton.addEventListener("click", function() {
                    var answer1 = document.createElement("div");
                    var quiz = document.getElementById("quiz");
                    question3.style.display = "none";
                    answer1.innerHTML = "You should book BIAB Manicure Full Nail Art";
                    answer1.classList.add("success-message");
                    quizPage.appendChild(answer1);
                });
            
                simpleNailsButton.addEventListener("click", function() {
                    var answer1 = document.createElement("div");
                    var quiz = document.getElementById("quiz");
                    question3.style.display = "none";
                    answer1.innerHTML = "You should book BIAB Manicure Basic Nail Art";
                    answer1.classList.add("success-message");
                    quizPage.appendChild(answer1);
                });
            
            });
        });
}