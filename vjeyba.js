
let brpitInput = document.querySelector('#brpit');
let ucpitButton = document.querySelector('#ucpit');
let brpitValue = parseInt(brpitInput.value);

ucpitButton.addEventListener('click', function() {
  brpitValue = parseInt(brpitInput.value);
  /* console.log(brpitValue); */
 
 
    function shuffle(array) {
  for (let i = array.length -1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
} 

 async function Ole() {

  const resp = await fetch(`https://opentdb.com/api.php?amount=${brpitValue +1}`);
  const data = await resp.json();
  const questions = data.results;

  const mjesto = document.querySelector(".mjesto");

  let currentIndex = 0;
const userAnswers = [];
function showNextQuestion() {
  currentIndex++;
  if (currentIndex >= questions.length) {
    // ako smo odgovorili na sva pitanja, prikaži konačne rezultate
    showFinalResults();
    return;
  }
 
  
  // prikaži sljedeće pitanje
  const question = questions[currentIndex];
  const div = document.createElement("div"); // stvara novi <div> element
  div.classList.add("pitanje"); // dodaje klasu za stiliziranje
  const p = document.createElement("p"); // stvara novi <p> element
  p.innerHTML = question.question; // postavlja pitanje kao sadržaj elementa
  div.appendChild(p); // dodaje <p> element u <div> element */
   
  const answers = shuffle([question.correct_answer, ...question.incorrect_answers]); // miješa odgovore nasumično
  answers.forEach((answer) => {
    const button = document.createElement("button"); // stvara dugme za odgovor
    button.innerHTML = answer; // postavlja tekst dugmeta na odgovor
    button.addEventListener("click", () => {
      // dodaje slušač događaja na klik
      if (answer === question.correct_answer) {
        div.style.backgroundColor = "#24bd30bf";
        button.classList.add("correct"); // dodaje klasu za stiliziranje tačnih odgovora
        userAnswers.push(true);
      } else {
        div.style.backgroundColor = "#c72222bf";
        button.classList.add("incorrect"); // dodaje klasu za stiliziranje netačnih odgovora
        userAnswers.push(false);
      }
      // sakrij trenutno pitanje i prikaži sljedeće nakon 1 sekunde
      setTimeout(() => {
        div.style.display = "none";
      }, 1000);
    
      setTimeout(() => {
        showNextQuestion();
      }, 1000);
    });
    div.appendChild(button); // dodaje dugme u <div> element
  });

  mjesto.innerHTML = ""; // briše sve prethodne elemente iz mjesta za prikazivanje pitanja
  mjesto.appendChild(div); // dodaje <div> element u postojeći <div> element
}
function showFinalResults() {
  const correctAnswersCount = userAnswers.filter(answer => answer === true
    ).length;
    const totalQuestionsCount = questions.length;
    const div = document.createElement("div"); // stvara novi <div> element
    div.classList.add("rezultati"); // dodaje klasu za stiliziranje
    const p = document.createElement("p"); // stvara novi <p> element
    p.innerHTML = `Your score is: ${correctAnswersCount}/${totalQuestionsCount -1} `; // prikazuje rezultate korisnika
    div.appendChild(p); // dodaje <p> element u <div> element */
    
    const button = document.createElement("button"); // stvara dugme za ponovno pokretanje kviza
    button.innerHTML = "Run the quiz"; // postavlja tekst dugmeta
    button.addEventListener("click", () => {
    // resetuje varijable i prikazuje prvo pitanje
    currentIndex = 0;
    userAnswers.length = 0;
    showNextQuestion();
   
    });
    div.appendChild(button); // dodaje dugme u <div> element
    
    mjesto.innerHTML = ""; // briše sve prethodne elemente iz mjesta za prikazivanje pitanja
    mjesto.appendChild(div); // dodaje <div> element u postojeći <div> element
  
    }

showNextQuestion()
showFinalResults()

}

Ole()

});


