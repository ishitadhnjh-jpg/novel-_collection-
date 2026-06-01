// Lovestruck Hub - Application Logic

// 1. Curated Classic & Modern Romance Novels (Local Seed Database)
// Used for instant load, offline support, and high-fidelity previews.
const localRomanceDatabase = [
    {
        id: "pride-and-prejudice",
        title: "Pride and Prejudice",
        author: "Jane Austen",
        year: 1813,
        language: "en",
        genres: ["Historical", "Classics"],
        subgenre: "Historical",
        rating: 4.9,
        popularity: 245900,
        pages: 320,
        quickHook: "The ultimate enemies-to-lovers romance. Will Elizabeth's wit and Darcy's pride keep them apart forever?",
        synopsis: "In the regency era, the Bennet family has five unmarried daughters, and Mrs. Bennet is desperate to see them all matched with wealthy suitors. When the rich and single Mr. Bingley arrives in the neighborhood, sparks fly between him and Elizabeth's sister, Jane. However, Bingley's proud friend Mr. Darcy offends Elizabeth at a local ball, sparking a battle of wits. As their paths repeatedly cross, Elizabeth and Darcy must overcome their pride and deep-seated prejudices to realize their mutual affection.",
        tropes: ["Enemies to Lovers", "Classics", "Regency Courtship", "Slow Burn", "Misunderstandings"],
        downloadUrlEpub: "https://www.gutenberg.org/ebooks/1342.epub.images",
        downloadUrlPdf: "https://www.gutenberg.org/files/1342/1342-pdf.pdf",
        chapters: [
            {
                title: "Chapter I: The Truth Universal",
                content: [
                    "It is a truth universally acknowledged, that a single man in possession of a good fortune, must be in want of a wife.",
                    "However little known the feelings or views of such a man may be on his first entering a neighbourhood, this truth is so well fixed in the minds of the surrounding families, that he is considered the rightful property of some one or other of their daughters.",
                    "“My dear Mr. Bennet,” said his lady to him one day, “have you heard that Netherfield Park is let at last?”",
                    "Mr. Bennet replied that he had not.",
                    "“But it is,” returned she; “for Mrs. Long has just been here, and she told me all about it.” Mr. Bennet made no answer.",
                    "“Do you not want to know who has taken it?” cried his wife impatiently.",
                    "“*You* want to tell me, and I have no objection to hearing it.” This was invitation enough."
                ]
            },
            {
                title: "Chapter II: An Introduction",
                content: [
                    "Mr. Bennet was among the earliest of those who waited on Mr. Bingley. He had always intended to visit him, though to the last always assuring his wife that he should not go; and till the evening after the visit was paid she had no knowledge of it.",
                    "It was then disclosed in the following manner. Observing his second daughter employed in trimming a hat, he suddenly addressed her with: “I hope Mr. Bingley will like it, Lizzy.”",
                    "“We are not in a way to know what Mr. Bingley likes,” said her mother resentfully, “since we are not to visit.”",
                    "“But you forget, mamma,” said Elizabeth, “that we shall meet him at the assemblies, and that Mrs. Long promised to introduce him.”",
                    "“I do not believe Mrs. Long will do any such thing. She has two nieces of her own. She is a selfish, hypocritical woman, and I have no opinion of her.”"
                ]
            }
        ]
    },
    {
        id: "jane-eyre",
        title: "Jane Eyre",
        author: "Charlotte Brontë",
        year: 1847,
        language: "en",
        genres: ["Gothic", "Classics"],
        subgenre: "Gothic",
        rating: 4.8,
        popularity: 184200,
        pages: 450,
        quickHook: "A passionate gothic romance. Orphan Jane Eyre takes a governess post at Thornfield Hall, uncovering the dark secrets of the brooding Mr. Rochester.",
        synopsis: "Jane Eyre, a plain yet fiercely independent orphan, survives a harsh upbringing to become a governess at Thornfield Hall. She finds herself deeply drawn to her employer, the wealthy, moody, and magnetic Edward Rochester. As Rochester reciprocates her feelings, their passionate connection seems destined for marriage. However, Thornfield Hall hides a terrible, gothic secret locked in the attic that threatens to tear Jane and Rochester apart, forcing Jane to choose between her heart and her self-respect.",
        tropes: ["Gothic Secrets", "Classics", "Forbidden Love", "Social Divide", "Dark Mystery"],
        downloadUrlEpub: "https://www.gutenberg.org/ebooks/1230.epub.images",
        downloadUrlPdf: "https://www.gutenberg.org/files/1230/1230-pdf.pdf",
        chapters: [
            {
                title: "Chapter I: The Red Room",
                content: [
                    "There was no possibility of taking a walk that day. We had been wandering, indeed, in the leafless shrubbery an hour in the morning; but since dinner (Mrs. Reed, when there was no company, dined early) the cold winter wind had brought with it clouds so sombre, and a rain so penetrating, that further outdoor exercise was now out of the question.",
                    "I was glad of it: I never liked long walks, especially on chilly afternoons: dreadful to me was the coming home in the raw twilight, with nipped fingers and toes, and a heart saddened by the chidings of Bessie, the nurse, and humbled by the consciousness of my physical inferiority to Eliza, John, and Georgiana Reed.",
                    "The said Eliza, John, and Georgiana were now clustered round their mamma in the drawing-room: she lay reclined on a sofa by the fireside, and with her darlings about her (for the time neither quarrelling nor crying) looked perfectly happy."
                ]
            }
        ]
    },
    {
        id: "wuthering-heights",
        title: "Wuthering Heights",
        author: "Emily Brontë",
        year: 1847,
        language: "en",
        genres: ["Gothic", "Classics"],
        subgenre: "Gothic",
        rating: 4.7,
        popularity: 169800,
        pages: 348,
        quickHook: "A stormy, destructive romance. The all-consuming love of Heathcliff and Catherine Earnshaw echoes across the desolate Yorkshire moors.",
        synopsis: "Set against the wild, desolate Yorkshire moors, this classic gothic romance follows the turbulent relationship between Catherine Earnshaw and the foundling Heathcliff. Raised together as soulmates, their intense bond is severed when Catherine marries the high-status Edgar Linton. Devastated and seeking vengeance, Heathcliff returns years later as a wealthy, bitter man. His obsession with Catherine triggers a cycle of revenge, betrayal, and passion that extends to the next generation, proving that some loves are as permanent and destructive as the storm.",
        tropes: ["Soulmates", "Revenge Romance", "Gothic Secrets", "Tragic Love", "Desolate Settings"],
        downloadUrlEpub: "https://www.gutenberg.org/ebooks/768.epub.images",
        downloadUrlPdf: "https://www.gutenberg.org/files/768/768-pdf.pdf",
        chapters: [
            {
                title: "Chapter I: Mr. Lockwood's Visit",
                content: [
                    "1801.—I have just returned from a visit to my landlord—the solitary neighbour that I shall be troubled with. This is certainly a beautiful country! In all England, I do not believe that I could have fixed on a situation so completely removed from the stir of society.",
                    "A perfect misanthropist’s heaven: and Mr. Heathcliff and I are such a suitable pair to divide the desolation between us. A capital fellow! He little imagined how my heart warmed towards him when I beheld his black eyes withdraw so suspiciously under their brows.",
                    "“Mr. Heathcliff?” I said.",
                    "A nod was the answer.",
                    "“Lockwood, your new tenant, sir. I do myself the honour of calling as soon as possible after my arrival, to express the hope that I have not inconvenienced you by my importunity in soliciting the residence.”",
                    "“Wuthering Heights is not a country villa,” he replied, with no cordiality. “Come in!”"
                ]
            }
        ]
    },
    {
        id: "romeo-and-juliet",
        title: "Romeo and Juliet",
        author: "William Shakespeare",
        year: 1597,
        language: "en",
        genres: ["Tragic Romance", "Classics"],
        subgenre: "Dark Romance",
        rating: 4.6,
        popularity: 145000,
        pages: 180,
        quickHook: "The ultimate star-crossed lovers. Two teenagers from warring noble families in Verona defy destiny to be together.",
        synopsis: "In Verona, Italy, an ancient feud between the Montague and Capulet families frequently breaks out into violence. Romeo Montague sneaks into a Capulet ball, where he meets and falls instantly in love with Juliet Capulet. Discovering they belong to enemy factions, they secretly marry with the help of Friar Laurence. However, a chain of misunderstandings, street brawls, and banishments leads to a desperate scheme that goes tragically awry, cementing their love in immortality.",
        tropes: ["Forbidden Love", "Star Crossed", "Tragic Love", "Instant Attraction", "Warring Families"],
        downloadUrlEpub: "https://www.gutenberg.org/ebooks/1513.epub.images",
        downloadUrlPdf: "https://www.gutenberg.org/files/1513/1513-pdf.pdf",
        chapters: [
            {
                title: "Prologue & Act I, Scene I",
                content: [
                    "Two households, both alike in dignity, In fair Verona, where we lay our scene, From ancient grudge break to new mutiny, Where civil blood makes civil hands unclean.",
                    "From forth the fatal loins of these two foes, A pair of star-cross'd lovers take their life; Whose misadventured piteous overthrows Do with their death bury their parents' strife.",
                    "Gregory,” said Sampson, “on my word, we’ll not carry coals.”",
                    "“No,” replied Gregory, “for then we should be colliers.”",
                    "“I mean, an we be in choler, we’ll draw.”",
                    "“Ay, while you live, draw your neck out o’ the collar.”"
                ]
            }
        ]
    },
    {
        id: "court-of-thorns-roses",
        title: "A Court of Thorns and Roses",
        author: "Sarah J. Maas",
        year: 2015,
        language: "en",
        genres: ["Fantasy", "Modern Bestsellers"],
        subgenre: "Fantasy/Paranormal",
        rating: 4.8,
        popularity: 382000,
        pages: 416,
        quickHook: "A thrilling fantasy romance. Mortal huntress Feyre kills a wolf in the woods and is dragged into a dangerous fae realm.",
        synopsis: "Feyre, a nineteen-year-old huntress, kills a massive wolf to feed her starving family. Soon after, a terrifying beast arrives to demand retribution, dragging her across the magical wall into the lethal, enchanted lands of Prythian. Feyre learns her captor is not a beast, but Tamlin—one of the deadly, immortal High Fae. As she dwells at the Spring Court, her cold resentment transforms into a fiery passion. But a dark shadow is spreading over Prythian, and Feyre must break an ancient curse to save Tamlin and his court.",
        tropes: ["Fae Romance", "Beauty and the Beast", "Forbidden Love", "Slow Burn", "Magical Worlds"],
        downloadUrlEpub: "#",
        downloadUrlPdf: "#",
        chapters: [
            {
                title: "Chapter 1: The Cold Hunt",
                content: [
                    "The forest had become a labyrinth of ice and snow. I lay behind a fallen log, my fingers numb against the wooden bow, watching the clearing ahead.",
                    "A massive grey wolf stepped into the clearing, its eyes golden and intelligent. It was the size of a pony. I knew it wasn't a normal wolf. It came from across the wall—from Prythian, the land of the fae.",
                    "My family was starving. The pelt of this beast would buy us bread for a month. I drew the arrow back, letting the cold air fill my lungs, and aimed straight for its eye."
                ]
            }
        ]
    },
    {
        id: "love-hypothesis",
        title: "The Love Hypothesis",
        author: "Ali Hazelwood",
        year: 2021,
        language: "en",
        genres: ["Contemporary", "Modern Bestsellers"],
        subgenre: "Contemporary",
        rating: 4.7,
        popularity: 295000,
        pages: 352,
        quickHook: "A charming STEM comedy. A third-year Ph.D. candidate kisses a notorious professor to fake a relationship.",
        synopsis: "Olive Smith, a biology Ph.D. student, doesn't believe in lasting romantic relationships. To convince her best friend she's dating, Olive panics and kisses the first man she sees in the lab. That man happens to be Dr. Adam Carlsen, a brilliant but notoriously hostile young professor. To Olive's shock, Adam agrees to keep up the charade. As they navigate academic conferences and fake dates, Olive discovers that the only thing more volatile than a science experiment is falling in love for real.",
        tropes: ["Fake Dating", "Grumpy x Sunshine", "Academic Romance", "Only One Bed", "Slow Burn"],
        downloadUrlEpub: "#",
        downloadUrlPdf: "#",
        chapters: [
            {
                title: "Chapter 1: The Panic Kiss",
                content: [
                    "Olive stood in the hallway of the biology department, looking at her best friend Anh approaching. Anh was determined to verify that Olive had moved on from her ex.",
                    "Panic set in. Olive looked around. The corridor was empty except for a tall man walking towards her, looking down at some papers. Without thinking, Olive stepped in front of him, grabbed his lapels, and pressed her lips to his.",
                    "He froze. He felt like a solid granite pillar. When Olive pulled back, she gasped in horror. She had just kissed Dr. Adam Carlsen—the most hated, arrogant professor in the entire graduate school."
                ]
            }
        ]
    }
];

// Trope Quiz Questions
const quizQuestions = [
    {
        question: "Choose your favorite reading environment:",
        options: [
            { text: "A candlelit gothic library while rain beats on the window", value: "Gothic" },
            { text: "A cozy modern coffee shop in the heart of Paris", value: "Contemporary" },
            { text: "A royal ballroom in regency England during a grand assembly", value: "Historical" },
            { text: "A glowing mystical forest under two moons", value: "Fantasy/Paranormal" }
        ]
    },
    {
        question: "What is your absolute favorite romantic trope?",
        options: [
            { text: "Sparks flying between bitter rivals (Enemies to Lovers)", value: "Enemies to Lovers" },
            { text: "Pretending to date for convenience, then catching feelings (Fake Dating)", value: "Fake Dating" },
            { text: "Loving someone you shouldn't (Forbidden/Star-Crossed)", value: "Forbidden Love" },
            { text: "A grumpy character who is only soft for one person (Grumpy x Sunshine)", value: "Grumpy x Sunshine" }
        ]
    },
    {
        question: "What kind of romance speed or stakes do you prefer?",
        options: [
            { text: "Slow burn with intense tension and witty banter", value: "slow-burn" },
            { text: "Instant connection and intense chemistry", value: "instant" },
            { text: "Tragic obstacles, dark secrets, and high emotional drama", value: "high-stakes" }
        ]
    }
];

// App State Management
let appState = {
    theme: 'dark',
    activeSubgenreFilter: 'All',
    searchQuery: '',
    sortBy: 'popularity',
    langFilter: 'all',
    bookshelf: [], // Array of book IDs saved to reading list
    reviews: {}, // Key: bookId, Value: array of review objects
    catalog: [...localRomanceDatabase], // Full active catalog (local + fetched Gutenberg)
    currentBook: null, // Selected book for details
    currentReadingBook: null, // Selected book in reader
    currentChapterIndex: 0,
    currentFontSize: 1.15, // in rem
    readerTheme: 'theme-reader-dark',
    readerFont: 'reader-text-serif',
    isTranslatedToHindi: false,
    quizStep: 0,
    quizAnswers: [],
    syncActive: true,
    scrapedIds: new Set(localRomanceDatabase.map(b => b.id))
};

// DOM Cache
const searchInput = document.getElementById('searchInput');
const searchClearBtn = document.getElementById('searchClearBtn');
const themeToggleBtn = document.getElementById('themeToggleBtn');
const themeIcon = document.getElementById('themeIcon');
const bookshelfOpenBtn = document.getElementById('bookshelfOpenBtn');
const libraryCountBadge = document.getElementById('libraryCountBadge');

// Hero elements
const heroTitle = document.getElementById('heroTitle');
const heroCoverTitle = document.getElementById('heroCoverTitle');
const heroCoverAuthor = document.getElementById('heroCoverAuthor');
const heroCover = document.getElementById('heroCover');
const heroRatingStars = document.getElementById('heroRatingStars');
const heroRatingNumber = document.getElementById('heroRatingNumber');
const heroReleaseYear = document.getElementById('heroReleaseYear');
const heroLanguage = document.getElementById('heroLanguage');
const heroPages = document.getElementById('heroPages');
const heroDescription = document.getElementById('heroDescription');
const heroGenres = document.getElementById('heroGenres');
const heroReadBtn = document.getElementById('heroReadBtn');
const heroDetailsBtn = document.getElementById('heroDetailsBtn');

// Dashboard & feed elements
const scraperLogText = document.getElementById('scraperLogText');
const syncedCount = document.getElementById('syncedCount');
const genreFilterList = document.getElementById('genreFilterList');
const sortBySelect = document.getElementById('sortBySelect');
const langSelect = document.getElementById('langSelect');
const feedHeading = document.getElementById('feedHeading');
const resultsCount = document.getElementById('resultsCount');
const bookGrid = document.getElementById('bookGrid');
const quizStartBtn = document.getElementById('quizStartBtn');

// Modals
const bookDetailsModal = document.getElementById('bookDetailsModal');
const closeDetailsBtn = document.getElementById('closeDetailsBtn');
const readerModal = document.getElementById('readerModal');
const closeReaderBtn = document.getElementById('closeReaderBtn');
const bookshelfModal = document.getElementById('bookshelfModal');
const closeBookshelfBtn = document.getElementById('closeBookshelfBtn');
const bookshelfList = document.getElementById('bookshelfList');
const quizModal = document.getElementById('quizModal');
const closeQuizBtn = document.getElementById('closeQuizBtn');
const quizContent = document.getElementById('quizContent');

// Details Modal specific items
const modalTitle = document.getElementById('modalTitle');
const modalAuthor = document.getElementById('modalAuthor');
const modalCoverTitle = document.getElementById('modalCoverTitle');
const modalCoverAuthor = document.getElementById('modalCoverAuthor');
const modalCover = document.getElementById('modalCover');
const modalCoverBadge = document.getElementById('modalCoverBadge');
const modalStatReleased = document.getElementById('modalStatReleased');
const modalStatLanguage = document.getElementById('modalStatLanguage');
const modalStatDownloads = document.getElementById('modalStatDownloads');
const modalStatRating = document.getElementById('modalStatRating');
const modalSynopsis = document.getElementById('modalSynopsis');
const modalThemes = document.getElementById('modalThemes');
const modalReviewsList = document.getElementById('modalReviewsList');
const modalReadBtn = document.getElementById('modalReadBtn');
const modalShelfBtn = document.getElementById('modalShelfBtn');
const modalDownloadEpub = document.getElementById('modalDownloadEpub');
const modalDownloadPdf = document.getElementById('modalDownloadPdf');
const downloadProgressContainer = document.getElementById('downloadProgressContainer');
const downloadStatusText = document.getElementById('downloadStatusText');
const downloadProgressPercentage = document.getElementById('downloadProgressPercentage');
const downloadProgressFill = document.getElementById('downloadProgressFill');
const addReviewForm = document.getElementById('addReviewForm');

// Reader Elements
const readerBookTitle = document.getElementById('readerBookTitle');
const readerBookAuthor = document.getElementById('readerBookAuthor');
const readerBody = document.getElementById('readerBody');
const readerTextContent = document.getElementById('readerTextContent');
const readerProgressText = document.getElementById('readerProgressText');
const readerProgressBarFill = document.getElementById('readerProgressBarFill');
const readerPrevBtn = document.getElementById('readerPrevBtn');
const readerNextBtn = document.getElementById('readerNextBtn');
const readerFontToggle = document.getElementById('readerFontToggle');
const readerFontSizeDown = document.getElementById('readerFontSizeDown');
const readerFontSizeUp = document.getElementById('readerFontSizeUp');
const readerThemeToggle = document.getElementById('readerThemeToggle');

// Toast notifications
const toastContainer = document.getElementById('toastContainer');

// ----------------------------------------------------
// 2. TOAST SYSTEM
// ----------------------------------------------------
function showToast(message, type = 'info') {
    const toast = document.createElement('div');
    toast.className = `toast toast-${type}`;
    
    let icon = 'ℹ️';
    if (type === 'success') icon = '💖';
    if (type === 'warning') icon = '⚠️';
    
    toast.innerHTML = `<span>${icon}</span> <span>${message}</span>`;
    toastContainer.appendChild(toast);
    
    // Slide out animation
    setTimeout(() => {
        toast.style.animation = 'slideInRight 0.2s reverse forwards';
        setTimeout(() => {
            toast.remove();
        }, 200);
    }, 3000);
}

// ----------------------------------------------------
// 3. CORE LOCAL STORAGE ENGINE
// ----------------------------------------------------
function loadState() {
    // Load theme
    const savedTheme = localStorage.getItem('lovestruck_theme');
    if (savedTheme) {
        appState.theme = savedTheme;
        document.documentElement.setAttribute('data-theme', savedTheme);
        updateThemeUI();
    }

    // Load bookshelf
    const savedShelf = localStorage.getItem('lovestruck_bookshelf');
    if (savedShelf) {
        appState.bookshelf = JSON.parse(savedShelf);
        updateLibraryBadge();
    }

    // Load reviews
    const savedReviews = localStorage.getItem('lovestruck_reviews');
    if (savedReviews) {
        appState.reviews = JSON.parse(savedReviews);
    } else {
        // Pre-populate some reviews
        appState.reviews = {
            "pride-and-prejudice": [
                { author: "Marianne D.", rating: 5, text: "I have read this ten times and Darcy's proposal still makes my heart race. Elizabeth is the best heroine ever written!" },
                { author: "Henry Wood", rating: 4, text: "A timeless masterpiece of tension, social critique, and brilliant banter. The slow burn is agonizing in the best way." }
            ],
            "jane-eyre": [
                { author: "GothicRose", rating: 5, text: "Atmospheric, passionate, and dark. Mr. Rochester is the ultimate complex romantic hero. Thornfield Hall is beautifully spooky!" }
            ],
            "love-hypothesis": [
                { author: "Chloe STEM", rating: 5, text: "So cute! Olive and Adam have incredible chemistry. A hilarious, smart, modern fake-dating romance." }
            ]
        };
        localStorage.setItem('lovestruck_reviews', JSON.stringify(appState.reviews));
    }
}

function saveBookshelf() {
    localStorage.setItem('lovestruck_bookshelf', JSON.stringify(appState.bookshelf));
    updateLibraryBadge();
}

function saveReviews() {
    localStorage.setItem('lovestruck_reviews', JSON.stringify(appState.reviews));
}

function updateLibraryBadge() {
    libraryCountBadge.textContent = appState.bookshelf.length;
}

// ----------------------------------------------------
// 4. THEME SWITCHER
// ----------------------------------------------------
function updateThemeUI() {
    if (appState.theme === 'light') {
        themeIcon.innerHTML = `<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />`; // Moon
        themeToggleBtn.title = "Switch to Dark Velvet Theme";
    } else {
        themeIcon.innerHTML = `<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364-6.364l-.707.707M6.343 17.657l-.707.707m2.828 0l-.707-.707M17.657 6.343l-.707-.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />`; // Sun
        themeToggleBtn.title = "Switch to Light Rose Theme";
    }
}

function toggleTheme() {
    appState.theme = appState.theme === 'dark' ? 'light' : 'dark';
    document.documentElement.setAttribute('data-theme', appState.theme);
    localStorage.setItem('lovestruck_theme', appState.theme);
    updateThemeUI();
    showToast(`Switched to ${appState.theme === 'dark' ? 'Dark Velvet' : 'Light Rose'} mode`, 'success');
}

// ----------------------------------------------------
// 5. LIVE SCRAPER / REAL API SCANNER ENGINE (Gutenberg)
// ----------------------------------------------------
const consoleLogs = [
    "Scanning Project Gutenberg libraries for romance tags...",
    "Found active books on host gutendex.com/books...",
    "Querying subject: 'man-woman relationships' AND 'romance'...",
    "Accessing metadata links for EPUB / PDF formats...",
    "Analyzing book titles: scanning cover designs...",
    "Mapping public domain classics to Romance Subgenres...",
    "Listening for new database updates on Project Gutenberg API..."
];

let logIndex = 0;
function runScraperConsole() {
    setInterval(() => {
        if (!appState.syncActive) return;
        
        // Output some cool developer logs
        const timeStamp = new Date().toLocaleTimeString();
        let logMsg = "";
        
        if (Math.random() > 0.4) {
            logMsg = `[${timeStamp}] ${consoleLogs[logIndex]}`;
            logIndex = (logIndex + 1) % consoleLogs.length;
        } else {
            // Pick a random book and show a syncing log
            const randomBook = appState.catalog[Math.floor(Math.random() * appState.catalog.length)];
            logMsg = `[${timeStamp}] Synergized content sync for: "${randomBook.title}" by ${randomBook.author} (Downloads: ${randomBook.popularity})`;
        }
        
        scraperLogText.textContent = logMsg;
    }, 7000);
}

// Fetch romance books from Gutenberg (via Gutendex API) — single page fallback
async function fetchGutenbergRomance() {
    await load800GutenbergBooks();
}

// ─── MULTI-PROXY FALLBACK TEXT FETCHER ─────────────────────────────────────
// Tries 3 different CORS proxies in order. If one fails it moves to the next.
async function fetchFullTextWithFallback(gutenbergId) {
    const textUrl = `https://www.gutenberg.org/cache/epub/${gutenbergId}/pg${gutenbergId}.txt`;
    const altUrl  = `https://www.gutenberg.org/files/${gutenbergId}/${gutenbergId}-0.txt`;

    const proxies = [
        u => `https://api.allorigins.win/raw?url=${encodeURIComponent(u)}`,
        u => `https://api.codetabs.com/v1/proxy?quest=${encodeURIComponent(u)}`,
        u => `https://thingproxy.freeboard.io/fetch/${u}`
    ];

    for (const makeProxy of proxies) {
        for (const src of [textUrl, altUrl]) {
            try {
                const res = await fetch(makeProxy(src), { signal: AbortSignal.timeout(20000) });
                if (res.ok) {
                    const text = await res.text();
                    if (text && text.length > 5000) return text;   // valid book text
                }
            } catch (_) { /* try next */ }
        }
    }
    throw new Error(`Could not fetch text for Gutenberg ID ${gutenbergId} from any proxy.`);
}

// ─── BUILD A SINGLE GUTENBERG CATALOG ENTRY ───────────────────────────────
function buildGutenbergBookEntry(book) {
    const authorObj    = book.authors[0] || { name: "Unknown Author", birth_year: null };
    const subjectsText = (book.subjects || []).join(' ').toLowerCase();

    let subgenre = "Historical";
    if (subjectsText.includes('gothic') || subjectsText.includes('ghost') || subjectsText.includes('mystery')) subgenre = "Gothic";
    else if (subjectsText.includes('fantasy') || subjectsText.includes('magic') || subjectsText.includes('fairy')) subgenre = "Fantasy/Paranormal";
    else if (subjectsText.includes('science fiction') || subjectsText.includes('future')) subgenre = "Sci-Fi";
    else if (subjectsText.includes('contemporary') || subjectsText.includes('modern')) subgenre = "Contemporary";

    const epubLink = book.formats['application/epub+zip'] || "#";
    const pdfLink  = book.formats['application/pdf']      || book.formats['text/html'] || "#";

    const synopsis = `A beloved classic romance by ${cleanAuthorName(authorObj.name)}. `
        + `Set in a historical era, it explores courtship, family expectations, and the profound struggles of love. `
        + `Over ${(book.download_count || 0).toLocaleString()} readers have downloaded it from Project Gutenberg. `
        + `Subjects: ${(book.subjects || []).slice(0, 4).join('; ')}.`;

    let tropes = ["Classics", "Slow Burn", "Historical Setting"];
    if (subgenre === "Gothic")            tropes.push("Gothic Secrets", "Dark Atmosphere");
    if (subgenre === "Fantasy/Paranormal") tropes.push("Magical Worlds", "Fated Love");
    if (book.languages && book.languages.includes('fr')) tropes.push("French Classic");

    return {
        id:              `gutenberg-${book.id}`,
        title:           book.title,
        author:          cleanAuthorName(authorObj.name),
        year:            authorObj.birth_year ? authorObj.birth_year + 30 : 1880,
        language:        (book.languages && book.languages[0]) || "en",
        genres:          ["Classics", "Historical"],
        subgenre,
        rating:          parseFloat((4.4 + Math.random() * 0.5).toFixed(1)),
        popularity:      book.download_count || 1200,
        pages:           Math.floor(200 + Math.random() * 250),
        quickHook:       `Classic romance — a timeless story of love, society, and destiny.`,
        synopsis,
        tropes,
        downloadUrlEpub: epubLink,
        downloadUrlPdf:  pdfLink,
        isFullyLoaded:   false,   // will be fetched on demand when reader opens
        chapters: [
            {
                title:   "Open to Read Full Book",
                content: [
                    "This is a complete public-domain novel.",
                    "Press the ▶ Read button above to open the full book directly in the reader.",
                    "All chapters will be loaded automatically from Project Gutenberg.",
                    "You can also click ⬇ Download EPUB or ⬇ Download PDF to save the whole book."
                ]
            }
        ]
    };
}

// ─── GENERATE PREVIEW CHAPTERS FOR COPYRIGHTED MODERN BOOKS ──────────────
function generateCopyrightedBookChapters(title, author, synopsis) {
    const s = synopsis || "";
    const mid = Math.floor(s.length / 2);
    const part1 = s.substring(0, Math.min(400, mid)).trim();
    const part2 = s.substring(Math.min(400, mid), Math.min(800, s.length)).trim();
    const part3 = s.substring(Math.min(800, s.length)).trim();

    return [
        {
            title: "Chapter I — The Spark",
            content: [
                `📖  "${title}" by ${author}`,
                ``,
                part1 || "The story begins with an unexpected encounter that changes everything for the protagonist.",
                ``,
                `The opening chapter introduces us to a world filled with tension, longing, and the promise of something extraordinary. The air between the characters crackles with unspoken words as they navigate the complex dance of first impressions and hidden desires.`,
                ``,
                `Their worlds are about to collide in ways neither could have anticipated, setting the stage for a romance that will challenge everything they thought they knew about love.`
            ]
        },
        {
            title: "Chapter II — Rising Tension",
            content: [
                part2 || "As the story deepens, obstacles and secrets begin to surface.",
                ``,
                `The connection between the characters deepens despite every force working against them. Each stolen glance, each carefully chosen word carries the weight of everything left unsaid. The slow burn of their developing relationship is both exquisite and agonizing.`,
                ``,
                `External pressures mount — family expectations, social constraints, past wounds — but the pull between them only grows stronger. This is the stage where the real emotional complexity of the story unfolds.`
            ]
        },
        {
            title: "Chapter III — The Turning Point",
            content: [
                part3 || "Everything comes to a head as the characters must make choices that will define their future.",
                ``,
                `The climactic tension of the story reaches its peak. Old wounds are reopened, truths are revealed, and the characters must decide whether love is worth the cost of vulnerability.`,
                ``,
                `━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━`,
                `📚  This is a preview summary of "${title}".`,
                `The full book is available on Google Books and major retailers.`,
                `━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━`
            ]
        }
    ];
}

// ─── LOAD 800+ BOOKS FROM GUTENBERG (paginated) ────────────────────────────
// Helper: fetch with up to 3 retries and a 15 s timeout
async function fetchWithRetry(url) {
    const attempts = 3;
    for (let i = 0; i < attempts; i++) {
        try {
            const controller = new AbortController();
            const timeoutId = setTimeout(() => controller.abort(), 15000);
            const res = await fetch(url, { signal: controller.signal });
            clearTimeout(timeoutId);
            if (res.ok) return res;
            // If not ok, throw to trigger retry
            throw new Error(`HTTP ${res.status}`);
        } catch (e) {
            if (i === attempts - 1) throw e; // rethrow after last attempt
            // small back‑off before next try
            await new Promise(r => setTimeout(r, 500 * (i + 1)));
        }
    }
}

async function load800GutenbergBooks() {
    const TOPICS = ['romance', 'love', 'courtship', 'marriage', 'woman'];
    const MAX_PAGES = 30; // increased from 18 for broader coverage
    const CONCURRENCY_LIMIT = 6; // limit simultaneous page fetches

    // Attempt to load from cache (valid for 12 h)
    const cached = localStorage.getItem('lovestruck_catalog_cache');
    const cachedTs = localStorage.getItem('lovestruck_catalog_cache_ts');
    if (cached && cachedTs && (Date.now() - Number(cachedTs) < 12 * 60 * 60 * 1000)) {
        try {
            const parsed = JSON.parse(cached);
            parsed.forEach(entry => {
                if (!appState.scrapedIds.has(entry.id)) {
                    appState.catalog.push(entry);
                    appState.scrapedIds.add(entry.id);
                }
            });
            scraperLogText.textContent = `[${new Date().toLocaleTimeString()}] 📡 Loaded catalog from cache (${appState.catalog.length} books).`;
            syncedCount.textContent = appState.catalog.length;
            renderGenreFilters();
            filterAndSortBooks();
            return;
        } catch (e) { console.warn('Cache load failed', e); }
    }

    scraperLogText.textContent = `[${new Date().toLocaleTimeString()}] 📡 Starting ultra‑fast sync: loading up to ${MAX_PAGES * 32 * TOPICS.length} romance novels…`;

    // Build an array of async task factories for each page request
    const tasks = [];
    for (const topic of TOPICS) {
        for (let p = 1; p <= MAX_PAGES; p++) {
            tasks.push(async () => {
                const url = `https://gutendex.com/books/?topic=${encodeURIComponent(topic)}&page=${p}`;
                try {
                    const res = await fetchWithRetry(url);
                    const data = await res.json();
                    const results = data.results || [];
                    results.forEach(book => {
                        const entry = buildGutenbergBookEntry(book);
                        if (!appState.scrapedIds.has(entry.id)) {
                            appState.catalog.push(entry);
                            appState.scrapedIds.add(entry.id);
                        }
                    });
                } catch (_) { /* ignore failed page */ }
            });
        }
    }

    // Simple concurrency runner
    async function runConcurrent(taskFns, limit) {
        const results = [];
        const executing = [];
        for (const task of taskFns) {
            const p = task().then(r => {
                executing.splice(executing.indexOf(p), 1);
                return r;
            });
            results.push(p);
            executing.push(p);
            if (executing.length >= limit) {
                await Promise.race(executing);
            }
        }
        return Promise.all(results);
    }

    await runConcurrent(tasks, CONCURRENCY_LIMIT);

    // UI updates after all pages processed
    syncedCount.textContent = appState.catalog.length;
    scraperLogText.textContent = `[${new Date().toLocaleTimeString()}] ✅ Ultra‑fast sync complete! Total library: ${appState.catalog.length}`;
    renderGenreFilters();
    filterAndSortBooks();

    // Cache the catalog for future quick loads (store without heavy chapter data)
    try {
        const cachePayload = JSON.stringify(appState.catalog.map(b => ({ ...b, isFullyLoaded: false })));
        localStorage.setItem('lovestruck_catalog_cache', cachePayload);
        localStorage.setItem('lovestruck_catalog_version', Date.now().toString());
    } catch (cacheErr) {
        console.warn("Catalog cache write failed (storage full?):", cacheErr);
    }


    

    
}

// Clean Gutenberg author names (e.g. "Austen, Jane" to "Jane Austen")
function cleanAuthorName(nameStr) {
    if (!nameStr) return "Unknown Author";
    if (nameStr.includes(',')) {
        const parts = nameStr.split(',');
        return `${parts[1].trim()} ${parts[0].trim()}`;
    }
    return nameStr;
}

// Simulation of "new novel releases" arriving in real-time
function startNewReleasesScraperSimulator() {
    // Every 50 seconds, simulate discovering a new novel release
    setInterval(() => {
        const mockNewNovels = [
            {
                title: "A Scandalous Liaison",
                author: "Penelope Sterling",
                subgenre: "Historical",
                quickHook: "A secret identity, a stolen correspondence, and a passionate forbidden romance in Regency Bath.",
                synopsis: "When Lady Beatrice receives a letters pouch meant for the notorious Duke of Westmorland, she discovers a shocking secret. Rather than return the correspondence, she begins an anonymous pen-pal courtship with the brooding nobleman. As the letters grow increasingly intimate, they agree to meet at a masquerade ball, unaware that their real-world identities make their union completely impossible.",
                tropes: ["Secret Identity", "Regency Courtship", "Forbidden Love", "Pen Pals"]
            },
            {
                title: "Shadows and Silk",
                author: "Victor Graves",
                subgenre: "Gothic",
                quickHook: "A haunted mansion, a reclusive billionaire artist, and a tutor who uncovers dangerous desires.",
                synopsis: "Isla is hired to catalog the private library of Thorne Manor, a crumbling estate overlooking the Atlantic. The owner, Julian Thorne, is a brilliant artist who has refused to show his face since a fire five years ago. Living in the shadows of the mansion, Isla begins to notice strange phenomena—and realizes Julian is hiding a powerful mystery that draws her in.",
                tropes: ["Gothic Secrets", "Beauty and the Beast", "Dark Romance", "Reclusive Hero"]
            },
            {
                title: "Written in the Stars",
                author: "Nova Vance",
                subgenre: "Sci-Fi",
                quickHook: "An astronaut and an alien cartographer stranded on a crystal planet must rely on each other.",
                synopsis: "Stranded on a beautiful but volatile crystalline planet, Captain Elena Vane is forced to form an alliance with Jax, a quiet cartographer from a rival star system. As they traverse the glowing landscape to reach an escape pod, their political differences fade under the pressure of survival, igniting a cosmic passion that defies interstellar laws.",
                tropes: ["Star Crossed", "Forced Proximity", "Sci-Fi Setting", "Opposites Attract"]
            }
        ];
        
        // Select a random mock book
        const selectedMock = mockNewNovels[Math.floor(Math.random() * mockNewNovels.length)];
        const idStr = `mock-${Date.now()}`;
        
        // Append to catalog
        appState.catalog.unshift({
            id: idStr,
            title: selectedMock.title,
            author: selectedMock.author,
            year: 2026,
            language: "en",
            genres: ["New Releases", "Romance"],
            subgenre: selectedMock.subgenre,
            rating: 4.8,
            popularity: 8500,
            pages: 320,
            quickHook: selectedMock.quickHook,
            synopsis: selectedMock.synopsis,
            tropes: [...selectedMock.tropes, "New Release"],
            downloadUrlEpub: "#",
            downloadUrlPdf: "#",
            chapters: [
                {
                    title: "Chapter 1: The Encounter",
                    content: [
                        "The rain hit the glass panels of the greenhouse in a rhythmic, comforting patter. She held the lantern high, its amber glow illuminating the damp ferns.",
                        "“You shouldn't be out here at this hour,” a deep voice said from the shadows. She gasped, turning. He stepped into the light, water dripping from his dark hair, looking at her with an intensity that made her catch her breath.",
                        "It was him. The one person she had been warned to avoid at all costs. The one person she couldn't stop thinking about."
                    ]
                }
            ]
        });
        
        // Update count & log
        syncedCount.textContent = appState.catalog.length;
        scraperLogText.textContent = `[${new Date().toLocaleTimeString()}] [AUTO-SYNCED] Discovered new release: "${selectedMock.title}" by ${selectedMock.author} - Loaded into ${selectedMock.subgenre} shelf.`;
        
        showToast(`New romance release synced: "${selectedMock.title}"!`, 'success');
        
        // Re-render
        renderGenreFilters();
        filterAndSortBooks();
        
    }, 55000);
}

// ----------------------------------------------------
// 6. RENDER HERO Spotlight Romance
// ----------------------------------------------------
function renderHeroSpotlight() {
    const featured = appState.catalog.find(b => b.id === "pride-and-prejudice") || appState.catalog[0];
    if (!featured) return;
    
    heroTitle.textContent = featured.title;
    heroCoverTitle.textContent = featured.title;
    heroCoverAuthor.textContent = featured.author;
    
    // Star ratings
    let starsHtml = '';
    const roundedRating = Math.round(featured.rating);
    for (let i = 1; i <= 5; i++) {
        starsHtml += i <= roundedRating ? '★' : '☆';
    }
    heroRatingStars.innerHTML = starsHtml;
    heroRatingNumber.textContent = featured.rating;
    
    heroReleaseYear.textContent = featured.year;
    heroLanguage.textContent = featured.language.toUpperCase();
    heroPages.textContent = `${featured.pages} pgs`;
    heroDescription.textContent = featured.synopsis.substring(0, 180) + '...';
    
    // Trope pills
    heroGenres.innerHTML = '';
    featured.tropes.slice(0, 3).forEach(t => {
        const pill = document.createElement('span');
        pill.className = 'genre-pill';
        pill.textContent = t;
        heroGenres.appendChild(pill);
    });
    
    // Connect buttons
    heroReadBtn.onclick = () => openReader(featured.id);
    heroDetailsBtn.onclick = () => openBookModal(featured.id);
}

// ----------------------------------------------------
// 7. SIDEBAR Subgenre Filter Counts
// ----------------------------------------------------
function renderGenreFilters() {
    const subgenres = ["All", "Historical", "Contemporary", "Fantasy/Paranormal", "Gothic", "Sci-Fi"];
    
    // Calculate counts
    const counts = { "All": appState.catalog.length };
    subgenres.forEach(g => { counts[g] = 0; });
    
    appState.catalog.forEach(book => {
        if (counts[book.subgenre] !== undefined) {
            counts[book.subgenre]++;
        }
    });
    
    genreFilterList.innerHTML = '';
    
    subgenres.forEach(genre => {
        const isActive = appState.activeSubgenreFilter === genre;
        const btn = document.createElement('button');
        btn.className = `filter-btn-row ${isActive ? 'active' : ''}`;
        btn.innerHTML = `
            <span>${genre === 'All' ? 'All Romance' : genre}</span>
            <span class="filter-count">${counts[genre]}</span>
        `;
        
        btn.onclick = () => {
            document.querySelectorAll('.filter-btn-row').forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            appState.activeSubgenreFilter = genre;
            filterAndSortBooks();
        };
        
        genreFilterList.appendChild(btn);
    });
}

// ----------------------------------------------------
// 8. RENDER Library Book Grid
// ----------------------------------------------------
function renderBookGrid(books) {
    bookGrid.innerHTML = '';
    resultsCount.textContent = `(${books.length})`;
    
    if (books.length === 0) {
        bookGrid.innerHTML = `
            <div class="empty-state" style="grid-column: 1 / -1;">
                <div class="empty-state-icon">🥀</div>
                <h3>No Romances Found</h3>
                <p>We couldn't find any books matching your criteria. Try looking for other terms or clear your search.</p>
                <button class="btn-secondary" id="clearSearchBtnGrid">Clear Search</button>
            </div>
        `;
        document.getElementById('clearSearchBtnGrid').onclick = () => {
            searchInput.value = '';
            searchClearBtn.style.display = 'none';
            appState.searchQuery = '';
            filterAndSortBooks();
        };
        return;
    }
    
    books.forEach(book => {
        const card = document.createElement('div');
        card.className = 'book-card glass-panel';
        
        // Ratings Stars
        let stars = '';
        const ratingRounded = Math.round(book.rating);
        for (let i = 1; i <= 5; i++) {
            stars += i <= ratingRounded ? '★' : '☆';
        }
        
        // Custom background styling for book covers
        let coverBg = "linear-gradient(135deg, #1e0a12 0%, #000 100%)"; // Gothic/Dark Burgundy
        if (book.subgenre === "Fantasy/Paranormal") {
            coverBg = "linear-gradient(135deg, #2d0b2e 0%, #09030a 100%)"; // Deep Amethyst
        } else if (book.subgenre === "Contemporary") {
            coverBg = "linear-gradient(135deg, #e04a74 0%, #4a0f20 100%)"; // Rose Crimson
        } else if (book.subgenre === "Historical") {
            coverBg = "linear-gradient(135deg, #3a2215 0%, #150904 100%)"; // Warm Antique Brown
        } else if (book.subgenre === "Sci-Fi") {
            coverBg = "linear-gradient(135deg, #0f172a 0%, #020617 100%)"; // Galactic Indigo
        }
        
        const badgeText = book.popularity > 100000 ? "Best Seller" : book.rating >= 4.8 ? "Highly Rated" : "New release";
        const badgeColor = badgeText === 'Best Seller' ? 'var(--gold)' : 'var(--accent)';
        const badgeTextCol = badgeText === 'Best Seller' ? '#000' : '#fff';
        
        card.innerHTML = `
            <div class="card-cover-wrapper">
                <div class="card-cover" style="background: ${coverBg};">
                    <div class="cover-design">
                        <span class="cover-badge" style="background: ${badgeColor}; color: ${badgeTextCol};">${badgeText}</span>
                        <div class="card-title-mini">${book.title}</div>
                        <div>
                            <div class="card-author-mini">${book.author}</div>
                            <div style="height: 3px; width: 35px; background: var(--accent); border-radius: 9px; margin: 4px auto 0;"></div>
                        </div>
                    </div>
                </div>
            </div>
            
            <div class="card-info">
                <div>
                    <div class="card-meta-row">
                        <div class="rating-badge">${stars} <span>${book.rating}</span></div>
                        <span class="lang-badge">${book.language.toUpperCase()}</span>
                    </div>
                    <h3 class="card-title">${book.title}</h3>
                    <p class="card-author">by ${book.author}</p>
                    <p class="card-hook">${book.quickHook}</p>
                </div>
                
                <div>
                    <div class="card-genres">
                        ${book.tropes.slice(0, 3).map(t => `<span class="card-genre-tag">${t}</span>`).join('')}
                    </div>
                    <div class="card-actions">
                        <button class="btn-card-primary" onclick="event.stopPropagation(); openBookModal('${book.id}')">Quick View</button>
                        <button class="btn-card-secondary" onclick="event.stopPropagation(); toggleSaveFromGrid('${book.id}', this)">
                            ${appState.bookshelf.includes(book.id) ? 'Saved' : '♥ Lovelist'}
                        </button>
                    </div>
                </div>
            </div>
        `;
        
        card.onclick = () => openBookModal(book.id);
        bookGrid.appendChild(card);
    });
}

function toggleSaveFromGrid(id, btn) {
    const isSaved = toggleSaveBook(id);
    btn.textContent = isSaved ? 'Saved' : '♥ Lovelist';
}

// ----------------------------------------------------
// 9. SMART SEARCH, FILTERS & SORT
// ----------------------------------------------------
function filterAndSortBooks() {
    const query = searchInput.value.trim().toLowerCase();
    const selectedSubgenre = appState.activeSubgenreFilter;
    const selectedSort = sortBySelect.value;
    const selectedLang = langSelect.value;
    
    let filtered = [...appState.catalog];
    
    // Search filter
    if (query) {
        const tokens = query.split(/\s+/).filter(t => t.length > 0);
        
        filtered = filtered.filter(book => {
            return tokens.every(token => {
                return book.title.toLowerCase().includes(token) ||
                       book.author.toLowerCase().includes(token) ||
                       book.subgenre.toLowerCase().includes(token) ||
                       book.synopsis.toLowerCase().includes(token) ||
                       book.tropes.some(t => t.toLowerCase().includes(token));
            });
        });
    }
    
    // Subgenre filter (only if search is empty)
    if (selectedSubgenre !== 'All' && !query) {
        filtered = filtered.filter(book => book.subgenre === selectedSubgenre);
    }
    
    // Language dropdown filter
    if (selectedLang !== 'all') {
        filtered = filtered.filter(book => book.language.toLowerCase() === selectedLang.toLowerCase());
    }
    
    // Sorting logic
    if (selectedSort === 'popularity') {
        filtered.sort((a, b) => b.popularity - a.popularity);
    } else if (selectedSort === 'rating') {
        filtered.sort((a, b) => b.rating - a.rating);
    } else if (selectedSort === 'year') {
        filtered.sort((a, b) => b.year - a.year);
    }
    
    // Update Heading Text
    if (query) {
        feedHeading.innerHTML = `Search Results for "${searchInput.value}" <span id="resultsCount">(${filtered.length})</span>`;
    } else if (selectedSubgenre !== 'All') {
        feedHeading.innerHTML = `${selectedSubgenre} Romance <span id="resultsCount">(${filtered.length})</span>`;
    } else {
        feedHeading.innerHTML = `Romance Library <span id="resultsCount">(${filtered.length})</span>`;
    }
    
    renderBookGrid(filtered);
}

// ----------------------------------------------------
// 10. BOOK LOVELIST (BOOKMARKS)
// ----------------------------------------------------
function toggleSaveBook(id) {
    const idx = appState.bookshelf.indexOf(id);
    let isSaved = false;
    
    if (idx === -1) {
        appState.bookshelf.push(id);
        isSaved = true;
        showToast("Book added to your Romance Lovelist", "success");
    } else {
        appState.bookshelf.splice(idx, 1);
        showToast("Book removed from your Lovelist", "info");
    }
    
    saveBookshelf();
    
    // Update active modal button state if open
    if (appState.currentBook && appState.currentBook.id === id) {
        updateModalShelfBtnState();
    }
    
    // If bookshelf modal is open, re-render list
    if (bookshelfModal.classList.contains('active')) {
        renderBookshelfList();
    }
    
    // Sync grid buttons
    filterAndSortBooks();
    
    return isSaved;
}

function updateModalShelfBtnState() {
    if (appState.bookshelf.includes(appState.currentBook.id)) {
        modalShelfBtn.textContent = "Saved in LoveList";
        modalShelfBtn.className = "btn-secondary";
        modalShelfBtn.style.borderColor = "var(--accent)";
    } else {
        modalShelfBtn.textContent = "♥ Add to LoveList";
        modalShelfBtn.className = "btn-primary";
        modalShelfBtn.style.borderColor = "transparent";
    }
}

function renderBookshelfList() {
    bookshelfList.innerHTML = '';
    
    if (appState.bookshelf.length === 0) {
        bookshelfList.innerHTML = `
            <div class="empty-state">
                <div style="font-size: 2.5rem; margin-bottom: 5px;">💔</div>
                <p>Your Lovelist is empty. Save some romantic books to read later!</p>
            </div>
        `;
        return;
    }
    
    appState.bookshelf.forEach(id => {
        const book = appState.catalog.find(b => b.id === id);
        if (!book) return;
        
        const item = document.createElement('div');
        item.className = 'bookshelf-item';
        
        let coverBg = "linear-gradient(135deg, #1e0a12 0%, #000 100%)";
        if (book.subgenre === "Fantasy/Paranormal") coverBg = "linear-gradient(135deg, #2d0b2e 0%, #09030a 100%)";
        if (book.subgenre === "Contemporary") coverBg = "linear-gradient(135deg, #e04a74 0%, #4a0f20 100%)";
        
        item.innerHTML = `
            <div class="bookshelf-cover" style="background: ${coverBg}">
                <span style="font-size: 0.55rem; line-height: 1.2;">${book.title}</span>
            </div>
            <div class="bookshelf-info">
                <span class="bookshelf-title">${book.title}</span>
                <span class="bookshelf-author">by ${book.author}</span>
            </div>
            <button class="btn-remove-shelf" onclick="event.stopPropagation(); toggleSaveBook('${book.id}')" title="Remove from Lovelist">
                <svg viewBox="0 0 24 24" fill="currentColor" stroke="none">
                    <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
                </svg>
            </button>
        `;
        
        item.onclick = () => {
            closeModal(bookshelfModal);
            openBookModal(book.id);
        };
        bookshelfList.appendChild(item);
    });
}

// ----------------------------------------------------
// 11. NOVEL DETAILS MODAL & SIMULATIVE DOWNLOAD
// ----------------------------------------------------
function openBookModal(id) {
    const book = appState.catalog.find(b => b.id === id);
    if (!book) return;
    
    appState.currentBook = book;
    
    modalTitle.textContent = book.title;
    modalAuthor.textContent = `by ${book.author}`;
    modalCoverTitle.textContent = book.title;
    modalCoverAuthor.textContent = book.author;
    
    // Set dynamic cover color
    let coverBg = "linear-gradient(135deg, #1e0a12 0%, #000 100%)";
    if (book.subgenre === "Fantasy/Paranormal") coverBg = "linear-gradient(135deg, #2d0b2e 0%, #09030a 100%)";
    if (book.subgenre === "Contemporary") coverBg = "linear-gradient(135deg, #e04a74 0%, #4a0f20 100%)";
    if (book.subgenre === "Historical") coverBg = "linear-gradient(135deg, #3a2215 0%, #150904 100%)";
    if (book.subgenre === "Sci-Fi") coverBg = "linear-gradient(135deg, #0f172a 0%, #020617 100%)";
    modalCover.style.background = coverBg;
    
    modalCoverBadge.textContent = book.subgenre;
    modalStatReleased.textContent = book.year;
    modalStatLanguage.textContent = book.language.toUpperCase();
    modalStatDownloads.textContent = book.popularity.toLocaleString();
    modalStatRating.textContent = `${book.rating} / 5`;
    modalSynopsis.textContent = book.synopsis;
    
    // Reset translation state for this book
    originalSynopsisText = "";
    translatedSynopsisText = "";
    const transBtn = document.getElementById('translateSynopsisBtn');
    if (transBtn) {
        transBtn.textContent = "Translate to Hindi (हिंदी)";
        transBtn.onclick = toggleSynopsisTranslation;
    }
    
    // Render tropes tags
    modalThemes.innerHTML = '';
    book.tropes.forEach(theme => {
        const tag = document.createElement('span');
        tag.className = 'theme-tag';
        tag.textContent = theme;
        modalThemes.appendChild(tag);
    });
    
    // Render Reviews
    renderReviews(book.id);
    
    // Update Shelf button state
    updateModalShelfBtnState();
    
    // Setup modal actions
    modalReadBtn.onclick = () => {
        closeModal(bookDetailsModal);
        openReader(book.id);
    };
    
    modalShelfBtn.onclick = () => {
        toggleSaveBook(book.id);
    };
    
    // EPUB and PDF download setup
    modalDownloadEpub.onclick = () => {
        const gutenbergId = getGutenbergId(book.id);
        if (gutenbergId && book.downloadUrlEpub && book.downloadUrlEpub !== '#') {
            window.open(book.downloadUrlEpub, '_blank');
        } else {
            startSimulatedDownload(book, 'EPUB');
        }
    };
    modalDownloadPdf.onclick = () => {
        const gutenbergId = getGutenbergId(book.id);
        if (gutenbergId) {
            downloadFullGutenbergPDF(book);
        } else {
            startSimulatedDownload(book, 'PDF');
        }
    };
    
    // Hide download progress on start
    downloadProgressContainer.style.display = 'none';
    downloadProgressFill.style.style = "0%";
    
    openModal(bookDetailsModal);
}

function startSimulatedDownload(book, format) {
    const isMock = book.downloadUrlEpub === '#' || book.downloadUrlPdf === '#';
    const targetUrl = format === 'EPUB' ? book.downloadUrlEpub : book.downloadUrlPdf;
    
    // Show download container
    downloadProgressContainer.style.display = 'flex';
    downloadStatusText.textContent = `Establishing link for ${format}...`;
    downloadProgressPercentage.textContent = '0%';
    downloadProgressFill.style.width = '0%';
    
    let progress = 0;
    const downloadSteps = [
        `Contacting library host...`,
        `Authorizing secure transfer...`,
        `Assembling ${format} metadata...`,
        `Writing book files...`,
        `Finalizing payload...`
    ];
    
    const interval = setInterval(() => {
        progress += Math.floor(Math.random() * 15) + 5;
        if (progress > 100) progress = 100;
        
        downloadProgressPercentage.textContent = `${progress}%`;
        downloadProgressFill.style.width = `${progress}%`;
        
        const stepIndex = Math.min(Math.floor(progress / 20), downloadSteps.length - 1);
        downloadStatusText.textContent = downloadSteps[stepIndex];
        
        if (progress === 100) {
            clearInterval(interval);
            setTimeout(() => {
                downloadProgressContainer.style.display = 'none';
                showToast(`${format} Download Completed for "${book.title}"!`, "success");
                
                if (format === 'PDF') {
                    // Generate and download a real PDF file client-side using jsPDF
                    try {
                        pdfHelper.downloadPdf(book);
                    } catch (e) {
                        console.error("PDF Generation failed:", e);
                        showToast(`PDF generation error. Attempting print window...`, 'warning');
                        window.print();
                    }
                } else {
                    // EPUB handler
                    if (!isMock && targetUrl !== '#') {
                        window.open(targetUrl, '_blank');
                    } else {
                        // For mock EPUB, we can generate a mock epub text file
                        generateMockEpubFile(book);
                    }
                }
            }, 500);
        }
    }, 150);
}

// Function to generate a real PDF using jsPDF
function generateRealPDF(book) {
    const { jsPDF } = window.jspdf;
    const doc = new jsPDF();
    
    // Page margins & dimensions
    const margin = 20;
    const pageWidth = doc.internal.pageSize.getWidth();
    const pageHeight = doc.internal.pageSize.getHeight();
    const contentWidth = pageWidth - (margin * 2);
    
    // Theme Colors
    const primaryColor = [30, 10, 18]; // Velvet Burgundy
    const secondaryColor = [212, 175, 55]; // Gold
    const accentColor = [224, 74, 116]; // Rose
    
    // Cover/Header Page Design
    doc.setFillColor(primaryColor[0], primaryColor[1], primaryColor[2]);
    doc.rect(0, 0, pageWidth, 55, 'F');
    
    // Header text
    doc.setTextColor(secondaryColor[0], secondaryColor[1], secondaryColor[2]);
    doc.setFont("times", "italic");
    doc.setFontSize(26);
    doc.text("Lovestruck Hub", pageWidth / 2, 25, { align: "center" });
    
    doc.setFont("helvetica", "normal");
    doc.setFontSize(10);
    doc.setTextColor(255, 255, 255);
    doc.text("PREMIUM ESCAPE ROMANCE NOVELS PREVIEW", pageWidth / 2, 38, { align: "center" });
    
    // Book Meta Title
    doc.setTextColor(0, 0, 0);
    doc.setFont("times", "bold");
    doc.setFontSize(28);
    doc.text(book.title, margin, 75);
    
    doc.setFont("times", "italic");
    doc.setFontSize(16);
    doc.setTextColor(accentColor[0], accentColor[1], accentColor[2]);
    doc.text(`by ${book.author}`, margin, 85);
    
    // Line divider
    doc.setDrawColor(secondaryColor[0], secondaryColor[1], secondaryColor[2]);
    doc.setLineWidth(0.8);
    doc.line(margin, 90, pageWidth - margin, 90);
    
    // Stats Block
    doc.setFont("helvetica", "bold");
    doc.setFontSize(11);
    doc.setTextColor(50, 50, 50);
    doc.text("NOVEL SPECIFICATIONS:", margin, 102);
    
    doc.setFont("helvetica", "normal");
    doc.setFontSize(10);
    doc.text(`* Subgenre Category:  ${book.subgenre} Romance`, margin, 110);
    doc.text(`* Author/Creator:     ${book.author}`, margin, 116);
    doc.text(`* Publication Year:   ${book.year}`, margin, 122);
    doc.text(`* Reader Rating:      ${book.rating} / 5 Hearts`, margin, 128);
    doc.text(`* Lovestruck ID:      ${book.id}`, margin, 134);
    
    // Box surround stats
    doc.setDrawColor(220, 220, 220);
    doc.setLineWidth(0.3);
    doc.rect(margin - 4, 96, contentWidth + 8, 43);
    
    // Synopsis
    doc.setFont("times", "bold");
    doc.setFontSize(13);
    doc.setTextColor(primaryColor[0], primaryColor[1], primaryColor[2]);
    doc.text("SYNOPSIS & BACK COVER SUMMARY:", margin, 153);
    
    doc.setFont("times", "normal");
    doc.setFontSize(11);
    doc.setTextColor(30, 30, 30);
    
    const synopsisLines = doc.splitTextToSize(book.synopsis, contentWidth);
    doc.text(synopsisLines, margin, 160);
    
    // Trope Tags
    let nextY = 160 + (synopsisLines.length * 6) + 10;
    doc.setFont("helvetica", "bold");
    doc.setFontSize(10);
    doc.setTextColor(accentColor[0], accentColor[1], accentColor[2]);
    doc.text(`Themes & Vibes: ${book.tropes.join("  |  ")}`, margin, nextY);

    if (book.googleBooksLink) {
        nextY += 10;
        doc.setFont("helvetica", "bold");
        doc.setFontSize(10);
        doc.setTextColor(primaryColor[0], primaryColor[1], primaryColor[2]);
        doc.text("Read Full Novel Online (Google Books):", margin, nextY);
        
        nextY += 6;
        doc.setFont("helvetica", "normal");
        doc.setFontSize(9);
        doc.setTextColor(0, 0, 255);
        doc.text(book.googleBooksLink, margin, nextY);
    }
    
    // Add Chapter 1 Preview
    if (book.chapters && book.chapters.length > 0) {
        doc.addPage();
        
        // Page header for subsequent page
        doc.setFillColor(primaryColor[0], primaryColor[1], primaryColor[2]);
        doc.rect(0, 0, pageWidth, 15, 'F');
        doc.setTextColor(255, 255, 255);
        doc.setFont("times", "italic");
        doc.setFontSize(10);
        doc.text(`Lovestruck Hub  |  ${book.title} Preview`, margin, 10);
        
        let writeY = 32;
        doc.setFont("times", "bold");
        doc.setFontSize(18);
        doc.setTextColor(primaryColor[0], primaryColor[1], primaryColor[2]);
        doc.text(book.chapters[0].title, margin, writeY);
        
        writeY += 10;
        doc.setFont("times", "normal");
        doc.setFontSize(11);
        doc.setTextColor(40, 40, 40);
        
        const previewText = book.chapters[0].content.join("\n\n");
        const chapterLines = doc.splitTextToSize(previewText, contentWidth);
        
        // Page breaking loop for long chapters
        let linesWritten = 0;
        const lineSpacing = 6;
        
        while (linesWritten < chapterLines.length) {
            const spaceLeft = pageHeight - writeY - margin;
            const linesThatFit = Math.floor(spaceLeft / lineSpacing);
            
            if (linesThatFit <= 0) {
                doc.addPage();
                // Sub-page header
                doc.setFillColor(primaryColor[0], primaryColor[1], primaryColor[2]);
                doc.rect(0, 0, pageWidth, 15, 'F');
                doc.setTextColor(255, 255, 255);
                doc.setFont("times", "italic");
                doc.setFontSize(10);
                doc.text(`Lovestruck Hub  |  ${book.title} Preview`, margin, 10);
                
                writeY = 30;
                continue;
            }
            
            const chunk = chapterLines.slice(linesWritten, linesWritten + linesThatFit);
            doc.text(chunk, margin, writeY);
            
            linesWritten += chunk.length;
            writeY += chunk.length * lineSpacing;
        }
    }
    
    // Save file PDF trigger
    const fileTitle = book.title.toLowerCase().replace(/[^a-z0-9]+/g, '_');
    doc.save(`lovestruck_${fileTitle}_preview.pdf`);
}

// Function to generate a mock EPUB file client-side
function generateMockEpubFile(book) {
    const title = book.title;
    const author = book.author;
    const bodyText = `
Lovestruck Hub - Premium Romance eBook
=====================================
Title: ${title}
Author: ${author}
Subgenre: ${book.subgenre}
Year: ${book.year}
Tropes: ${book.tropes.join(', ')}

Synopsis:
${book.synopsis}

Preview Chapters:
${book.chapters.map(c => `${c.title}\n----------------\n${c.content.join('\n\n')}`).join('\n\n')}

-------------------------------------
Generated dynamically by Lovestruck Hub. Downloaded as simulated EPUB file content.
`;
    
    const blob = new Blob([bodyText], { type: 'text/plain;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `${title.toLowerCase().replace(/[^a-z0-9]+/g, '_')}_ebook.epub`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
    
    showToast(`EPUB file downloaded to your system!`, 'success');
}

function renderReviews(bookId) {
    modalReviewsList.innerHTML = '';
    const bookReviews = appState.reviews[bookId] || [];
    
    if (bookReviews.length === 0) {
        modalReviewsList.innerHTML = `
            <p style="font-size: 0.85rem; color: var(--text-muted); font-style: italic;">No reviews yet. Be the first to express your love for this book!</p>
        `;
        return;
    }
    
    bookReviews.forEach(r => {
        const item = document.createElement('div');
        item.className = 'review-card';
        
        let hearts = '';
        for (let i = 1; i <= 5; i++) {
            hearts += i <= r.rating ? '♥' : '♡';
        }
        
        item.innerHTML = `
            <div class="review-header">
                <span class="review-author">${r.author}</span>
                <span class="review-rating">${hearts}</span>
            </div>
            <p class="review-text">${r.text}</p>
        `;
        
        modalReviewsList.appendChild(item);
    });
}

function postReview() {
    const authorInput = document.getElementById('reviewAuthorInput');
    const ratingInput = document.getElementById('reviewRatingInput');
    const textInput = document.getElementById('reviewTextInput');
    
    const author = authorInput.value.trim();
    const rating = parseInt(ratingInput.value);
    const text = textInput.value.trim();
    
    if (!author || !text) return;
    
    const bookId = appState.currentBook.id;
    if (!appState.reviews[bookId]) {
        appState.reviews[bookId] = [];
    }
    
    appState.reviews[bookId].unshift({ author, rating, text });
    saveReviews();
    
    // Reset form
    authorInput.value = '';
    textInput.value = '';
    
    // Re-render
    renderReviews(bookId);
    showToast("Thank you! Review posted successfully.", "success");
}

// ----------------------------------------------------
// 12. E-READER PREVIEW ENGINE
// ----------------------------------------------------
async function openReader(bookId) {
    const book = appState.catalog.find(b => b.id === bookId);
    if (!book) return;
    
    appState.isTranslatedToHindi = false;
    const transBtn = document.getElementById('readerTranslateToggle');
    if (transBtn) {
        transBtn.textContent = "Translate (हिंदी)";
        transBtn.style.color = "var(--accent)";
        transBtn.style.borderColor = "var(--accent)";
    }
    
    const gutenbergId = getGutenbergId(book.id);
    
    // If it's a Gutenberg classic and not fully parsed/loaded, download and parse online text
    if (gutenbergId && !book.isFullyLoaded) {
        openModal(readerModal);
        readerBookTitle.textContent = book.title;
        readerBookAuthor.textContent = `by ${book.author}`;
        
        // Setup inline styles spinner
        readerTextContent.innerHTML = `
            <style>
                @keyframes spin {
                    0% { transform: rotate(0deg); }
                    100% { transform: rotate(360deg); }
                }
            </style>
            <div class="reader-loading-state" style="text-align: center; padding: 60px 20px;">
                <div class="spinner" style="border: 4px solid rgba(224, 74, 116, 0.1); border-left-color: var(--accent); border-radius: 50%; width: 50px; height: 50px; animation: spin 1s linear infinite; margin: 0 auto 20px;"></div>
                <h3 style="font-family: var(--font-serif); margin-bottom: 10px; color: var(--accent);">Opening Full Book...</h3>
                <p style="color: var(--text-muted); font-size: 0.9rem; max-width: 320px; margin: 0 auto;" id="readerLoadingText">Fetching complete text from Project Gutenberg...</p>
            </div>
        `;
        
        readerPrevBtn.disabled = true;
        readerNextBtn.disabled = true;
        readerProgressText.textContent = "Loading...";
        readerProgressBarFill.style.width = "0%";
        
        try {
            const text = await fetchFullGutenbergText(gutenbergId);
            const loadingTextEl = document.getElementById('readerLoadingText');
            if (loadingTextEl) loadingTextEl.textContent = "Splitting book into chapters...";
            
            const chapters = parseGutenbergChapters(text);
            book.chapters = chapters;
            book.isFullyLoaded = true;
            
            appState.currentReadingBook = book;
            appState.currentChapterIndex = 0;
            renderReaderContent();
        } catch (err) {
            console.error("Failed to load online book:", err);
            readerTextContent.innerHTML = `
                <div style="text-align: center; padding: 40px 20px;">
                    <div style="font-size: 3rem; margin-bottom: 15px;">🥀</div>
                    <h3 style="font-family: var(--font-serif); margin-bottom: 10px; color: var(--accent);">Failed to Load Book</h3>
                    <p style="color: var(--text-muted); font-size: 0.9rem; max-width: 320px; margin: 0 auto 20px;">The Gutenberg database is temporarily unreachable or blocked. You can still download the detailed preview or read offline.</p>
                    <button class="btn-secondary" onclick="closeModal(readerModal)" style="margin: 0 auto;">Close Reader</button>
                </div>
            `;
        }
        return;
    }
    
    appState.currentReadingBook = book;
    appState.currentChapterIndex = 0;
    
    readerBookTitle.textContent = book.title;
    readerBookAuthor.textContent = `by ${book.author}`;
    
    renderReaderContent();
    openModal(readerModal);
}

async function renderReaderContent() {
    const book = appState.currentReadingBook;
    const chapters = book.chapters || [];
    
    if (chapters.length === 0) {
        readerTextContent.innerHTML = `<p>No chapters available. Please check back later.</p>`;
        readerProgressText.textContent = `Unavailable`;
        readerProgressBarFill.style.width = '0%';
        return;
    }
    
    const currentChapter = chapters[appState.currentChapterIndex];
    
    let title = currentChapter.title;
    let paragraphs = currentChapter.content;
    
    if (appState.isTranslatedToHindi) {
        readerTextContent.innerHTML = `
            <style>
                @keyframes spin {
                    0% { transform: rotate(0deg); }
                    100% { transform: rotate(360deg); }
                }
            </style>
            <div style="text-align: center; padding: 60px 20px;">
                <div class="spinner" style="border: 4px solid rgba(224, 74, 116, 0.1); border-left-color: var(--accent); border-radius: 50%; width: 40px; height: 40px; animation: spin 1s linear infinite; margin: 0 auto 15px;"></div>
                <p style="color: var(--text-muted); font-size: 0.9rem;">Translating chapter content to Hindi...</p>
            </div>
        `;
        
        try {
            title = await translateText(title, 'hi');
            paragraphs = await translateParagraphs(paragraphs, 'hi');
        } catch (e) {
            console.error("Translation failed:", e);
            showToast("Translation service is currently busy. Showing English.", "warning");
            appState.isTranslatedToHindi = false;
            const transBtn = document.getElementById('readerTranslateToggle');
            if (transBtn) {
                transBtn.textContent = "Translate (हिंदी)";
                transBtn.style.color = "var(--accent)";
            }
            title = currentChapter.title;
            paragraphs = currentChapter.content;
        }
    }
    
    let textHtml = `<h2 style="font-family: var(--font-serif); margin-bottom: 20px; text-align: center;">${title}</h2>`;
    paragraphs.forEach(para => {
        textHtml += `<p style="font-size: ${appState.currentFontSize}rem;">${para}</p>`;
    });
    
    readerTextContent.innerHTML = textHtml;
    
    // Update progress footer
    const progressPercent = ((appState.currentChapterIndex + 1) / chapters.length) * 100;
    readerProgressBarFill.style.width = `${progressPercent}%`;
    readerProgressText.textContent = `Chapter ${appState.currentChapterIndex + 1} of ${chapters.length}`;
    
    // Sync button states
    readerPrevBtn.disabled = appState.currentChapterIndex === 0;
    readerNextBtn.disabled = appState.currentChapterIndex === chapters.length - 1;
}

function readerNextChapter() {
    if (appState.currentChapterIndex < appState.currentReadingBook.chapters.length - 1) {
        appState.currentChapterIndex++;
        renderReaderContent();
        readerBody.scrollTop = 0;
    }
}

function readerPrevChapter() {
    if (appState.currentChapterIndex > 0) {
        appState.currentChapterIndex--;
        renderReaderContent();
        readerBody.scrollTop = 0;
    }
}

// Adjust reader styling settings
function toggleReaderFont() {
    if (appState.readerFont === 'reader-text-serif') {
        appState.readerFont = 'reader-text-sans';
        readerFontToggle.textContent = 'Sans-Serif';
    } else {
        appState.readerFont = 'reader-text-serif';
        readerFontToggle.textContent = 'Serif';
    }
    
    readerBody.className = `reader-body-container ${appState.readerTheme} ${appState.readerFont}`;
}

function toggleReaderTheme() {
    if (appState.readerTheme === 'theme-reader-dark') {
        appState.readerTheme = 'theme-reader-light';
        readerThemeToggle.textContent = 'Day Mode';
    } else if (appState.readerTheme === 'theme-reader-light') {
        appState.readerTheme = 'theme-reader-sepia';
        readerThemeToggle.textContent = 'Sepia';
    } else {
        appState.readerTheme = 'theme-reader-dark';
        readerThemeToggle.textContent = 'Night Mode';
    }
    
    readerBody.className = `reader-body-container ${appState.readerTheme} ${appState.readerFont}`;
}

function adjustFontSize(direction) {
    if (direction === 'up' && appState.currentFontSize < 1.8) {
        appState.currentFontSize += 0.08;
    } else if (direction === 'down' && appState.currentFontSize > 0.9) {
        appState.currentFontSize -= 0.08;
    }
    renderReaderContent();
}

// ----------------------------------------------------
// 13. LOVE STORY MATCHMAKER TROPE QUIZ
// ----------------------------------------------------
function startQuiz() {
    appState.quizStep = 0;
    appState.quizAnswers = [];
    renderQuizStep();
    openModal(quizModal);
}

function renderQuizStep() {
    quizContent.innerHTML = '';
    
    if (appState.quizStep < quizQuestions.length) {
        const currentQ = quizQuestions[appState.quizStep];
        
        const qTitle = document.createElement('h4');
        qTitle.className = 'quiz-question-title';
        qTitle.textContent = currentQ.question;
        
        const optsList = document.createElement('div');
        optsList.className = 'quiz-options-list';
        
        currentQ.options.forEach(opt => {
            const btn = document.createElement('button');
            btn.className = 'quiz-option-btn';
            btn.textContent = opt.text;
            btn.onclick = () => selectQuizOption(opt.value);
            optsList.appendChild(btn);
        });
        
        quizContent.appendChild(qTitle);
        quizContent.appendChild(optsList);
    } else {
        // Calculate result recommendation
        showQuizResult();
    }
}

function selectQuizOption(value) {
    appState.quizAnswers.push(value);
    appState.quizStep++;
    renderQuizStep();
}

function showQuizResult() {
    // Basic match calculations
    const favSubgenre = appState.quizAnswers[0];
    const favTrope = appState.quizAnswers[1];
    
    // Filter matches
    let matches = appState.catalog.filter(book => book.subgenre === favSubgenre);
    if (matches.length === 0) matches = [...appState.catalog]; // fallback
    
    // Calculate weights
    const matchScores = matches.map(book => {
        let score = 50; // base score
        if (book.subgenre === favSubgenre) score += 20;
        if (book.tropes.includes(favTrope)) score += 25;
        return { book, score };
    });
    
    // Sort matches
    matchScores.sort((a,b) => b.score - a.score);
    
    const matchedBook = matchScores[0].book;
    const matchedScore = Math.min(100, matchScores[0].score + Math.floor(Math.random() * 6)); // add random factor
    
    let coverBg = "linear-gradient(135deg, #1e0a12 0%, #000 100%)";
    if (matchedBook.subgenre === "Contemporary") coverBg = "linear-gradient(135deg, #e04a74 0%, #4a0f20 100%)";
    if (matchedBook.subgenre === "Fantasy/Paranormal") coverBg = "linear-gradient(135deg, #2d0b2e 0%, #09030a 100%)";
    
    quizContent.innerHTML = `
        <div class="quiz-match-result">
            <div class="quiz-match-header">Your Matches are In!</div>
            <div class="quiz-match-title">It's a Match! (${matchedScore}% Match)</div>
            
            <div class="book-card glass-panel" style="width: 100%; max-width: 290px; text-align: left; cursor: default;">
                <div class="card-cover-wrapper" style="height: 140px;">
                    <div class="card-cover" style="background: ${coverBg};">
                        <div class="cover-design" style="justify-content: space-around; padding: 10px;">
                            <span class="cover-badge" style="background: var(--gold); color: #000;">Love Match</span>
                            <div class="card-title-mini" style="font-size: 0.95rem;">${matchedBook.title}</div>
                            <div class="card-author-mini">${matchedBook.author}</div>
                        </div>
                    </div>
                </div>
                <div class="card-info" style="padding: 12px; gap: 8px;">
                    <div>
                        <h4 style="font-family: var(--font-serif); margin-bottom: 2px;">${matchedBook.title}</h4>
                        <p style="font-size: 0.75rem; color: var(--text-muted); margin-bottom: 5px;">by ${matchedBook.author}</p>
                        <p style="font-size: 0.8rem; line-height: 1.4; color: var(--text-secondary); display: -webkit-box; -webkit-line-clamp: 3; -webkit-box-orient: vertical; overflow: hidden;">${matchedBook.quickHook}</p>
                    </div>
                    <div class="card-genres" style="margin-bottom: 0;">
                        ${matchedBook.tropes.slice(0, 2).map(t => `<span class="card-genre-tag">${t}</span>`).join('')}
                    </div>
                </div>
            </div>
            
            <div style="display: flex; gap: 10px; width: 100%; justify-content: center; margin-top: 10px;">
                <button class="btn-primary" id="quizDetailsBtn" style="font-size: 0.85rem; padding: 10px 20px;">Open Book</button>
                <button class="btn-secondary" id="quizRetryBtn" style="font-size: 0.85rem; padding: 10px 20px;">Retry Quiz</button>
            </div>
        </div>
    `;
    
    document.getElementById('quizDetailsBtn').onclick = () => {
        closeModal(quizModal);
        openBookModal(matchedBook.id);
    };
    
    document.getElementById('quizRetryBtn').onclick = startQuiz;
}

// ----------------------------------------------------
// 14. MODALS CORE HELPER FUNCTIONS
// ----------------------------------------------------
function openModal(modal) {
    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
}

function closeModal(modal) {
    modal.classList.remove('active');
    document.body.style.overflow = '';
}

// ----------------------------------------------------
// 15. INITIALIZATION & EVEN BINDING
// ----------------------------------------------------
function bindEvents() {
    // Search event
    let searchDebounce;
    searchInput.oninput = () => {
        searchClearBtn.style.display = searchInput.value.length > 0 ? 'flex' : 'none';
        
        clearTimeout(searchDebounce);
        searchDebounce = setTimeout(async () => {
            appState.searchQuery = searchInput.value;
            filterAndSortBooks();
            if (appState.searchQuery.trim().length >= 3) {
                await searchNovelsOnline(appState.searchQuery);
            }
        }, 500);
    };
    
    searchClearBtn.onclick = () => {
        searchInput.value = '';
        searchClearBtn.style.display = 'none';
        appState.searchQuery = '';
        filterAndSortBooks();
    };
    
    // Dropdowns
    sortBySelect.onchange = filterAndSortBooks;
    langSelect.onchange = filterAndSortBooks;
    
    // Theme Switch
    themeToggleBtn.onclick = toggleTheme;
    
    // Bookshelf list
    bookshelfOpenBtn.onclick = () => {
        renderBookshelfList();
        openModal(bookshelfModal);
    };
    
    // Modals Close handlers
    closeDetailsBtn.onclick = () => closeModal(bookDetailsModal);
    closeReaderBtn.onclick = () => closeModal(readerModal);
    closeBookshelfBtn.onclick = () => closeModal(bookshelfModal);
    closeQuizBtn.onclick = () => closeModal(quizModal);
    
    // Close on backdrop click
    window.onclick = (e) => {
        if (e.target.classList.contains('modal-overlay')) {
            closeModal(e.target);
        }
    };
    
    // Reviews
    addReviewForm.onsubmit = postReview;
    
    // Reader Controls
    readerNextBtn.onclick = readerNextChapter;
    readerPrevBtn.onclick = readerPrevChapter;
    readerFontToggle.onclick = toggleReaderFont;
    readerThemeToggle.onclick = toggleReaderTheme;
    readerFontSizeUp.onclick = () => adjustFontSize('up');
    readerFontSizeDown.onclick = () => adjustFontSize('down');
    
    const readerTranslateToggle = document.getElementById('readerTranslateToggle');
    if (readerTranslateToggle) {
        readerTranslateToggle.onclick = async () => {
            appState.isTranslatedToHindi = !appState.isTranslatedToHindi;
            if (appState.isTranslatedToHindi) {
                readerTranslateToggle.textContent = "Show Original";
                readerTranslateToggle.style.color = "var(--gold)";
                readerTranslateToggle.style.borderColor = "var(--gold)";
            } else {
                readerTranslateToggle.textContent = "Translate (हिंदी)";
                readerTranslateToggle.style.color = "var(--accent)";
                readerTranslateToggle.style.borderColor = "var(--accent)";
            }
            await renderReaderContent();
        };
    }
    
    // Matchmaker Quiz trigger
    quizStartBtn.onclick = startQuiz;
}

// On Page Load
window.onload = () => {
    loadState();
    bindEvents();
    
    // Seed initial display using cached data
    syncedCount.textContent = appState.catalog.length;
    renderHeroSpotlight();
    renderGenreFilters();
    filterAndSortBooks();
    
    // Run background decorative hearts
    createFloatingHearts();
    
    // Run real-time release checks & simulator logs
    runScraperConsole();
    startNewReleasesScraperSimulator();
    
    // Fetch 800+ live romance books from Project Gutenberg (caches in local storage)
    setTimeout(load800GutenbergBooks, 1000);
    
    // Fetch newly released romance novels from Google Books API
    // Automatically auto-detects newly released and future romance novels!
    setTimeout(fetchGoogleBooksRomance, 2500);
};

// 16. DYNAMIC FULL BOOK PDF GENERATOR (CORS BYPASS & CHUNKED RENDERER)
function downloadFullGutenbergPDF(book) {
    // Show download container
    downloadProgressContainer.style.display = 'flex';
    downloadStatusText.textContent = `Connecting to Gutenberg mirror...`;
    downloadProgressPercentage.textContent = '0%';
    downloadProgressFill.style.width = '0%';
    
    // Extract Gutenberg book ID using mapping helper
    const gutenbergId = getGutenbergId(book.id);
    
    downloadStatusText.textContent = `Downloading full book text...`;
    downloadProgressPercentage.textContent = '25%';
    downloadProgressFill.style.width = '25%';

    fetchFullTextWithFallback(gutenbergId)
        .then(fullText => {
            downloadStatusText.textContent = `Compiling pages (please wait)...`;
            downloadProgressPercentage.textContent = '50%';
            downloadProgressFill.style.width = '50%';
            
            // Clean up Gutenberg metadata headers/footers if possible
            const lines = fullText.split(/\r?\n/);
            
            // Generate PDF using jsPDF in chunks to prevent locking browser
            const { jsPDF } = window.jspdf;
            const doc = new jsPDF();
            
            const margin = 20;
            const pageWidth = doc.internal.pageSize.getWidth();
            const pageHeight = doc.internal.pageSize.getHeight();
            const contentWidth = pageWidth - (margin * 2);
            
            // Theme Colors
            const primaryColor = [30, 10, 18]; // Velvet Burgundy
            const secondaryColor = [212, 175, 55]; // Gold
            
            // Set up cover page
            doc.setFillColor(primaryColor[0], primaryColor[1], primaryColor[2]);
            doc.rect(0, 0, pageWidth, pageHeight, 'F');
            
            // Cover details
            doc.setTextColor(secondaryColor[0], secondaryColor[1], secondaryColor[2]);
            doc.setFont("times", "italic");
            doc.setFontSize(36);
            doc.text("Lovestruck Hub", pageWidth / 2, pageHeight / 3, { align: "center" });
            
            doc.setFont("times", "bold");
            doc.setFontSize(28);
            doc.setTextColor(255, 255, 255);
            doc.text(book.title, pageWidth / 2, pageHeight / 2 - 10, { align: "center", maxWidth: contentWidth });
            
            doc.setFont("times", "italic");
            doc.setFontSize(18);
            doc.setTextColor(secondaryColor[0], secondaryColor[1], secondaryColor[2]);
            doc.text(`by ${book.author}`, pageWidth / 2, pageHeight / 2 + 10, { align: "center" });
            
            doc.setFont("helvetica", "normal");
            doc.setFontSize(10);
            doc.setTextColor(180, 180, 180);
            doc.text("COMPLETE PUBLIC DOMAIN EDITION", pageWidth / 2, pageHeight - 30, { align: "center" });
            
            // Wrap text lines into PDF-wrapped lines
            doc.setFont("times", "normal");
            doc.setFontSize(11);
            
            // Slicing lines to prevent memory crashes on extremely large files (standard public domain classics)
            const sliceLimit = Math.min(lines.length, 25000);
            const wrappedLines = [];
            
            for (let i = 0; i < sliceLimit; i++) {
                const line = lines[i].trim();
                if (line === "") {
                    wrappedLines.push("");
                } else {
                    const split = doc.splitTextToSize(line, contentWidth);
                    split.forEach(s => wrappedLines.push(s));
                }
            }
            
            let currentLineIndex = 0;
            const linesPerPage = 40;
            let pageNum = 1;
            
            function renderChunk() {
                if (currentLineIndex >= wrappedLines.length) {
                    // Done! Save document
                    downloadProgressPercentage.textContent = '100%';
                    downloadProgressFill.style.width = '100%';
                    downloadStatusText.textContent = `Saving PDF to downloads...`;
                    
                    setTimeout(() => {
                        downloadProgressContainer.style.display = 'none';
                        const fileTitle = book.title.toLowerCase().replace(/[^a-z0-9]+/g, '_');
                        doc.save(`lovestruck_${fileTitle}_complete.pdf`);
                        showToast(`Full book downloaded: "${book.title}"!`, "success");
                    }, 500);
                    return;
                }
                
                // Add page
                doc.addPage();
                
                // Write header/footer
                doc.setFillColor(primaryColor[0], primaryColor[1], primaryColor[2]);
                doc.rect(0, 0, pageWidth, 12, 'F');
                doc.setTextColor(255, 255, 255);
                doc.setFont("times", "italic");
                doc.setFontSize(8);
                doc.text(`${book.title}  |  by ${book.author}`, margin, 8);
                doc.text(`Page ${pageNum}`, pageWidth - margin - 15, 8);
                
                doc.setTextColor(40, 40, 40);
                doc.setFont("times", "normal");
                doc.setFontSize(10.5);
                
                let y = 25;
                const chunkEnd = Math.min(currentLineIndex + linesPerPage, wrappedLines.length);
                
                for (let i = currentLineIndex; i < chunkEnd; i++) {
                    doc.text(wrappedLines[i], margin, y);
                    y += 6.2;
                }
                
                currentLineIndex = chunkEnd;
                pageNum++;
                
                // Update UI progress bar
                const percent = 50 + Math.floor((currentLineIndex / wrappedLines.length) * 45);
                downloadProgressPercentage.textContent = `${percent}%`;
                downloadProgressFill.style.width = `${percent}%`;
                downloadStatusText.textContent = `Drafting PDF page ${pageNum}...`;
                
                setTimeout(renderChunk, 5); // small timeout to prevent browser UI lock
            }
            
            // Start rendering pages
            setTimeout(renderChunk, 100);
        })
        .catch(error => {
            console.error("Full text PDF download failed, fallback to preview:", error);
            downloadStatusText.textContent = `CORS check failed. Falling back...`;
            
            setTimeout(() => {
                downloadProgressContainer.style.display = 'none';
                showToast(`Direct text fetch blocked. Downloading detailed Preview PDF instead.`, 'warning');
                generateRealPDF(book);
                
                // Also open the Gutenberg page so they can download it directly
                window.open(`https://www.gutenberg.org/ebooks/${gutenbergId}`, '_blank');
            }, 1000);
        });
}

// 17. GOOGLE BOOKS API ROMANCE SCANNER (FUTURE AUTOMATED DETECTION)
async function fetchGoogleBooksRomance() {
    try {
        scraperLogText.textContent = `[${new Date().toLocaleTimeString()}] Querying Google Books API for newest romance releases...`;
        
        // Query Google Books for subject:romance, sorted by newest
        const response = await fetch('https://www.googleapis.com/books/v1/volumes?q=subject:romance&orderBy=newest&maxResults=20&printType=books&langRestrict=en');
        if (!response.ok) throw new Error("Google Books API returned error response");
        
        const data = await response.json();
        const items = data.items || [];
        
        let addedCount = 0;
        
        items.forEach(item => {
            const idStr = `google-${item.id}`;
            
            // Check if already in catalog
            if (appState.scrapedIds.has(idStr)) return;
            
            const volumeInfo = item.volumeInfo || {};
            const authors = volumeInfo.authors || ["Unknown Author"];
            
            // Determine romance subgenre
            let mappedSubgenre = "Contemporary";
            const cats = (volumeInfo.categories || []).join(' ').toLowerCase();
            const titleDesc = (volumeInfo.title + ' ' + (volumeInfo.description || '')).toLowerCase();
            
            if (cats.includes('historical') || cats.includes('regency') || cats.includes('victorian') || titleDesc.includes('historical romance')) {
                mappedSubgenre = "Historical";
            } else if (cats.includes('fantasy') || cats.includes('paranormal') || cats.includes('magic') || cats.includes('fairy') || titleDesc.includes('fantasy romance')) {
                mappedSubgenre = "Fantasy/Paranormal";
            } else if (cats.includes('gothic') || cats.includes('horror') || cats.includes('dark') || titleDesc.includes('dark romance')) {
                mappedSubgenre = "Gothic";
            } else if (cats.includes('sci-fi') || cats.includes('science fiction') || cats.includes('space') || titleDesc.includes('sci-fi romance')) {
                mappedSubgenre = "Sci-Fi";
            }
            
            // Handle thumbnail image (upgrade http to https to avoid mixed content warnings)
            let thumbnail = "";
            if (volumeInfo.imageLinks) {
                thumbnail = volumeInfo.imageLinks.thumbnail || volumeInfo.imageLinks.smallThumbnail || "";
                if (thumbnail.startsWith("http://")) {
                    thumbnail = thumbnail.replace("http://", "https://");
                }
            }
            
            // Date formatting
            let pubYear = 2026;
            if (volumeInfo.publishedDate) {
                pubYear = parseInt(volumeInfo.publishedDate.substring(0, 4)) || 2026;
            }
            
            // Description
            const synopsis = volumeInfo.description || "A newly released romantic novel available in library databases. Follow the characters as they navigate love, intimacy, and destiny in this fresh romance release.";
            
            // Generate some tropes based on title keywords
            let tropes = ["New Release", "Modern Romance"];
            if (mappedSubgenre === "Fantasy/Paranormal") tropes.push("Magic", "Fated Mates");
            if (mappedSubgenre === "Historical") tropes.push("High Society", "Regency Courtship");
            if (titleDesc.includes("enemies")) tropes.push("Enemies to Lovers");
            if (titleDesc.includes("fake")) tropes.push("Fake Dating");
            if (titleDesc.includes("secret")) tropes.push("Secret Romance");
            
            // We use the volume info link to let them buy/read on Google Books
            const infoLink = volumeInfo.previewLink || volumeInfo.infoLink || `https://books.google.com/books?id=${item.id}`;
            
            appState.catalog.push({
                id: idStr,
                title: volumeInfo.title,
                author: authors.join(", "),
                year: pubYear,
                language: volumeInfo.language || "en",
                genres: ["New Releases", "Romance"],
                subgenre: mappedSubgenre,
                rating: parseFloat((4.3 + Math.random() * 0.7).toFixed(1)),
                popularity: Math.floor(25000 + Math.random() * 50000), // simulated downloads
                pages: volumeInfo.pageCount || 310,
                quickHook: volumeInfo.subtitle || `A beautiful new ${mappedSubgenre.toLowerCase()} romance novel released in ${pubYear}.`,
                synopsis: synopsis,
                tropes: tropes.slice(0, 4),
                downloadUrlEpub: "#", // Modern copyrighted book
                downloadUrlPdf: "#",
                googleBooksLink: infoLink, // link to buy/preview
                chapters: generateCopyrightedBookChapters(volumeInfo.title, authors.join(", "), synopsis)
            });
            
            appState.scrapedIds.add(idStr);
            addedCount++;
        });
        
        syncedCount.textContent = appState.catalog.length;
        scraperLogText.textContent = `[${new Date().toLocaleTimeString()}] Live Sync: Auto-detected ${addedCount} new romance novels from Google Books API!`;
        
        // Re-render
        renderGenreFilters();
        filterAndSortBooks();
        
    } catch (e) {
        console.error("Google Books Sync failed:", e);
        scraperLogText.textContent = `[${new Date().toLocaleTimeString()}] Sync Warning: Google Books API temporary bypass.`;
    }
}

// 18. FLOATING DECORATIVE HEARTS SYSTEM (AESTHETIC UPGRADE)
function createFloatingHearts() {
    const container = document.getElementById('heartParticles');
    if (!container) return;
    
    const heartSymbols = ['❤️', '💖', '✨', '🌹', '💕', '💘'];
    
    // Spawn a heart every 1.8 seconds
    setInterval(() => {
        if (document.hidden) return; // don't spawn if tab is in background
        
        const particle = document.createElement('div');
        particle.className = 'heart-particle';
        
        // Random symbol
        particle.textContent = heartSymbols[Math.floor(Math.random() * heartSymbols.length)];
        
        // Random positioning & styling
        const startX = Math.random() * 100; // in vw
        const size = 0.8 + Math.random() * 1.2; // in rem
        const duration = 10 + Math.random() * 8; // 10s to 18s
        const opacity = 0.2 + Math.random() * 0.35;
        
        particle.style.left = `${startX}vw`;
        particle.style.fontSize = `${size}rem`;
        particle.style.opacity = opacity;
        particle.style.animationDuration = `${duration}s`;
        
        container.appendChild(particle);
        
        // Remove after animation completes
        setTimeout(() => {
            particle.remove();
        }, duration * 1000);
        
    }, 1800);
}

// 19. CLASSIC NOVEL ID MAPPING AND GUTENBERG TOOLS
function getGutenbergId(bookId) {
    if (bookId.startsWith('gutenberg-')) {
        return bookId.split('-')[1];
    }
    // Map local seed classics to Gutenberg IDs
    const mapping = {
        'pride-and-prejudice': '1342',
        'jane-eyre': '1230',
        'wuthering-heights': '768',
        'romeo-and-juliet': '1513'
    };
    return mapping[bookId] || null;
}

async function fetchFullGutenbergText(gutenbergId) {
    return await fetchFullTextWithFallback(gutenbergId);
}

function parseGutenbergChapters(fullText) {
    // 1. Locate start of actual text to strip Gutenberg header
    let startIdx = 0;
    const startMarkers = [
        "*** START OF THE PROJECT GUTENBERG EBOOK",
        "*** START OF THIS PROJECT GUTENBERG EBOOK",
        "***START OF THE PROJECT GUTENBERG",
        "***START OF THIS PROJECT"
    ];
    for (const marker of startMarkers) {
        const idx = fullText.indexOf(marker);
        if (idx !== -1) {
            const eol = fullText.indexOf('\n', idx);
            startIdx = eol !== -1 ? eol + 1 : idx + marker.length;
            break;
        }
    }

    // 2. Locate end of actual text to strip Gutenberg footer
    let endIdx = fullText.length;
    const endMarkers = [
        "*** END OF THE PROJECT GUTENBERG EBOOK",
        "*** END OF THIS PROJECT GUTENBERG EBOOK",
        "***END OF THE PROJECT GUTENBERG",
        "***END OF THIS PROJECT"
    ];
    for (const marker of endMarkers) {
        const idx = fullText.indexOf(marker);
        if (idx !== -1) {
            endIdx = idx;
            break;
        }
    }

    const mainText = fullText.substring(startIdx, endIdx);

    // 3. Split by chapter headers
    const lines = mainText.split(/\r?\n/);
    const chapters = [];
    let currentChapterTitle = "Prologue / Introduction";
    let currentChapterContent = [];

    // Helper regex for chapter matching
    const chapterRegex = /^(?:CHAPTER|Chapter|ACT|Act)\s+(?:[0-9]+|[IVXLCDM\.]+)/i;

    for (let i = 0; i < lines.length; i++) {
        const line = lines[i].trim();
        if (chapterRegex.test(line)) {
            if (currentChapterContent.length > 0) {
                chapters.push({
                    title: currentChapterTitle,
                    content: [...currentChapterContent]
                });
                currentChapterContent = [];
            }
            currentChapterTitle = line;
            if (i + 1 < lines.length && lines[i+1].trim() !== "" && !chapterRegex.test(lines[i+1].trim()) && lines[i+1].trim().length < 50) {
                currentChapterTitle += ": " + lines[i+1].trim();
                i++;
            }
        } else {
            if (line !== "") {
                currentChapterContent.push(line);
            }
        }
    }

    if (currentChapterContent.length > 0) {
        chapters.push({
            title: currentChapterTitle,
            content: currentChapterContent
        });
    }

    // Fallback: split by lines if no chapters were parsed
    if (chapters.length === 0) {
        const nonSpacedLines = lines.filter(l => l.trim() !== "");
        const linesPerChapter = 150;
        for (let i = 0; i < nonSpacedLines.length; i += linesPerChapter) {
            const chunk = nonSpacedLines.slice(i, i + linesPerChapter);
            chapters.push({
                title: `Section ${Math.floor(i / linesPerChapter) + 1}`,
                content: chunk
            });
        }
    }

    return chapters;
}

// 20. ONE-CLICK HINDI TRANSLATION ENGINE
async function translateText(text, targetLang = 'hi') {
    if (!text) return "";
    const url = `https://translate.googleapis.com/translate_a/single?client=gtx&sl=auto&tl=${targetLang}&dt=t&q=${encodeURIComponent(text)}`;
    const response = await fetch(url);
    if (!response.ok) throw new Error("Translation failed");
    const data = await response.json();
    return data[0].map(segment => segment[0]).join('');
}

let translationCache = {};
async function translateParagraphs(paragraphs, targetLang = 'hi') {
    const translated = [];
    for (let p of paragraphs) {
        if (!p.trim()) {
            translated.push("");
            continue;
        }
        const cacheKey = p + "_" + targetLang;
        if (translationCache[cacheKey]) {
            translated.push(translationCache[cacheKey]);
            continue;
        }
        try {
            const trans = await translateText(p, targetLang);
            translationCache[cacheKey] = trans;
            translated.push(trans);
        } catch (e) {
            console.error("Para translation failed:", e);
            translated.push(p);
        }
    }
    return translated;
}

let originalSynopsisText = "";
let translatedSynopsisText = "";

async function toggleSynopsisTranslation() {
    const btn = document.getElementById('translateSynopsisBtn');
    if (!originalSynopsisText) {
        originalSynopsisText = modalSynopsis.textContent;
    }
    
    if (btn.textContent.includes("Translate to Hindi")) {
        btn.textContent = "Translating...";
        try {
            if (!translatedSynopsisText) {
                translatedSynopsisText = await translateText(originalSynopsisText, 'hi');
            }
            modalSynopsis.textContent = translatedSynopsisText;
            btn.textContent = "Show English";
            showToast("Synopsis translated to Hindi!", "success");
        } catch (e) {
            console.error("Synopsis translation failed:", e);
            btn.textContent = "Translate to Hindi (हिंदी)";
            showToast("Translation error, try again.", "warning");
        }
    } else {
        modalSynopsis.textContent = originalSynopsisText;
        btn.textContent = "Translate to Hindi (हिंदी)";
    }
}

// 21. REAL-TIME BOOK SEARCH ENGINE (GUTENBERG & GOOGLE BOOKS DYNAMIC SCANNER)
async function searchNovelsOnline(query) {
    if (!query || query.trim().length < 3) return;
    
    scraperLogText.textContent = `[${new Date().toLocaleTimeString()}] Searching online index for "${query}"...`;
    
    try {
        const gutPromise = fetch(`https://gutendex.com/books/?search=${encodeURIComponent(query)}`)
            .then(res => res.json())
            .catch(() => ({ results: [] }));
            
        const gbPromise = fetch(`https://www.googleapis.com/books/v1/volumes?q=${encodeURIComponent(query)}&maxResults=15&printType=books`)
            .then(res => res.json())
            .catch(() => ({ items: [] }));
            
        const [gutData, gbData] = await Promise.all([gutPromise, gbPromise]);
        
        let addedCount = 0;
        
        if (gutData.results) {
            gutData.results.forEach(book => {
                const idStr = `gutenberg-${book.id}`;
                if (appState.scrapedIds.has(idStr)) return;
                
                const authorObj = book.authors[0] || { name: "Unknown Author", birth_year: null };
                
                let mappedSubgenre = "Historical";
                const subjectsJoined = ((book.subjects || []).join(' ') + ' ' + book.title).toLowerCase();
                
                if (subjectsJoined.includes('gothic') || subjectsJoined.includes('ghost') || subjectsJoined.includes('mystery')) {
                    mappedSubgenre = "Gothic";
                } else if (subjectsJoined.includes('fantasy') || subjectsJoined.includes('magic') || subjectsJoined.includes('fairy') || subjectsJoined.includes('witch')) {
                    mappedSubgenre = "Fantasy/Paranormal";
                } else if (subjectsJoined.includes('science fiction') || subjectsJoined.includes('future') || subjectsJoined.includes('space')) {
                    mappedSubgenre = "Sci-Fi";
                } else if (subjectsJoined.includes('contemporary') || subjectsJoined.includes('modern')) {
                    mappedSubgenre = "Contemporary";
                }
                
                const epubLink = book.formats['application/epub+zip'] || "#";
                const pdfLink = book.formats['application/pdf'] || book.formats['text/html'] || "#";
                const generatedSynopsis = `A beautiful classic romance written by ${authorObj.name}. Set in a historical era, it explores themes of courtship, family expectations, and the emotional struggles of love. It remains highly popular, with over ${book.download_count} direct downloads from Project Gutenberg.`;
                
                appState.catalog.push({
                    id: idStr,
                    title: book.title,
                    author: cleanAuthorName(authorObj.name),
                    year: authorObj.birth_year ? authorObj.birth_year + 30 : 1880,
                    language: book.languages[0] || "en",
                    genres: ["Classics", "Historical"],
                    subgenre: mappedSubgenre,
                    rating: parseFloat((4.4 + Math.random() * 0.5).toFixed(1)),
                    popularity: book.download_count || 1200,
                    pages: Math.floor(200 + Math.random() * 250),
                    quickHook: `Classic romance. A beautiful story about love and destiny.`,
                    synopsis: generatedSynopsis,
                    tropes: ["Classics", "Historical Setting", mappedSubgenre],
                    downloadUrlEpub: epubLink,
                    downloadUrlPdf: pdfLink,
                    chapters: [
                        {
                            title: "Chapter I",
                            content: [
                                "The full text of this novel is loading dynamically for you to read online.",
                                "Click the Read button to open the full book text, or download EPUB/PDF."
                            ]
                        }
                    ]
                });
                
                appState.scrapedIds.add(idStr);
                addedCount++;
            });
        }
        
        if (gbData.items) {
            gbData.items.forEach(item => {
                const idStr = `google-${item.id}`;
                if (appState.scrapedIds.has(idStr)) return;
                
                const volumeInfo = item.volumeInfo || {};
                const authors = volumeInfo.authors || ["Unknown Author"];
                
                let mappedSubgenre = "Contemporary";
                const cats = (volumeInfo.categories || []).join(' ').toLowerCase();
                const titleDesc = (volumeInfo.title + ' ' + (volumeInfo.description || '')).toLowerCase();
                
                if (cats.includes('historical') || cats.includes('regency') || titleDesc.includes('historical romance')) {
                    mappedSubgenre = "Historical";
                } else if (cats.includes('fantasy') || cats.includes('paranormal') || cats.includes('magic') || titleDesc.includes('fantasy romance')) {
                    mappedSubgenre = "Fantasy/Paranormal";
                } else if (cats.includes('gothic') || cats.includes('horror') || titleDesc.includes('dark romance')) {
                    mappedSubgenre = "Gothic";
                } else if (cats.includes('sci-fi') || cats.includes('science fiction') || titleDesc.includes('sci-fi romance')) {
                    mappedSubgenre = "Sci-Fi";
                }
                
                let pubYear = 2026;
                if (volumeInfo.publishedDate) {
                    pubYear = parseInt(volumeInfo.publishedDate.substring(0, 4)) || 2026;
                }
                
                const synopsis = volumeInfo.description || "A novel available in global databases. Follow the characters as they navigate their relationships, challenges, and destiny.";
                const infoLink = volumeInfo.previewLink || volumeInfo.infoLink || `https://books.google.com/books?id=${item.id}`;
                
                appState.catalog.push({
                    id: idStr,
                    title: volumeInfo.title,
                    author: authors.join(", "),
                    year: pubYear,
                    language: volumeInfo.language || "en",
                    genres: ["Romance"],
                    subgenre: mappedSubgenre,
                    rating: parseFloat((4.3 + Math.random() * 0.7).toFixed(1)),
                    popularity: Math.floor(15000 + Math.random() * 40000),
                    pages: volumeInfo.pageCount || 310,
                    quickHook: volumeInfo.subtitle || `A beautiful novel about love.`,
                    synopsis: synopsis,
                    tropes: ["Search Result", mappedSubgenre],
                    downloadUrlEpub: "#",
                    downloadUrlPdf: "#",
                    googleBooksLink: infoLink,
                    chapters: generateCopyrightedBookChapters(volumeInfo.title, authors.join(", "), synopsis)
                });
                
                appState.scrapedIds.add(idStr);
                addedCount++;
            });
        }
        
        if (addedCount > 0) {
            syncedCount.textContent = appState.catalog.length;
            scraperLogText.textContent = `[${new Date().toLocaleTimeString()}] Live Search: Found and loaded ${addedCount} new novels for "${query}"!`;
            renderGenreFilters();
        } else {
            scraperLogText.textContent = `[${new Date().toLocaleTimeString()}] Live Search: Search complete for "${query}" (no new matches).`;
        }
        
        filterAndSortBooks();
        
    } catch (e) {
        console.error("Dynamic search failed:", e);
        scraperLogText.textContent = `[${new Date().toLocaleTimeString()}] Search Warning: API temporary bypass.`;
    }
}
