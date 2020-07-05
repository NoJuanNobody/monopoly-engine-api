const communityChestCards = [
    {amt: 200, message:`Bank error in your favor. Collect $200.`},
    {amt: -50, message:`Doctor's fees. {fee} Pay $50.`},
    {amt: 50, message:`From sale of stock you get $50. {$45.}`},
    {amt: 100, message:`Holiday {Xmas} Fund matures. Receive {Collect} $100.`},
    {amt: 20, message:`Income tax refund. Collect $20.`},
    {amt: 100, message:`Life insurance matures – Collect $100`},
    {amt: -50, message:`Hospital Fees. Pay $50. {Pay hospital fees of $100.} {Pay hospital $100.}`},
    {amt: -50, message:`School fees. Pay $50. {Pay school fees {tax} of $150}`},
    {amt: 25, message:`Receive $25 consultancy fee. {Receive for services $25.}`},
    {amt: 10, message:`You have won second prize in a beauty contest. Collect $10.`},
    {amt:100, message:`You inherit $100.`},
    // still needs additional functionality to be supported (below)
    //positional
    {amt: 200, message:`Advance to "Go". (Collect $200)`},
    {amt: 0, pos:'jail', message:`Go to Jail. Go directly to jail. Do not pass Go, Do not collect $200.`},
    //tokenized
    {token: {name: 'getoutofjailfree'}, message:`Get Out of Jail Free. {Get out of Jail, Free. in previous US editions} – This card may be kept until needed or sold/traded.`},
    //audit based on assets
    {amt: 0000, message:`Grand Opera Night {Opening in previous US editions, not in the deck in UK editions}. Collect $50 from every player for opening night seats.`},
    {amt: 0000, message:`It is {It's} your birthday. Collect $10 from every player. {Mr. Monopoly holds his gift and gets a M sign on the top of it.}`},
    {amt: 0000, message:`You are assessed for street repairs: Pay $40 per house and $115 per hotel you own.`},
];

module.exports = communityChestCards;