// Lovestruck Hub - Procedural Romance Novel Generator
// Generates 900+ high-fidelity offline romance novels with custom titles, synopses, and chapters.

(function() {
    const femaleNames = ["Aria", "Clara", "Evelyn", "Helena", "Isabella", "Genevieve", "Lyra", "Vivian", "Evangeline", "Seraphina", "Beatrix", "Aurora", "Cordelia", "Ophelia", "Anastasia", "Florence", "Juliet", "Elizabeth", "Jane", "Catherine", "Feyre", "Olive", "Daphne", "Kate", "Lily", "Francesca", "Eloise", "Penelope", "Violet", "Hyacinth", "Sophie", "Lucy", "Marianne", "Elinor", "Emma", "Anne", "Beatrice", "Rosalind", "Celia", "Viola", "Olivia", "Diana", "Grace", "Rose", "Hazel", "Ivy", "Scarlett", "Ruby", "Stella", "Victoria"];
    
    const maleNames = ["Sebastian", "Dominic", "Gabriel", "Adrian", "Damian", "Tristan", "Lucian", "Alexander", "Gideon", "Maximilian", "Gavin", "Dorian", "Cassius", "Alistair", "Benedict", "Romeo", "Fitzwilliam", "Edward", "Heathcliff", "Rhysand", "Adam", "Simon", "Anthony", "Colin", "Michael", "Gregory", "Arthur", "Christian", "Julian", "Tristan", "Lucius", "Cassian", "Azriel", "Tamlin", "Darcy", "Bingley", "Rochester", "Lockwood", "Wentworth", "Knightley", "Brandon", "Ferrars", "Willoughby", "Frederick", "Orlando", "Benedick", "Claudio", "Orsino", "Lysander", "Demetrius"];
    
    const romanticNouns = ["Heart", "Love", "Desire", "Passion", "Shadows", "Whispers", "Secrets", "Midnight", "Storm", "Drift", "Rose", "Thorns", "Castle", "Mist", "Starlight", "Embrace", "Seduction", "Lies", "Vow", "Liaison", "Affair", "Destiny", "Fate", "Promises", "Ocean", "Moonlight", "Flame", "Song", "Duet", "Symphony", "Winter", "Summer", "Autumn", "Spring", "Touch", "Gaze", "Kiss", "Sin", "Rogue", "Empire", "Crown", "Dynasty", "Legacy", "Tears", "Banishment", "Sanctuary", "Vanquished", "Captive", "Enchantment", "Rapture", "Temptation", "Eclipse", "Dawn", "Twilight", "Hour", "Breeze", "Flame", "Embers"];
    
    const romanticAdjectives = ["Whispering", "Secret", "Forbidden", "Shattered", "Burning", "Dark", "Sweet", "Wild", "Tangled", "Stolen", "Hidden", "Restless", "Silent", "Gilded", "Haunted", "Bound", "Unspoken", "Savage", "Captive", "Ruthless", "Brooding", "Dangerous", "Magical", "Cursed", "Enchanted", "Twisted", "Lost", "Found", "Divine", "Fallen", "Eternal", "Rebel", "Royal", "Scandalous", "Intimate", "Passionate", "Sensual", "Devastated", "Fearless", "Defiant", "Gothic", "Tender", "Relentless", "Stormy", "Velvet", "Golden", "Midnight", "Silver", "Crimson"];
    
    const romanticRoles = ["Duke", "Prince", "Lord", "Billionaire", "Boss", "Professor", "Doctor", "Highlander", "Warrior", "Captive", "Bride", "Heir", "Guardian", "Alchemist", "Sovereign", "Captain", "Count", "Viscount", "Knight", "Rogue", "Outlaw", "Protector", "Mercenary"];

    const subgenres = ["Historical", "Contemporary", "Fantasy/Paranormal", "Gothic", "Sci-Fi"];
    
    const subgenreTropes = {
        "Historical": ["Regency Courtship", "High Society", "Marriage of Convenience", "Forbidden Love", "Class Differences", "Slow Burn", "Secret Identity", "Enemies to Lovers", "Arranged Marriage", "Childhood Sweethearts"],
        "Contemporary": ["Fake Dating", "Grumpy x Sunshine", "Office Romance", "Forced Proximity", "Second Chance", "Only One Bed", "Friends to Lovers", "Opposites Attract", "Roommates", "Secret Billionaire"],
        "Fantasy/Paranormal": ["Fated Mates", "Fae Romance", "Magical Bond", "Beauty and the Beast", "Enemies to Lovers", "Royal Court", "Cursed Love", "Forbidden Attraction", "Dragon Shifter", "Vampire Vow"],
        "Gothic": ["Gothic Secrets", "Haunted Manor", "Dark Romance", "Brooding Hero", "Mystery", "Tragic Past", "Stormy Setting", "Forbidden Desire", "Reclusive Artist", "Crumbling Estate"],
        "Sci-Fi": ["Star Crossed", "Interstellar Alliance", "Forced Proximity", "Alien Romance", "Space Travel", "Opposites Attract", "Galaxy Stakes", "Slow Burn", "Lost in Space", "Cosmic Connection"]
    };

    const femaleRoles = {
        "Historical": ["governess", "debutante", "impoverished lady", "rebellious heiress", "viscount's daughter", "widow"],
        "Contemporary": ["marketing executive", "PhD student", "florist", "journalist", "architect", "graphic designer"],
        "Fantasy/Paranormal": ["mortal huntress", "elven princess", "rogue witch", "half-fae exile", "dragon rider", "royal healer"],
        "Gothic": ["librarian", "companion", "artist", "orphan tutor", "mysterious visitor", "governess"],
        "Sci-Fi": ["astronaut", "cartographer", "starship pilot", "diplomat", "mechanic", "space scientist"]
    };

    const maleRoles = {
        "Historical": ["duke", "viscount", "baronet", "reclusive lord", "dashing rogue", "highland chieftain"],
        "Contemporary": ["grumpy CEO", "hostile professor", "star quarterback", "reclusive artist", "charming boss", "widowed doctor"],
        "Fantasy/Paranormal": ["High Fae Lord", "shadow king", "alpha werewolf", "vampire prince", "cursed warrior", "elven commander"],
        "Gothic": ["reclusive billionaire", "brooding master of the manor", "mysterious painter", "haunted nobleman", "exiled doctor", "ghostly guardian"],
        "Sci-Fi": ["alien commander", "cybernetic rebel", "bounty hunter", "emperor's sentinel", "rival pilot", "starship captain"]
    };

    const settingAdjectives = {
        "Historical": ["opulent ballrooms of Regency London", "windswept Scottish highlands", "sun-drenched estates of Bath", "gilded parlors of country manors"],
        "Contemporary": ["bustling streets of New York City", "sunlit cafes of Paris", "drizzle-soaked alleys of Seattle", "sleek corridors of a high-tech corporate tower"],
        "Fantasy/Paranormal": ["shimmering courts of the Spring Realm", "ancient mist-shrouded forests of Eldoria", "glowing crystal caverns under a dual-moon sky", "dramatic floating citadels of Prythian"],
        "Gothic": ["crumbling stone walls of Blackwood Hall", "fog-drenched cliffs overlooking the Atlantic", "shadowy hallways of a haunted Victorian manor", "solitary lighthouse battered by waves"],
        "Sci-Fi": ["sterile biome of a deep-space exploration vessel", "glowing crystal valleys of planet Nebula-9", "neon-drenched skylines of a colony world", "isolated research outpost on the edge of the galaxy"]
    };

    const plotObstacles = {
        "Historical": "strict societal rules, class divides, and a family scandal that could ruin them both",
        "Contemporary": "corporate rivalries, contrasting career paths, and deep-seated trust issues from their pasts",
        "Fantasy/Paranormal": "an ancient blood curse, warring magical factions, and a prophecy demanding their separation",
        "Gothic": "the dark secrets locked in the attic, a tragic family history, and the shadows of a haunted legacy",
        "Sci-Fi": "stringent interstellar treaties, an impending space-time collapse, and the political divide of their rival planetary systems"
    };

    function randomChoice(arr) {
        return arr[Math.floor(Math.random() * arr.length)];
    }

    function randomInt(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    function generateUniqueTitle(index, usedTitles) {
        const patterns = [
            () => `The ${randomChoice(romanticAdjectives)} ${randomChoice(romanticNoun)} of ${randomChoice(maleNames)}`,
            () => `${randomChoice(romanticAdjectives)} ${randomChoice(romanticNoun)}s`,
            () => `${randomChoice(romanticNoun)} and ${randomChoice(romanticNoun)}`,
            () => `The ${randomChoice(romanticRoles)}'s ${randomChoice(romanticAdjectives)} ${randomChoice(romanticNoun)}`,
            () => `A ${randomChoice(romanticNoun)} of ${randomChoice(romanticNoun)} and ${randomChoice(romanticNoun)}`,
            () => `Bound by ${randomChoice(romanticNoun)}`,
            () => `To Love a ${randomChoice(romanticRoles)}`,
            () => `${randomChoice(romanticAdjectives)} ${randomChoice(romanticNoun)}`
        ];

        let attempts = 0;
        while (attempts < 100) {
            const title = patterns[index % patterns.length]();
            if (!usedTitles.has(title)) {
                usedTitles.add(title);
                return title;
            }
            attempts++;
        }
        return `A Whispered Desire ${index}`; // absolute fallback
    }

    function generateAuthor() {
        return `${randomChoice(femaleNames)} ${randomChoice(romanticAdjectives)} ${randomChoice(romanticNoun)}`.length > 25 
            ? `${randomChoice(femaleNames)} ${randomChoice(maleNames)}`
            : `${randomChoice(femaleNames)} ${randomChoice(romanticNouns).substring(0, 8)}`;
    }

    function getRealisticAuthorName(index) {
        const first = randomChoice(femaleNames.concat(maleNames));
        const last = randomChoice(femaleNames.concat(romanticAdjectives).concat(romanticNouns));
        // Ensure it doesn't look completely crazy
        const cleanLast = last.charAt(0).toUpperCase() + last.slice(1).toLowerCase();
        return `${first} ${cleanLast}`;
    }

    function generateChapterContent(title, author, subgenre, fName, mName, fRole, mRole, scene, obstacle, chNum) {
        if (chNum === 1) {
            return [
                `The air in the ${scene} was thick with anticipation. ${fName} adjusted the collar of her velvet coat, her fingers trembling slightly. As a ${fRole}, she had trained herself to remain detached, but this evening felt different.`,
                `“You shouldn't have come,” a low, rich voice vibrated from the shadows. ${fName} gasped, spinning around. ${mName} stepped into the amber light, looking every bit the formidable ${mRole} she had been warned against. His dark hair was slightly tousled, and his intense eyes held her captive.`,
                `“I had no choice,” she whispered, standing her ground. “The secrets of this place cannot remain hidden forever.” ${mName} stepped closer, the heat of his presence driving away the chill. The air between them crackled with an undeniable spark—a dangerous tension born of forbidden desire and unaligned goals.`,
                `He reached out, his thumb gently brushing a stray lock of hair from her cheek, sending a shiver down her spine. “Then prepare yourself, my sweet. Because unlocking those secrets will bind our fates in ways you cannot possibly imagine.”`
            ];
        } else {
            return [
                `Days had passed since their fateful encounter in the ${scene}, yet ${fName} could still feel the lingering heat of ${mName}'s touch. As they were forced into close proximity by ${obstacle}, the fragile barriers between them began to crumble.`,
                `“We cannot do this,” ${mName} muttered, his voice hoarse as they stood mere inches apart in the quiet chambers. “The stakes are too high. Everything I am, everything I command is sworn to protect my people. Falling for a ${fRole} like you is madness.”`,
                `“Then let us be mad,” ${fName} countered, her gaze locking with his. The grumpy facade he usually wore melted away, replaced by an agonizing vulnerability that made her heart race. For the first time, the brooding ${mRole} let down his guard.`,
                `With a low groan, he pulled her into a passionate embrace. Their lips met in a desperate, burning kiss that sealed their silent vow. No matter what trials lay ahead, their hearts were now hopelessly, beautifully entangled.`
            ];
        }
    }

    function generate900Novels() {
        const catalog = [];
        const usedTitles = new Set();
        
        // Seed titles from original database to avoid duplicates
        usedTitles.add("Pride and Prejudice");
        usedTitles.add("Jane Eyre");
        usedTitles.add("Wuthering Heights");
        usedTitles.add("Romeo and Juliet");
        usedTitles.add("A Court of Thorns and Roses");
        usedTitles.add("The Love Hypothesis");

        // Target: 920 novels total (6 original + 914 generated)
        for (let i = 1; i <= 914; i++) {
            const sub = subgenres[i % subgenres.length];
            const title = generateUniqueTitle(i, usedTitles);
            const author = getRealisticAuthorName(i);
            
            const fName = randomChoice(femaleNames);
            const mName = randomChoice(maleNames);
            const fRole = randomChoice(femaleRoles[sub]);
            const mRole = randomChoice(maleRoles[sub]);
            const scene = randomChoice(settingAdjectives[sub]);
            const obstacle = plotObstacles[sub];
            
            const year = sub === "Historical" ? randomInt(1780, 1910) : sub === "Sci-Fi" ? randomInt(2099, 2350) : randomInt(2015, 2026);
            const rating = parseFloat((4.2 + (Math.random() * 0.7)).toFixed(1));
            const popularity = randomInt(5000, 310000);
            const pages = randomInt(180, 480);
            
            const tropes = [...subgenreTropes[sub]];
            // Shuffle and pick 3-4 tropes
            const selectedTropes = tropes.sort(() => 0.5 - Math.random()).slice(0, randomInt(3, 4));
            if (i % 7 === 0) selectedTropes.push("Slow Burn");
            
            const quickHook = `A gripping ${sub.toLowerCase()} romance. Can a spirited ${fRole} and a brooding ${mRole} overcome ${obstacle.split(',')[0]}?`;
            
            const synopsis = `Set in the ${scene}, this dramatic ${sub.toLowerCase()} novel tells the story of ${fName}, a dedicated ${fRole}, and ${mName}, a powerful, mysterious ${mRole}. Brought together by fate, they must navigate ${obstacle}. As their forced proximity turns into an intense, burning connection, they realize the only thing more dangerous than their enemies is the love growing between them. Can they survive the storm, or will their secrets tear them apart?`;
            
            const book = {
                id: `offline-gen-${i}`,
                title: title,
                author: author,
                year: year,
                language: i % 15 === 0 ? "fr" : i % 20 === 0 ? "es" : i % 25 === 0 ? "de" : "en",
                genres: [sub, "Romance"],
                subgenre: sub,
                rating: rating,
                popularity: popularity,
                pages: pages,
                quickHook: quickHook,
                synopsis: synopsis,
                tropes: selectedTropes,
                downloadUrlEpub: "#",
                downloadUrlPdf: "#",
                chapters: [
                    {
                        title: "Chapter I: Whispers in the Quiet",
                        content: generateChapterContent(title, author, sub, fName, mName, fRole, mRole, scene, obstacle, 1)
                    },
                    {
                        title: "Chapter II: The Unspoken Spark",
                        content: generateChapterContent(title, author, sub, fName, mName, fRole, mRole, scene, obstacle, 2)
                    }
                ]
            };
            
            catalog.push(book);
        }
        
        return catalog;
    }

    // Attach generator to window object
    window.offlineRomanceDatabaseGenerator = {
        generate: generate900Novels
    };
})();
