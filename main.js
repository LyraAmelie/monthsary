document.addEventListener('DOMContentLoaded', () => {
  const revealBtn = document.getElementById('revealBtn');
  const letterContainer = document.getElementById('loveLetter');
  const music = document.getElementById('bgMusic');
  const musicBtn = document.getElementById('musicToggle');
  const modal = document.getElementById('surpriseModal');
  const closeModal = document.getElementById('closeModal');
  const quiz = document.getElementById('quiz');
  const heartsContainer = document.getElementById('heartsContainer');
  const quizResult = document.getElementById('quizResult');
  const popup = document.getElementById('popupMessage');
  const letterForm = document.getElementById('letterForm');
  const letterOutput = document.getElementById('letterOutput');
  const sendButton = document.getElementById('sendToEmail');

  const sweetMessages = [
    "You got it right",
    "Perfect answer",
    "That's correct",
    "You really know us",
    "That's my Thway"
  ];

  const wrongMessages = [
    "Try again",
    "Not quite right",
    "Oops, wrong one",
    "Close but not it",
    "Wrong answer"
  ];

  musicBtn.addEventListener('click', () => {
    if (music.paused) {
      music.play();
      musicBtn.innerHTML = '<span class="material-icons">pause</span>';
    } else {
      music.pause();
      musicBtn.innerHTML = '<span class="material-icons">music_note</span>';
    }
  });

  revealBtn.addEventListener('click', () => {
    typeLoveMessage("Happy 7 monthsary Babe. I can't believe it's been 7 months already. Time has just flown by, and I'm so happy it's been with you. I know things aren't always perfect, but I love how we handle challenges together.  I'm really proud of us and the relationship we've built. We've created so many amazing memories. I can't wait to see what the future holds for us. I'm excited for all the new memories we'll make and all the adventures we'll go on. Thank you for everything you do and for being you. Here’s to more months and years together. I love you so much Babe 💕", letterContainer, 20);
    revealBtn.style.display = 'none';
    quiz.style.display = 'block';
    setTimeout(() => {
      modal.style.display = 'flex';
    }, 60000);
  });

  closeModal.addEventListener('click', () => {
    modal.style.display = 'none';
  });

  function typeLoveMessage(text, element, speed) {
    let i = 0;
    element.innerHTML = '';
    element.style.display = 'block';
    function type() {
      if (i < text.length) {
        element.innerHTML += text.charAt(i) === '\n' ? '<br>' : text.charAt(i);
        i++;
        setTimeout(type, speed);
      }
    }
    type();
  }

  function showPopupMessage(isCorrect) {
    const message = isCorrect
      ? sweetMessages[Math.floor(Math.random() * sweetMessages.length)]
      : wrongMessages[Math.floor(Math.random() * wrongMessages.length)];

    popup.innerHTML = `<span class="material-icons">${isCorrect ? 'favorite' : 'error'}</span> ${message}`;
    popup.style.display = 'block';
    popup.style.opacity = '1';

    setTimeout(() => {
      popup.style.opacity = '0';
      setTimeout(() => {
        popup.style.display = 'none';
      }, 500);
    }, 3000);
  }

  function checkQuizResult() {
    const correctAnswered = document.querySelectorAll('.answered-correct').length;
    if (correctAnswered === 3) {
      quizResult.innerHTML = '<p>You know me so well. I love you more!</p>';
      setTimeout(() => {
        modal.style.display = 'flex';
      }, 2000);
    }
  }

  document.querySelectorAll('.answer').forEach(btn => {
    btn.addEventListener('click', () => {
      const isCorrect = btn.classList.contains('correct');
      if (isCorrect) btn.classList.add('answered-correct');
      btn.parentElement.querySelectorAll('button').forEach(b => b.disabled = true);
      showPopupMessage(isCorrect);
      checkQuizResult();
    });
  });

  function createHeart() {
    const heart = document.createElement('span');
    heart.classList.add('material-icons');
    heart.textContent = 'favorite';
    heart.style.position = 'absolute';
    heart.style.left = Math.random() * window.innerWidth + 'px';
    heart.style.top = window.innerHeight + 'px';
    heart.style.color = '#f06292';
    heart.style.opacity = 0.7;
    heart.style.fontSize = Math.random() * 20 + 10 + 'px';
    heartsContainer.appendChild(heart);

    let y = window.innerHeight;
    const interval = setInterval(() => {
      y -= 2;
      heart.style.top = y + 'px';
      if (y < -20) {
        heart.remove();
        clearInterval(interval);
      }
    }, 20);
  }

  setInterval(createHeart, 300);

  
  const images = [
    { src: "no2.jpg", caption: "Our First Date after becoming lovers" },
    { src: "no3.jpg", caption: "Eain Pyan Chain" },
    { src: "no4.jpg", caption: "Kiss Kiss" },
    { src: "no5.jpg", caption: "Peace" },
    { src: "no6.jpg", caption: "Mirror Selfie" },
    { src: "no7.jpg", caption: "Holding Hand" },
    { src: "no8.jpg", caption: "A thel Pyaung Pyan:3" },
    { src: "no9.jpg", caption: "Private Cinema Date" },
    { src: "no10.jpg", caption: "UniformDay" },
    
   
  ];

  let currentIndex = 0;
  const imgElement = document.getElementById("slideshowImage");
  const captionElement = document.getElementById("slideshowCaption");
  const nextButton = document.getElementById("nextPhoto");

  function showNextImage() {
    currentIndex = (currentIndex + 1) % images.length;
    imgElement.src = images[currentIndex].src;
    captionElement.textContent = images[currentIndex].caption || '';
  }

  nextButton.addEventListener("click", showNextImage);

  document.querySelector(".submit-open-answer").addEventListener("click", function () {
    const input = document.querySelector(".open-answer").value.trim().toLowerCase();
    const popupFood = document.getElementById("foodAnswerPopup");
    const message = document.getElementById("foodPopupMessage");

    if (input === "you") {
      message.textContent = "Aww 🥺 You got it right! It’s always been YOU 💖";
    } else {
      message.textContent = "Nope... But the answer is still YOU 💘";
    }

    popupFood.style.display = "flex";
  });

  document.getElementById("closeFoodPopup").addEventListener("click", function () {
    document.getElementById("foodAnswerPopup").style.display = "none";
  });
});



document.querySelector(".submit-love-answer").addEventListener("click", function () {
  const inputField = document.querySelector(".love-answer");
  const input = inputField.value.trim();
  const popup = document.getElementById("loveAnswerPopup");
  const message = document.getElementById("lovePopupMessage");
  const validation = document.querySelector(".validation-message");

  if (input === "") {
    validation.style.display = "block";
    inputField.focus();
    return;
  } else {
    validation.style.display = "none";
  }

  const sweetMessages = [
    "That’s the kind of answer I’ll never forget.",
    "I really felt that. You're something special.",
    "You always know the perfect thing to say.",
    "That answer made my heart skip a beat.",
    "You're the reason ordinary moments feel magical.",
    "Every word you say just confirms it — you're the one.",
    "It’s moments like this that remind me how lucky I am.",
    "That answer is going in my memory forever.",
    "I couldn’t ask for a more beautiful reply.",
    "You're everything I've been hoping for."
  ];

  const randomMsg = sweetMessages[Math.floor(Math.random() * sweetMessages.length)];
  message.textContent = randomMsg;

  popup.style.display = "flex";
});

document.getElementById("closeLovePopup").addEventListener("click", function () {
  document.getElementById("loveAnswerPopup").style.display = "none";
});




document.addEventListener("DOMContentLoaded", () => {
  const quiz = document.getElementById("quiz");

  const popup = document.createElement("div");
  popup.style.position = "fixed";
  popup.style.top = "20px";
  popup.style.left = "50%";
  popup.style.transform = "translateX(-50%)";
  popup.style.padding = "15px 25px";
  popup.style.borderRadius = "8px";
  popup.style.fontWeight = "600";
  popup.style.color = "#fff";
  popup.style.zIndex = "9999";
  popup.style.display = "none";
  document.body.appendChild(popup);

  const correctMessages = [
    "Good job sir",
    "Iloveyousomuchh babe",
    "Rbwrr u",
    "Taw dl rbwrr",
    "Heheee"
  ];

  const wrongMessages = [
    "Mharr yin sate soe p",
    "Ma khaw tok bu",
    "Mharr yin kiss ma pyy bu",
    "Hoont",
    "Litttt"
  ];

  function getRandomMessage(arr) {
    return arr[Math.floor(Math.random() * arr.length)];
  }

  function showPopup(message, correct) {
    popup.textContent = message;
    popup.style.backgroundColor = correct ? "#4caf50" : "#f44336";
    popup.style.display = "block";
    clearTimeout(popup.timeout);
    popup.timeout = setTimeout(() => {
      popup.style.display = "none";
    }, 2000);
  }

  quiz.querySelectorAll(".question").forEach(question => {
    const answers = question.querySelectorAll(".answer");
    if (answers.length) {
      answers.forEach(button => {
        button.addEventListener("click", () => {
          answers.forEach(btn => {
            btn.style.backgroundColor = "";
            btn.disabled = false;
          });
          if(button.classList.contains("correct")) {
            button.style.backgroundColor = "#4caf50";
            answers.forEach(btn => btn.disabled = true);
            showPopup(getRandomMessage(correctMessages), true);
          } else {
            button.style.backgroundColor = "#f44336";
            const correctBtn = question.querySelector(".answer.correct");
            if(correctBtn) correctBtn.style.backgroundColor = "#4caf50";
            answers.forEach(btn => btn.disabled = true);
            showPopup(getRandomMessage(wrongMessages), false);
          }
        });
      });
    }

    const submitBtn = question.querySelector(".submit-open-answer");
    if(submitBtn) {
      submitBtn.addEventListener("click", () => {
      });
    }
  });
});
