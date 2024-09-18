$(document).ready(function(){
  var postForm = $( '#post-form' ); 
  
var jsonData = function( form ) { 
    var arrData = form.serializeArray(), 
        objData = {}; 
      
    $.each( arrData, function( index, element ) { 
        objData[element.name] = element.value; 
    }); 
      
    return JSON.stringify( objData ); 
}; 
  
postForm.on( 'submit', function( e ) { 
    e.preventDefault(); 
      
    $.ajax({ 
        url: 'http://busayomidayomi.onlinewebshop.net/wp-json/wp/v2/posts', 
        method: 'POST', 
        data: jsonData( postForm ), 
        crossDomain: true, 
        contentType: 'application/json', 
        success: function( data ) { 
            console.log( data ); 
            updateDOM(data);
            alert("Your posts have been recorded, please refresh your page!")
        }, 
       
        error: function( error ) { 
            console.log( error ); 
        } 
    }); 
}); 

//frontend
   function callpost() {

         var URL = newFunction();
              
         $.getJSON(URL, function(data) {
             console.log(data);
                updateDOM(data);
                });
              
                function newFunction() {
                  return 'http://busayomidayomi.onlinewebshop.net/wp-json/wp/v2/posts';
                }
              };
              callpost();
              function updateDOM(data){       
                 for(i = 0; i < data.length; i++) {
                var date = data[i].date;
                     var excerpt = data[i].excerpt.rendered;
                     var title= data[i].title.rendered;
                    $('#excerpt').append( "<img class= 'image'src='img/comm.jpg' height='100px' width='200px'>" + '</br>'+  "<section id= 'post' class='posts'>" + "<b><h2 id= 'post'>" +title + "</b></h2>" + "<h5>Date:"+ date           +"</h5><p>" + excerpt + "</p></section>");
              
                };
            };
             $("#hide").click(function(){
    $("#title").hide();
});
              


   // jQuery methods go here...

});
