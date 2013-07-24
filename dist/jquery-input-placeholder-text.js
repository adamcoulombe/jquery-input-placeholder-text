/*! jQuery Input Placeholder Text - v0.1.0 - 2013-07-24
* https://github.com/Adam/jquery-input-placeholder-text
* Copyright (c) 2013 adamcoulombe; Licensed MIT */
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