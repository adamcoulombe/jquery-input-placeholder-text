/*
 * jquery-input-placeholder-text
 * https://github.com/Adam/jquery-input-placeholder-text
 *
 * Copyright (c) 2013 adamcoulombe
 * Licensed under the MIT license.
 */

(function($) {

  $.fn.placeholderText = function(text) {
    return this.each(function(i) {
    	var $self=$(this);
    	var placeholderText=text||$self.data('placeholder-text')||'';
      
      function setPlaceholderText(){
      	if($self.val()==''){
      		$self.val(placeholderText).addClass('has-placeholder-text')
      	}
      }
      	setPlaceholderText();
	  	$self.focus(function(){
	  		if($self.val()==placeholderText){
	  			$self.val('').removeClass('has-placeholder-text');
	  		}
	  	}).blur(function(){
	  		setPlaceholderText();
	  	});

    });
  };


}(jQuery));