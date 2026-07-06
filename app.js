const jobTypes = [
  "Shop or retail worker",
  "Delivery worker",
  "Security guard",
  "Warehouse worker",
  "Cleaner",
  "Salon worker",
  "Reception helper",
  "Driver",
  "Factory worker",
  "Construction worker"
];

const scenarios = [
  {
    id: "leave",
    title: "Ask your manager for one day leave",
    role: "Manager",
    level: "Easy",
    minutes: "3 min",
    summary: "Ask for leave politely and explain why you need it.",
    phrases: [
      "May I take one day leave tomorrow?",
      "I have some personal work tomorrow.",
      "I will finish today's work before I leave."
    ],
    turns: [
      {
        app: "Good morning. What do you need?",
        better: "Sir, may I take one day leave tomorrow?",
        polite: "I have some personal work. May I take one day leave tomorrow?"
      },
      {
        app: "Is it urgent?",
        better: "Yes, it is important personal work.",
        polite: "Yes, it is urgent. I will manage my work before I go."
      },
      {
        app: "Who will handle your work tomorrow?",
        better: "I spoke to my coworker. They can help for one day.",
        polite: "I have informed my coworker, and they can support for one day."
      },
      {
        app: "Okay. Please send me a message with the date.",
        better: "Thank you. I will send the message now.",
        polite: "Thank you, sir. I will send the leave message now."
      }
    ]
  },
  {
    id: "customer",
    title: "Talk to a customer politely",
    role: "Customer",
    level: "Easy",
    minutes: "3 min",
    summary: "Help a customer with calm and respectful language.",
    phrases: [
      "How can I help you?",
      "Please give me one moment.",
      "Thank you for waiting."
    ],
    turns: [
      {
        app: "Excuse me, can you help me find this item?",
        better: "Yes, I can help you. What item are you looking for?",
        polite: "Of course. Please tell me what item you need."
      },
      {
        app: "I need a blue shirt in medium size.",
        better: "Let me check the medium size for you.",
        polite: "Sure. Please give me one moment while I check."
      },
      {
        app: "Do you have any discount?",
        better: "I will check the latest offer for you.",
        polite: "Let me check the current offer and explain it to you."
      }
    ]
  },
  {
    id: "delay",
    title: "Explain a delay",
    role: "Manager",
    level: "Easy",
    minutes: "2 min",
    summary: "Explain lateness without sounding careless.",
    phrases: [
      "I am sorry for the delay.",
      "I am on the way now.",
      "I will reach in about fifteen minutes."
    ],
    turns: [
      {
        app: "Why are you late today?",
        better: "I am sorry. There was traffic on the way.",
        polite: "I am sorry for the delay. There was heavy traffic today."
      },
      {
        app: "When will you reach?",
        better: "I will reach in about fifteen minutes.",
        polite: "I am on the way now and will reach in about fifteen minutes."
      },
      {
        app: "Please inform earlier next time.",
        better: "Yes, I will inform earlier next time.",
        polite: "Yes, I understand. I will inform earlier next time."
      }
    ]
  },
  {
    id: "help",
    title: "Ask a coworker for help",
    role: "Coworker",
    level: "Easy",
    minutes: "2 min",
    summary: "Ask for support without feeling embarrassed.",
    phrases: [
      "Can you please help me?",
      "I am not sure how to do this.",
      "Thank you for helping me."
    ],
    turns: [
      {
        app: "You look busy. What happened?",
        better: "Can you please help me with this task?",
        polite: "I am not sure how to do this. Can you please help me for a minute?"
      },
      {
        app: "Sure. Which part is difficult?",
        better: "This part is difficult for me.",
        polite: "I understand the first part, but this step is difficult for me."
      },
      {
        app: "No problem. I will show you.",
        better: "Thank you for helping me.",
        polite: "Thank you. I really appreciate your help."
      }
    ]
  },
  {
    id: "problem",
    title: "Report a problem at work",
    role: "Supervisor",
    level: "Medium",
    minutes: "3 min",
    summary: "Tell a supervisor about a problem clearly.",
    phrases: [
      "There is a problem with the machine.",
      "I noticed this problem just now.",
      "What should I do next?"
    ],
    turns: [
      {
        app: "What do you want to report?",
        better: "There is a problem with the machine.",
        polite: "I noticed a problem with the machine just now."
      },
      {
        app: "Is anyone hurt?",
        better: "No, nobody is hurt.",
        polite: "No, nobody is hurt. I stopped using it immediately."
      },
      {
        app: "Good. Please wait there.",
        better: "Okay, I will wait here.",
        polite: "Okay. I will wait here and make sure nobody uses it."
      }
    ]
  },
  {
    id: "interview",
    title: "Answer interview questions",
    role: "Interviewer",
    level: "Medium",
    minutes: "4 min",
    summary: "Practice simple interview answers with confidence.",
    phrases: [
      "My name is...",
      "I have experience in...",
      "I am hardworking and punctual."
    ],
    turns: [
      {
        app: "Please introduce yourself.",
        better: "My name is Ravi. I have two years of work experience.",
        polite: "My name is Ravi. I have two years of experience, and I am hardworking and punctual."
      },
      {
        app: "Why do you want this job?",
        better: "I want to learn and do stable work.",
        polite: "I want this job because I can learn, work hard, and support the team."
      },
      {
        app: "Can you work different shifts?",
        better: "Yes, I can work different shifts.",
        polite: "Yes, I am comfortable working different shifts if needed."
      }
    ]
  },
  {
    id: "complaint",
    title: "Handle a complaint",
    role: "Customer",
    level: "Medium",
    minutes: "4 min",
    summary: "Stay polite with an unhappy customer.",
    phrases: [
      "I am sorry for the trouble.",
      "Let me check this for you.",
      "I will call my manager."
    ],
    turns: [
      {
        app: "I am not happy with this service.",
        better: "I am sorry for the trouble.",
        polite: "I am sorry for the trouble. Please tell me what happened."
      },
      {
        app: "I have been waiting for a long time.",
        better: "Thank you for waiting. Let me check now.",
        polite: "I understand. Thank you for waiting. Let me check this for you now."
      },
      {
        app: "I want to speak to the manager.",
        better: "I will call my manager now.",
        polite: "Of course. I will call my manager to help you."
      }
    ]
  },
  {
    id: "salary",
    title: "Ask about salary or shift timing",
    role: "Manager",
    level: "Medium",
    minutes: "3 min",
    summary: "Ask practical work questions respectfully.",
    phrases: [
      "May I ask about my shift timing?",
      "Can you please explain the salary date?",
      "Thank you for explaining."
    ],
    turns: [
      {
        app: "Yes, what do you want to ask?",
        better: "May I ask about my shift timing?",
        polite: "Sir, may I ask about my shift timing for this week?"
      },
      {
        app: "Your shift is 9 AM to 6 PM.",
        better: "Thank you. Is this timing for the full week?",
        polite: "Thank you. Can you please confirm if this timing is for the full week?"
      },
      {
        app: "Anything else?",
        better: "Can you please explain the salary date?",
        polite: "Yes, can you please tell me when the salary will be credited?"
      }
    ]
  },
  {
    id: "call-update",
    title: "Call someone for work updates",
    role: "Coworker",
    level: "Easy",
    minutes: "2 min",
    summary: "Make a short work update call.",
    phrases: [
      "I am calling about today's work.",
      "Can you please give me an update?",
      "I will inform the manager."
    ],
    turns: [
      {
        app: "Hello, why did you call?",
        better: "I am calling about today's work.",
        polite: "Hi, I am calling about today's work update."
      },
      {
        app: "The delivery is still pending.",
        better: "Okay. When will it be completed?",
        polite: "Okay, thank you. Can you please tell me when it will be completed?"
      },
      {
        app: "It may take one more hour.",
        better: "Okay, I will inform the manager.",
        polite: "Okay, I understand. I will inform the manager about the update."
      }
    ]
  }
];

const storage = {
  get(key, fallback) {
    try {
      return JSON.parse(localStorage.getItem(key)) ?? fallback;
    } catch {
      return fallback;
    }
  },
  set(key, value) {
    localStorage.setItem(key, JSON.stringify(value));
  }
};

const state = {
  scenario: scenarios[0],
  turnIndex: 0,
  lastSuggestion: "",
  savedPhrases: storage.get("workspeak.phrases", []),
  progress: storage.get("workspeak.progress", { sessions: 0, lines: 0 }),
  lastSceneId: storage.get("workspeak.lastSceneId", scenarios[0].id)
};

const elements = {
  jobType: document.querySelector("#jobType"),
  goalSelect: document.querySelector("#goalSelect"),
  scenarioCards: document.querySelector("#scenarioCards"),
  resumeButton: document.querySelector("#resumeButton"),
  sceneMeta: document.querySelector("#sceneMeta"),
  sceneTitle: document.querySelector("#sceneTitle"),
  conversationLog: document.querySelector("#conversationLog"),
  userResponse: document.querySelector("#userResponse"),
  micStatus: document.querySelector("#micStatus"),
  micButton: document.querySelector("#micButton"),
  replyButton: document.querySelector("#replyButton"),
  tryAgainButton: document.querySelector("#tryAgainButton"),
  startButton: document.querySelector("#startButton"),
  exampleButton: document.querySelector("#exampleButton"),
  feedbackTitle: document.querySelector("#feedbackTitle"),
  feedbackText: document.querySelector("#feedbackText"),
  betterSentence: document.querySelector("#betterSentence"),
  savePhraseButton: document.querySelector("#savePhraseButton"),
  savedPhrases: document.querySelector("#savedPhrases"),
  sessionsDone: document.querySelector("#sessionsDone"),
  linesSpoken: document.querySelector("#linesSpoken"),
  phrasesSaved: document.querySelector("#phrasesSaved"),
  streakNumber: document.querySelector("#streakNumber"),
  progressHint: document.querySelector("#progressHint")
};

function init() {
  jobTypes.forEach((job) => elements.jobType.append(new Option(job, job)));
  renderScenarioCards();
  selectScenario(state.lastSceneId, false);
  bindEvents();
  renderSavedPhrases();
  renderProgress();
  updateMicStatus();
  route();
}

function bindEvents() {
  elements.resumeButton.addEventListener("click", () => {
    selectScenario(state.lastSceneId, true);
    document.querySelector(".practice-workspace").scrollIntoView({ behavior: "smooth", block: "start" });
  });
  elements.startButton.addEventListener("click", () => startRoleplay(true));
  elements.exampleButton.addEventListener("click", playExample);
  elements.replyButton.addEventListener("click", submitReply);
  elements.tryAgainButton.addEventListener("click", tryAgain);
  elements.savePhraseButton.addEventListener("click", saveCurrentPhrase);
  elements.micButton.addEventListener("click", listenToUser);
  window.addEventListener("hashchange", route);
}

function route() {
  const routeName = (location.hash || "#practice").replace("#", "");
  document.querySelectorAll(".view").forEach((view) => {
    view.classList.toggle("is-active", view.id === `${routeName}View`);
  });
  document.querySelectorAll(".nav-link").forEach((link) => {
    link.classList.toggle("is-active", link.dataset.route === routeName);
  });
}

function renderScenarioCards() {
  elements.scenarioCards.innerHTML = "";
  scenarios.forEach((scenario) => {
    const card = document.createElement("button");
    card.className = "scenario-card";
    card.type = "button";
    card.dataset.scenarioId = scenario.id;
    card.innerHTML = `
      <strong>${escapeHtml(scenario.title)}</strong>
      <p>${escapeHtml(scenario.summary)}</p>
      <span class="scenario-meta">
        <span>${escapeHtml(scenario.role)}</span>
        <span>${scenario.turns.length} turns</span>
        <span>${escapeHtml(scenario.minutes)}</span>
      </span>
    `;
    card.addEventListener("click", () => {
      selectScenario(scenario.id, true);
      document.querySelector(".practice-workspace").scrollIntoView({ behavior: "smooth", block: "start" });
    });
    elements.scenarioCards.append(card);
  });
}

function selectScenario(id, startNow) {
  state.scenario = scenarios.find((scenario) => scenario.id === id) || scenarios[0];
  state.lastSceneId = state.scenario.id;
  storage.set("workspeak.lastSceneId", state.lastSceneId);

  elements.sceneTitle.textContent = state.scenario.title;
  elements.sceneMeta.textContent = `${state.scenario.role} conversation`;

  document.querySelectorAll(".scenario-card").forEach((card) => {
    card.classList.toggle("is-selected", card.dataset.scenarioId === state.scenario.id);
  });

  if (startNow) {
    startRoleplay(true);
  } else {
    resetConversation();
  }
}

function startRoleplay(countSession) {
  state.turnIndex = 0;
  state.lastSuggestion = "";
  resetConversation();
  addMessage(state.scenario.role, state.scenario.turns[0].app, "app");
  speak(state.scenario.turns[0].app);

  if (countSession) {
    state.progress.sessions += 1;
    saveProgress();
  }
}

function resetConversation() {
  elements.conversationLog.innerHTML = "";
  elements.userResponse.value = "";
  showFeedback("Ready when you are.", "Use simple words first. Then keep the better sentence.", "");
}

function playExample() {
  const lines = state.scenario.turns
    .map((turn) => `${state.scenario.role}: ${turn.app}. You: ${pickSuggestion(turn)}`)
    .join(" ");
  speak(lines);
  showFeedback("Example playing", "Listen once, then practice the same scene in your own voice.", state.scenario.phrases[0]);
}

function submitReply() {
  const reply = elements.userResponse.value.trim();
  const turn = state.scenario.turns[state.turnIndex];

  if (!turn) {
    showFeedback("Scene complete", "Start again when you want more practice.", state.scenario.phrases[0]);
    return;
  }

  if (!reply) {
    showFeedback("Try a short reply", "Even a simple sentence is enough. Say it slowly and clearly.", pickSuggestion(turn));
    return;
  }

  addMessage("You", reply, "user");
  const suggestion = pickSuggestion(turn);
  addMessage("Better way", suggestion, "coach");
  showFeedback("Good", "This version is ready to use at work.", suggestion);
  elements.userResponse.value = "";

  state.progress.lines += 1;
  saveProgress();
  state.turnIndex += 1;

  if (state.turnIndex < state.scenario.turns.length) {
    window.setTimeout(() => {
      const nextLine = state.scenario.turns[state.turnIndex].app;
      addMessage(state.scenario.role, nextLine, "app");
      speak(nextLine);
    }, 550);
  } else {
    window.setTimeout(() => {
      addMessage("Coach", "Nice work. You finished this practice scene.", "coach");
      speak("Nice work. You finished this practice scene.");
      showFeedback("Scene complete", "Repeat it once more to make the words feel natural.", state.scenario.phrases[0]);
    }, 550);
  }
}

function pickSuggestion(turn) {
  const goal = elements.goalSelect.value;
  if (goal === "clear") return turn.better;
  return turn.polite;
}

function tryAgain() {
  const turn = state.scenario.turns[Math.min(state.turnIndex, state.scenario.turns.length - 1)];
  elements.userResponse.value = "";
  showFeedback("Try again", "Say it slowly. You can use this sentence if you want.", pickSuggestion(turn));
}

function saveCurrentPhrase() {
  const phrase = state.lastSuggestion || elements.betterSentence.textContent.trim();
  if (!phrase || state.savedPhrases.includes(phrase)) return;

  state.savedPhrases.unshift(phrase);
  storage.set("workspeak.phrases", state.savedPhrases);
  renderSavedPhrases();
  renderProgress();
  showFeedback("Saved", "This phrase is now in your saved list.", phrase);
}

function listenToUser() {
  const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
  const isSecureEnough = window.isSecureContext || location.hostname === "localhost" || location.hostname === "127.0.0.1";

  if (!SpeechRecognition) {
    setMicStatus("Speech recognition is not supported in this browser. Try Chrome or Edge.", "warning");
    showFeedback("Mic not available", "This browser does not support speech recognition. You can type the line for now.", "");
    return;
  }

  if (!isSecureEnough) {
    setMicStatus("Mic needs HTTPS or localhost. It should work better after Cloudflare hosting.", "warning");
    showFeedback("Host first", "The mic usually needs HTTPS or localhost. After Cloudflare hosting, try it again in Chrome or Edge.", "");
    return;
  }

  const recognition = new SpeechRecognition();
  recognition.lang = "en-IN";
  recognition.interimResults = false;
  recognition.maxAlternatives = 1;
  elements.micButton.classList.add("is-listening");
  setMicStatus("Listening now. Speak your reply clearly.", "ready");
  recognition.start();

  recognition.addEventListener("result", (event) => {
    elements.userResponse.value = event.results[0][0].transcript;
    setMicStatus("Got it. Check the text, then press Reply.", "ready");
  });

  recognition.addEventListener("end", () => {
    elements.micButton.classList.remove("is-listening");
    if (!elements.userResponse.value.trim()) {
      updateMicStatus();
    }
  });

  recognition.addEventListener("error", (event) => {
    elements.micButton.classList.remove("is-listening");
    const message = event.error === "not-allowed"
      ? "Mic permission was blocked. Allow microphone access in the browser and try again."
      : "The mic did not catch that clearly. You can speak again or type the line.";
    setMicStatus(message, "warning");
    showFeedback("Try again", message, "");
  });
}

function updateMicStatus() {
  const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
  const isSecureEnough = window.isSecureContext || location.hostname === "localhost" || location.hostname === "127.0.0.1";

  if (!SpeechRecognition) {
    setMicStatus("Speech recognition needs Chrome or Edge. Typing still works.", "warning");
  } else if (!isSecureEnough) {
    setMicStatus("Mic needs HTTPS or localhost. Cloudflare hosting should fix this.", "warning");
  } else {
    setMicStatus("Mic is available. Press the mic and allow browser permission.", "ready");
  }
}

function setMicStatus(message, tone) {
  elements.micStatus.textContent = message;
  elements.micStatus.classList.toggle("is-ready", tone === "ready");
  elements.micStatus.classList.toggle("is-warning", tone === "warning");
}

function speak(text) {
  if (!("speechSynthesis" in window)) return;
  window.speechSynthesis.cancel();
  const utterance = new SpeechSynthesisUtterance(text);
  utterance.lang = "en-IN";
  utterance.rate = 0.88;
  window.speechSynthesis.speak(utterance);
}

function showFeedback(title, text, better) {
  elements.feedbackTitle.textContent = title;
  elements.feedbackText.textContent = text;
  if (better) {
    elements.betterSentence.hidden = false;
    elements.betterSentence.textContent = better;
    elements.savePhraseButton.disabled = false;
    state.lastSuggestion = better;
  } else {
    elements.betterSentence.hidden = true;
    elements.betterSentence.textContent = "";
    elements.savePhraseButton.disabled = true;
    state.lastSuggestion = "";
  }
}

function addMessage(sender, text, type) {
  const message = document.createElement("div");
  message.className = `message ${type}`;
  message.innerHTML = `<strong>${escapeHtml(sender)}</strong><span>${escapeHtml(text)}</span>`;
  elements.conversationLog.append(message);
  elements.conversationLog.scrollTop = elements.conversationLog.scrollHeight;
}

function renderSavedPhrases() {
  elements.savedPhrases.innerHTML = "";
  if (!state.savedPhrases.length) {
    elements.savedPhrases.innerHTML = '<div class="empty-state">Save phrases during practice. Your useful work sentences will appear here.</div>';
    return;
  }

  state.savedPhrases.forEach((phrase) => {
    const card = document.createElement("article");
    card.className = "phrase-card";
    card.innerHTML = `<p>${escapeHtml(phrase)}</p><button class="ghost-button" type="button">Listen</button>`;
    card.querySelector("button").addEventListener("click", () => speak(phrase));
    elements.savedPhrases.append(card);
  });
}

function renderProgress() {
  elements.sessionsDone.textContent = state.progress.sessions;
  elements.linesSpoken.textContent = state.progress.lines;
  elements.phrasesSaved.textContent = state.savedPhrases.length;
  elements.streakNumber.textContent = state.progress.lines;

  if (state.progress.lines >= 15) {
    elements.progressHint.textContent = "You are building a useful habit. Practice the hardest scene again today.";
  } else if (state.savedPhrases.length >= 3) {
    elements.progressHint.textContent = "Listen to your saved phrases and say each one twice.";
  } else {
    elements.progressHint.textContent = "Repeat one scene three times. Confidence comes from rehearsal.";
  }
}

function saveProgress() {
  storage.set("workspeak.progress", state.progress);
  renderProgress();
}

function escapeHtml(value) {
  return String(value).replace(/[&<>"']/g, (char) => ({
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&#039;"
  })[char]);
}

if ("serviceWorker" in navigator) {
  window.addEventListener("load", () => {
    navigator.serviceWorker.register("./sw.js").catch(() => {});
  });
}

init();
