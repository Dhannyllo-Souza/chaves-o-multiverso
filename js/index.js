const characters = {
    chiquinha: {
        id: 'chiquinha',
        name: "Chiquinha",
        image: "personagens/chiquinha.png",
        ability: "Fúria do Cabelo",
        description: "Ataque rápido que tem chance de atingir duas vezes.",
        hp: 150,
        baseDamage: 15,
        locked: false,
    },
    quico: {
        id: 'quico',
        name: "Quico",
        image: "personagens/quico.png",
        ability: "Chute Quadrado",
        description: "Um chute poderoso que causa dano consistente ao inimigo.",
        hp: 200,
        baseDamage: 25,
        locked: false,
    },
    dona_florinda: {
        id: 'dona_florinda',
        name: "Dona Florinda",
        image: "personagens/dona_florinda.png",
        ability: "Grito Supersônico",
        description: "Um grito devastador que enfraquece o próximo ataque do inimigo.",
        hp: 250,
        baseDamage: 10,
        locked: true,
    },
    sr_barriga: {
        id: 'sr_barriga',
        name: "Sr. Barriga",
        image: "personagens/sr_barriga.png",
        ability: "Livro Místico",
        description: "Usa um feitiço aleatório do livro que pode causar dano massivo ou curá-lo.",
        hp: 300,
        baseDamage: 0, // Damage is variable
        locked: true,
    },
    dr_chapatin: {
        id: 'dr_chapatin',
        name: "Dr. Chapatin",
        image: "personagens/dr_chapatin.png",
        ability: "Injeção Dolorosa",
        description: "Aplica uma injeção que causa dor e pode envenenar o inimigo.",
        hp: 350,
        baseDamage: 20,
        locked: true,
    },
    dona_clotide: {
        id: 'dona_clotide',
        name: "Dona Clotilde",
        image: "personagens/dona_clotide.png",
        ability: "Ataque de Vassoura",
        description: "Uma bruxa com sua vassoura, que ataca com golpes surpreendentes.",
        hp: 400,
        baseDamage: 28,
        locked: true,
    },
    pancada_bonaparte: { 
        id: 'pancada_bonaparte', 
        name: "Pancada Bonaparte",
        image: "personagens/pancada_bonaparte.png",
        ability: "Chirrion!",
        description: "Diz 'Chirrion!' tão repentinamente que causa dano de susto.",
        hp: 450,
        baseDamage: 20,
        locked: true,
    },
    seu_madruga: {
        id: 'seu_madruga',
        name: "Seu Madruga",
        image: "personagens/seu_madruga.png",
        ability: "Fuga do Aluguel",
        description: "Tenta evitar o ataque inimigo, com chance de não sofrer dano no próximo turno.",
        hp: 500,
        baseDamage: 25,
        locked: true,
    },
    nhonho: { 
        id: 'nhonho',
        name: "Nhonho",
        image: "personagens/nhonho.png",
        ability: "Ataque de Peso",
        description: "Usa seu peso para esmagar o inimigo, causando dano alto.",
        hp: 550,
        baseDamage: 40,
        locked: true,
    }, 
    paty: { 
        id: 'paty',
        name: "Paty",
        image: "personagens/paty.png",
        ability: "Ataque de Patada",
        description: "Uma patada rápida que causa dano e pode atordoar o inimigo.",
        hp: 600,
        baseDamage: 25,
        locked: true,
    },
    popis: { 
        id: 'popis',
        name: "Popis",
        image: "personagens/popis.png",
        ability: "Ataque de Pipoquinha",
        description: "Ataca com pipocas explosivas que causam dano ao longo do tempo.",
        hp: 650,
        baseDamage: 10,
        locked: true,
    },
    dona_neves: { 
        id: 'dona_neves',
        name: "Dona Neves",
        image: "personagens/dona_neves.png",
        ability: "Nevasca Congelante",
        description: "Causa dano e tem chance de congelar o inimigo, impedindo-o de atacar.",   
        hp: 700,
        baseDamage: 30,
        locked: true,
    },
    professor_girafales: {
        id: 'professor_girafales',
        name: "Professor Girafales",
        image: "personagens/professor_girafales.png",
        ability: "Lecionar com Fúria",
        description: "Dá uma lição no inimigo, causando dano e possivelmente o confundindo.",
        hp: 750,
        baseDamage: 29,
        locked: true,
    },
    chapolin_colorado: {
        id: 'chapolin_colorado',
        name: "Chapolin Colorado",
        image: "personagens/chapolin_colorado.png",
        ability: "Marreta Biônica",
        description: "Um golpe com sua marreta que pode atordoar o inimigo, fazendo-o perder a vez.",
        hp: 800,
        baseDamage: 50,
        locked: true,
    },
    chaves: {
        id: 'chaves',
        name: "Chaves",
        image: "personagens/chaves.png",
        ability: "Piripaque",
        description: "Um ataque de pânico que, de alguma forma, causa dano ao inimigo por pura confusão.",
        hp: 900,
        baseDamage: 50,
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
        image: "personagens/dr_chapatin_versao_negativo.png",
        hp: 650,
        attackDamage: 35,
        description: "Uma versão sombria do Dr. Chapatin, mais perigosa e com poções venenosas.",
  },
    {  
        name: "Alma Negra Versão Aprimorada",
        image: "personagens/alma_negra_versao_aprimorada.png",
        hp: 700,
        attackDamage: 30, 
        description: "O pirata mais temido dos sete mares, com ataques brutais.",
      },
    {  
        name: "Peterete Versão Aprimorada",
        image: "personagens/peterete_versao_aprimorada.png",
        hp: 750,
        attackDamage: 35, 
        description: "Um gangster perigoso com um plano para tudo.",
  },
    {  
        name: "Racha Cuca Versão Aprimorada",
        image: "personagens/racha_cuca_versao_aprimorada.png",
        hp: 800,
        attackDamage: 40,
         description: "Um cientista louco cujas invenções são imprevisíveis e perigosas.",
    },
    { 
        name: "Chapolin Colorado Versão Negativo",
        image: "personagens/chapolin_colorado_versao_negativo.png",
        hp: 850,
        attackDamage: 30,
        description: "Uma versão distorcida do herói, usando sua marreta para o mal.",
    },
    {
        name: "Chaves Versão Negativo",
        image: "personagens/chaves_versao_negativo.png",
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
let isVillainWeakened = 0; // Duration for weakness
let isVillainStunned = 0; // Duration for stun
let heroPoisonTurns = 0;
let villainPoisonTurns = 0;
let heroEvadeNextAttack = false;
let villainConfused = 0; // Duration for confusion

let unlockedHeroes = [];
let currentVillainIndex = 0;

const initialUnlockedCharacterIds = ['chiquinha', 'quico', 'dona_florinda', 'sr_barriga'];

// Audio context for sound effects
const audioContext = new (window.AudioContext || window.webkitAudioContext)();

function playSound(buffer) {
    if (!buffer) {
        console.warn("Audio buffer not loaded, cannot play sound.");
        return;
    }
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
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const arrayBuffer = await response.arrayBuffer();
        return await audioContext.decodeAudioData(arrayBuffer);
    } catch (e) {
        console.error(`Failed to load sound: ${url}`, e);
        return null;
    }
}

// Pre-load sounds
document.addEventListener('DOMContentLoaded', () => {
    loadSound('sons/attack_sound.mp3').then(buffer => attackSoundBuffer = buffer);
    loadSound('sons/victory_sound.mp3').then(buffer => victorySoundBuffer = buffer);
    loadSound('sons/unlock_sound.mp3').then(buffer => unlockSoundBuffer = buffer);
});


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
    const p = document.createElement('p');
    p.textContent = message;
    log.prepend(p); // Add to the top
    
    // Keep only the last 5 messages for readability
    while (log.children.length > 5) {
        log.removeChild(log.lastChild);
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

function applyStatusEffects() {
    let logMessage = '';

    // Apply hero poison damage
    if (heroPoisonTurns > 0) {
        const poisonDamage = 5;
        hero.hp -= poisonDamage;
        logMessage += `Herói sofre ${poisonDamage} de dano de veneno. `;
        heroPoisonTurns--;
    }

    // Apply villain poison damage
    if (villainPoisonTurns > 0) {
        const poisonDamage = 10;
        villain.hp -= poisonDamage;
        logMessage += `${villain.name} sofreu ${poisonDamage} de dano de veneno. `;
        villainPoisonTurns--;
    }

    // Decrement status effect durations
    if (isVillainWeakened > 0) isVillainWeakened--;
    if (isVillainStunned > 0) isVillainStunned--;
    if (villainConfused > 0) villainConfused--;

    if (logMessage) {
        updateBattleLog(logMessage.trim());
        updateHealthBars();
        checkGameOver();
    }
}

function playerAttack() {
    if (!isPlayerTurn) return;

    let damage = hero.baseDamage;
    let logMessage = '';

    playSound(attackSoundBuffer);
    applyStatusEffects(); // Apply effects before attack

    if (hero.hp <= 0 || villain.hp <= 0) {
        checkGameOver();
        return;
    }

    switch (selectedCharacterId) {
        case 'sr_barriga':
            const isHeal = Math.random() < 0.3; // 30% chance to heal
            if (isHeal) {
                const healAmount = Math.floor(Math.random() * 20) + 30; // 30-50 heal
                hero.hp = Math.min(hero.maxHp, hero.hp + healAmount);
                logMessage = `Sr. Barriga usou o Livro Místico e se curou em ${healAmount} pontos!`;
            } else {
                damage = Math.floor(Math.random() * 25) + 15; // 15-40 damage
                logMessage = `Sr. Barriga usou um feitiço poderoso e causou ${damage} de dano!`;
            }
            break;
        case 'chiquinha':
            logMessage = `Chiquinha usou a Fúria do Cabelo e causou ${damage} de dano!`;
            if (Math.random() < 0.5) { // 50% chance for second hit
                damage += hero.baseDamage;
                logMessage += ' Acertou uma segunda vez!';
            }
            break;
        case 'dona_florinda':
            isVillainWeakened = 1; // Weaken for 1 turn
            logMessage = `Dona Florinda usou o Grito Supersônico, causando ${damage} de dano e enfraquecendo o próximo ataque do inimigo!`;
            break;
        case 'chapolin_colorado':
            logMessage = `Chapolin usou a Marreta Biônica e causou ${damage} de dano!`;
            if (Math.random() < 0.4) { // 40% chance to stun
                isVillainStunned = 1; // Stun for 1 turn
                logMessage += ' O inimigo está atordoado!';
            }
            break;
        case 'dr_chapatin':
            villainPoisonTurns = 2; // Poison for 2 turns
            logMessage = `Dr. Chapatin aplicou uma Injeção Dolorosa, causando ${damage} de dano e envenenando o inimigo!`;
            break;
        case 'seu_madruga':
            if (Math.random() < 0.3) {
                heroEvadeNextAttack = true;
                logMessage = `Seu Madruga tentou a Fuga do Aluguel! Há uma chance de ele evitar o próximo ataque.`;
                damage = 0; // No direct damage if evading
            } else {
                logMessage = `Seu Madruga tentou a Fuga do Aluguel, causando ${damage} de dano.`;
            }
            break;
        case 'professor_girafales':
            logMessage = `Professor Girafales deu uma lição no inimigo, causando ${damage} de dano!`;
            if (Math.random() < 0.25) {
                villainConfused = 1; // Confuse for 1 turn
                logMessage += ' O inimigo está confuso!';
            }
            break;
        case 'paty': 
            logMessage = `Paty usou o Ataque de Patada e causou ${damage} de dano!`;
            if (Math.random() < 0.3) { 
                isVillainStunned = 1; // Stun for 1 turn
                logMessage += ' O inimigo está atordoado!';
            }
            break;
        case 'popis': 
            villainPoisonTurns = 3; // Poison for 3 turns
            logMessage = `Popis atirou pipocas explosivas, causando ${damage} de dano e envenenando o inimigo!`;
            break;
        case 'dona_neves': 
            logMessage = `Dona Neves usou Nevasca Congelante, causando ${damage} de dano!`;
            if (Math.random() < 0.35) { 
                isVillainStunned = 1; // Stun for 1 turn
                logMessage += ' O inimigo está congelado!';
            }
            break;
        default: // For Quico, Pancada Bonaparte, Nhonho, Chaves, Dona Clotilde
            logMessage = `${hero.name} usou ${hero.ability} e causou ${damage} de dano!`;
            break;
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
    applyStatusEffects(); // Apply effects before attack

    if (hero.hp <= 0 || villain.hp <= 0) {
        checkGameOver();
        return;
    }

    if (heroEvadeNextAttack) {
        logMessage = `${hero.name} conseguiu fugir do ataque de ${villain.name}!`;
        heroEvadeNextAttack = false; // Reset evade
        updateBattleLog(logMessage);
        isPlayerTurn = true;
        document.getElementById('attack-button').disabled = false;
        return;
    }

    if (isVillainStunned > 0) {
        logMessage = `${villain.name} está atordoado e não pode atacar!`;
        updateBattleLog(logMessage);
        isPlayerTurn = true;
        document.getElementById('attack-button').disabled = false;
        return;
    }
    
    let damage = villain.attackDamage;
    if (isVillainWeakened > 0) {
        damage = Math.floor(damage * 0.5); // 50% less damage
        logMessage += `${villain.name}'s attack is weakened! `;
    }
    if (villainConfused > 0) {
        damage = Math.floor(damage * (0.5 + Math.random() * 0.5)); // 50% to 100% of normal damage
        logMessage += `${villain.name} está confuso e seu ataque é menos eficaz! `;
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
        
        let unlockedHero = null;
        // Check if there's a next villain
        if (currentVillainIndex < villains.length - 1) {
            currentVillainIndex++;
            saveProgress();

            // Unlock the next character in a predefined order if not already unlocked
            const allCharacterIds = Object.keys(characters);
            const charactersAvailableToUnlock = allCharacterIds.filter(id => 
                !initialUnlockedCharacterIds.includes(id) && 
                !unlockedHeroes.includes(id)
            );

            if (charactersAvailableToUnlock.length > 0) {
                // Find the first character in the original 'characters' object order that is locked and not yet unlocked
                const nextCharacterToUnlockId = Object.keys(characters).find(charId => 
                    characters[charId].locked && !unlockedHeroes.includes(charId)
                );

                if (nextCharacterToUnlockId) {
                    unlockedHero = characters[nextCharacterToUnlockId];
                    unlockedHeroes.push(unlockedHero.id);
                    characters[unlockedHero.id].locked = false;
                    saveProgress();
                }
            }
            title.innerText = "Vitória!";
            message.innerText = `Você derrotou ${villain.name}! Mas um novo desafio aguarda...`;
            restartButton.innerText = 'Continuar Aventura';
        } else {
            // All villains defeated
            title.innerText = "Vitória Final!";
            message.innerText = `Você derrotou todos os vilões e salvou o multiverso! Parabéns, herói!`;
            restartButton.innerText = 'Jogar Novamente';
            // No new villain, so next time is a full reset
            currentVillainIndex = villains.length; // Indicate all defeated
            saveProgress();
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
    unlockedHeroes = [...initialUnlockedCharacterIds]; // Start with initial heroes unlocked
    
    // Reset all characters to locked except the initial ones
    for (const charId in characters) {
        if (!initialUnlockedCharacterIds.includes(charId)) {
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
    isVillainWeakened = 0;
    isVillainStunned = 0;
    heroPoisonTurns = 0;
    villainPoisonTurns = 0;
    heroEvadeNextAttack = false;
    villainConfused = 0;

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
    document.getElementById('battle-log').innerHTML = '<p>A batalha começa! O que você vai fazer?</p>'; // Clear previous log
    updateBattleLog(`A batalha contra ${villain.name} começa!`);
    document.getElementById('attack-button').disabled = false;
    switchScreen('battle');
}

function populateCharacterSelection() {
    const characterList = document.getElementById('character-list');
    characterList.innerHTML = '';

    // Ensure initial heroes are in unlockedHeroes array if not already there
    initialUnlockedCharacterIds.forEach(id => {
        if (!unlockedHeroes.includes(id)) {
            unlockedHeroes.push(id);
            characters[id].locked = false;
        }
    });

    for (const charId in characters) {
        const char = characters[charId];
        const isUnlocked = unlockedHeroes.includes(char.id);
        
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
    
    // Always start with initial heroes unlocked by default
    unlockedHeroes = [...initialUnlockedCharacterIds];

    if (savedHeroes) {
        const loadedUnlockedHeroes = JSON.parse(savedHeroes);
        // Merge loaded heroes with initial ones to ensure initial ones are always present
        unlockedHeroes = [...new Set([...unlockedHeroes, ...loadedUnlockedHeroes])];
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
            resetGame(); // Full reset if all villains were defeated
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