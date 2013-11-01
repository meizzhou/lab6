//signup.js 
// add your JavaScript code to this file

//signup.js 
// add your JavaScript code to this file

$(function(){


    var select = $('.us-states');
    var option;
    var idx;
    var state;

    for(idx = 0; idx < usStates.length; ++idx) {
            state = usStates[idx];
            option = $(document.createElement('option'));
            option.attr('value', state.abbreviation);
            option.html(state.name);
            select.append(option);
    }

    $('.signup-form').submit(function(){
    	var signupForm = $(this);
    	var addr1Input = signupForm.find('input[name="addr-1"]');
    	var addr1Value = addrInput.val();

    	if(addr1Value.length > 0) {
    		var zipInput = signupForm.find('input[name = "zip"]');
    		var zipUse = zipInput.val();
    		if(zipUse.length === 0) {
    			alert('...message to display...');
    			return false;
    		} else {
    			return true;
    		}
   		}
    });

    $('.cancel-signup').click(function(){
	    //code to run when user clicks "No Thanks!" button
	    //show the modal confirmation dialog
	    //and don't reset window.location until the user clicks
	    //the "Yes, Get Me Out of Here!" button
	    $('.cancel-signup-modal').modal();
	}); //cancel-signup click

    $('.btn-abandon').click(function(){
    	window.location = 'http://www.google.com';
	});

});