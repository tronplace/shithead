var game = new Phaser.Game(800, 600, Phaser.AUTO, 'game');

var sprite;
var items;
var button;
var x = 0;
var y = 0;
var cardWidth = 140;
var cardHeight = 190;
var self;
var spacing = cardWidth;
var cardsInView = 5;
var currentView = 0;
var tableCards = null;

var rectLeft = null;
var rectRight = null;

var loadState = {


preload: function(){
        console.log('start loading');
        var loadingLabel = game.add.text(80, 150, 'loading...', {
            font: '30px Courier',
            fill: '#ffffff'
        });

        game.load.image('backgroundLobby','/images/background-lobby.jpg');
        game.load.image('playTable','/images/play-table.jpg');
        game.load.image('back','/images/cardBack_red2.png');
        game.load.image('clubs2','/images/cardClubs2.png');
        game.load.image('clubs3','/images/cardClubs3.png');
        game.load.image('clubs4','/images/cardClubs4.png');
        game.load.image('clubs5','/images/cardClubs5.png');
        game.load.image('clubs6','/images/cardClubs6.png');
        game.load.image('clubs7','/images/cardClubs7.png');
        game.load.image('clubs8','/images/cardClubs8.png');
        game.load.image('clubs9','/images/cardClubs9.png');
        game.load.image('clubs10','/images/cardClubs10.png');
        game.load.image('clubsA','/images/cardClubsA.png');
        game.load.image('clubsJ','/images/cardClubsJ.png');
        game.load.image('clubsK','/images/cardClubsK.png');
        game.load.image('clubsQ','/images/cardClubsQ.png');
        game.load.image('diamonds2','/images/cardDiamonds2.png');
        game.load.image('diamonds3','/images/cardDiamonds3.png');
        game.load.image('diamonds4','/images/cardDiamonds4.png');
        game.load.image('diamonds5','/images/cardDiamonds5.png');
        game.load.image('diamonds6','/images/cardDiamonds6.png');
        game.load.image('diamonds7','/images/cardDiamonds7.png');
        game.load.image('diamonds8','/images/cardDiamonds8.png');
        game.load.image('diamonds9','/images/cardDiamonds9.png');
        game.load.image('diamonds10','/images/cardDiamonds10.png');
        game.load.image('diamondsA','/images/cardDiamondsA.png');
        game.load.image('diamondsJ','/images/cardDiamondsJ.png');
        game.load.image('diamondsK','/images/cardDiamondsK.png');
        game.load.image('diamondsQ','/images/cardDiamondsQ.png');
        game.load.image('hearts2','/images/cardHearts2.png');
        game.load.image('hearts3','/images/cardHearts3.png');
        game.load.image('hearts4','/images/cardHearts4.png');
        game.load.image('hearts5','/images/cardHearts5.png');
        game.load.image('hearts6','/images/cardHearts6.png');
        game.load.image('hearts7','/images/cardHearts7.png');
        game.load.image('hearts8','/images/cardHearts8.png');
        game.load.image('hearts9','/images/cardHearts9.png');
        game.load.image('hearts10','/images/cardHearts10.png');
        game.load.image('heartsA','/images/cardHeartsA.png');
        game.load.image('heartsJ','/images/cardHeartsJ.png');
        game.load.image('heartsK','/images/cardHeartsK.png');
        game.load.image('heartsQ','/images/cardHeartsQ.png');
        game.load.image('spades2','/images/cardSpades2.png');
        game.load.image('spades3','/images/cardSpades3.png');
        game.load.image('spades4','/images/cardSpades4.png');
        game.load.image('spades5','/images/cardSpades5.png');
        game.load.image('spades6','/images/cardSpades6.png');
        game.load.image('spades7','/images/cardSpades7.png');
        game.load.image('spades8','/images/cardSpades8.png');
        game.load.image('spades9','/images/cardSpades9.png');
        game.load.image('spades10','/images/cardSpades10.png');
        game.load.image('spadesA','/images/cardSpadesA.png');
        game.load.image('spadesJ','/images/cardSpadesJ.png');
        game.load.image('spadesK','/images/cardSpadesK.png');
        game.load.image('spadesQ','/images/cardSpadesQ.png');
        game.load.image('joker','/images/cardJoker.png');

    },

    create: function(){
        game.state.start('lobby');
    }
};

var lobbyState = {


    create: function(){

        // Add background
        game.add.sprite( 0, 0, 'backgroundLobby');

    },

    startGame: function(){
        game.state.start('play');
    }
};
var playState = {
    create: function(){

        game.add.sprite( 0, 0, 'playTable');
        self = this;
        button = game.add.button(0, 0, 'clubs2', this.actionOnClick);
        //this.dealCards();
        //x = (game.world.centerX - (cardWidth/2 ) );
        y = ( game.world.height - cardHeight + 60);

        rectLeft = game.add.button(0,0);
        rectLeft.width = 140;
        rectLeft.height = 190;
        rectLeft.x = 0 - cardWidth + 40;
        rectLeft.y = game.world.height - rectLeft.height + 60;
        rectLeft.onInputDown.add(self.onClickRectLeft);
        rectLeft.alpha = 0;
        rectLeft.visible = false;

        rectRight = game.add.button(0,0);
        rectRight.width = 140;
        rectRight.height = 190;
        rectRight.x = game.world.width - rectRight.width;
        rectRight.y = game.world.height - rectRight.height + 60;
        rectRight.onInputDown.add(self.onClickRectRight);
        rectRight.alpha = 0;
        rectRight.visible = false;

        tableCards = game.add.group();
        // Add an empty card to have something clickable if the table is empty
        var defaultCard = game.add.button(0,0);
        defaultCard.width = 140;
        defaultCard.height = 190;
        defaultCard.x = game.world.centerX - cardWidth / 2;
        defaultCard.y = game.world.centerY - cardHeight / 2;
        defaultCard.onInputDown.add(self.onClickTableCard);
        defaultCard.alpha = 0;

        tableCards.add(defaultCard);


    },
    dealCards: function(data){

        //items = new Phaser.Group(this.game, null, 'kaarten', true);
        items = game.add.group();

        //console.log();

    },

    update: function(){

    },

    actionOnClick: function(){

        var tmpArray = ['spadesQ', 'joker', 'spades6'];
        var item = tmpArray[Math.floor(Math.random()*tmpArray.length)];
        //console.log(item);
        //items.create( x, y, item);
        var button = game.make.button(x, y, item, self.onCardClick);
        // Check to see if the card is already clicked
        button.active = false;
        items.add(button);
        x += spacing;



        self.shiftCards();
    },
    shiftCards: function(){

        var totalCards = items.length;
        var totalLength = totalCards * cardWidth;
        //console.log(totalCards);
        //console.log(totalLength);
        //console.log("CurrentView: "+currentView);
        console.log('total lenght: '+ totalLength);

        if( totalLength <= game.world.width) {
            var newX = (game.world.width - totalLength) / 2;
            //console.log(newX);

            items.x = (newX);
            self.resetCardsPlacement();

        }
        else {
            items.x = 0;
            var increment = cardWidth + ((game.world.width - totalLength) / totalCards);

            var newCardX = 0;
            var n = 0;


            items.forEachExists(function (item) {

                //console.log(n);

                if (n < currentView || n == 0){
                    // Dirty trick to skip the first
                    newCardX = 0;
                }

                else if( n == currentView ){
                    console.log("CANCER");
                    newCardX = 40;
                }



                else if(  n >= (currentView + cardsInView)){

                    newCardX = (cardWidth * 5) - 40;
                }

                else {

                    newCardX += cardWidth;
                }

                item.x = newCardX;

                n++;
            });


        }

        self.checkView();
    },

    onCardClick: function(){
        if( this.active ){
            //console.log('Play this card');
            this.active = false;
            this.y +=  60;



        }
        else{
            //console.log('You clicked this card the first time');
            self.resetCardsActive();
            this.active = true;
            this.y -= 60;
        }
    },

    onClickRectLeft: function(){
        //console.log('Clicked left button rectangle');

        if( currentView == 0)
            return false;

        currentView--;
        //console.log(currentView);

        self.shiftCards();
        self.resetCardsActive();
    },

    onClickRectRight: function(){

        if( (currentView + cardsInView + 1) > items.length )
            return false;

        currentView++;
        //console.log(currentView);
        self.shiftCards();
        self.resetCardsActive();
    },

    checkView: function(){

        // Hide all buttons by default
        rectRight.visible = false;
        rectLeft.visible = false;

        // If we have more cards in our hand than we can see and have some cards in a pile
        // on right side of the screen then show the button
        if( items.length > cardsInView && (currentView + cardsInView) < items.length ){
            rectRight.visible = true;
            //console.log('Show button right');
        }

        if( items.length > cardsInView && currentView > 0){
            rectLeft.visible = true;
            //console.log('Show button left');
        }
    },

    resetCardsActive: function(){
        console.log('reset other active cards');
        items.forEachExists(function (item) {

            //console.log(item.active);
            if( item.active == true ) {
                item.active = false;
                item.y += 60;
            }
        });
    },
    onClickTableCard: function(){
        //console.log('Clicked on the table');
        var card = self.getActiveCard();

       // console.log(card);
        if( card == null) {
            return false;
        }

        self.addCardToTable(card);


    },

    getActiveCard: function(){
        var card = null;
        items.forEachExists(function (item) {
            ///console.log(item);
            if( item.active == true ) {
                card = item;
            }
        });

        return card;
    },

    addCardToTable: function(card) {


        card.destroy();

        var tableCard = game.add.button(0,0, card.key);
        tableCard.width = 140;
        tableCard.height = 190;
        tableCard.x = game.world.centerX - cardWidth / 2;
        tableCard.y = game.world.centerY - cardHeight / 2;

        tableCard.onInputDown.add(self.onClickTableCard);
        tableCards.add(tableCard);
        self.shiftCards();
    },
    resetCardsPlacement: function(){
        var x = 0;
        items.forEach(function(item){
            item.x = x;
            x+= spacing;
        });
    }
};


game.state.add('load', loadState);
game.state.add('lobby', lobbyState);
game.state.add('play', playState);

game.state.start('load');