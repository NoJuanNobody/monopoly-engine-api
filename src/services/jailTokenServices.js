//go to jail
function gotoJail(player){
    try {
        connect( async (db) => {
                await db.collection('gameSpaces').findOne({name:jail}, (e,spaceNo) => {
                    if(e) throw e;

                const p = await db.collection('users').findOne(player, (e, player) => {
                    player.pos = spaceNo;
                    //create new script and add to player stack to roll doubles. 
                });
                console.log(spaceno);
                return player;
            });

        })
    } catch (e;) {
        throw e;
    }
}

//freeze assets

//roll doubles