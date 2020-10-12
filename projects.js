$.urlParam = function (name) {
    var results = new RegExp('[\?&]' + name + '=([^&#]*)').exec(window.location.search);
    return (results !== null) ? results[1] || 0 : false;
}


var currentProject = $.urlParam('projectId') || 0





// console.log(projects)
var project=projects[parseInt(currentProject)]
// console.log(project) 
var titleTarget=$('#title')
var title=project.title
// console.log(title)
titleTarget.html(title)
// console.log(titleTarget)

var textTarget=$('#text')
var text=project.text
textTarget.html(text)

var purposeTarget=$('#purpose')
var purpose=project.purpose
purposeTarget.html(purpose)


var descriptionTarget=$('#textOfDescription')
var description=project.description
descriptionTarget.html(description)

var whatHaveILearnedTarget=$('#textOFWhatHaveILearned')
var whatHaveILearned=project.whatHaveILearned
whatHaveILearnedTarget.html(whatHaveILearned)

var jumboImage=project.backgroundImage
var jumboTarget=$('#intro .jumbotron')
jumboTarget.css("background-image", "url('" + jumboImage +"')");
jumboTarget.css("background-position", "center center");
jumboTarget.css("background-size", "cover");


// var stepTarget=$('#steps')
// // console.log(stepTarget)
// var steps=project.steps

// // <div class=col-4>
// //     <div class="card">
// //         <img class="card-img-top" src="https://picsum.photos/300/200"/>
// //         <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
// //     </div>
// // </div>

// // for loop
// for(ii=0;ii<steps.length;ii++){
// //  grab the item [ii]
// var step=steps[ii]
// // extraction from object  it.xxxxx
// var image=step.image
// var text=step.text
// // renderers   var makeXxxxx
// var makeImage='<img src="' + image +'" class="card-img-top" alt="...">'
// var makeText='<p class="card-text">' + text +'</p>'
// var makeCard='<div class="card">' + makeImage + makeText + '</div>'
// var makeCol='<div class=col-4>' + makeCard + '</div>'
// // append to step target
// stepTarget.append(makeCol)   
// }



// var stepTarget2=$('#steps2')
// // console.log(stepTarget)
// var steps2=project.steps

// // <div class=col-4>
// //     <div class="card">
// //         <img class="card-img-top" src="https://picsum.photos/300/200"/>
// //         <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
// //     </div>
// // </div>

// // for loop
// for(ii=0;ii<steps2.length;ii++){
// //  grab the item [ii]
// var step2=steps2[ii]
// // extraction from object  it.xxxxx
// var image2=step2.image
// var text2=step2.text
// // renderers   var makeXxxxx
// var makeImage2='<img src="' + image2 +'" class="card-img-top" alt="...">'
// var makeText2='<p class="card-text">' + text2 +'</p>'
// var makeCard2='<div class="card">' + makeImage2 + makeText2 + '</div>'
// var makeCol2='<div class=col-4>' + makeCard2 + '</div>'
// // append to step target
// stepTarget2.append(makeCol2)   
// }


var asliderTarget=$('#a-slider')
var sliders=project.steps

for(ii=0;ii<sliders.length;ii++){
    var slider=sliders[ii]
    var sliderImage=slider.image
    var sliderTitle=slider.title
    var sliderText=slider.text

    var makeSliderImage='<img src="' + sliderImage +'" class="card-img-top" alt="...">'
    var makeSliderTitle='<button type="button" class="btn btn-dark">' + sliderTitle + '</button>'
    var makeSliderText='<p class="card-text">' + sliderText +'</p>'
    var makeSliderCard='<div class="card a-slider-innr">' + makeSliderImage + makeSliderTitle + makeSliderText + '</div>'


    asliderTarget.append(makeSliderCard)
}



// console.log 1 to 120

// for(i=1;i<121;i++) {
// console.log(i)
// }

// console.log even numbers from 50 to 500
// for (i=50; i<=500;i+=2) {
// console.log(i); 
// }

//console.log odd numbers from 1001 to 11
// for (i=1001; i>=11;i-=2) {
// console.log(i); 
// }

var carouselImage1Target = $('#image1')
var carouselImage1=project.image1
var makeImage1= '<img src="' +carouselImage1+ '"class="d-block w-100" alt="..."></img>'
carouselImage1Target.append(makeImage1)

var carouselImage2Target = $('#image2')
var carouselImage2=project.image2
var makeImage2= '<img src="' +carouselImage2+ '"class="d-block w-100" alt="..."></img>'
carouselImage2Target.append(makeImage2)

var carouselImage3Target = $('#image3')
var carouselImage3=project.image3
var makeImage3= '<img src="' +carouselImage3+ '"class="d-block w-100" alt="..."></img>'
carouselImage3Target.append(makeImage3)




