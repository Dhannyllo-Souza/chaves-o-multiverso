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
        locked: false,
    },
    sr_barriga: {
        id: 'sr_barriga',
        name: "Sr. Barriga",
        image: "personagens/sr_barriga.png",
        ability: "Livro Místico",
        description: "Usa um feitiço aleatório do livro que pode causar dano massivo ou curá-lo.",
        hp: 300,
        locked: false,
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
        image: "personagens/dona_clotilde.png",
        ability: "Ataque de Vassoura",
        description: "Uma bruxa com sua vassoura, que ataca com golpes surpreendentes.",
        hp: 400,
        locked: true,
    },
    pancada_bonaparte: {
        id: 'pancada_bonaparte',
        name: "Pancada Bonaparte",
        image: "personagens/pancada_bonaparte.png",
        ability: "Cassetete Poderoso",
        description: "Atordoa o inimigo com um golpe preciso, impedindo seu próximo ataque.",
        hp: 450,
        locked: true,
    },
    paty: {
        id: 'paty',
        name: "Paty",
        image: "personagens/paty.png",
        ability: "Beijo Roubado",
        description: "Rouba a energia do inimigo, curando-se em uma pequena quantidade.",
        hp: 300,
        locked: true,
    },
    professor_girafales: {
        id: 'professor_girafales',
        name: "Professor Girafales",
        image: "personagens/professor_girafales.png",
        ability: "Tabuada Mortal",
        description: "Dispara uma sequência de equações matemáticas que causam dano mental ao inimigo.",
        hp: 500,
        locked: true,
    },
    nhonho: {
        id: 'nhonho',
        name: "Nhonho",
        image: "personagens/nhonho.png",
        ability: "Barriga de Milhões",
        description: "Um ataque de impacto que causa dano baseado em sua vasta circunferência.",
        hp: 550,
        locked: true,
    },
    chaves: {
        id: 'chaves',
        name: "Chaves",
        image: "personagens/chaves.png",
        ability: "Martelo Biônico",
        description: "Desfere um golpe poderoso com seu martelo imaginário.",
        hp: 600,
        locked: true,
    }
};

const villains = [
    {
        id: 'seila',
        name: "Seila",
        image: "personagens/seila.png",
        hp: 200,
        ability: "Risada Maligna",
        damage: { min: 20, max: 35 },
        unlocks: 'dr_chapatin'
    },
    {
        id: 'bruxa_71',
        name: "Bruxa do 71",
        image: "personagens/bruxa_71.png",
        hp: 300,
        ability: "Feitiço do Enjoo",
        damage: { min: 30, max: 45 },
        unlocks: 'dona_clotide'
    },
    {
        id: 'sr_madruga',
        name: "Seu Madruga",
        image: "personagens/sr_madruga.png",
        hp: 400,
        ability: "Ataque da Dívida",
        damage: { min: 40, max: 55 },
        unlocks: 'pancada_bonaparte'
    },
    {
        id: 'kiko_adulto',
        name: "Quico Adulto",
        image: "personagens/kiko_adulto.png",
        hp: 500,
        ability: "Bola Quadrada",
        damage: { min: 50, max: 65 },
        unlocks: 'paty'
    },
    {
        id: 'chiquinha_velha',
        name: "Chiquinha Velha",
        image: "personagens/chiquinha_velha.png",
        hp: 600,
        ability: "Choro Irritante",
        damage: { min: 60, max: 75 },
        unlocks: 'professor_girafales'
    },
    {
        id: 'pancada_maduro',
        name: "Pancada Maduro",
        image: "personagens/pancada_maduro.png",
        hp: 700,
        ability: "Porrete Esmagador",
        damage: { min: 70, max: 85 },
        unlocks: 'nhonho'
    },
    {
        id: 'chaves_ancião',
        name: "Chaves Ancião",
        image: "personagens/chaves_anciao.png",
        hp: 800,
        ability: "Chute Atômico na Barriga",
        damage: { min: 80, max: 95 },
        unlocks: 'chaves' // No one to unlock after final boss
    }
];

let selectedCharacterId = null;
let currentHero = null;
let currentVillain = null;
let currentVillainIndex = 0;
let playerStunned = false;
let villainAttackReduced = false;
let unlockedHeroes = Object.keys(characters).filter(id => !characters[id].locked);

const screens = {
    start: document.getElementById('start-screen'),
    characterSelection: document.getElementById('character-selection-screen'),
    battle: document.getElementById('battle-screen'),
    gameOver: document.getElementById('game-over-screen')
};

const uiElements = {
    characterList: document.getElementById('character-list'),
    selectCharacterButton: document.getElementById('select-character-button'),
    heroSide: document.getElementById('hero-side'),
    villainSide: document.getElementById('villain-side'),
    attackButton: document.getElementById('attack-button'),
    battleLog: document.getElementById('battle-log'),
    gameOverTitle: document.getElementById('game-over-title'),
    gameOverMessage: document.getElementById('game-over-message'),
    unlockAnnouncement: document.getElementById('unlock-announcement')
};

function switchScreen(screenName) {
    for (const key in screens) {
        screens[key].classList.remove('active');
    }
    screens[screenName].classList.add('active');
}

function logMessage(message) {
    const p = document.createElement('p');
    p.textContent = message;
    uiElements.battleLog.prepend(p); // Add new messages at the top
    if (uiElements.battleLog.children.length > 10) { // Keep log from getting too long
        uiElements.battleLog.removeChild(uiElements.battleLog.lastChild);
    }
}

function updateHealthBar(characterObj, isHero) {
    const elementId = isHero ? 'hero-side' : 'villain-side';
    const characterCard = document.getElementById(elementId);
    if (!characterCard) return;

    const healthBar = characterCard.querySelector('.health-bar');
    const hpText = characterCard.querySelector('.hp-text');

    if (healthBar && hpText) {
        const percentage = (characterObj.currentHp / characterObj.maxHp) * 100;
        healthBar.style.width = `${Math.max(0, percentage)}%`; // Ensure width doesn't go below 0
        hpText.textContent = `HP: ${Math.max(0, characterObj.currentHp)} / ${characterObj.maxHp}`;
        
        // Change health bar color based on HP
        if (percentage > 50) {
            healthBar.style.backgroundColor = '#2ecc71'; // Green
        } else if (percentage > 20) {
            healthBar.style.backgroundColor = '#f39c12'; // Orange
        } else {
            healthBar.style.backgroundColor = '#e74c3c'; // Red
        }
    }
}

function renderCharacterBattleCard(character, isHero) {
    const cardHtml = `
        <h3>${character.name}</h3>
        <img src="${character.image}" alt="${character.name}">
        <div class="hp-text">HP: ${character.currentHp} / ${character.maxHp}</div>
        <div class="health-bar-container">
            <div class="health-bar" style="width: ${(character.currentHp / character.maxHp) * 100}%;"></div>
        </div>
        <p class="ability-display">Habilidade: ${character.ability}</p>
    `;
    const targetElement = isHero ? uiElements.heroSide : uiElements.villainSide;
    targetElement.innerHTML = cardHtml;
    targetElement.className = `character-battle-card ${isHero ? 'player-hero' : 'villain-enemy'}`; // Set class based on role
    updateHealthBar(character, isHero); // Initial health bar update
}

function populateCharacterSelection() {
    uiElements.characterList.innerHTML = ''; // Clear previous list
    Object.values(characters).forEach(character => {
        const card = document.createElement('div');
        card.className = `character-card ${character.locked ? 'locked' : ''}`;
        card.dataset.characterId = character.id;
        card.innerHTML = `
            <h3>${character.name}</h3>
            <img src="${character.image}" alt="${character.name}">
            <p>${character.description}</p>
            <p>HP: ${character.hp}</p>
        `;

        if (!character.locked) {
            card.addEventListener('click', () => {
                // Remove 'selected' class from all other cards
                document.querySelectorAll('.character-card').forEach(c => c.classList.remove('selected'));
                // Add 'selected' class to the clicked card
                card.classList.add('selected');
                selectedCharacterId = character.id;
                uiElements.selectCharacterButton.disabled = false;
            });
        }
        uiElements.characterList.appendChild(card);
    });
    uiElements.unlockAnnouncement.textContent = ''; // Clear any previous unlock messages
}

function setupBattle() {
    if (!selectedCharacterId) {
        alert("Por favor, selecione um mentor primeiro!");
        return;
    }

    currentHero = { ...characters[selectedCharacterId] };
    currentHero.currentHp = currentHero.hp;
    currentHero.maxHp = currentHero.hp; // Store max HP for health bar calculation

    currentVillain = { ...villains[currentVillainIndex] };
    currentVillain.currentHp = currentVillain.hp;
    currentVillain.maxHp = currentVillain.hp; // Store max HP for health bar calculation

    playerStunned = false;
    villainAttackReduced = false;
    uiElements.battleLog.innerHTML = '<p>A batalha começa! O que você vai fazer?</p>';
    uiElements.attackButton.disabled = false;

    renderCharacterBattleCard(currentHero, true);
    renderCharacterBattleCard(currentVillain, false);

    switchScreen('battle');
    logMessage(`Você encontrou ${currentVillain.name}! Prepare-se para a batalha!`);
    
    // Optional: Randomize battle background (if you have multiple backgrounds)
    // document.getElementById('battle-screen').style.backgroundImage = `url('path/to/random_bg.png')`;
}

async function playerAttack() {
    uiElements.attackButton.disabled = true; // Disable button during turn

    let damageDealt = 0;
    let message = '';
    let healAmount = 0;

    // Specific abilities
    switch (currentHero.id) {
        case 'sr_barriga':
            if (Math.random() < 0.5) { // 50% chance to heal
                healAmount = Math.floor(Math.random() * (40 - 20 + 1)) + 20; // 20-40 HP heal
                currentHero.currentHp = Math.min(currentHero.maxHp, currentHero.currentHp + healAmount);
                message = `${currentHero.name} usa Livro Místico e se cura em ${healAmount} HP!`;
            } else { // 50% chance to deal damage
                damageDealt = Math.floor(Math.random() * (50 - 30 + 1)) + 30; // 30-50 damage
                currentVillain.currentHp -= damageDealt;
                message = `${currentHero.name} usa Livro Místico e causa ${damageDealt} de dano a ${currentVillain.name}!`;
            }
            break;
        case 'quico':
            damageDealt = Math.floor(Math.random() * (40 - 30 + 1)) + 30; // 30-40 damage
            currentVillain.currentHp -= damageDealt;
            message = `${currentHero.name} usa Chute Quadrado e causa ${damageDealt} de dano a ${currentVillain.name}!`;
            break;
        case 'chiquinha':
            damageDealt = Math.floor(Math.random() * (20 - 15 + 1)) + 15; // Base damage 15-20
            currentVillain.currentHp -= damageDealt;
            message = `${currentHero.name} usa Fúria do Cabelo e causa ${damageDealt} de dano a ${currentVillain.name}!`;
            if (Math.random() < 0.5) { // 50% chance to hit twice
                const secondHit = Math.floor(Math.random() * (20 - 15 + 1)) + 15;
                currentVillain.currentHp -= secondHit;
                damageDealt += secondHit;
                message += ` E atinge novamente causando ${secondHit} de dano extra! Total: ${damageDealt}.`;
            }
            break;
        case 'dona_florinda':
            damageDealt = Math.floor(Math.random() * (30 - 20 + 1)) + 20; // 20-30 damage
            currentVillain.currentHp -= damageDealt;
            villainAttackReduced = true;
            message = `${currentHero.name} usa Grito Supersônico e causa ${damageDealt} de dano a ${currentVillain.name}! O próximo ataque de ${currentVillain.name} será enfraquecido.`;
            break;
        case 'dr_chapatin':
            damageDealt = Math.floor(Math.random() * (45 - 35 + 1)) + 35; // 35-45 damage
            currentVillain.currentHp -= damageDealt;
            message = `${currentHero.name} usa Injeção Dolorosa e causa ${damageDealt} de dano a ${currentVillain.name}!`;
            if (Math.random() < 0.3) { // 30% chance to stun
                playerStunned = true; // This will actually stun the *villain* for their next turn.
                // The variable name playerStunned is a bit confusing here, it should be villainStunned,
                // but for now, I'll use it this way and handle in villainAttack logic.
                message += ` ${currentVillain.name} está atordoado e não poderá atacar no próximo turno!`;
            }
            break;
        case 'dona_clotide':
            damageDealt = Math.floor(Math.random() * (50 - 40 + 1)) + 40; // 40-50 damage
            currentVillain.currentHp -= damageDealt;
            message = `${currentHero.name} usa Ataque de Vassoura e causa ${damageDealt} de dano a ${currentVillain.name}!`;
            if (Math.random() < 0.2) { // 20% chance for extra damage
                const extraDamage = Math.floor(Math.random() * (20 - 10 + 1)) + 10;
                currentVillain.currentHp -= extraDamage;
                damageDealt += extraDamage;
                message += ` E acerta um golpe extra causando ${extraDamage} de dano! Total: ${damageDealt}.`;
            }
            break;
        case 'pancada_bonaparte':
            damageDealt = Math.floor(Math.random() * (60 - 50 + 1)) + 50; // 50-60 damage
            currentVillain.currentHp -= damageDealt;
            playerStunned = true; // Stun the villain
            message = `${currentHero.name} usa Cassetete Poderoso e causa ${damageDealt} de dano a ${currentVillain.name}! ${currentVillain.name} está atordoado e não poderá atacar no próximo turno!`;
            break;
        case 'paty':
            damageDealt = Math.floor(Math.random() * (35 - 25 + 1)) + 25; // 25-35 damage
            currentVillain.currentHp -= damageDealt;
            healAmount = Math.floor(damageDealt * 0.5); // Heal for 50% of damage dealt
            currentHero.currentHp = Math.min(currentHero.maxHp, currentHero.currentHp + healAmount);
            message = `${currentHero.name} usa Beijo Roubado, causa ${damageDealt} de dano a ${currentVillain.name} e se cura em ${healAmount} HP!`;
            break;
        case 'professor_girafales':
            damageDealt = Math.floor(Math.random() * (70 - 60 + 1)) + 60; // 60-70 damage
            currentVillain.currentHp -= damageDealt;
            message = `${currentHero.name} usa Tabuada Mortal e causa ${damageDealt} de dano a ${currentVillain.name}!`;
            break;
        case 'nhonho':
            damageDealt = Math.floor(Math.random() * (80 - 70 + 1)) + 70; // 70-80 damage
            currentVillain.currentHp -= damageDealt;
            message = `${currentHero.name} usa Barriga de Milhões e causa ${damageDealt} de dano a ${currentVillain.name}!`;
            break;
        case 'chaves':
            damageDealt = Math.floor(Math.random() * (100 - 80 + 1)) + 80; // 80-100 damage
            currentVillain.currentHp -= damageDealt;
            message = `${currentHero.name} usa Martelo Biônico e causa ${damageDealt} de dano a ${currentVillain.name}!`;
            break;
        default:
            damageDealt = Math.floor(Math.random() * (25 - 15 + 1)) + 15; // Default damage 15-25
            currentVillain.currentHp -= damageDealt;
            message = `${currentHero.name} ataca e causa ${damageDealt} de dano a ${currentVillain.name}!`;
            break;
    }

    logMessage(message);
    updateHealthBar(currentHero, true);
    updateHealthBar(currentVillain, false);

    if (checkBattleEnd()) {
        return;
    }

    // Villain's turn after a short delay
    setTimeout(() => {
        villainAttack();
        uiElements.attackButton.disabled = false; // Re-enable button after villain's turn
    }, 1500);
}

function villainAttack() {
    let damageDealt = 0;
    let message = '';

    if (playerStunned) {
        logMessage(`${currentVillain.name} está atordoado e não pode atacar!`);
        playerStunned = false; // Reset stun
    } else {
        damageDealt = Math.floor(Math.random() * (currentVillain.damage.max - currentVillain.damage.min + 1)) + currentVillain.damage.min;

        if (villainAttackReduced) {
            damageDealt = Math.floor(damageDealt * 0.5); // Reduce damage by 50%
            logMessage(`${currentVillain.name}'s ataque foi enfraquecido!`);
            villainAttackReduced = false; // Reset reduction
        }

        currentHero.currentHp -= damageDealt;
        message = `${currentVillain.name} usa ${currentVillain.ability} e causa ${damageDealt} de dano a ${currentHero.name}!`;
        logMessage(message);
    }
    
    updateHealthBar(currentHero, true);
    updateHealthBar(currentVillain, false);

    checkBattleEnd();
}

function checkBattleEnd() {
    if (currentHero.currentHp <= 0) {
        currentHero.currentHp = 0; // Ensure HP doesn't go negative for display
        updateHealthBar(currentHero, true);
        endGame(false); // Player loses
        return true;
    } else if (currentVillain.currentHp <= 0) {
        currentVillain.currentHp = 0; // Ensure HP doesn't go negative for display
        updateHealthBar(currentVillain, false);
        logMessage(`${currentVillain.name} foi derrotado!`);
        
        // Unlock next hero if specified
        if (villains[currentVillainIndex].unlocks) {
            const unlockedHeroId = villains[currentVillainIndex].unlocks;
            if (characters[unlockedHeroId] && characters[unlockedHeroId].locked) {
                characters[unlockedHeroId].locked = false;
                unlockedHeroes.push(unlockedHeroId);
                uiElements.unlockAnnouncement.textContent = `Novo Mentor Desbloqueado: ${characters[unlockedHeroId].name}!`;
                logMessage(`Você desbloqueou ${characters[unlockedHeroId].name}!`);
            }
        }
        
        saveProgress(); // Save progress after each battle win

        currentVillainIndex++;
        if (currentVillainIndex < villains.length) {
            logMessage("Prepare-se para o próximo desafio!");
            setTimeout(() => {
                populateCharacterSelection(); // Re-populate to show unlocked heroes if any
                switchScreen('characterSelection'); // Go back to character selection
            }, 2000);
        } else {
            endGame(true); // Player wins the entire game
        }
        return true;
    }
    return false;
}

function endGame(playerWon) {
    uiElements.attackButton.disabled = true;
    if (playerWon) {
        uiElements.gameOverTitle.textContent = "Vitória Gloriosa!";
        uiElements.gameOverMessage.textContent = "Você salvou o Multiverso das Chaves! Parabéns, grande mentor!";
        uiElements.unlockAnnouncement.textContent = "Todos os Mentores estão com você!";
        resetGame(); // Reset progress if the entire game is won
    } else {
        uiElements.gameOverTitle.textContent = "Fim de Jogo!";
        uiElements.gameOverMessage.textContent = "Seu mentor foi derrotado. O Multiverso das Chaves continua em perigo...";
        uiElements.unlockAnnouncement.textContent = "";
    }
    switchScreen('gameOver');
}

function resetGame() {
    // Reset game state
    selectedCharacterId = null;
    currentHero = null;
    currentVillain = null;
    currentVillainIndex = 0;
    playerStunned = false;
    villainAttackReduced = false;
    uiElements.battleLog.innerHTML = '<p>A batalha começa! O que você vai fazer?</p>';

    // Reset character lock status based on initial definition
    for (const key in characters) {
        characters[key].locked = (key !== 'chiquinha' && key !== 'quico' && key !== 'dona_florinda' && key !== 'sr_barriga'); // Only these are initially unlocked
    }
    unlockedHeroes = Object.keys(characters).filter(id => !characters[id].locked);
    saveProgress(); // Clear saved progress
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
        if (currentVillainIndex >= villains.length) { // If game was won previously
            resetGame();
        }
        populateCharacterSelection();
        switchScreen('characterSelection');
        // Reset selection visual
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