const COLORS = ["blue", "yellow", "red", "green", "orange"];
const COLOR_NAMES = {
  en: {
    blue: "Blue",
    yellow: "Yellow",
    red: "Red",
    green: "Green",
    orange: "Orange",
  },
  zh: {
    blue: "蓝色",
    yellow: "黄色",
    red: "红色",
    green: "绿色",
    orange: "橙色",
  },
};

const WALL_PATTERN = [
  ["blue", "yellow", "red", "green", "orange"],
  ["orange", "blue", "yellow", "red", "green"],
  ["green", "orange", "blue", "yellow", "red"],
  ["red", "green", "orange", "blue", "yellow"],
  ["yellow", "red", "green", "orange", "blue"],
];

const FLOOR_PENALTIES = [-1, -1, -2, -2, -2, -3, -3];
const FACTORY_COUNT = 5;
const TILES_PER_COLOR = 20;

const I18N = {
  en: {
    headerKicker: "Azul / Palace of Tiles",
    headerTitle: "Azul: Elegant AI Duel",
    headerSubtitle: "Draft tiles, build your wall, and outscore the AI.",
    btnNewGame: "New Game",
    btnRules: "Rules",
    btnLang: "中文",
    btnSoundOn: "Sound: On",
    btnSoundOff: "Sound: Off",
    rulesTitle: "Quick Rules",
    rulesClose: "Close",
    rulesBody: [
      "On your turn, take all tiles of one color from a factory or the center. If you take from the center first, you also take the first-player token (counts as a floor penalty).",
      "Place tiles into a single pattern line. If the line is full, one tile moves to the wall during tiling. Extra tiles overflow to the floor.",
      "Scoring happens during wall tiling. Adjacent tiles score by line length horizontally and vertically. Floor tiles apply penalties.",
      "The game ends when any player completes a full row on their wall. Final bonuses apply for rows, columns, and complete colors.",
    ],
    difficultyTitle: "Choose AI Difficulty",
    difficultyStart: "Start Match",
    difficultyEasyTitle: "Easy",
    difficultyEasyDesc: "Relaxed pace. The AI focuses on safe picks.",
    difficultyMediumTitle: "Medium",
    difficultyMediumDesc: "Balanced opponent that avoids penalties and scores steadily.",
    difficultyHardTitle: "Hard",
    difficultyHardDesc: "Aggressive AI that blocks and maximizes scoring.",
    labelGuide: "Guide",
    hintRules: "Read the rules first. Close this panel to continue.",
    hintDifficulty: "Pick a difficulty to begin your match.",
    hintPickSource: "Choose a factory or center color to draft tiles.",
    hintChooseLine: "Choose a valid pattern line to place your tiles.",
    hintAITurn: "AI is thinking. Watch its move.",
    statusRound: "Round",
    statusTurn: "Turn",
    statusPhase: "Phase",
    statusSelection: "Selection",
    statusSetup: "Setup",
    turnPlayer: "Your turn",
    turnAI: "AI turn",
    phaseTile: "Tile Picking",
    selectionNone: "No selection",
    selectionPending: "{count} {color} tiles selected",
    selectionAI: "AI thinking...",
    factoriesTitle: "Factories",
    factoriesSubtitle: "Pick a tile color from a factory or the center.",
    centerTitle: "Center",
    centerTokenAvailable: "First-player token available",
    centerTokenNext: "First player next round: {player}",
    controlsDifficulty: "AI Difficulty",
    controlsHintPick: "Pick tiles to start.",
    controlsHintChoose: "Choose a pattern line.",
    logTitle: "Match Log",
    logHint: "Most recent first",
    labelScore: "Score",
    labelRows: "Rows",
    labelCols: "Cols",
    labelColors: "Colors",
    labelLine: "Line",
    labelAnyColor: "Any color",
    labelFactory: "Factory",
    labelNoTiles: "No tiles",
    overlayVictory: "Victory",
    overlayDefeat: "Defeat",
    overlayDraw: "Draw",
    overlayFinalScore: "Final score: You {player} - AI {ai}",
    overlayBonus: "Bonus: You {player}, AI {ai}",
    overlayPlayAgain: "Play Again",
    aiEasy: "Easy",
    aiMedium: "Medium",
    aiHard: "Hard",
    logNewMatch: "New match started. You play first.",
    logSelected: "Selected {count} {color} tiles. Choose a pattern line.",
    logPlaced: "You placed {count} {color} tiles on line {line}.",
    logNoValid: "No valid pattern line. {count} {color} tiles go to the floor.",
    logFinishSelection: "Finish placing your current selection.",
    logInvalidLine: "That line is not valid for this color.",
    logRoundStart: "Round {round} begins. {player} start.",
    logWallResolve: "Wall tiling resolved. You gained {gain} and {penalty} penalty.",
    logAIWallResolve: "AI gained {gain} and {penalty} penalty.",
    logGameOver: "Game over.",
    logAIFloor: "AI sends {count} {color} tiles to the floor.",
    logAIPlace: "AI takes {count} {color} tiles to line {line}.",
    logAInoMove: "AI has no legal moves.",
    logDifficulty: "AI difficulty set to {difficulty}.",
    you: "You",
    ai: "AI",
    playerName: "You",
    aiName: "AI Artisan",
  },
  zh: {
    headerKicker: "Azul / 花砖物语",
    headerTitle: "花砖物语：AI 对战版",
    headerSubtitle: "选取瓷砖，铺设墙面，击败 AI。",
    btnNewGame: "新游戏",
    btnRules: "规则",
    btnLang: "English",
    btnSoundOn: "音效：开",
    btnSoundOff: "音效：关",
    rulesTitle: "快速规则",
    rulesClose: "关闭",
    rulesBody: [
      "你的回合从工厂或中央拿取同色瓷砖。若首次从中央拿取，需要拿起始玩家标记（算作地板扣分）。",
      "将瓷砖放入一条花纹排。该行填满后，铺墙阶段会放置一块到墙面，多余瓷砖进入地板。",
      "铺墙时即时计分，水平或垂直相邻瓷砖按长度计分，地板瓷砖扣分。",
      "任意玩家完成墙面一整行即结束，结算行/列/颜色奖励。",
    ],
    difficultyTitle: "选择 AI 难度",
    difficultyStart: "开始对局",
    difficultyEasyTitle: "简单",
    difficultyEasyDesc: "节奏轻松，AI 更保守。",
    difficultyMediumTitle: "中等",
    difficultyMediumDesc: "稳健型对手，会避免扣分并稳定得分。",
    difficultyHardTitle: "困难",
    difficultyHardDesc: "强势 AI，会主动阻挡并追求高分。",
    labelGuide: "提示",
    hintRules: "先阅读规则，关闭后进入难度选择。",
    hintDifficulty: "选择一个难度开始对局。",
    hintPickSource: "请选择工厂或中央的一种颜色。",
    hintChooseLine: "请选择可放置的花纹排。",
    hintAITurn: "AI 正在行动，请稍候。",
    statusRound: "回合",
    statusTurn: "回合方",
    statusPhase: "阶段",
    statusSelection: "选择",
    statusSetup: "准备中",
    turnPlayer: "你的回合",
    turnAI: "AI 回合",
    phaseTile: "拿取瓷砖",
    selectionNone: "未选择",
    selectionPending: "已选 {count} 枚{color}",
    selectionAI: "AI 思考中...",
    factoriesTitle: "工厂圆盘",
    factoriesSubtitle: "从工厂或中央选择一种颜色。",
    centerTitle: "中央区域",
    centerTokenAvailable: "起始玩家标记可拿取",
    centerTokenNext: "下回合先手：{player}",
    controlsDifficulty: "AI 难度",
    controlsHintPick: "请先选择瓷砖。",
    controlsHintChoose: "请选择花纹排。",
    logTitle: "对局日志",
    logHint: "最新在上方",
    labelScore: "分数",
    labelRows: "行",
    labelCols: "列",
    labelColors: "颜色",
    labelLine: "行",
    labelAnyColor: "任意颜色",
    labelFactory: "工厂",
    labelNoTiles: "暂无瓷砖",
    overlayVictory: "胜利",
    overlayDefeat: "失败",
    overlayDraw: "平局",
    overlayFinalScore: "最终比分：你 {player} - AI {ai}",
    overlayBonus: "奖励：你 {player}，AI {ai}",
    overlayPlayAgain: "再来一局",
    aiEasy: "简单",
    aiMedium: "中等",
    aiHard: "困难",
    logNewMatch: "新对局开始，你先手。",
    logSelected: "已选 {count} 枚{color}，请选择花纹排。",
    logPlaced: "你将 {count} 枚{color} 放入第 {line} 行。",
    logNoValid: "无可用花纹排，{count} 枚{color} 进入地板。",
    logFinishSelection: "请先完成当前放置。",
    logInvalidLine: "该行不符合当前颜色。",
    logRoundStart: "第 {round} 回合开始，由{player}先手。",
    logWallResolve: "铺墙结算：你获得 {gain} 分，扣分 {penalty}。",
    logAIWallResolve: "AI 获得 {gain} 分，扣分 {penalty}。",
    logGameOver: "游戏结束。",
    logAIFloor: "AI 将 {count} 枚{color} 送入地板。",
    logAIPlace: "AI 将 {count} 枚{color} 放入第 {line} 行。",
    logAInoMove: "AI 无合法行动。",
    logDifficulty: "AI 难度已切换为 {difficulty}。",
    you: "你",
    ai: "AI",
    playerName: "你",
    aiName: "AI 工匠",
  },
};

const state = {
  phase: "TILE_PICKING",
  currentPlayer: "PLAYER",
  firstPlayer: "PLAYER",
  nextFirstPlayer: null,
  round: 1,
  bag: [],
  discard: [],
  factories: [],
  center: [],
  centerTokenAvailable: true,
  pendingSelection: null,
  aiDifficulty: "medium",
  pendingDifficulty: "medium",
  language: "en",
  stage: "RULES",
  zenMode: false,
  audioEnabled: false,
  activeBoard: "PLAYER",
  isMobile: false,
  aiThinking: false,
  log: [],
  players: {
    PLAYER: null,
    AI: null,
  },
  finalSummary: null,
  animation: null,
  animationTimer: null,
};

const elements = {
  app: document.getElementById("app"),
  status: document.getElementById("status-bar"),
  guide: document.getElementById("guide"),
  playerArea: document.getElementById("player-area"),
  aiArea: document.getElementById("ai-area"),
  factories: document.getElementById("factories"),
  center: document.getElementById("center"),
  controls: document.getElementById("controls"),
  log: document.getElementById("log"),
  overlay: document.getElementById("overlay"),
  rulesModal: document.getElementById("rules-modal"),
  difficultyModal: document.getElementById("difficulty-modal"),
  headerKicker: document.getElementById("header-kicker"),
  headerTitle: document.getElementById("header-title"),
  headerSubtitle: document.getElementById("header-subtitle"),
  btnNewGame: document.getElementById("btn-new-game"),
  btnRules: document.getElementById("btn-rules"),
  btnSound: document.getElementById("btn-sound"),
  btnLang: document.getElementById("btn-lang"),
  rulesTitle: document.getElementById("rules-title"),
  rulesClose: document.getElementById("rules-close"),
  rulesBody: document.getElementById("rules-body"),
  difficultyTitle: document.getElementById("difficulty-title"),
  difficultyBody: document.getElementById("difficulty-body"),
  btnStart: document.getElementById("btn-start"),
  factoriesTitle: document.getElementById("factories-title"),
  factoriesSubtitle: document.getElementById("factories-subtitle"),
  logTitle: document.getElementById("log-title"),
  logHint: document.getElementById("log-hint"),
  mobileSwitch: document.getElementById("mobile-switch"),
  tabPlayer: document.getElementById("tab-player"),
  tabAI: document.getElementById("tab-ai"),
};

let audioContext = null;

function ensureAudio() {
  if (!audioContext) {
    const AudioCtx = window.AudioContext || window.webkitAudioContext;
    if (!AudioCtx) return null;
    audioContext = new AudioCtx();
  }
  if (audioContext.state === "suspended") {
    audioContext.resume();
  }
  return audioContext;
}

function playTone({ frequency = 440, duration = 0.12, type = "sine", gain = 0.08 } = {}) {
  if (!state.audioEnabled) return;
  const ctx = ensureAudio();
  if (!ctx) return;
  const osc = ctx.createOscillator();
  const amp = ctx.createGain();
  osc.type = type;
  osc.frequency.value = frequency;
  amp.gain.value = gain;
  osc.connect(amp);
  amp.connect(ctx.destination);
  osc.start();
  osc.stop(ctx.currentTime + duration);
}

function playSfx(kind) {
  if (!state.audioEnabled) return;
  switch (kind) {
    case "pick":
      playTone({ frequency: 520, duration: 0.08, type: "triangle", gain: 0.07 });
      break;
    case "place":
      playTone({ frequency: 390, duration: 0.1, type: "sine", gain: 0.08 });
      break;
    case "floor":
      playTone({ frequency: 240, duration: 0.12, type: "sawtooth", gain: 0.05 });
      break;
    case "score":
      playTone({ frequency: 620, duration: 0.14, type: "triangle", gain: 0.09 });
      break;
    case "end":
      playTone({ frequency: 300, duration: 0.18, type: "square", gain: 0.07 });
      break;
    default:
      playTone();
  }
}

function t(key, vars = {}) {
  const dict = I18N[state.language] || I18N.en;
  const template = dict[key] || I18N.en[key] || key;
  return template.replace(/\{(\w+)\}/g, (_, token) => vars[token] ?? "");
}

function colorName(color) {
  return (COLOR_NAMES[state.language] || COLOR_NAMES.en)[color] || color;
}

function applyStaticText() {
  const dict = I18N[state.language];
  elements.headerKicker.textContent = dict.headerKicker;
  elements.headerTitle.textContent = dict.headerTitle;
  elements.headerSubtitle.textContent = dict.headerSubtitle;
  elements.btnNewGame.textContent = dict.btnNewGame;
  elements.btnRules.textContent = dict.btnRules;
  elements.btnSound.textContent = state.audioEnabled ? dict.btnSoundOn : dict.btnSoundOff;
  elements.btnLang.textContent = dict.btnLang;
  elements.rulesTitle.textContent = dict.rulesTitle;
  elements.rulesClose.textContent = dict.rulesClose;
  elements.rulesBody.innerHTML = dict.rulesBody.map((line) => `<p>${line}</p>`).join("");
  elements.difficultyTitle.textContent = dict.difficultyTitle;
  elements.btnStart.textContent = dict.difficultyStart;
  elements.factoriesTitle.textContent = dict.factoriesTitle;
  elements.factoriesSubtitle.textContent = dict.factoriesSubtitle;
  elements.logTitle.textContent = dict.logTitle;
  elements.logHint.textContent = dict.logHint;
  elements.tabPlayer.textContent = dict.playerName;
  elements.tabAI.textContent = dict.aiName;
  document.title = dict.headerTitle;
  renderDifficultyModal();
}

function setLanguage(next) {
  state.language = next;
  localStorage.setItem("azul-lang", next);
  applyStaticText();
  render();
}

function renderDifficultyModal() {
  const dict = I18N[state.language];
  const options = [
    { level: "easy", title: dict.difficultyEasyTitle, desc: dict.difficultyEasyDesc },
    { level: "medium", title: dict.difficultyMediumTitle, desc: dict.difficultyMediumDesc },
    { level: "hard", title: dict.difficultyHardTitle, desc: dict.difficultyHardDesc },
  ];
  elements.difficultyBody.innerHTML = `
    <div class="difficulty-list">
      ${options
        .map(
          (option) => `
        <div class="difficulty-card ${
          state.pendingDifficulty === option.level ? "selected" : ""
        }" data-action="select-difficulty" data-level="${option.level}">
          <h4>${option.title}</h4>
          <p>${option.desc}</p>
        </div>
      `
        )
        .join("")}
    </div>
  `;
}

function shuffle(list) {
  for (let i = list.length - 1; i > 0; i -= 1) {
    const j = Math.floor(Math.random() * (i + 1));
    [list[i], list[j]] = [list[j], list[i]];
  }
  return list;
}

function buildBag() {
  const bag = [];
  COLORS.forEach((color) => {
    for (let i = 0; i < TILES_PER_COLOR; i += 1) {
      bag.push(color);
    }
  });
  return shuffle(bag);
}

function createPlayer(name) {
  return {
    name,
    score: 0,
    wall: Array.from({ length: 5 }, () => Array(5).fill(null)),
    patternLines: [1, 2, 3, 4, 5].map((length) => ({
      length,
      color: null,
      count: 0,
    })),
    floor: [],
  };
}

function drawTiles(count) {
  const tiles = [];
  while (tiles.length < count) {
    if (state.bag.length === 0) {
      if (state.discard.length === 0) {
        break;
      }
      state.bag = shuffle(state.discard.splice(0));
    }
    const tile = state.bag.pop();
    if (tile) {
      tiles.push(tile);
    }
  }
  return tiles;
}

function refillFactories() {
  state.factories = Array.from({ length: FACTORY_COUNT }, () => drawTiles(4));
}

function startNewGame({ silent = false } = {}) {
  state.phase = "TILE_PICKING";
  state.round = 1;
  state.bag = buildBag();
  state.discard = [];
  state.players.PLAYER = createPlayer("You");
  state.players.AI = createPlayer("AI Artisan");
  state.factories = [];
  state.center = [];
  state.centerTokenAvailable = true;
  state.pendingSelection = null;
  state.firstPlayer = "PLAYER";
  state.currentPlayer = "PLAYER";
  state.nextFirstPlayer = null;
  state.finalSummary = null;
  state.aiThinking = false;
  state.log = [];
  state.animation = null;
  refillFactories();
  if (!silent) {
    addLog(t("logNewMatch"));
  }
  render();
}

function addLog(message) {
  const stamp = new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });
  state.log.unshift(`[${stamp}] ${message}`);
  state.log = state.log.slice(0, 8);
}

function triggerAnimation(animation) {
  state.animation = animation;
  if (animation.wallPlayerId) {
    playSfx("score");
  } else if (animation.floorPlayerId) {
    playSfx("floor");
  } else {
    playSfx("place");
  }
  if (state.animationTimer) {
    clearTimeout(state.animationTimer);
  }
  state.animationTimer = setTimeout(() => {
    state.animation = null;
    render();
  }, 650);
}

function wallCellHasColor(player, row, color) {
  const col = WALL_PATTERN[row].indexOf(color);
  if (col === -1) return false;
  return player.wall[row][col] !== null;
}

function validLinesForColor(player, color) {
  return player.patternLines
    .map((line, index) => {
      if (line.count === line.length) return null;
      if (line.color && line.color !== color) return null;
      if (wallCellHasColor(player, index, color)) return null;
      return index;
    })
    .filter((entry) => entry !== null);
}

function takeFromFactory(factoryIndex, color) {
  const tiles = state.factories[factoryIndex] || [];
  const picked = tiles.filter((tile) => tile === color);
  if (picked.length === 0) return { picked: [], tookToken: false };
  const remaining = tiles.filter((tile) => tile !== color);
  state.factories[factoryIndex] = [];
  state.center.push(...remaining);
  return { picked, tookToken: false };
}

function takeFromCenter(color) {
  const picked = [];
  const remaining = [];
  state.center.forEach((tile) => {
    if (tile === color) {
      picked.push(tile);
    } else {
      remaining.push(tile);
    }
  });
  if (picked.length === 0) return { picked: [], tookToken: false };
  state.center = remaining;
  let tookToken = false;
  if (state.centerTokenAvailable) {
    state.centerTokenAvailable = false;
    state.nextFirstPlayer = state.currentPlayer;
    tookToken = true;
  }
  return { picked, tookToken };
}

function addTilesToFloor(player, tiles) {
  tiles.forEach((tile) => {
    if (player.floor.length < 7) {
      player.floor.push(tile);
    } else if (tile !== "TOKEN") {
      state.discard.push(tile);
    }
  });
}

function applySelectionToLine(playerId, lineIndex) {
  const player = state.players[playerId];
  const selection = state.pendingSelection;
  if (!selection) return;
  const line = player.patternLines[lineIndex];
  const space = line.length - line.count;
  const toPlace = Math.min(space, selection.count);
  if (toPlace > 0) {
    line.color = selection.color;
    line.count += toPlace;
  }
  const overflow = selection.count - toPlace;
  if (overflow > 0) {
    addTilesToFloor(player, Array(overflow).fill(selection.color));
  }
  if (selection.tookToken) {
    addTilesToFloor(player, ["TOKEN"]);
  }
  triggerAnimation({
    source: selection.source,
    sourceId: selection.sourceId,
    sourceColor: selection.color,
    patternPlayerId: playerId,
    patternLineIndex: lineIndex,
    floorPlayerId: overflow > 0 || selection.tookToken ? playerId : null,
  });
  state.pendingSelection = null;
  addLog(
    t("logPlaced", {
      count: selection.count,
      color: colorName(selection.color),
      line: lineIndex + 1,
    })
  );
  endTurn();
}

function applySelectionToFloor(playerId, selection) {
  const player = state.players[playerId];
  addTilesToFloor(player, Array(selection.count).fill(selection.color));
  if (selection.tookToken) {
    addTilesToFloor(player, ["TOKEN"]);
  }
  triggerAnimation({
    source: selection.source,
    sourceId: selection.sourceId,
    sourceColor: selection.color,
    floorPlayerId: playerId,
  });
  addLog(
    t("logNoValid", {
      count: selection.count,
      color: colorName(selection.color),
    })
  );
  endTurn();
}

function factoriesEmpty() {
  return state.factories.every((factory) => factory.length === 0);
}

function centerEmpty() {
  return state.center.length === 0;
}

function scorePlacement(wall, row, col) {
  let horiz = 1;
  let vert = 1;
  let c = col - 1;
  while (c >= 0 && wall[row][c]) {
    horiz += 1;
    c -= 1;
  }
  c = col + 1;
  while (c < 5 && wall[row][c]) {
    horiz += 1;
    c += 1;
  }
  let r = row - 1;
  while (r >= 0 && wall[r][col]) {
    vert += 1;
    r -= 1;
  }
  r = row + 1;
  while (r < 5 && wall[r][col]) {
    vert += 1;
    r += 1;
  }
  const hasH = horiz > 1;
  const hasV = vert > 1;
  if (hasH && hasV) return horiz + vert;
  if (hasH) return horiz;
  if (hasV) return vert;
  return 1;
}

function resolveWallTiling(playerId) {
  const player = state.players[playerId];
  let gained = 0;
  player.patternLines.forEach((line, index) => {
    if (line.count === line.length && line.color) {
      const color = line.color;
      const row = index;
      const col = WALL_PATTERN[row].indexOf(color);
      if (col !== -1 && !player.wall[row][col]) {
        player.wall[row][col] = color;
        const score = scorePlacement(player.wall, row, col);
        gained += score;
      }
      const extras = line.count - 1;
      for (let i = 0; i < extras; i += 1) {
        state.discard.push(color);
      }
      line.color = null;
      line.count = 0;
    }
  });
  player.score += gained;

  let penalty = 0;
  player.floor.forEach((tile, index) => {
    if (index < FLOOR_PENALTIES.length) {
      penalty += FLOOR_PENALTIES[index];
    }
    if (tile !== "TOKEN") {
      state.discard.push(tile);
    }
  });
  player.floor = [];
  if (penalty !== 0) {
    player.score += penalty;
  }
  return { gained, penalty };
}

function countCompletedRows(wall) {
  return wall.reduce((count, row) => (row.every(Boolean) ? count + 1 : count), 0);
}

function countCompletedColumns(wall) {
  let completed = 0;
  for (let col = 0; col < 5; col += 1) {
    let full = true;
    for (let row = 0; row < 5; row += 1) {
      if (!wall[row][col]) {
        full = false;
        break;
      }
    }
    if (full) completed += 1;
  }
  return completed;
}

function countCompletedColors(wall) {
  const counts = {
    blue: 0,
    yellow: 0,
    red: 0,
    green: 0,
    orange: 0,
  };
  wall.forEach((row) => {
    row.forEach((tile) => {
      if (tile) counts[tile] += 1;
    });
  });
  return Object.values(counts).filter((value) => value === 5).length;
}

function isGameOver() {
  const playerRowComplete = countCompletedRows(state.players.PLAYER.wall);
  const aiRowComplete = countCompletedRows(state.players.AI.wall);
  return playerRowComplete > 0 || aiRowComplete > 0;
}

function applyFinalScoring() {
  const summary = {};
  Object.keys(state.players).forEach((id) => {
    const player = state.players[id];
    const rows = countCompletedRows(player.wall);
    const cols = countCompletedColumns(player.wall);
    const colors = countCompletedColors(player.wall);
    const bonus = rows * 2 + cols * 7 + colors * 10;
    player.score += bonus;
    summary[id] = { rows, cols, colors, bonus };
  });
  state.finalSummary = summary;
}

function determineWinner() {
  const playerScore = state.players.PLAYER.score;
  const aiScore = state.players.AI.score;
  if (playerScore > aiScore) return "PLAYER";
  if (aiScore > playerScore) return "AI";
  const playerRows = countCompletedRows(state.players.PLAYER.wall);
  const aiRows = countCompletedRows(state.players.AI.wall);
  if (playerRows > aiRows) return "PLAYER";
  if (aiRows > playerRows) return "AI";
  return "TIE";
}

function endRound() {
  state.phase = "WALL_TILING";
  const playerResult = resolveWallTiling("PLAYER");
  const aiResult = resolveWallTiling("AI");
  addLog(
    t("logWallResolve", {
      gain: playerResult.gained,
      penalty: Math.abs(playerResult.penalty),
    })
  );
  addLog(
    t("logAIWallResolve", {
      gain: aiResult.gained,
      penalty: Math.abs(aiResult.penalty),
    })
  );
  triggerAnimation({ wallPlayerId: "BOTH" });

  if (isGameOver()) {
    applyFinalScoring();
    state.phase = "GAME_OVER";
    const winner = determineWinner();
    showGameOver(winner);
    return;
  }

  state.round += 1;
  state.firstPlayer = state.nextFirstPlayer || state.firstPlayer;
  state.nextFirstPlayer = null;
  state.currentPlayer = state.firstPlayer;
  state.centerTokenAvailable = true;
  state.center = [];
  refillFactories();
  state.phase = "TILE_PICKING";
  addLog(
    t("logRoundStart", {
      round: state.round,
      player: state.currentPlayer === "PLAYER" ? t("you") : t("ai"),
    })
  );
  render();
  queueAIMove();
}

function endTurn() {
  if (state.phase !== "TILE_PICKING" || state.stage !== "PLAY") return;
  if (factoriesEmpty() && centerEmpty()) {
    endRound();
    return;
  }
  state.currentPlayer = state.currentPlayer === "PLAYER" ? "AI" : "PLAYER";
  render();
  queueAIMove();
}

function queueAIMove() {
  if (state.phase !== "TILE_PICKING" || state.stage !== "PLAY") return;
  if (state.currentPlayer !== "AI") return;
  state.aiThinking = true;
  if (state.isMobile) {
    setActiveBoard("AI");
  }
  render();
  const delay = state.aiDifficulty === "easy" ? 700 : state.aiDifficulty === "hard" ? 1500 : 1100;
  setTimeout(() => {
    runAIMove();
  }, delay);
}

function estimateFloorPenalty(currentCount, addedCount) {
  const end = Math.min(7, currentCount + addedCount);
  let penalty = 0;
  for (let i = currentCount; i < end; i += 1) {
    penalty += FLOOR_PENALTIES[i];
  }
  return Math.abs(penalty);
}

function estimateBlocking(opponent, color, count) {
  let desire = 0;
  opponent.patternLines.forEach((line, index) => {
    if (validLinesForColor(opponent, color).includes(index)) {
      desire += line.length - line.count;
    }
  });
  return Math.min(desire, count);
}

function evaluateMove(move, player, opponent) {
  let immediate = 0;
  let future = 0;
  let penalty = 0;
  if (move.target === "floor") {
    penalty = estimateFloorPenalty(player.floor.length, move.count + (move.tookToken ? 1 : 0));
  } else {
    const line = player.patternLines[move.target];
    const space = line.length - line.count;
    const placed = Math.min(space, move.count);
    const overflow = move.count - placed + (move.tookToken ? 1 : 0);
    penalty = estimateFloorPenalty(player.floor.length, overflow);
    const willComplete = line.count + placed === line.length;
    if (willComplete) {
      const row = move.target;
      const col = WALL_PATTERN[row].indexOf(move.color);
      if (col !== -1 && !player.wall[row][col]) {
        immediate = scorePlacement(player.wall, row, col);
      }
    }
    future = (placed / line.length) * 2 + (willComplete ? 1 : 0);
  }
  const blocking = estimateBlocking(opponent, move.color, move.count);
  let score = immediate * 2 + future - penalty * 1.2 + blocking * 0.4;
  if (state.aiDifficulty === "hard") {
    score += blocking * 0.2;
  }
  if (state.aiDifficulty === "easy") {
    score -= Math.random() * 0.8;
  } else {
    score += Math.random() * 0.2;
  }
  return score;
}

function generateMoves() {
  const moves = [];
  const ai = state.players.AI;
  const opponent = state.players.PLAYER;

  state.factories.forEach((factory, index) => {
    const colors = Array.from(new Set(factory));
    colors.forEach((color) => {
      const count = factory.filter((tile) => tile === color).length;
      const validLines = validLinesForColor(ai, color);
      if (validLines.length === 0) {
        moves.push({
          source: "factory",
          sourceId: index,
          color,
          count,
          tookToken: false,
          target: "floor",
          score: 0,
        });
      } else {
        validLines.forEach((line) => {
          moves.push({
            source: "factory",
            sourceId: index,
            color,
            count,
            tookToken: false,
            target: line,
            score: 0,
          });
        });
      }
    });
  });

  const centerColors = Array.from(new Set(state.center));
  centerColors.forEach((color) => {
    const count = state.center.filter((tile) => tile === color).length;
    const validLines = validLinesForColor(ai, color);
    const tookToken = state.centerTokenAvailable;
    if (validLines.length === 0) {
      moves.push({
        source: "center",
        sourceId: null,
        color,
        count,
        tookToken,
        target: "floor",
        score: 0,
      });
    } else {
      validLines.forEach((line) => {
        moves.push({
          source: "center",
          sourceId: null,
          color,
          count,
          tookToken,
          target: line,
          score: 0,
        });
      });
    }
  });

  moves.forEach((move) => {
    move.score = evaluateMove(move, ai, opponent);
  });

  return moves;
}

function runAIMove() {
  if (state.phase !== "TILE_PICKING" || state.currentPlayer !== "AI" || state.stage !== "PLAY") {
    state.aiThinking = false;
    render();
    return;
  }
  const moves = generateMoves();
  if (moves.length === 0) {
    state.aiThinking = false;
    addLog(t("logAInoMove"));
    endTurn();
    return;
  }
  let chosen;
  if (state.aiDifficulty === "easy") {
    chosen = moves[Math.floor(Math.random() * moves.length)];
  } else {
    moves.sort((a, b) => b.score - a.score);
    const top = moves.slice(0, state.aiDifficulty === "hard" ? 3 : 2);
    chosen = top[Math.floor(Math.random() * top.length)];
  }

  let result;
  if (chosen.source === "factory") {
    result = takeFromFactory(chosen.sourceId, chosen.color);
  } else {
    result = takeFromCenter(chosen.color);
  }

  const selection = {
    color: chosen.color,
    count: result.picked.length,
    tookToken: result.tookToken,
  };

  const ai = state.players.AI;
  if (chosen.target === "floor") {
    addTilesToFloor(ai, Array(selection.count).fill(selection.color));
    if (selection.tookToken) addTilesToFloor(ai, ["TOKEN"]);
    triggerAnimation({
      source: chosen.source,
      sourceId: chosen.sourceId,
      sourceColor: chosen.color,
      floorPlayerId: "AI",
    });
    addLog(
      t("logAIFloor", {
        count: selection.count,
        color: colorName(selection.color),
      })
    );
  } else {
    const line = ai.patternLines[chosen.target];
    const space = line.length - line.count;
    const toPlace = Math.min(space, selection.count);
    if (toPlace > 0) {
      line.color = selection.color;
      line.count += toPlace;
    }
    const overflow = selection.count - toPlace;
    if (overflow > 0) {
      addTilesToFloor(ai, Array(overflow).fill(selection.color));
    }
    if (selection.tookToken) {
      addTilesToFloor(ai, ["TOKEN"]);
    }
    triggerAnimation({
      source: chosen.source,
      sourceId: chosen.sourceId,
      sourceColor: chosen.color,
      patternPlayerId: "AI",
      patternLineIndex: chosen.target,
      floorPlayerId: overflow > 0 || selection.tookToken ? "AI" : null,
    });
    addLog(
      t("logAIPlace", {
        count: selection.count,
        color: colorName(selection.color),
        line: chosen.target + 1,
      })
    );
  }

  state.aiThinking = false;
  endTurn();
}

function handleTileSelection(source, sourceId, color) {
  if (state.phase !== "TILE_PICKING" || state.stage !== "PLAY") return;
  if (state.currentPlayer !== "PLAYER" || state.aiThinking) return;
  if (state.pendingSelection) {
    addLog(t("logFinishSelection"));
    return;
  }

  let result;
  if (source === "factory") {
    result = takeFromFactory(Number(sourceId), color);
  } else {
    result = takeFromCenter(color);
  }

  if (result.picked.length === 0) return;

  const player = state.players.PLAYER;
  const validLines = validLinesForColor(player, color);
  const selection = {
    color,
    count: result.picked.length,
    tookToken: result.tookToken,
    validLines,
    source,
    sourceId,
  };

  if (state.isMobile) {
    setActiveBoard("PLAYER");
  }
  playSfx("pick");

  if (validLines.length === 0) {
    applySelectionToFloor("PLAYER", selection);
    render();
    return;
  }

  state.pendingSelection = selection;
  addLog(
    t("logSelected", {
      count: selection.count,
      color: colorName(color),
    })
  );
  render();
}

function handleLineSelection(lineIndex) {
  if (state.stage !== "PLAY") return;
  if (!state.pendingSelection) return;
  const selection = state.pendingSelection;
  if (!selection.validLines.includes(lineIndex)) {
    addLog(t("logInvalidLine"));
    return;
  }
  applySelectionToLine("PLAYER", lineIndex);
  render();
}

function renderStatus() {
  const isPlaying = state.stage === "PLAY";
  const turnLabel = isPlaying
    ? state.currentPlayer === "PLAYER"
      ? t("turnPlayer")
      : t("turnAI")
    : t("statusSetup");
  const phaseLabel = isPlaying ? (state.phase === "TILE_PICKING" ? t("phaseTile") : state.phase) : t("statusSetup");
  const pending = state.pendingSelection
    ? t("selectionPending", {
        count: state.pendingSelection.count,
        color: colorName(state.pendingSelection.color),
      })
    : t("selectionNone");
  const thinking = state.aiThinking ? t("selectionAI") : pending;
  const selectionLabel = isPlaying ? (state.aiThinking ? thinking : pending) : t("statusSetup");
  elements.status.innerHTML = `
    <div class="status-card">
      <strong>${t("statusRound")}</strong>
      <span>${state.round}</span>
    </div>
    <div class="status-card">
      <strong>${t("statusTurn")}</strong>
      <span>${turnLabel}</span>
    </div>
    <div class="status-card">
      <strong>${t("statusPhase")}</strong>
      <span>${phaseLabel}</span>
    </div>
    <div class="status-card">
      <strong>${t("statusSelection")}</strong>
      <span>${selectionLabel}</span>
    </div>
  `;
}

function getGuideMessage() {
  if (state.stage === "RULES") return t("hintRules");
  if (state.stage === "DIFFICULTY") return t("hintDifficulty");
  if (state.stage !== "PLAY") return "";
  if (state.aiThinking || state.currentPlayer === "AI") return t("hintAITurn");
  if (state.pendingSelection) return t("hintChooseLine");
  return t("hintPickSource");
}

function renderGuide() {
  const message = getGuideMessage();
  elements.guide.innerHTML = `
    <strong>${t("labelGuide")}</strong>
    <span>${message}</span>
  `;
}

function setActiveBoard(board) {
  state.activeBoard = board;
  elements.app.dataset.activeBoard = board;
  renderMobileSwitch();
}

function renderMobileSwitch() {
  const active = state.activeBoard;
  elements.tabPlayer.classList.toggle("active", active === "PLAYER");
  elements.tabAI.classList.toggle("active", active === "AI");
}

function renderWall(player, playerId) {
  const shouldAnimate =
    state.animation &&
    (state.animation.wallPlayerId === playerId || state.animation.wallPlayerId === "BOTH");
  return `
    <div class="wall-grid ${shouldAnimate ? "animate" : ""}">
      ${player.wall
        .map((row, rowIndex) =>
          row
            .map((tile, colIndex) => {
              const patternColor = WALL_PATTERN[rowIndex][colIndex];
              if (tile) {
                return `<div class="wall-cell ${tile ? `color-${tile}` : ""}"></div>`;
              }
              return `<div class="wall-cell empty pattern-${patternColor}"></div>`;
            })
            .join("")
        )
        .join("")}
    </div>
  `;
}

function renderPatternLines(player, isHuman, playerId) {
  return `
    <div class="pattern-lines">
      ${player.patternLines
        .map((line, index) => {
          const slots = Array.from({ length: line.length }).map((_, slotIndex) => {
            const filled = slotIndex < line.count;
            return filled
              ? `<div class="tile small color-${line.color}"></div>`
              : `<div class="tile small empty"></div>`;
          });
          const validSelection =
            isHuman &&
            state.pendingSelection &&
            state.pendingSelection.validLines.includes(index);
          const invalidSelection =
            isHuman &&
            state.pendingSelection &&
            !state.pendingSelection.validLines.includes(index);
          const isAnimated =
            state.animation &&
            state.animation.patternPlayerId === playerId &&
            state.animation.patternLineIndex === index;
          const className = [
            "pattern-line",
            validSelection ? "selectable" : invalidSelection ? "invalid" : "",
            isAnimated ? "animate" : "",
          ]
            .filter(Boolean)
            .join(" ");
          return `
            <div class="${className}" ${
              validSelection
                ? `data-action="choose-line" data-line="${index}"`
                : ""
            }>
              <div class="pattern-line__slots">${slots.join("")}</div>
              <div class="pattern-line__meta">
                ${t("labelLine")} ${index + 1}<br />
                ${line.color ? colorName(line.color) : t("labelAnyColor")}
              </div>
            </div>
          `;
        })
        .join("")}
    </div>
  `;
}

function renderFloor(player, playerId) {
  const isAnimated = state.animation && state.animation.floorPlayerId === playerId;
  return `
    <div class="floor-line ${isAnimated ? "animate" : ""}">
      ${FLOOR_PENALTIES.map((penalty, index) => {
        const tile = player.floor[index];
        let content = `${penalty}`;
        if (tile) {
          if (tile === "TOKEN") {
            content = `<div class="token">1st</div>`;
          } else {
            content = `<div class="tile small color-${tile}"></div>`;
          }
        }
        return `<div class="floor-slot">${content}</div>`;
      }).join("")}
    </div>
  `;
}

function renderPlayerArea(playerId, isHuman) {
  const player = state.players[playerId];
  const rows = countCompletedRows(player.wall);
  const cols = countCompletedColumns(player.wall);
  const colors = countCompletedColors(player.wall);
  const displayName = playerId === "PLAYER" ? t("playerName") : t("aiName");
  return `
    <div class="player-header">
      <div>
        <h2 class="player-name">${displayName}</h2>
        <div class="score">${t("labelScore")}: ${player.score}</div>
      </div>
      <div class="badge-row">
        <div class="badge">${t("labelRows")} ${rows}</div>
        <div class="badge">${t("labelCols")} ${cols}</div>
        <div class="badge">${t("labelColors")} ${colors}</div>
      </div>
    </div>
    ${renderWall(player, playerId)}
    ${renderPatternLines(player, isHuman, playerId)}
    ${renderFloor(player, playerId)}
  `;
}

function renderFactories() {
  const shouldHintSources =
    state.stage === "PLAY" &&
    state.currentPlayer === "PLAYER" &&
    !state.pendingSelection &&
    !state.aiThinking;
  elements.factories.innerHTML = state.factories
    .map((factory, index) => {
      const tiles = factory.concat(Array(4 - factory.length).fill(null));
      const isFlash =
        state.animation &&
        state.animation.source === "factory" &&
        Number(state.animation.sourceId) === index;
      const hasTiles = factory.length > 0;
      const tileHtml = tiles
        .map((tile) => {
          if (!tile) {
            return `<div class="tile empty"></div>`;
          }
          return `
            <button class="tile-button" data-action="select-tile" data-source="factory" data-id="${index}" data-color="${tile}">
              <div class="tile color-${tile}"></div>
            </button>
          `;
        })
        .join("");
      return `
        <div class="factory ${shouldHintSources && hasTiles ? "hint" : ""} ${
        isFlash ? "flash" : ""
      }">
          <div class="factory-grid">${tileHtml}</div>
          <div class="factory-label">${t("labelFactory")} ${index + 1}</div>
        </div>
      `;
    })
    .join("");
}

function renderCenter() {
  const counts = {};
  state.center.forEach((tile) => {
    counts[tile] = (counts[tile] || 0) + 1;
  });
  const shouldHintSources =
    state.stage === "PLAY" &&
    state.currentPlayer === "PLAYER" &&
    !state.pendingSelection &&
    !state.aiThinking;
  const stacks = Object.keys(counts)
    .map((color) => {
      const isFlash =
        state.animation &&
        state.animation.source === "center" &&
        state.animation.sourceColor === color;
      return `
        <div class="center-stack ${shouldHintSources ? "hint" : ""} ${
        isFlash ? "flash" : ""
      }" data-action="select-tile" data-source="center" data-color="${color}">
          <div class="tile small color-${color}"></div>
          <div class="count">x${counts[color]}</div>
        </div>
      `;
    })
    .join("");
  elements.center.innerHTML = `
    <div class="center-row">
      <strong>${t("centerTitle")}</strong>
      <span class="center-token">${
        state.centerTokenAvailable
          ? t("centerTokenAvailable")
          : t("centerTokenNext", {
              player: state.nextFirstPlayer === "PLAYER" ? t("you") : t("ai"),
            })
      }</span>
    </div>
    <div class="center-row">${stacks || t("labelNoTiles")}</div>
  `;
}

function renderControls() {
  elements.controls.innerHTML = `
    <div class="control-group">
      <label for="difficulty">${t("controlsDifficulty")}</label>
      <select id="difficulty" class="select" data-action="set-difficulty">
        <option value="easy" ${state.aiDifficulty === "easy" ? "selected" : ""}>${t("aiEasy")}</option>
        <option value="medium" ${state.aiDifficulty === "medium" ? "selected" : ""}>${t("aiMedium")}</option>
        <option value="hard" ${state.aiDifficulty === "hard" ? "selected" : ""}>${t("aiHard")}</option>
      </select>
    </div>
    <div class="control-group">
      <span>${state.pendingSelection ? t("controlsHintChoose") : t("controlsHintPick")}</span>
    </div>
  `;
}

function renderLog() {
  elements.log.innerHTML = state.log.map((entry) => `<div class="log-entry">${entry}</div>`).join("");
}

function showGameOver(winner) {
  const playerScore = state.players.PLAYER.score;
  const aiScore = state.players.AI.score;
  const headline =
    winner === "PLAYER" ? t("overlayVictory") : winner === "AI" ? t("overlayDefeat") : t("overlayDraw");
  const summary = state.finalSummary || {};
  const playerBonus = summary.PLAYER ? summary.PLAYER.bonus : 0;
  const aiBonus = summary.AI ? summary.AI.bonus : 0;
  state.stage = "GAME_OVER";
  state.zenMode = false;
  playSfx("end");
  elements.overlay.innerHTML = `
    <div class="overlay-card">
      <h2>${headline}</h2>
      <p>${t("overlayFinalScore", { player: playerScore, ai: aiScore })}</p>
      <p>${t("overlayBonus", { player: playerBonus, ai: aiBonus })}</p>
      <button class="btn" type="button" data-action="new-game">${t("overlayPlayAgain")}</button>
    </div>
  `;
  elements.overlay.classList.remove("hidden");
  addLog(t("logGameOver"));
  render();
}

function hideGameOver() {
  elements.overlay.classList.add("hidden");
  elements.overlay.innerHTML = "";
}

function render() {
  renderStatus();
  renderGuide();
  elements.playerArea.innerHTML = renderPlayerArea("PLAYER", true);
  elements.aiArea.innerHTML = renderPlayerArea("AI", false);
  renderFactories();
  renderCenter();
  renderControls();
  renderLog();
  elements.app.classList.toggle("zen", state.zenMode);
  elements.app.dataset.activeBoard = state.activeBoard;
  renderMobileSwitch();
}

function openRules() {
  elements.rulesModal.classList.remove("hidden");
}

function closeRules({ advance } = {}) {
  elements.rulesModal.classList.add("hidden");
  if (advance && state.stage === "RULES") {
    openDifficulty();
    state.stage = "DIFFICULTY";
    renderGuide();
    render();
  }
}

function openDifficulty() {
  renderDifficultyModal();
  elements.difficultyModal.classList.remove("hidden");
}

function closeDifficulty() {
  elements.difficultyModal.classList.add("hidden");
}

function startMatch() {
  state.aiDifficulty = state.pendingDifficulty;
  closeDifficulty();
  state.stage = "PLAY";
  state.zenMode = true;
  state.activeBoard = "PLAYER";
  startNewGame();
  renderGuide();
}

function setupLobby() {
  state.stage = "RULES";
  state.zenMode = false;
  state.pendingDifficulty = state.aiDifficulty;
  state.activeBoard = "PLAYER";
  hideGameOver();
  closeDifficulty();
  startNewGame({ silent: true });
  state.log = [];
  render();
  openRules();
  renderGuide();
}

function handleClick(event) {
  const origin = event.target instanceof Element ? event.target : event.target?.parentElement;
  if (!origin) return;
  const target = origin.closest("[data-action]");
  if (!target) return;
  const action = target.dataset.action;
  if (action === "new-game") {
    hideGameOver();
    state.stage = "DIFFICULTY";
    state.zenMode = false;
    state.aiThinking = false;
    state.pendingSelection = null;
    state.pendingDifficulty = state.aiDifficulty;
    openDifficulty();
    renderGuide();
    render();
    return;
  }
  if (action === "open-rules") {
    openRules();
    return;
  }
  if (action === "close-rules") {
    closeRules({ advance: state.stage === "RULES" });
    return;
  }
  if (action === "toggle-lang") {
    setLanguage(state.language === "en" ? "zh" : "en");
    return;
  }
  if (action === "toggle-sound") {
    state.audioEnabled = !state.audioEnabled;
    localStorage.setItem("azul-sound", state.audioEnabled ? "on" : "off");
    applyStaticText();
    if (state.audioEnabled) {
      playSfx("pick");
    }
    return;
  }
  if (action === "select-difficulty") {
    state.pendingDifficulty = target.dataset.level;
    renderDifficultyModal();
    return;
  }
  if (action === "switch-board") {
    setActiveBoard(target.dataset.board);
    return;
  }
  if (action === "start-game") {
    startMatch();
    return;
  }
  if (action === "select-tile") {
    const source = target.dataset.source;
    const sourceId = target.dataset.id;
    const color = target.dataset.color;
    handleTileSelection(source, sourceId, color);
    return;
  }
  if (action === "choose-line") {
    const lineIndex = Number(target.dataset.line);
    handleLineSelection(lineIndex);
  }
}

function handleChange(event) {
  const target = event.target;
  if (target.dataset.action === "set-difficulty") {
    state.aiDifficulty = target.value;
    state.pendingDifficulty = target.value;
    const difficultyLabel =
      target.value === "easy" ? t("aiEasy") : target.value === "hard" ? t("aiHard") : t("aiMedium");
    addLog(t("logDifficulty", { difficulty: difficultyLabel }));
    render();
  }
}

const storedLang = localStorage.getItem("azul-lang");
if (storedLang && I18N[storedLang]) {
  state.language = storedLang;
}
const storedSound = localStorage.getItem("azul-sound");
if (storedSound === "on") {
  state.audioEnabled = true;
}
applyStaticText();
setupLobby();

const mobileQuery = window.matchMedia("(max-width: 900px), (max-height: 720px)");
const updateDeviceClass = () => {
  const isMobile = mobileQuery.matches;
  state.isMobile = isMobile;
  document.body.classList.toggle("mobile", isMobile);
  if (!state.activeBoard) {
    state.activeBoard = "PLAYER";
  }
  if (!isMobile) {
    state.activeBoard = "PLAYER";
  }
  renderMobileSwitch();
  elements.app.dataset.activeBoard = state.activeBoard;
  render();
};
updateDeviceClass();
if (mobileQuery.addEventListener) {
  mobileQuery.addEventListener("change", updateDeviceClass);
} else {
  mobileQuery.addListener(updateDeviceClass);
}

document.addEventListener("click", handleClick);
document.addEventListener("change", handleChange);
elements.rulesModal.addEventListener("click", (event) => {
  if (event.target === elements.rulesModal) {
    closeRules({ advance: state.stage === "RULES" });
  }
});
document.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && !elements.rulesModal.classList.contains("hidden")) {
    closeRules({ advance: state.stage === "RULES" });
  }
});
