let quizData = [
    {"quest" : "🔴  Quel est le capitale de la France?", "choices": ["Paris", "Lyon", "Marseille", "Bordeaux"]},
    {"quest" : "🔴  De qui est amoureux Juliette", "choices" : ["Rémy", "Martin", "Roméo", "Jack"] },
    {"quest" : "🔴  Combien fait 2x6+9", "choices" : ["21", "20", "18", "19"] },
    {"quest" : "🔴  De quel côté de l'assiette doit-on poser le verre a vin ?", "choices" : ["Devant", "A droite", "A gauche", "Sur l'assiettes"] },
    {"quest" : "🔴  Quelle ville a construit le premier métro ?", "choices" : ["La France", "Londres", "Le Portugal", "Amérique"] }
];



let currentIndex = 0;
let playerScore = 0;
let countTime = 60;

$(".game").css('display', "none")

$("#start").click(function (){
    $(".game").css('display', "flex")
    $(".start").css('display', "none")
    startGame()
    let time = document.getElementById("timer")

    setInterval(function (){
        if(countTime > 0){
            countTime--;
            console.log(countTime)
            time.innerHTML = "" + countTime;
            time.innerHTML = "Temps : " + countTime;
        }
        else if (countTime === 0){
            alert("Quel dommage, pas assez rapide, la page va se recharger..")
            location.reload()
        }
    }, 1000)
})

$('span').click(function (){
    $(this).toggleClass("active")
})
// console.log(quizData[3].choices[2])
function startGame() {
    console.log(currentIndex)
    let obj = quizData[currentIndex];
    $('#quest').text(obj.quest)
    let four = $('#four').text(obj.choices[0])
    let one = $('#one').text(obj.choices[1])
    let two = $('#two').text(obj.choices[2])
    let three = $('#three').text(obj.choices[3])

    $("#info").html('').css('font-size', '50px')

    $('#confirm').off('click').click(function (){
        if (currentIndex === 0 && four.hasClass('active')) {
            $("#info").html('✅').css('font-size', '50px')
            alert("good word")
            playerScore++
            currentIndex++
            countTime+=10;
            startGame()
        }
        else if (currentIndex === 1 && two.hasClass('active')) {
            $("#info").html('✅').css('font-size', '50px')
            alert("good word")
            playerScore++
            countTime+=10;
            currentIndex++
            startGame()
        }
        else if (currentIndex === 2 && four.hasClass('active')) {
            $("#info").html('✅').css('font-size', '50px')
            alert("good word")
            playerScore++
            currentIndex++
            countTime+=10;
            startGame()
        }
        else if (currentIndex === 3 && two.hasClass('active')) {
            $("#info").html('✅').css('font-size', '50px')
            alert("good word")
            playerScore++
            currentIndex++
            countTime+=10;
            startGame()
        }
        else if (currentIndex === 4 && two.hasClass('active')) {
            $("#info").html('✅').css('font-size', '50px')
            alert("good word")
            playerScore++
            currentIndex++
            countTime+=10;
            alert(playerScore)
            startGame()
        }
        else if (currentIndex === 5 && one.hasClass('active')) {
            $("#info").html('✅').css('font-size', '50px')
            alert("good word")
            playerScore++
            currentIndex++
            countTime+=10;
            alert(playerScore)
            startGame()
        }
        else {
            currentIndex++;
            alert("bad word")
            startGame()
        }
    });
}

