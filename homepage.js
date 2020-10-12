var homepage = homepages[0]
var titleTarget = $('#title')
var title = homepage.title
titleTarget.html(title)

var textTarget=$('#text')
var text=homepage.text
textTarget.html(text)

var jumboImage=homepage.backgroundImage
var jumboTarget=$('#intro .jumbotron')
jumboTarget.css("background-image", "url('" + jumboImage +"')");
jumboTarget.css("background-size", "cover");

                // <div class=col-6>
                //   <div class="card">
                //   <img class="card-img-top" src="https://picsum.photos/400/300"/>
                //   <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                //   </div>
                //   </div>

// var cardTarget=$('#showcase')
// // console.log(cardTarget)
// var cards=homepage.cards
// // console.log(cards)
// for(ii=0;ii<cards.length;ii++){
//     var card=cards[ii]
//     var image=card.image
//     var text=card.text
//     // renderers   var makeXxxxx
//     var makeImage='<img src="' + image +'" class="card-img-top" alt="...">'
//     var makeText='<p class="card-text">' + text +'</p>'
//     var makeCard='<div class="card">' + makeImage + makeText + '</div>'
//     var makeCol='<div class=col-6>' + makeCard + '</div>'
//     // append to card target
//     cardTarget.append(makeCol)  
// }

for(ii=0;ii<projects.length;ii++){
    var card=projects[ii]
    // console.log(card)
    var cardTarget=$('#showcase')
    var image=card.backgroundImage
    var text=card.title
    var id=card.id
    var makeImage='<img src="' + image +'" class="card-img-top" alt="...">'
    var makeText='<p class="card-text">' + text +'</p>'
    var makeCard='<div class="card">' + makeImage + makeText + '</div>'
    var makeWholeCard='<a href="#" class="card-link">'+ makeCard +'</a>'
    var makeCol='<div class=col-6>' + makeWholeCard + '</div>'
    cardTarget.append(makeCol)
}



var titleOfBasicInformationTarget=$('#titleOfBasicInformation')
var titleOfBasicInformation=homepage.titleOfBasicInformation
titleOfBasicInformationTarget.html(titleOfBasicInformation)

var textOfBasicInformationTarget=$('#textOfBasicInformation')
var textOfBasicInformation=homepage.textOfBasicInformation
textOfBasicInformationTarget.html(textOfBasicInformation)
