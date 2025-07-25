const characters = {
    chiquinha: {
        id: 'chiquinha',
        name: "Chiquinha",
        image: "personagens/chiquinha.png",
        ability: "Fúria do Cabelo",
        description: "Ataque rápido que tem chance de atingir duas vezes.",
        hp: 150,
        locked: false,
    },
    quico: {
        id: 'quico',
        name: "Quico",
        image: "personagens/quico.png",
        ability: "Chute Quadrado",
        description: "Um chute poderoso que causa dano consistente ao inimigo.",
        hp: 200,
        locked: false,
    },
    dona_florinda: {
        id: 'dona_florinda',
        name: "Dona Florinda",
        image: "personagens/dona_florinda.png",
        ability: "Grito Supersônico",
        description: "Um grito devastador que enfraquece o próximo ataque do inimigo.",
        hp: 250,
        locked: true,
    },
    sr_barriga: {
        id: 'sr_barriga',
        name: "Sr. Barriga",
        image: "personagens/sr_barriga.png",
        ability: "Livro Místico",
        description: "Usa um feitiço aleatório do livro que pode causar dano massivo ou curá-lo.",
        hp: 300,
        locked: true,
    },
    dr_chapatin: {
        id: 'dr_chapatin',
        name: "Dr. Chapatin",
        image: "personagens/dr_chapatin.png",
        ability: "Injeção Dolorosa",
        description: "Aplica uma injeção que causa dor e pode envenenar o inimigo.",
        hp: 350,
        locked: true,
    },
    dona_clotide: {
        id: 'dona_clotide',
        name: "Dona Clotilde",
        image: "personagens/dona_clotide.png",
        ability: "Ataque de Vassoura",
        description: "Uma bruxa com sua vassoura, que ataca com golpes surpreendentes.",
        hp: 400,
        locked: true,
    },
    pancada_bonaparte: { 
        id: 'pancada_bonaparte', 
        name: "Pancada Bonaparte",
        image: "personagens/pancada_bonaparte.png",
        ability: "Chirrion!",
        description: "Diz 'Chirrion!' tão repentinamente que causa dano de susto.",
        hp: 450,
        locked: true,
    },
    seu_madruga: {
        id: 'seu_madruga',
        name: "Seu Madruga",
        image: "personagens/seu_madruga.png",
        ability: "Fuga do Aluguel",
        description: "Tenta evitar o ataque inimigo, com chance de não sofrer dano no próximo turno.",
        hp: 500,
        locked: true,
    },
    nhonho: { 
        id: 'nhonho',
        name: "Nhonho",
        image: "personagens/nhonho.png",
        ability: "Ataque de Peso",
        description: "Usa seu peso para esmagar o inimigo, causando dano alto.",
        hp: 550,
        locked: true,
    }, 
    paty: { 
        id: 'paty',
        name: "Paty",
        image: "personagens/paty.png",
        ability: "Ataque de Patada",
        description: "Uma patada rápida que causa dano e pode atordoar o inimigo.",
        hp: 600,
        locked: true,
    },
    popis: { 
        id: 'popis',
        name: "Popis",
        image: "personagens/popis.png",
        ability: "Ataque de Pipoquinha",
        description: "Ataca com pipocas explosivas que causam dano ao longo do tempo.",
        hp: 650,
        locked: true,
    },
    dona_neves: { 
        id: 'dona_neves',
        name: "Dona Neves",
        image: "personagens/dona_neves.png",
        ability: "Nevasca Congelante",
        description: "Causa dano e tem chance de congelar o inimigo, impedindo-o de atacar.",   
        hp: 700,
        locked: true,
    },
    professor_girafales: {
        id: 'professor_girafales',
        name: "Professor Girafales",
        image: "personagens/professor_girafales.png",
        ability: "Lecionar com Fúria",
        description: "Dá uma lição no inimigo, causando dano e possivelmente o confundindo.",
        hp: 750,
        locked: true,
    },
    chapolin_colorado: {
        id: 'chapolin_colorado',
        name: "Chapolin Colorado",
        image: "personagens/chapolin_colorado.png",
        ability: "Marreta Biônica",
        description: "Um golpe com sua marreta que pode atordoar o inimigo, fazendo-o perder a vez.",
        hp: 800,
        locked: true,
    },
    chaves: {
        id: 'chaves',
        name: "Chaves",
        image: "personagens/chaves.png",
        ability: "Piripaque",
        description: "Um ataque de pânico que, de alguma forma, causa dano ao inimigo por pura confusão.",
        hp: 900,
        locked: true,
    },
};

const villains = [
    {
        name: "Super Sam",
        image: "personagens/super_sam.png",
        hp: 150,
        attackDamage: 25,
        description: "Golpeia o inimigo com um saco de dinheiro. Eficaz e capitalista!",
    },
    {
        name: "Tripa Seca",
        image: "personagens/tripa_seca.png",
        hp: 200,
        attackDamage: 20,
        description: "Um bandido impiedoso que ataca sem hesitar."
    },
    {
        name: "Quase Nada",
        image: "personagens/quase_nada.png",
        hp: 250,
        attackDamage: 22,
        description: "Tão pequeno que seus ataques são difíceis de prever."
    },
    {
        name: "Peterete",
        image: "personagens/peterete.png",
        hp: 300,
        attackDamage: 25,
        description: "Um gangster perigoso com um plano para tudo."
    },
    {
        name: "Racha Cuca",
        image: "personagens/racha_cuca.png",
        hp: 350,
        attackDamage: 28,
        description: "Um cientista louco cujas invenções são imprevisíveis e perigosas."
    },
    {
        name: "Bruxa Baratuxa",
        image: "personagens/bruxa_baratuxa.png",
        hp: 400,
        attackDamage: 32,
        description: "Uma bruxa poderosa com feitiços malignos e uma gargalhada assustadora."
    },
    {
        name: "Pistoleiro Veloz",
        image: "personagens/pistoleiro_veloz.png",
        hp: 450,
        attackDamage: 30,
        description: "O pistoleiro mais rápido do oeste... ou assim ele diz."
    },
    {
        name: "Poucas Trancas",
        image: "personagens/poucas_trancas.png",
        hp: 500,
        attackDamage: 40,
        description: "Um bandido forte e de poucas palavras. Seus punhos falam por ele."
    },
    {
        name: "Alma Negra",
        image: "personagens/alma_negra.png",
        hp: 550,
        attackDamage: 35,
        description: "O pirata mais temido dos sete mares, com ataques brutais."
    },
    {
        name: "Dom Caveira",
        image: "personagens/dom_caveira.png",
        hp: 600,
        attackDamage: 30,
        description: "Invoca um espírito que causa dano e tem chance de amedrontar o inimigo.",
    },
    {   
        name: "Dr. Chapatin Versão Negativo",
        image: "personagens/dr_chapatin_vresão_negativo.png",
        hp: 650,
        attackDamage: 35,
        description: "Uma versão sombria do Dr. Chapatin, mais perigosa e com poções venenosas.",
  },
    {  
        name: "Alma Negra  Versão Aprimorada",
        image: "personagens/alma_negra_versão_aprimorada.png",
        hp: 700,
        attackDamage: 30, 
        description: "O pirata mais temido dos sete mares, com ataques brutais.",
      },
    {  
        name: "Peterete Versão Aprimorada",
        image: "personagens/peterete_versão_aprimorada.png",
        hp: 750,
        attackDamage: 35, 
        description: "Um gangster perigoso com um plano para tudo.",
  },
    {  
        name: "Racha Cuca Versão Aprimorada",
        image: "personagens/racha_cuca_versão_aprimorada.png",
        hp: 800,
        attackDamage: 40,
         description: "Um cientista louco cujas invenções são imprevisíveis e perigosas.",
    },
    { 
        name: "Chapolin Colorado Versão Negativo",
        image: "personagens/chapolin_colorado_vresão_negativo.png",
        hp: 850,
        attackDamage: 30,
        description: "Uma versão distorcida do herói, usando sua marreta para o mal.",
    },
    {
        name: "Chaves Versão Negativo",
        image: "personagens/chaves_vresão_negativo.png",
        hp: 900,
        attackDamage: 30,
        description: "A versão maligna do Chaves, com piripaques de pura destruição.",
    },
    {
        name: "Girafales Colorado",
        image: "personagens/girafales_colorado.png",
        hp: 950,
        attackDamage: 30,
        description: "Uma versão do Professor Girafales que usa sua inteligência para o mal.",
    },
    {
        name: "Super Pistoleiro Veloz Sam Racha Cuca",
        image: "personagens/super_pistoleiro_veloz_sam_racha_cuca.png",
        hp: 1000,
        attackDamage: 45,
        description: "Uma combinação de Super Sam, Pistoleiro Veloz e Racha Cuca, com ataques rápidos e imprevisíveis.",
    },
    {
        name: "Dr. Chapatin Poucas Trancas",
        image: "personagens/dr_chapatin_poucas_trancas.png",
        hp: 1050,
        attackDamage: 35,
        description: "Uma versão combinada do Dr. Chapatin e Poucas Trancas, com ataques brutais e poções venenosas.",
    },
    {
        name: "Alma Dom Tripa Seca Caveira Negra",
        image: "personagens/alma_dom_tripa_seca_caveira_negra.png",
        hp: 1100,   
        attackDamage: 40,
        description: "Uma fusão de Alma Negra, Dom Caveira e Tripa Seca, com ataques combinados e habilidades únicas.",
    },
];

let selectedCharacterId = null;
let hero = {};
let villain = {};
let isPlayerTurn = true;
let isVillainWeakened = false;
let isVillainStunned = false;
let heroPoisonTurns = 0;
let villainPoisonTurns = 0;
let heroEvadeNextAttack = false;
let villainConfused = false;

let unlockedHeroes = [];
let currentVillainIndex = 0;

// Audio context for sound effects
const audioContext = new (window.AudioContext || window.webkitAudioContext)();

function playSound(buffer) {
    if (!buffer) return;
    const source = audioContext.createBufferSource();
    source.buffer = buffer;
    source.connect(audioContext.destination);
    source.start(0);
}

let attackSoundBuffer;
let victorySoundBuffer;
let unlockSoundBuffer;

async function loadSound(url) {
    try {
        const response = await fetch(url);
        const arrayBuffer = await response.arrayBuffer();
        return await audioContext.decodeAudioData(arrayBuffer);
    } catch (e) {
        console.error(`Failed to load sound: ${url}`, e);
        return null;
    }
}

// Pre-load sounds
loadSound('sons/attack_sound.mp3').then(buffer => attackSoundBuffer = buffer);
loadSound('sons/victory_sound.mp3').then(buffer => victorySoundBuffer = buffer);
loadSound('sons/unlock_sound.mp3').then(buffer => unlockSoundBuffer = buffer);

const screens = {
    start: document.getElementById('start-screen'),
    characterSelection: document.getElementById('character-selection-screen'),
    battle: document.getElementById('battle-screen'),
    gameOver: document.getElementById('game-over-screen'),
};

function switchScreen(screenName) {
    Object.values(screens).forEach(screen => screen.classList.remove('active'));
    screens[screenName].classList.add('active');
}

function updateBattleLog(message) {
    const log = document.getElementById('battle-log');
    // Prepend new messages to keep history (optional, or just replace innerHTML)
    log.innerHTML = `<p>${message}</p>` + log.innerHTML;
    // Keep only the last few messages for readability
    const paragraphs = log.getElementsByTagName('p');
    if (paragraphs.length > 5) {
        log.removeChild(paragraphs[paragraphs.length - 1]);
    }
}

function updateHealthBars() {
    const heroHealthBar = document.querySelector('#hero-side .health-bar');
    const villainHealthBar = document.querySelector('#villain-side .health-bar');
    const heroHpText = document.querySelector('#hero-side .hp-text');
    const villainHpText = document.querySelector('#villain-side .hp-text');

    const heroHealthPercent = (hero.hp / hero.maxHp) * 100;
    const villainHealthPercent = (villain.hp / villain.maxHp) * 100;

    heroHealthBar.style.width = `${Math.max(0, heroHealthPercent)}%`;
    villainHealthBar.style.width = `${Math.max(0, villainHealthPercent)}%`;
    heroHpText.textContent = `HP: ${Math.max(0, hero.hp)} / ${hero.maxHp}`;
    villainHpText.textContent = `HP: ${Math.max(0, villain.hp)} / ${villain.maxHp}`;
}

function playerAttack() {
    if (!isPlayerTurn) return;

    let damage = 0;
    let logMessage = '';

    playSound(attackSoundBuffer);

    if (heroPoisonTurns > 0) {
        const poisonDamage = 5;
        hero.hp -= poisonDamage;
        logMessage += `Herói sofre ${poisonDamage} de dano de veneno. `;
        heroPoisonTurns--;
        if (hero.hp <= 0) {
            updateHealthBars();
            updateBattleLog(logMessage);
            checkGameOver();
            return;
        }
    }

    switch (selectedCharacterId) {
        case 'sr_barriga':
            const isHeal = Math.random() < 0.3; // 30% chance to heal
            if (isHeal) {
                const healAmount = 30;
                hero.hp = Math.min(hero.maxHp, hero.hp + healAmount);
                logMessage = `Sr. Barriga usou o Livro Místico e se curou em ${healAmount} pontos!`;
            } else {
                damage = Math.floor(Math.random() * 25) + 15; // 15-40 damage
                logMessage = `Sr. Barriga usou um feitiço poderoso e causou ${damage} de dano!`;
            }
            break;
        case 'quico':
            damage = 25;
            logMessage = `Quico usou o Chute Quadrado e causou ${damage} de dano!`;
            break;
        case 'chiquinha':
            damage = 15;
            logMessage = `Chiquinha usou a Fúria do Cabelo e causou ${damage} de dano!`;
            if (Math.random() < 0.5) { // 50% chance for second hit
                damage += 15;
                logMessage += ' Acertou uma segunda vez!';
            }
            break;
        case 'dona_florinda':
            damage = 10;
            isVillainWeakened = true;
            logMessage = `Dona Florinda usou o Grito Supersônico, causando ${damage} de dano e enfraquecendo o próximo ataque do inimigo!`;
            break;
        case 'chapolin_colorado':
            damage = 50;
            logMessage = `Chapolin usou a Marreta Biônica e causou ${damage} de dano!`;
            if (Math.random() < 0.4) { // 40% chance to stun
                isVillainStunned = true;
                logMessage += ' O inimigo está atordoado!';
            }
            break;
        case 'dr_chapatin':
            damage = 20;
            villainPoisonTurns = 2;
            logMessage = `Dr. Chapatin aplicou uma Injeção Dolorosa, causando ${damage} de dano e envenenando o inimigo!`;
            break;
        case 'chaves':
            damage = 50;
            logMessage = `Chaves usou o Piripaque e causou ${damage} de dano!`;
            break;
        case 'pancada_bonaparte': 
            damage = 20;
            logMessage = `Pancada Bonaparte usou o Chirrion! e causou ${damage} de dano!`;
            break;
        case 'seu_madruga':
            damage = 25;
            if (Math.random() < 0.3) {
                heroEvadeNextAttack = true;
                logMessage = `Seu Madruga tentou a Fuga do Aluguel! Há uma chance de ele evitar o próximo ataque.`;
            } else {
                logMessage = `Seu Madruga tentou a Fuga do Aluguel, causando um pequeno dano de ${damage}.`;
            }
            break;
        case 'professor_girafales':
            damage = 29;
            if (Math.random() < 0.25) {
                villainConfused = true;
                logMessage = `Professor Girafales deu uma lição no inimigo, causando ${damage} de dano e o confundindo!`;
            } else {
                logMessage = `Professor Girafales deu uma lição no inimigo, causando ${damage} de dano!`;
            }
            break;
        case 'dona_clotide':
            damage = 28;
            logMessage = `Dona Clotilde usou o Ataque de Vassoura e causou ${damage} de dano!`;
            break;
        case 'nhonho': 
            damage = 40; 
            logMessage = `Nhonho usou o Ataque de Peso e esmagou o inimigo, causando ${damage} de dano!`;
            break;
        case 'paty': 
            damage = 25;
            logMessage = `Paty usou o Ataque de Patada e causou ${damage} de dano!`;
            if (Math.random() < 0.3) { 
                isVillainStunned = true;
                logMessage += ' O inimigo está atordoado!';
            }
            break;
        case 'popis': 
            damage = 10; 
            villainPoisonTurns = 3; 
            logMessage = `Popis atirou pipocas explosivas, causando ${damage} de dano e envenenando o inimigo!`;
            break;
        case 'dona_neves': 
            damage = 30;
            logMessage = `Dona Neves usou Nevasca Congelante, causando ${damage} de dano!`;
            if (Math.random() < 0.35) { 
                isVillainStunned = true;
                logMessage += ' O inimigo está congelado!';
            }
            break; // Added break statement
    }

    if (damage > 0) {
        villain.hp -= damage;
    }

    updateBattleLog(logMessage);
    updateHealthBars();
    checkGameOver();

    if (villain.hp > 0) {
        isPlayerTurn = false;
        document.getElementById('attack-button').disabled = true;
        setTimeout(villainAttack, 2000);
    }
}

function villainAttack() {
    if (isPlayerTurn) return;

    let logMessage = '';

    if (heroEvadeNextAttack) {
        logMessage = `Seu Madruga conseguiu fugir do ataque de ${villain.name}!`;
        heroEvadeNextAttack = false;
        updateBattleLog(logMessage);
        isPlayerTurn = true;
        document.getElementById('attack-button').disabled = false;
        return;
    }

    if (isVillainStunned) {
        logMessage = `${villain.name} está atordoado e não pode atacar!`;
        isVillainStunned = false;
        updateBattleLog(logMessage);
        isPlayerTurn = true;
        document.getElementById('attack-button').disabled = false;
        return;
    }

    if (villainPoisonTurns > 0) {
        const poisonDamage = 10;
        villain.hp -= poisonDamage;
        logMessage += `${villain.name} sofreu ${poisonDamage} de dano de veneno. `;
        villainPoisonTurns--;
        if (villain.hp <= 0) {
            updateHealthBars();
            updateBattleLog(logMessage);
            setTimeout(checkGameOver, 1000);
            return;
        }
    }

    let damage = villain.attackDamage;
    if (isVillainWeakened) {
        damage = Math.floor(damage / 2);
        isVillainWeakened = false;
    }
    if (villainConfused) {
        damage = Math.floor(damage * Math.random());
        villainConfused = false;
        logMessage += `${villain.name} está confuso e seu ataque é fraco! `;
    }

    hero.hp -= damage;
    logMessage += `${villain.name} ataca e causa ${damage} de dano!`;
    updateBattleLog(logMessage);
    updateHealthBars();
    checkGameOver();

    if (hero.hp > 0) {
        isPlayerTurn = true;
        document.getElementById('attack-button').disabled = false;
    }
}

function checkGameOver() {
    if (hero.hp <= 0) {
        endGame(false);
    } else if (villain.hp <= 0) {
        villain.hp = 0; // Ensure HP is 0 for display
        updateHealthBars();
        setTimeout(() => endGame(true), 1000);
    }
}

function endGame(isVictory) {
    switchScreen('gameOver');
    const title = document.getElementById('game-over-title');
    const message = document.getElementById('game-over-message');
    const unlockAnnouncement = document.getElementById('unlock-announcement');
    unlockAnnouncement.innerHTML = '';
    const restartButton = document.getElementById('restart-button');

    if (isVictory) {
        playSound(victorySoundBuffer);
        currentVillainIndex++;
        saveProgress();

        let unlockedHero = null;
        const initialUnlockedHeroes = ['chiquinha', 'quico', 'dona_florinda', 'sr_barriga'];
        // Filter for characters that are locked, not yet unlocked, and not part of the initial set
        const heroesToUnlock = Object.values(characters).filter(c => c.locked && !unlockedHeroes.includes(c.id) && !initialUnlockedHeroes.includes(c.id));
        
        if (heroesToUnlock.length > 0) {
            unlockedHero = heroesToUnlock[0]; // Unlock the first available locked hero
            unlockedHeroes.push(unlockedHero.id);
            characters[unlockedHero.id].locked = false;
            saveProgress();
        }

        if (currentVillainIndex >= villains.length) {
            title.innerText = "Vitória Final!";
            message.innerText = `Você derrotou todos os vilões e salvou o multiverso! Parabéns, herói!`;
            restartButton.innerText = 'Jogar Novamente';
        } else {
            title.innerText = "Vitória!";
            message.innerText = `Você derrotou ${villain.name}! Mas um novo desafio aguarda...`;
            restartButton.innerText = 'Continuar Aventura';
        }

        if (unlockedHero) {
            setTimeout(() => playSound(unlockSoundBuffer), 500);
            unlockAnnouncement.innerHTML = `
                <p>Novo Herói Desbloqueado!</p>
                <div class="character-card unlocked">
                    <img src="${unlockedHero.image}" alt="${unlockedHero.name}">
                    <h3>${unlockedHero.name}</h3>
                </div>
            `;
        }

    } else {
        title.innerText = "Derrota...";
        message.innerText = `Você foi derrotado por ${villain.name}. O multiverso ainda precisa de você. Tente novamente!`;
        restartButton.innerText = 'Tentar Novamente';
    }
}

function resetGame() {
    localStorage.removeItem('game_unlocked_heroes');
    localStorage.removeItem('game_villain_index');
    currentVillainIndex = 0;
    unlockedHeroes = [];
    // Reset all characters to locked except the initial ones
    const initialUnlockedHeroes = ['chiquinha', 'quico', 'dona_florinda', 'sr_barriga'];
    for (const charId in characters) {
        if (!initialUnlockedHeroes.includes(charId)) {
            characters[charId].locked = true;
        } else {
            characters[charId].locked = false; // Ensure initial heroes are unlocked
        }
    }
}

function setupBattle() {
    hero = { ...characters[selectedCharacterId] };
    hero.maxHp = hero.hp;
    villain = { ...villains[currentVillainIndex] };
    villain.maxHp = villain.hp;
    isPlayerTurn = true;
    isVillainWeakened = false;
    isVillainStunned = false;
    heroPoisonTurns = 0;
    villainPoisonTurns = 0;
    heroEvadeNextAttack = false;
    villainConfused = false;

    const heroSide = document.getElementById('hero-side');
    heroSide.innerHTML = `
        <img src="${hero.image}" alt="${hero.name}">
        <h3>${hero.name}</h3>
        <div class="health-bar-container"><div class="health-bar"></div></div>
        <p class="hp-text">HP: ${hero.hp} / ${hero.maxHp}</p>
    `;

    const villainSide = document.getElementById('villain-side');
    villainSide.innerHTML = `
        <img src="${villain.image}" alt="${villain.name}">
        <h3>${villain.name}</h3>
        <div class="health-bar-container"><div class="health-bar"></div></div>
        <p class="hp-text">HP: ${villain.hp} / ${villain.maxHp}</p>
    `;

    updateHealthBars();
    updateBattleLog(`A batalha contra ${villain.name} começa!`);
    document.getElementById('attack-button').disabled = false;
    switchScreen('battle');
}

function populateCharacterSelection() {
    const characterList = document.getElementById('character-list');
    characterList.innerHTML = '';

    for (const charId in characters) {
        const char = characters[charId];
        const isInitiallyUnlocked = ['chiquinha', 'quico', 'dona_florinda', 'sr_barriga'].includes(char.id);
        const isUnlocked = isInitiallyUnlocked || unlockedHeroes.includes(char.id);
        
        const card = document.createElement('div');
        card.className = 'character-card';
        if (!isUnlocked) {
            card.classList.add('locked');
        }
        card.dataset.charId = charId;
        card.innerHTML = `
            ${!isUnlocked ? '<div class="lock-icon"></div>' : ''}
            <img src="${char.image}" alt="${char.name}">
            <h3>${char.name}</h3>
            <p><strong>Habilidade:</strong> ${char.ability}</p>
        `;

        if (isUnlocked) {
            card.addEventListener('click', () => {
                const currentSelected = document.querySelector('.character-card.selected');
                if (currentSelected) {
                    currentSelected.classList.remove('selected');
                }
                card.classList.add('selected');
                selectedCharacterId = charId;
                document.getElementById('select-character-button').disabled = false;
            });
        }
        characterList.appendChild(card);
    }

    const title = document.getElementById('character-selection-title');
    if (currentVillainIndex > 0 && currentVillainIndex < villains.length) {
        title.innerText = `Próximo Vilão: ${villains[currentVillainIndex].name}`;
    } else if (currentVillainIndex >= villains.length) {
        title.innerText = 'Todos os vilões foram derrotados! Escolha seu Herói para revisitar as batalhas.';
    } else {
        title.innerText = 'Escolha seu Mentor';
    }
}

function loadProgress() {
    const savedHeroes = localStorage.getItem('game_unlocked_heroes');
    const savedVillainIndex = localStorage.getItem('game_villain_index');
    if (savedHeroes) {
        unlockedHeroes = JSON.parse(savedHeroes);
        unlockedHeroes.forEach(id => {
            if (characters[id]) {
                characters[id].locked = false;
            }
        });
    }
    if (savedVillainIndex) {
        currentVillainIndex = parseInt(savedVillainIndex, 10);
    }
}

function saveProgress() {
    localStorage.setItem('game_unlocked_heroes', JSON.stringify(unlockedHeroes));
    localStorage.setItem('game_villain_index', currentVillainIndex.toString());
}

function init() {
    loadProgress();

    populateCharacterSelection();

    document.getElementById('start-button').addEventListener('click', () => switchScreen('characterSelection'));
    document.getElementById('select-character-button').addEventListener('click', setupBattle);
    document.getElementById('attack-button').addEventListener('click', playerAttack);
    document.getElementById('restart-button').addEventListener('click', () => {
        if (currentVillainIndex >= villains.length) {
            resetGame();
        }
        populateCharacterSelection();
        switchScreen('characterSelection');
        const currentSelected = document.querySelector('.character-card.selected');
        if (currentSelected) {
            currentSelected.classList.remove('selected');
        }
        document.getElementById('select-character-button').disabled = true;
        selectedCharacterId = null;
    });

    switchScreen('start');
}

init();