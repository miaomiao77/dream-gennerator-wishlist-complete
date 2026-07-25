
let intro = {
    inMyDream: [
        'in my dream',
        'I dreamed',
    ],
};

let outro = {
    andYouWereThere: [
        'and we were there',
        'and you were there',
        'we had just arrived',
        'we had just discovered it',
        'we had been there forever',
    ],
    andYouWereHappy: [
        'and we were happy',
        'and we were safe',
        'and we were peaceful',
        'and we were content',
        'and we were warm',
        'and we were in love',
        'and we were holding hands',
        'and your voice was soft',
        'and your hand was soft',
        'and all was well',
        'and all was still',
        'and all was calm',
        'and you were singing me a song',
        'and you were smiling at me',
        'and you were grinning at me',
        'and I was singing you a song',
        'and I was smiling at you',
        'and I was grinning at you',
        "and we couldn't believe our luck",
    ],
};
let things = {
    /*
    HOW THIS WORKS

    ship: {
        // there was a thing
        thereWasAShip: 'there was a sailing ship',

        // what it was doing, in progressive tense
        sailsBillowing: 'sails billowing',

        // prepositional phrase leading to the next thing
        andInsideIt: 'and inside the hold of the ship',

        // another object will appear here...

        // and that object is related to this one because it was:
        betweenTheBoxes: 'surrounded by barrels and brass candlesticks',
    },

    Each of those strings can actually be an array of strings,
    and one will be chosen randomly.  For example:

        sailsBillowing: [
            'sails billowing',
            'mast creaking',
            'rocking gently',
        ]
    */

    //   == THING ==
    strawberry: {
        thereWasAShip: 'there was a juicy strawberry',
        sailsBillowing: 'sweet and warm',
        andInsideIt: 'and holding it up',
        betweenTheBoxes: 'protecting the strawberry',
    },
    bread: {
        thereWasAShip: 'there was a loaf of fresh bread',
        sailsBillowing: 'warm and fragrant',
        andInsideIt: 'and holding it up',
        betweenTheBoxes: 'cradling the bread',
    },
    pastry: {
        thereWasAShip: 'there was a small apricot pie',
        sailsBillowing: 'its sugared crust still warm',
        andInsideIt: 'and beneath the woven lattice',
        betweenTheBoxes: 'nested in the scent of butter and fruit',
    },
    banjo: {
        thereWasAShip: 'there was a polished wooden banjo',
        sailsBillowing: 'its strings humming without being touched',
        andInsideIt: 'and inside its round wooden body',
        betweenTheBoxes: 'resonating beneath the strings',
    },
    breakfast: {
        thereWasAShip: 'there was a table set for breakfast',
        sailsBillowing: 'steam rising into the morning light',
        andInsideIt: 'and beneath a folded napkin',
        betweenTheBoxes: 'among cups, plates, and squares of sunlight',
    },

    //  == PLACE / THING / CONTAINER / FRAME ==
    curtain: {
        thereWasAShip: 'there was a lush red velvet curtain',
        sailsBillowing: 'tassels unfurling, about to reveal a mystery',
        andInsideIt: 'and behind it',
        betweenTheBoxes: 'emerging into the spotlight',
    },
    beetle: {
        thereWasAShip: 'there was an enormous colorful beetle',
        sailsBillowing: 'glittering like a jewel',
        andInsideIt: 'and on its back',
        betweenTheBoxes: 'atop its glittering wings',
    },
    star: {
        thereWasAShip: 'there was a star',
        sailsBillowing: 'shining brightly',
        andInsideIt: 'and orbiting around it',
        betweenTheBoxes: 'soaring through the sparkling darkness',
    },
    seaglass: {
        thereWasAShip: 'there was a piece of blue-green sea glass',
        sailsBillowing: 'weathered with time, but still glinting in the sun',
        andInsideIt: 'and inside the frosted glass',
        betweenTheBoxes: 'safely enclosed',
    },
    ship: {
        thereWasAShip: 'there was a sailing ship',
        sailsBillowing: 'sails billowing',
        andInsideIt: 'and inside the hold of the ship',
        betweenTheBoxes: 'surrounded by barrels and brass candlesticks',
    },
    bed: {
        thereWasAShip: 'there was a soft bed',
        sailsBillowing: 'pillows already fluffed',
        andInsideIt: 'and resting beneath the quilt',
        betweenTheBoxes: 'tucked in for the night',
    },
    snail: {
        thereWasAShip: 'there was a small silver snail',
        sailsBillowing: 'carrying a rain-bright spiral',
        andInsideIt: 'and beneath the curve of its shell',
        betweenTheBoxes: 'moving at the speed of a secret',
    },
    crystal: {
        thereWasAShip: 'there was a clear quartz crystal',
        sailsBillowing: 'holding a shard of winter light',
        andInsideIt: 'and deep within its facets',
        betweenTheBoxes: 'refracted into many quiet versions',
    },
    flower: {
        thereWasAShip: 'there was a night-blooming flower',
        sailsBillowing: 'its pale petals slowly opening',
        andInsideIt: 'and in its golden center',
        betweenTheBoxes: 'dusted with luminous pollen',
    },
    sketchbook: {
        thereWasAShip: 'there was a weathered sketchbook',
        sailsBillowing: 'its loose pages lifting in the breeze',
        andInsideIt: 'and between two unfinished drawings',
        betweenTheBoxes: 'rendered in soft graphite',
    },
    song: {
        thereWasAShip: 'there was a quiet song',
        sailsBillowing: 'with only the melody remembered',
        andInsideIt: 'and between two of its notes',
        betweenTheBoxes: 'carried by the pause',
    },

    //   == PLACE ==
    meadow: {
        thereWasAShip: 'there was a meadow',
        sailsBillowing: 'flowers dancing in the breeze',
        andInsideIt: 'and resting gently in the grass',
        betweenTheBoxes: 'between the flowers',
    },
    lighthouse: {
        thereWasAShip: 'there was a lighthouse',
        sailsBillowing: 'holding a spell of stability',
        andInsideIt: 'and below the cliffs',
        betweenTheBoxes: 'gazing up at the stripes of the tower',
    },
    carousel: {
        thereWasAShip: 'there was a carousel',
        sailsBillowing: 'lights ablaze, brass shining',
        andInsideIt: 'and in the center of the carousel',
        betweenTheBoxes: 'protected by the dancing beasts',
    },
    harbor: {
        thereWasAShip: 'there was a harbor lit by paper lanterns',
        sailsBillowing: 'the tide breathing against the pilings',
        andInsideIt: 'and tied at the last empty pier',
        betweenTheBoxes: 'reflected in the black water',
    },
    circus: {
        thereWasAShip: 'there was an empty circus',
        sailsBillowing: 'its striped canvas breathing in the wind',
        andInsideIt: 'and in the center ring',
        betweenTheBoxes: 'watched by rows of vacant seats',
    },
    themePark: {
        thereWasAShip: 'there was an impossible amusement park',
        sailsBillowing: 'its castles glowing after closing time',
        andInsideIt: 'and at the end of the silent avenue',
        betweenTheBoxes: 'beyond the locked turnstiles',
    },
    mountain: {
        thereWasAShip: 'there was a blue mountain',
        sailsBillowing: 'its snow untouched by weather',
        andInsideIt: 'and in a cave beneath the summit',
        betweenTheBoxes: 'sheltered by the patient stone',
    },
    overlookPark: {
        thereWasAShip: 'there was a park on a high hill',
        sailsBillowing: 'all its benches facing the distance',
        andInsideIt: 'and just beyond the railing',
        betweenTheBoxes: 'suspended above the sleeping city',
    },
    alfalfaFarm: {
        thereWasAShip: 'there was a field of alfalfa',
        sailsBillowing: 'its leaves turning silver in the wind',
        andInsideIt: 'and between the long green rows',
        betweenTheBoxes: 'scented by the crushed leaves',
    },
    redwoodGrove: {
        thereWasAShip: 'there was a grove of redwoods',
        sailsBillowing: 'their trunks holding up the dusk',
        andInsideIt: 'and in the hollow between their roots',
        betweenTheBoxes: 'older than any road',
    },
    festival: {
        thereWasAShip: 'there was a festival in the desert',
        sailsBillowing: 'neon trembling through the dust',
        andInsideIt: 'and inside a temporary temple',
        betweenTheBoxes: 'surrounded by footprints waiting to vanish',
    },
    snowyForest: {
        thereWasAShip: 'there was a snow-covered forest',
        sailsBillowing: 'every branch listening',
        andInsideIt: 'and beneath the arms of a cedar',
        betweenTheBoxes: 'wrapped in the silence of snow',
    },
    cypressBeach: {
        thereWasAShip: 'there was a beach of wind-bent cypress trees',
        sailsBillowing: 'their dark crowns leaning toward the sea',
        andInsideIt: 'and within a ring of exposed roots',
        betweenTheBoxes: 'listening to the tide',
    },
    cabin: {
        thereWasAShip: 'there was a small cabin',
        sailsBillowing: 'its stove glowing through the night',
        andInsideIt: 'and behind the steamed window',
        betweenTheBoxes: 'sheltered from the weather',
    },
    gate: {
        thereWasAShip: 'there was a gate with no fence',
        sailsBillowing: 'standing open for no visible reason',
        andInsideIt: 'and just beyond the threshold',
        betweenTheBoxes: 'allowed through without explanation',
    },

    //   == CHARACTERS ==
    bugParade: {
        thereWasAShip: 'there was a parade of tiny insects',
        sailsBillowing: 'carrying banners made from leaves',
        andInsideIt: 'and among the lifted banners',
        betweenTheBoxes: 'carried in the patient procession',
    },
    animalGathering: {
        thereWasAShip: 'there was a gathering of improbable animals',
        sailsBillowing: 'all breathing in different rhythms',
        andInsideIt: 'and in the quiet space among them',
        betweenTheBoxes: 'accepted without question',
    },
    dragon: {
        thereWasAShip: 'there was a sleeping dragon',
        sailsBillowing: 'smoke curling gently from its nostrils',
        andInsideIt: 'and beneath one folded wing',
        betweenTheBoxes: 'kept warm by its scales',
    },
    tiger: {
        thereWasAShip: 'there was a striped tiger',
        sailsBillowing: 'its tail drawing circles in the dust',
        andInsideIt: 'and between its enormous forepaws',
        betweenTheBoxes: 'guarded by two amber eyes',
    },
    werewolf: {
        thereWasAShip: 'there was a tired werewolf',
        sailsBillowing: 'moonlight caught in its winter fur',
        andInsideIt: 'and in the long shadow it cast',
        betweenTheBoxes: 'following without fear',
    },
    pillbug: {
        thereWasAShip: 'there was a round little pillbug',
        sailsBillowing: 'its dark armor polished by rain',
        andInsideIt: 'and inside when it slowly uncurled',
        betweenTheBoxes: 'protected by its careful plates',
    },

    //   == ? ==
    moon: {
        thereWasAShip: 'there was a low white moon',
        sailsBillowing: 'its old scars clearly visible',
        andInsideIt: 'and inside the ring of its halo',
        betweenTheBoxes: 'held by a quiet gravity',
    },
    sky: {
        thereWasAShip: 'there was an immense blue sky',
        sailsBillowing: 'clouds opening and closing like doors',
        andInsideIt: 'and behind the deepest blue',
        betweenTheBoxes: 'given room to become weather',
    },
    painting: {
        thereWasAShip: 'there was an unfinished painting',
        sailsBillowing: 'the oil paint still wet',
        andInsideIt: 'and beneath a layer of ultramarine',
        betweenTheBoxes: 'held in the visible brushstrokes',
    },
    campfire: {
        thereWasAShip: 'there was a small campfire',
        sailsBillowing: 'sparks climbing into the dark',
        andInsideIt: 'and inside the circle of warm stones',
        betweenTheBoxes: 'warmed by the unsteady flame',
    },
    memory: {
        thereWasAShip: 'there was a memory with no owner',
        sailsBillowing: 'returning without explanation',
        andInsideIt: 'and inside one missing detail',
        betweenTheBoxes: 'familiar but unclaimed',
    },
    blessing: {
        thereWasAShip: 'there was a blessing with no god',
        sailsBillowing: 'still warm from being spoken',
        andInsideIt: 'and inside its final word',
        betweenTheBoxes: 'protected by a promise nobody heard',
    },
    mist: {
        thereWasAShip: 'there was a bank of silver mist',
        sailsBillowing: 'changing shape without leaving',
        andInsideIt: 'and within its pale folds',
        betweenTheBoxes: 'hidden without being lost',
    },
    sunset: {
        thereWasAShip: 'there was a long copper sunset',
        sailsBillowing: 'the light slowly draining toward the west',
        andInsideIt: 'and beneath the line of the horizon',
        betweenTheBoxes: 'lit by the last possible minute',
    },
    rainbow: {
        thereWasAShip: 'there was a faint half-rainbow',
        sailsBillowing: 'only partly present',
        andInsideIt: 'and beneath its unfinished arc',
        betweenTheBoxes: 'given seven temporary names',
    },
};

let choose = (stringOrArray) => {
    // return a random string from an array.
    // if the input is already just a string, return it.
    if (typeof stringOrArray === 'string') { return stringOrArray; }
    return stringOrArray[Math.floor(Math.random() * stringOrArray.length)];
}
let chooseAndRemove = (arr, item) => {
    // choose a random item from the array, remove it, and return the item.
    // if item is provided (optional), remove and return that specific item if it's there.
    let ii = arr.indexOf(item);
    if (ii === -1) {
        ii = Math.floor(Math.random() * arr.length);
    }
    item = arr[ii];
    arr.splice(ii, 1);
    return item;
}
let maybe = (item, chance) => {
    // return item with a given probability (0 <= chance <= 1), or null otherwise
    if (Math.random() < chance) { return item; }
    return null;
}

let makeDream = () => {
    // generate a dream, as a multi-line string

    // get names of things
    let thingNames = Object.keys(things);
    // get 2 random things
    let thing1 = things[chooseAndRemove(thingNames, '')];  // put names here to test specific items
    let thing2 = things[chooseAndRemove(thingNames, '')];
    // list of patterns for assembling a dream
    let patterns = [
        [
            intro.inMyDream,
            thing1.thereWasAShip,
            maybe(thing1.sailsBillowing, 0.5),
            thing1.andInsideIt,
            thing2.thereWasAShip,
            thing1.betweenTheBoxes,
            thing2.sailsBillowing,
            outro.andYouWereThere,
            outro.andYouWereHappy,
        ],
    ];
    let parts = choose(patterns)  // choose a pattern
        .filter(x => x !== null)  // remove nulls from the pattern (from maybe()s)
        .map(choose);             // flatten the list of choices inside the pattern to specific choices
    // join the list of lines into a single multi-line string
    return parts.join('\n');
}

module.exports = makeDream;
