const characters = {
    chiquinha: {
        id: 'chiquinha',
        name: "Chiquinha",
        image: "personagens/chiquinha.png",
        ability: "Fúria do Cabelo",
        description: "Ataque rápido que tem chance de atingir duas vezes.",
        hp: 150,
        baseDamage: 25,
        locked: false, // Initial unlocked character
    },
    quico: {
        id: 'quico',
        name: "Quico",
        image: "personagens/quico.png",
        ability: "Chute Quadrado",
        description: "Um chute poderoso que causa dano consistente ao inimigo.",
        hp: 200,
        baseDamage: 30,
        locked: true,
    },
    dona_florinda: {
        id: 'dona_florinda',
        name: "Dona Florinda",
        image: "personagens/dona_florinda.png",
        ability: "Grito Supersônico",
        description: "Um grito devastador que enfraquece o próximo ataque do inimigo.",
        hp: 250,
        baseDamage: 28,
        locked: true,
    },
    sr_barriga: {
        id: 'sr_barriga',
        name: "Sr. Barriga",
        image: "personagens/sr_barriga.png",
        ability: "Livro Místico",
        description: "Usa um feitiço aleatório do livro que pode causar dano massivo ou curá-lo.",
        hp: 300,
        baseDamage: 30, // Damage is variable, this is just a placeholder
        locked: true,
    },
    dr_chapatin: {
        id: 'dr_chapatin',
        name: "Dr. Chapatin",
        image: "personagens/dr_chapatin.png",
        ability: "Injeção Dolorosa",
        description: "Aplica uma injeção que causa dor e pode envenenar o inimigo.",
        hp: 350,
        baseDamage: 28,
        locked: true,
    },
    dona_clotide: {
        id: 'dona_clotide',
        name: "Dona Clotilde",
        image: "personagens/dona_clotide.png",
        ability: "Ataque de Vassoura",
        description: "Uma bruxa com sua vassoura, que ataca com golpes surpreendentes.",
        hp: 400,
        baseDamage: 30,
        locked: true,
    },
    pancada_bonaparte: {
        id: 'pancada_bonaparte',
        name: "Pancada Bonaparte",
        image: "personagens/pancada_bonaparte.png",
        ability: "Chirrion!",
        description: "Diz 'Chirrion!' tão repentinamente que causa dano de susto.",
        hp: 450,
        baseDamage: 28,
        locked: true,
    },
    seu_madruga: {
        id: 'seu_madruga',
        name: "Seu Madruga",
        image: "personagens/seu_madruga.png",
        ability: "Fuga do Aluguel",
        description: "Tenta evitar o ataque inimigo, com chance de não sofrer dano no próximo turno.",
        hp: 500,
        baseDamage: 30, // Base damage for when evasion fails or not chosen
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
        baseDamage: 30,
        locked: true,
    },
    popis: {
        id: 'popis',
        name: "Popis",
        image: "personagens/popis.png",
        ability: "Ataque de Pipoquinha",
        description: "Ataca com pipocas explosivas que causam dano ao longo do tempo.",
        hp: 650,
        baseDamage: 28,
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
        baseDamage: 28,
        locked: true,
    },
    gloria: {
        id: 'gloria',
        name: "Glória",
        image: "personagens/gloria.png",
        ability: "Ataque de Grito",
        description: "Um grito poderoso que causa dano e pode atordoar o inimigo.",
        hp: 800,
        baseDamage: 30,
        locked: true,
    },
    godinez: {
        id: 'godinez',
        name: "Godinez",
        image: "personagens/godinez.png",
        ability: "Ataque de Preguiça",
        description: "Um ataque lento, mas com chance de causar dano massivo se o inimigo for pego desprevenido.",
        hp: 850,
        baseDamage: 28,
        locked: true,
    },
    jaiminho: {
        id: 'jaiminho',
        name: "Jaiminho",
        image: "personagens/jaiminho.png",
        ability: "Entrega Relâmpago",
        description: "Um ataque rápido que causa dano e pode confundir o inimigo.",
        hp: 900,
        baseDamage: 30,
        locked: true,
    },
    lucas_pirado: {
        id: 'lucas_pirado',
        name: "Lucas Pirado",
        image: "personagens/lucas_pirado.png",
        ability: "Ataque de Loucura",
        description: "Um ataque imprevisível que pode causar dano alto ou baixo.",
        hp: 950,
        baseDamage: 28,
        locked: true,
    },
    seu_madroga: {
        id: 'seu_madroga',
        name: "Seu Madroga",
        image: "personagens/seu_madroga.png",
        ability: "Ataque de Aluguel",
        description: "Um ataque que causa dano e pode reduzir o dano do próximo ataque do inimigo.",
        hp: 1000,
        baseDamage: 30,
        locked: true,
    },
    chapolin_colorado: {
        id: 'chapolin_colorado',
        name: "Chapolin Colorado",
        image: "personagens/chapolin_colorado.png",
        ability: "Marreta Biônica",
        description: "Um golpe com sua marreta que pode atordoar o inimigo, fazendo-o perder a vez.",
        hp: 1050,
        baseDamage: 35,
        locked: true,
    },
    chaves: {
        id: 'chaves',
        name: "Chaves",
        image: "personagens/chaves.png",
        ability: "Piripaque",
        description: "Um ataque de pânico que, de alguma forma, causa dano ao inimigo por pura confusão.",
        hp: 1150,
        baseDamage: 40,
        locked: true,
    },
};

const villains = [
    {
        name: "Super Sam",
        image: "personagens/super_sam.png",
        hp: 150,
        attackDamage: 30,
        description: "Golpeia o inimigo com um saco de dinheiro. Eficaz e capitalista!",
    },
    {
        name: "Tripa Seca",
        image: "personagens/tripa_seca.png",
        hp: 200,
        attackDamage: 35,
        description: "Um bandido impiedoso que ataca sem hesitar."
    },
    {
        name: "Quase Nada",
        image: "personagens/quase_nada.png",
        hp: 250,
        attackDamage: 32,
        description: "Tão pequeno que seus ataques são difíceis de prever."
    },
    {
        name: "Peterete",
        image: "personagens/peterete.png",
        hp: 300,
        attackDamage: 32,
        description: "Um gangster perigoso com um plano para tudo."
    },
    {
        name: "Racha Cuca",
        image: "personagens/racha_cuca.png",
        hp: 350,
        attackDamage: 32,
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
        attackDamage: 32,
        description: "O pistoleiro mais rápido do oeste... ou assim ele diz."
    },
    {
        name: "Mata Fácil",
        image: "personagens/mata_facil.png",
        hp: 850,
        attackDamage: 32,
        description: "Um caçador implacável que não hesita em eliminar qualquer um que cruze seu caminho.",
    },
    {
        name: "Panca Louca",
        image: "personagens/panca_louca.png",
        hp: 900,
        attackDamage: 32,
        description: "Um lutador imprevisível que ataca com força bruta e movimentos erráticos.",
    },
    {
        name: "Pouco Pelo",
        image: "personagens/pouco_pelo.png",
        hp: 950,
        attackDamage: 32,
        description: "Um vilão astuto que usa sua inteligência para enganar e atacar seus oponentes.",
    },
    {
        name: "Rasga Bucho",
        image: "personagens/rasga_bucho.png",
        hp: 1000,
        attackDamage: 32,
        description: "Um brutamontes que ataca com força descomunal, deixando seus inimigos sem fôlego.",
    },
    {
        name: "Poucas Trancas",
        image: "personagens/poucas_trancas.png",
        hp: 500,
        attackDamage: 32,
        description: "Um bandido forte e de poucas palavras. Seus punhos falam por ele."
    },
    {
        name: "Alma Negra",
        image: "personagens/alma_negra.png",
        hp: 550,
        attackDamage: 32,
        description: "O pirata mais temido dos sete mares, com ataques brutais."
    },
    {
        name: "Dom Caveira",
        image: "personagens/dom_caveira.png",
        hp: 600,
        attackDamage: 32,
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
        attackDamage: 35, // Adjusted damage for 'aprimorada' version
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
        attackDamage: 35,
        description: "Um cientista louco cujas invenções são imprevisíveis e perigosas.",
    },
    {
        name: "Chapolin Colorado Versão Negativo",
        image: "personagens/chapolin_colorado_versao_negativo.png",
        hp: 1050,
        attackDamage: 35,
        description: "Uma versão distorcida do herói, usando sua marreta para o mal.",
    },
    {
        name: "Chaves Versão Negativo",
        image: "personagens/chaves_versao_negativo.png",
        hp: 1100,
        attackDamage: 35,
        description: "A versão maligna do Chaves, com piripaques de pura destruição.",
    },
    {
        name: "Girafales Colorado",
        image: "personagens/girafales_colorado.png",
        hp: 1150,
        attackDamage: 35,
        description: "Uma versão do Professor Girafales que usa sua inteligência para o mal.",
    },
    {
        name: "Super Pistoleiro Veloz Sam Racha Cuca",
        image: "personagens/super_pistoleiro_veloz_sam_racha_cuca.png",
        hp: 1200,
        attackDamage: 35,
        description: "Uma combinação de Super Sam, Pistoleiro Veloz e Racha Cuca, com ataques rápidos e imprevisíveis.",
    },
    {
        name: "Dr. Chapatin Poucas Trancas",
        image: "personagens/dr_chapatin_poucas_trancas.png",
        hp: 1250,
        attackDamage: 35,
        description: "Uma versão combinada do Dr. Chapatin e Poucas Trancas, com ataques brutais e poções venenosas.",
    },
    {
        name: "Alma Dom Tripa Seca Caveira Negra",
        image: "personagens/alma_dom_tripa_seca_caveira_negra.png",
        hp: 1300,
        attackDamage: 35,
        description: "Uma fusão de Alma Negra, Dom Caveira e Tripa Seca, com ataques combinados e habilidades únicas.",
    },
];

let selectedCharacterId = null;
let hero = {};
let villain = {};
let isPlayerTurn = true;
let isVillainWeakened = 0; // Duration for weakness (Dona Florinda)
let isVillainStunned = 0; // Duration for stun (Chapolin, Paty, Dona Neves)
let heroPoisonTurns = 0; // Duration for hero poison (from villain)
let villainPoisonTurns = 0; // Duration for villain poison (Dr. Chapatin, Popis)
let heroEvadeNextAttack = false; // Seu Madruga's evade
let villainConfused = 0; // Duration for confusion (Professor Girafales, Jaiminho)

let unlockedHeroes = [];
let currentVillainIndex = 0;

// Initial unlocked character is only Chiquinha as per the `characters` object.
// If Quico should also be unlocked from the start, set characters.quico.locked = false.
const initialUnlockedCharacterIds = ['chiquinha'];

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

    // Ensure HP doesn't go below 0 for display
    hero.hp = Math.max(0, hero.hp);
    villain.hp = Math.max(0, villain.hp);

    const heroHealthPercent = (hero.hp / hero.maxHp) * 100;
    const villainHealthPercent = (villain.hp / villain.maxHp) * 100;

    heroHealthBar.style.width = `${Math.max(0, heroHealthPercent)}%`;
    villainHealthBar.style.width = `${Math.max(0, villainHealthPercent)}%`;
    heroHpText.textContent = `HP: ${hero.hp} / ${hero.maxHp}`;
    villainHpText.textContent = `HP: ${villain.hp} / ${villain.maxHp}`;
}

function applyStatusEffects() {
    let logMessage = '';

    // Apply hero poison damage (if implemented by a villain)
    if (heroPoisonTurns > 0) {
        const poisonDamage = 5; // Example damage, adjust as needed
        hero.hp -= poisonDamage;
        logMessage += `Herói sofre ${poisonDamage} de dano de veneno. `;
        heroPoisonTurns--;
    }

    // Apply villain poison damage (Dr. Chapatin, Popis)
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
        // Check game over here only if HP drops to 0 from status effects
        if (hero.hp <= 0 || villain.hp <= 0) {
            checkGameOver();
            return true; // Indicate that game might be over
        }
    }
    return false; // Indicate that game is not over from effects alone
}

function playerAttack() {
    if (!isPlayerTurn) return;

    playSound(attackSoundBuffer);

    // Apply status effects at the start of the turn
    if (applyStatusEffects()) { // If effects end the game, stop here
        return;
    }

    let damage = hero.baseDamage;
    let logMessage = '';
    let specialAbilityUsed = false;

    switch (selectedCharacterId) {
        case 'sr_barriga':
            specialAbilityUsed = true;
            const isHeal = Math.random() < 0.3; // 30% chance to heal
            if (isHeal) {
                const healAmount = Math.floor(Math.random() * 20) + 30; // 30-50 heal
                hero.hp = Math.min(hero.maxHp, hero.hp + healAmount);
                logMessage = `Sr. Barriga usou o Livro Místico e se curou em ${healAmount} pontos!`;
                damage = 0; // No damage when healing
            } else {
                damage = Math.floor(Math.random() * 25) + 15; // 15-40 damage
                logMessage = `Sr. Barriga usou um feitiço poderoso e causou ${damage} de dano!`;
            }
            break;
        case 'chiquinha':
            specialAbilityUsed = true;
            logMessage = `Chiquinha usou a Fúria do Cabelo e causou ${damage} de dano!`;
            if (Math.random() < 0.5) { // 50% chance for second hit
                damage += hero.baseDamage; // Add base damage for second hit
                logMessage += ' Acertou uma segunda vez!';
            }
            break;
        case 'dona_florinda':
            specialAbilityUsed = true;
            isVillainWeakened = 1; // Weaken for 1 turn (next villain attack)
            logMessage = `Dona Florinda usou o Grito Supersônico, causando ${damage} de dano e enfraquecendo o próximo ataque do inimigo!`;
            break;
        case 'chapolin_colorado':
            specialAbilityUsed = true;
            logMessage = `Chapolin usou a Marreta Biônica e causou ${damage} de dano!`;
            if (Math.random() < 0.4) { // 40% chance to stun
                isVillainStunned = 1; // Stun for 1 turn (next villain turn)
                logMessage += ' O inimigo está atordoado!';
            }
            break;
        case 'dr_chapatin':
            specialAbilityUsed = true;
            villainPoisonTurns = 2; // Poison for 2 turns
            logMessage = `Dr. Chapatin aplicou uma Injeção Dolorosa, causando ${damage} de dano e envenenando o inimigo!`;
            break;
        case 'seu_madruga':
            specialAbilityUsed = true;
            if (Math.random() < 0.3) { // 30% chance to evade
                heroEvadeNextAttack = true;
                logMessage = `Seu Madruga tentou a Fuga do Aluguel! Há uma chance de ele evitar o próximo ataque.`;
                damage = 0; // No direct damage if evading
            } else {
                logMessage = `Seu Madruga tentou a Fuga do Aluguel, causando ${damage} de dano.`;
            }
            break;
        case 'professor_girafales':
            specialAbilityUsed = true;
            logMessage = `Professor Girafales deu uma lição no inimigo, causando ${damage} de dano!`;
            if (Math.random() < 0.25) { // 25% chance to confuse
                villainConfused = 1; // Confuse for 1 turn
                logMessage += ' O inimigo está confuso!';
            }
            break;
        case 'paty':
            specialAbilityUsed = true;
            logMessage = `Paty usou o Ataque de Patada e causou ${damage} de dano!`;
            if (Math.random() < 0.3) { // 30% chance to stun
                isVillainStunned = 1; // Stun for 1 turn
                logMessage += ' O inimigo está atordoado!';
            }
            break;
        case 'popis':
            specialAbilityUsed = true;
            villainPoisonTurns = 3; // Poison for 3 turns
            logMessage = `Popis atirou pipocas explosivas, causando ${damage} de dano e envenenando o inimigo!`;
            break;
        case 'dona_neves':
            specialAbilityUsed = true;
            logMessage = `Dona Neves usou Nevasca Congelante, causando ${damage} de dano!`;
            if (Math.random() < 0.35) { // 35% chance to stun
                isVillainStunned = 1; // Stun for 1 turn
                logMessage += ' O inimigo está congelado!';
            }
            break;
        case 'jaiminho':
            specialAbilityUsed = true;
            logMessage = `Jaiminho usou Entrega Relâmpago e causou ${damage} de dano!`;
            if (Math.random() < 0.2) { // 20% chance to confuse
                villainConfused = 1;
                logMessage += ' O inimigo está confuso!';
            }
            break;
        case 'lucas_pirado':
            specialAbilityUsed = true;
            damage = Math.floor(Math.random() * hero.baseDamage * 1.5) + (hero.baseDamage / 2); // Variable damage
            logMessage = `Lucas Pirado usou Ataque de Loucura e causou ${Math.floor(damage)} de dano!`;
            break;
        case 'seu_madroga':
            specialAbilityUsed = true;
            logMessage = `Seu Madroga usou Ataque de Aluguel e causou ${damage} de dano!`;
            isVillainWeakened = Math.random() < 0.2 ? 1 : 0; // 20% chance to weaken for 1 turn
            if (isVillainWeakened) logMessage += ' O inimigo está enfraquecido!';
            break;
        case 'chaves':
            specialAbilityUsed = true;
            // Chaves' Piripaque: potentially higher base damage, always causes confusion
            damage = hero.baseDamage;
            villainConfused = 1; // Always confuse for 1 turn
            logMessage = `Chaves teve um Piripaque e causou ${damage} de dano, deixando o inimigo confuso!`;
            break;
        // Quico, Dona Clotilde, Pancada Bonaparte, Nhonho, Gloria, Godinez have no special effects beyond base damage
        default:
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
    if (isPlayerTurn) return; // Should not happen but as a safeguard

    // Apply status effects at the start of the villain's turn
    if (applyStatusEffects()) { // If effects end the game, stop here
        return;
    }

    let logMessage = '';

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
        // Confusion can make the villain miss or hit themselves or reduce damage
        if (Math.random() < 0.3) { // 30% chance to hit themselves
            const selfDamage = Math.floor(damage * 0.5); // Half damage to self
            villain.hp -= selfDamage;
            logMessage += `${villain.name} está confuso e se acertou, causando ${selfDamage} de dano! `;
        } else {
            damage = Math.floor(damage * 0.7); // 30% less damage to hero
            logMessage += `${villain.name} está confuso e seu ataque é menos eficaz! `;
        }
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
    unlockAnnouncement.innerHTML = ''; // Clear previous unlock announcement
    const restartButton = document.getElementById('restart-button');

    if (isVictory) {
        playSound(victorySoundBuffer);

        let unlockedHero = null;
        // Check if there's a next villain
        if (currentVillainIndex < villains.length - 1) {
            currentVillainIndex++;
            saveProgress();

            // Unlock the next character in a predefined order if not already unlocked
            const nextCharacterToUnlockId = Object.keys(characters).find(charId =>
                characters[charId].locked // Check if character is currently locked
            );

            if (nextCharacterToUnlockId) {
                unlockedHero = characters[nextCharacterToUnlockId];
                unlockedHeroes.push(unlockedHero.id); // Add to unlocked list
                characters[unlockedHero.id].locked = false; // Update character object status
                saveProgress();
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

    } else { // Defeat
        title.innerText = "Derrota...";
        message.innerText = `Você foi derrotado por ${villain.name}. O multiverso ainda precisa de você. Tente novamente!`;
        restartButton.innerText = 'Tentar Novamente';
    }
}

function resetGame() {
    localStorage.removeItem('game_unlocked_heroes');
    localStorage.removeItem('game_villain_index');
    currentVillainIndex = 0;
    unlockedHeroes = []; // Clear unlocked heroes

    // Reset all characters to locked except the initial ones
    for (const charId in characters) {
        if (initialUnlockedCharacterIds.includes(charId)) {
            characters[charId].locked = false;
        } else {
            characters[charId].locked = true;
        }
    }
    loadProgress(); // Reload to ensure initial heroes are added to unlockedHeroes array
}

function setupBattle() {
    hero = { ...characters[selectedCharacterId] };
    hero.maxHp = hero.hp; // Store max HP for health bar calculation
    villain = { ...villains[currentVillainIndex] };
    villain.maxHp = villain.hp; // Store max HP for health bar calculation

    // Reset battle state variables for new battle
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
        <p class="ability-text">Habilidade: ${hero.ability}</p>
        <p class="ability-description">${hero.description}</p>
        <div class="health-bar-container"><div class="health-bar"></div></div>
        <p class="hp-text">HP: ${hero.hp} / ${hero.maxHp}</p>
    `;

    const villainSide = document.getElementById('villain-side');
    villainSide.innerHTML = `
        <img src="${villain.image}" alt="${villain.name}">
        <h3>${villain.name}</h3>
        <p class="ability-text">Ataque: ${villain.attackDamage}</p>
        <p class="ability-description">${villain.description}</p>
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

    // Ensure initial heroes are in unlockedHeroes array and marked as unlocked
    initialUnlockedCharacterIds.forEach(id => {
        if (!unlockedHeroes.includes(id)) {
            unlockedHeroes.push(id);
        }
        characters[id].locked = false; // Explicitly set to false
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
            <p class="char-desc">${char.description}</p>
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
    if (currentVillainIndex < villains.length) {
        title.innerText = `Próximo Vilão: ${villains[currentVillainIndex].name}`;
    } else {
        title.innerText = 'Todos os vilões foram derrotados! Escolha seu Herói para revisitar as batalhas.';
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
        loadedUnlockedHeroes.forEach(id => {
            if (!unlockedHeroes.includes(id)) {
                unlockedHeroes.push(id);
            }
        });
    }

    // Update the locked status in the `characters` object based on `unlockedHeroes`
    for (const charId in characters) {
        if (unlockedHeroes.includes(charId)) {
            characters[charId].locked = false;
        } else {
            characters[charId].locked = true;
        }
    }

    if (savedVillainIndex) {
        currentVillainIndex = parseInt(savedVillainIndex, 10);
        // Ensure villain index doesn't exceed available villains
        if (currentVillainIndex >= villains.length) {
            currentVillainIndex = villains.length; // Max out at the end if all defeated
        }
    } else {
        currentVillainIndex = 0; // Default to first villain if no progress saved
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
        loadProgress(); // Reload progress to ensure character locked status and villain index are correct
        populateCharacterSelection();
        switchScreen('characterSelection');
        const currentSelected = document.querySelector('.character-card.selected');
        if (currentSelected) {
            currentSelected.classList.remove('selected');
        }
        document.getElementById('select-character-button').disabled = true;
        selectedCharacterId = null; // Reset selected character
    });

    switchScreen('start');
}

init();