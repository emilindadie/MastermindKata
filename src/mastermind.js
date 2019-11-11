const Mastermind = {
    shouldFindNumberOfWellPlacedColors : function(secretCombinaison, combinaisonColor){
        const size = secretCombinaison.length;
        let numberGoodPlaced = 0;
        for(i = 0 ; i < size; i++){
            if(secretCombinaison[i] == combinaisonColor[i]){
                numberGoodPlaced += 1;
            }
        }
        return numberGoodPlaced;
    },

    shouldFindNumberOfMisPlacedColors : function(secretCombinaison, combinaisonColor){
        return "";
    }
}

module.exports = Mastermind;