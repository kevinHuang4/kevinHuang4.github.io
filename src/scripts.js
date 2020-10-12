
    var brandTarget=$('.navbar-brand') // 
    var title=toolbars.title
    brandTarget.html(title)

    var toolbarTarget=$('.navbar-nav')

    var links=toolbars.links //arr of objects 
    for(ii=0;ii<links.length;ii++){
      var currentLink=links[ii] //object
      var title=currentLink.title 
      var link=currentLink.link

      var makeLinks='<a class="nav-link" href="'+ link +'">'+ title + '<span class="sr-only">(current)</span></a>'
      toolbarTarget.append(makeLinks)
    }

      