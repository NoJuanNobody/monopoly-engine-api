const spaces = [
    {amt:50 , message: `Bank pays you dividend of $50.`,},
    {amt:15 , message: `Pay poor tax of $15`,},
    {amt:150 , message: `Your building {and} loan matures. Receive {Collect} $150.`,},
    {amt:100 , message: `You have won a crossword competition. Collect $100.`},
    //tokenized
    {amt:0 , message: `Get out of Jail Free. This card may be kept until needed, or traded/sold. {This card may be kept until needed or sold/traded. Get Out of Jail Free.`,},
    //update position
    {amt:0 , message: `Go to Jail. Go directly to Jail. Do not pass GO, do not collect $200.`,},
    {amt:0 , message: `Take a walk on the Boardwalk. Advance token to Boardwalk.`,},
    {amt:0 , message: `Go Back Three {3} Spaces. (Mr. Monopoly is hauled back by a cane hooked around his neck)`,},
    {amt:200 , message: `Advance to St. Charles Place. If you pass Go, collect $200.`,},
    {amt:200 , message: `Advance to "Go". Collect $200`,},
    //amount based on complex logix
    {amt:0 , message: `Advance token to the nearest Railroad and pay owner twice the rental to which he/she {he} is otherwise entitled. If Railroad is unowned, you may buy it from the Bank.`,},
    {amt:0 , message: `Advance token to the nearest Railroad and pay owner twice the rental to which he/she {he} is otherwise entitled. If Railroad is unowned, you may buy it from the Bank.`,},
    {amt:0 , message: `Take a trip to Reading Railroad. If you pass Go, collect $200.`,},
    {amt:0 , message: `Make general repairs on all your property: For each house pay $25, For each hotel {pay} $100.`,},
    {amt:0 , message: `You have been elected Chairman of the Board. Pay each player $50.`,},
    {amt:0 , message: `Advance to Illinois Ave. {Avenue}. If you pass Go, collect $200.`,},
];

module.exports = spaces;