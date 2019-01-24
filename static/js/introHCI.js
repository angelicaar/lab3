'use strict';

// Call this function when the page loads (the "ready" event)
$(document).ready(function() {
	initializePage();
})

/*
 * Function that is called when the document is ready.
 */
function initializePage() {
	$("#testjs").click(function(e) {
		$('.jumbotron h1').text("Yay! You Clicked a Button!");
		$("#testjs").text("Please wait...");
		$("#testjs").toggleClass("active");
		$(".jumbotron p").addClass("active");
		$('#myelement').click(changeText);
	}); 

function projectClick(e){
	console.log("Project clicked");
	// prevent the page from reloading      
    e.preventDefault();
    // In an event handler, $(this) refers to      
    // the object that triggered the event      
    $(this).css("background-color", "#dff0d8");

    	var containingProject = $(this).closest(".project");
    var description = $(containingProject).find(".project-description");
    if (description.length == 0) {
       $(containingProject).append("<div class='project-description'><p>Description of the project.</p></div>");
    } else {
       description.html("<p>Stop clicking on me! You just did it at " + (new Date()) + "</p>");
    }
}
   


	$("a.thumbnail").click(projectClick); 


	
function changeText(event){
	$(this).text("Changed text");
}

	// Add any additional listeners here
	// example: $("#div-id").click(functionToCall);
}