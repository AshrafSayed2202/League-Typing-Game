// Catch Selectors
let startButton = document.querySelector(".start");
let lvlNameSpan = document.querySelector(".message .lvl");
let secondsSpan = document.querySelector(".message .seconds");
let theWord = document.querySelector(".the-word");
let upcomingWords = document.querySelector(".upcoming-words");
let input = document.querySelector(".input");
let timeLeftSpan = document.querySelector(".time span");
let scoreGot = document.querySelector(".score .got");
let scoreTotal = document.querySelector(".score .total");
let finishMessage = document.querySelector(".finish");
let span = document.querySelector(".finish .span");
let theIcon = document.querySelector(".the-icon img");
let reset = document.querySelector(".reset");
let chosenLevel
let levelSeconds;
let levelName;
let spanText;
let wordsGroup = document.querySelector(".words-group select");
const words = [];
wordsGroup.addEventListener("change",function (e){
    chosenLevel = wordsGroup.value;
    words.splice(0,words.length);
    if(chosenLevel == "champs"){
        words.push("Aatrox","Ahri","Akali","Akshan","Alistar","Amumu","Anivia","Annie","Aphelios","Ashe","Aurelion Sol","Azir","Bard","Bel'Veth","Blitzcrank","Brand","Braum","Caitlyn","Camille","Cassiopeia","Cho'Gath","Corki","Darius","Diana","Dr.Mundo","Draven","Ekko","Elise","Evelynn","Ezreal","Fiddlesticks","Fiora","Fizz","Galio","Gangplank","Garen","Gnar","Gragas","Graves","Gwen","Hecarim","Heimerdinger","Illaoi","Irelia","Ivern","Janna","Jarvan IV","Jax","Jayce","Jhin","Jinx","Kai'Sa","Kalista","Karma","Karthus","Kassadin","Katarina","Kayle","Kayn","Kennen","Kha'Zix","Kindred","Kled","Kog'Maw","Leblanc","Lee Sin","Leona","Lillia","Lissandra","Lucian","Lulu","Lux","Malphite","Malzahar","Maokai","Master Yi","Miss Fortune","Mordekaiser","Morgana","Nami","Nasus","Nautilus","Neeko","Nidalee","Nocturne","Nunu & Willump","Olaf","Orianna","Ornn","Pantheon","Poppy","Pyke","Qiyana","Quinn","Rakan","Rammus","Rek'Sai","Rell","Renata Glasc","Renekton","Rengar","Riven","Rumble","Ryze","Samira","Sejuani","Senna","Seraphine","Sett","Shaco","Shen","Shyvana","Singed","Sion","Sivir","Skarner","Sona","Soraka","Swain","Sylas","Syndra","Tahm Kench","Taliyah","Talon","Taric","Teemo","Thresh","Tristana","Trundle","Tryndamere","Twisted Fate","Twitch","Udyr","Urgot","Varus","Vayne","Veigar","Vel'Koz","Vex","VI","Veigo","Viktor","Vladimir","Volibear","Warwick","Wukong","Xayah","Xerath","Xin Zhao","Yasuo","Yone","Yoric","Yuumi","Zac","Zed","Zeri","Ziggs","Zilean","Zoe","Zyra")
    }else if(chosenLevel == "starter-items"){
        words.push("Cull","Dark Seal","Doran's Blade","Doran's Ring","Doran's Shield","Emberknife","Guardian's Blade","Guardian's Hammer","Guardian's Horn","Guardian's Orb","Hailblade","Relic Shield","Spectral Sickle","Spellthief's Edge","Steel Shoulderguards","Tear of the Goddess","Control Ward","Corrupting Potion","Elixir of Iron","Elixir of Sorcery","Elixir of Wrath","Health Potion","Refillable Potion");
    }else if(chosenLevel == "basic-items"){
        words.push("Amplifying Tome","B.F.Sword","Blasting Wand","Stopwatch","Cloak of Agility","Cloth Armor","Dagger","Faerie Charm","Long Sword","Needlessly Large Rod","Null-Magic Mantle","Pickaxe","Rejuvenation Bead","Ruby Crystal","Sapphire Crystal","Sheen")
    }else if(chosenLevel == "epic-items"){
        words.push("Aegis of the Legion","Aether Wisp","Bami's Cinder","Bandleglass Mirror","Blighting Jewel","Bramble Vest","Caulfield's Warhammer","Chain Vest","Crystalline Bracer","Executioner's Calling","Fiendish Codex","Forbidden Idol","Frostfang","Giant's Belt","Glacial Buckler","Harrowing Crescent","Hearthbound Axe","Hexdrinker","Hextech Alternator","Ironspike Whip","Kindlegem","Kircheis Shard","Last Whisper","Leeching Leer","Lost Chapter","Negatron Cloak","Noonquiver","Oblivion Orb","Phage","Quicksilver Sash","Rageknife","Recurve Bow","Runesteel Spaulders","Seeker's Armguard","Serrated Dirk","Spectre's Cowl","Targon's Buckler","Tiamat","Vampiric Scepter","Verdant Barrier","Warden's Mail","Watchful Wardstone","Winged Moonplate","Zeal")
    }else if(chosenLevel == "legendary-items"){
        words.push("Abyssal Mask","Anathema's Chains","Archangel's Staff","Ardent Censer","Axiom Arc","Banshee's Veil","Black Cleaver","Black Mist Scythe","Blade of the Ruined King","Bloodthirster","Bulwark of the Mountain","Chempunk Chainsword","Chemtech Putrifier","Cosmic Drive","Dead Man's Plate","Death's Dance","Demonic Embrace","Edge of Night","Essence Reaver","Fimbulwinter","Force of Nature","Frozen Heart","Gargoly Stoneplate","Guardian Angel","Guinsoo's Rageblade","Horizon Focus","Hullbreaker","Infinity Edge","Knight's Vow","Lich Bane","Lord Dominik's Regards","Manamune","Maw of Malmortius","Mejai's Soulstealer","Mercurial Scimitar","Mikael's Blessing","Morellonomicon","Mortal Reminder","Muramana","Nashor's Tooth","Navori QuickBlades","Pauldrons of Whiterock","Phantom Dancer","Rabadon's Deathcap","Randuin's Omen","Rapid Firecannon","Ravenous Hydra","Redemption","Runaan's Hurricane","Rylai's Crystal Scepter","Seraph's Embrace","Serpent's Fang","Serylda's Grudge","Shadowflame","Shard of True Ice","Silvermere Dawn","Spirit Visage","Staff of Flowing Water","Sterak's Gage","Stormrazor","The Collector","Thornmail","Titanic Hydra","Umbral Glaive","Vigilant Wardstone","Void Staff","Warmog's Armor","Winter's Approach","Wit's End","Youmuu's Ghostblade","Zeke's Convergence","Zhonya's Hourglass")
    }else if(chosenLevel == "mythic-items"){
        words.push("Crown pf the Shattered Queen","Divine Sunderer","Duskblade of Draktharr","Eclipse","Evenshroud","Everfrost","Frostfire Gauntlet","Galeforce","Goredrinker","Hextech Rocketbelt","Immortal Shieldbow","Imperial Mandate","Kraken Slayer","Liandry's Anguish","Locket of the Iron Solari","Luden's Tempest","Moonstone Renewer","Night Harvester","Prowler's Claw","Riftmaker","Shurelya's Battlesong","Stridebreaker","Sunfire Aegis","Trinity Force","Turbo Chemtank")
    }
    scoreTotal.innerHTML = words.length;
})
reset.onclick = function(){
    window.location.reload();
}
// if(theIcon.src = "unknown"){
//     theIcon.style.display = "none"
// }
// Setting Levels
var lvls = {
    "Easy": 5,
    "Normal": 4,
    "Hard": 3
};

//Level
let levelSelector = document.querySelector(".difficulty select");
levelSelector.addEventListener("change",(e)=>{
    levelName = levelSelector.value;
    levelSeconds = lvls[levelName];
    levelName = levelSelector.value;
    lvlNameSpan.innerHTML = levelName;
    secondsSpan.innerHTML = levelSeconds;
    timeLeftSpan.innerHTML = levelSeconds;
})
// Disable Paste Event
input.onpaste = function () {
    return false;
}

// Start Game
startButton.onclick = function () {
    scoreGot.innerHTML = 0;
    theWord.innerHTML = '';
    levelSeconds = lvls[levelName]
    if(levelSelector.value == 0||wordsGroup.value == 0){
        theWord.innerHTML = 'Please select Difficulty and Words Group';
        return;
    }
    // this.remove();
    input.focus();
    // Generate Word Function
    genWords();
}

function genWords() {
// Get Random Word From Array
let randomWord = words[Math.floor(Math.random() * words.length)];
// Get Word Index
let wordIndex = words.indexOf(randomWord);
// Remove WordFrom Array
words.splice(wordIndex, 1);
// Show The Random Word
theWord.innerHTML = randomWord;
// Show the Icon
theIcon.src = `icons\\${chosenLevel}\\${theWord.innerHTML}.webp`;
console.log(theIcon);
// Empty Upcoming Words
upcomingWords.innerHTML = '';
// Generate Words
levelSeconds = lvls[levelName];

for (let i = 0; i < words.length; i++) {
// Create Div Element
let div = document.createElement("div");
let txt = document.createTextNode(words[i]);
div.appendChild(txt);
upcomingWords.appendChild(div);
}
// Call Start Play Function
startPlay();
}

function startPlay() {
    input.value = '';
    span.innerHTML = 'in Game';
    span.classList.remove("bad","good")
    let start = setInterval(() => {
if (levelSeconds == 0) {
    // Stop Timer
    clearInterval(start);
    // Compare Words
    if (theWord.innerHTML.toLowerCase() === input.value.toLowerCase()) {
        // Empty Input Field
        input.value = '';

        // Increase Score
        scoreGot.innerHTML++;
        if (words.length > 0) {
            // Call Generate Word Function
            genWords();
        } else {
            span.className = 'good';
            span.innerHTML = `Conrgatulation! you achived ${scoreGot.innerHTML * 100 / scoreTotal.innerHTML}% on ${levelName} difficulty ${wordsGroup.value} Group`;
            // Remove Upcoming Words Box
            upcomingWords.remove();
        }
        } else {
        span.className = 'bad';
        span.innerHTML = `Game Over! you achived ${scoreGot.innerHTML * 100 / scoreTotal.innerHTML}% on ${levelName} difficulty ${wordsGroup.value} Group`;
        }

    }
    timeLeftSpan.innerHTML = levelSeconds--;
    }, 1000);
}
