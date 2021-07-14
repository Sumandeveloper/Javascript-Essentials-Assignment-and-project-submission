let cards=[
    {
        image:"https://toppng.com/uploads/preview/batman-png-11553978450z8cmxxifwk.png",
        value:1,
        status:"closed"
    },
    {
        image:"https://toppng.com/uploads/preview/batman-png-11553978450z8cmxxifwk.png",
        value:1,
        status:"closed"
    },
    {
        image:"https://www.clipartmax.com/png/middle/59-592320_superman-png-pic-superman-png.png",
        value:2,
        status:"closed"
    },
    {
        image:"https://www.clipartmax.com/png/middle/59-592320_superman-png-pic-superman-png.png",
        value:2,
        status:"closed"
    },
    {
        image:"https://pngimg.com/uploads/wonder_woman/wonder_woman_PNG37.png",
        value:3,
        status:"closed"
    },
    {
        image:"https://pngimg.com/uploads/wonder_woman/wonder_woman_PNG37.png",
        value:3,
        status:"closed"
    },
    {
        image:"https://toppng.com/uploads/preview/spider-man-11530958095aavuimi1gi.png",
        value:4,
        status:"closed"
    },
    {
        image:"https://toppng.com/uploads/preview/spider-man-11530958095aavuimi1gi.png",
        value:4,
        status:"closed"
    },
    {
        image:"https://freepngimg.com/thumb/captain_america/7-2-captain-america-png-hd.png",
        value:5,
        status:"closed"
    },
    {
        image:"https://freepngimg.com/thumb/captain_america/7-2-captain-america-png-hd.png",
        value:5,
        status:"closed"
    },

]

let temp;
for(let i=cards.length-1;i>=0;i--) {
    let j=Math.floor(Math.random()*(i+1));

    temp=cards[i];
    cards[i]=cards[j];
    cards[j]=temp;
}

let cardsCopy=cards;


function displayCards(data){
    let cardsString="";

    data.forEach(function(card,index){
        cardsString+=`
        
           <div class="card" style="background-image:url('${card.image}')">
                <div class=" overlay ${card.status}" onclick="openCard(${index})"></div>
           </div>
        
        `;
    });

    document.getElementById('cards').innerHTML=cardsString;
}

displayCards(cards);

let cardCount=1;
let val1=null,val2=null;
let score=0;

function openCard(index){
   console.log(cards);
    cards[index].status="opened";
    if(cardCount===1){
        val1=cards[index].value;
        cardCount++;
    }
    else if(cardCount===2){
        val2=cards[index].value;

        if(val1===val2){
            score++;
            document.getElementById('score').innerHTML=score;

            val1=null;
            val2=null;
            cardCount=1;
        }
        else {
            alert("Game Over!!");
            location.reload();
        }
    }

    displayCards(cards);
} 