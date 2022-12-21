let quizData = [
    {"quest" : "🔴  Quel est le capitale de la France?", "choices": ["Paris", "Lyon", "Marseille", "Bordeaux"]},
    {"quest" : "🔴  De qui est amoureux Juliette", "choices" : ["Rémy", "Martin", "Roméo", "Jack"] },
    {"quest" : "🔴  Combien fait 2x6+9", "choices" : ["21", "20", "18", "19"] },
    {"quest" : "🔴  De quel côté de l'assiette doit-on poser le verre a vin ?", "choices" : ["Devant", "A droite", "A gauche", "Sur l'assiettes"] },
    {"quest" : "🔴  Quelle ville a construit le premier métro ?", "choices" : ["La France", "Londres", "Le Portugal", "Amérique"] }
];

let currentIndex = 0;
let playerScore = 0;
let countTime = 0;

$(".game").css('display', "none")

$("#start").click(function (){
    $(".game").css('display', "flex")
    $(".start").css('display', "none")
    startGame()
})

$('span').click(function (){
    $(this).toggleClass("active")
})
// console.log(quizData[3].choices[2])
function startGame() {
    setInterval(function (){
        countTime++;
        console.log(countTime)
    }, 1000)


    let obj = quizData[currentIndex];
    $('#quest').text(obj.quest)
    let four = $('#four').text(obj.choices[0])
    let one = $('#one').text(obj.choices[1])
    let two = $('#two').text(obj.choices[2])
    let three = $('#three').text(obj.choices[3])

    $("#info").html('').css('font-size', '50px')

    $('#confirm').click(function (){
        if (currentIndex === 0 && four.hasClass('active') || currentIndex === 1 && two.hasClass('active') || currentIndex === 2 && four.hasClass('active') || currentIndex === 3 && two.hasClass('active') || currentIndex === 4 && one.hasClass('active')){
            alert("good word")
            $("#info").html('✅').css('font-size', '50px')
            playerScore++
            currentIndex++
            console.log(playerScore)
            startGame()
        }
        else{
            alert('bad words')
            currentIndex++;
            startGame()
        }
        console.log(currentIndex)
    })
}
