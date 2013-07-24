/*! jQuery Input Placeholder Text - v0.1.0 - 2013-07-24
* https://github.com/Adam/jquery-input-placeholder-text
* Copyright (c) 2013 adamcoulombe; Licensed MIT */
(function($) {

  $.fn.placeholderText = function(text) {
    return this.each(function(i) {
    	var $self=$(this);
    	var placeholderText=text||$self.data('placeholder-text')||'';

      function setPlaceholderText(){
      	if($self.val()=='' || $self.val()==placeholderText ){
      		$self.val(placeholderText).addClass('has-placeholder-text')
      	}
      }
      if($self.is('select')){
      	setPlaceholderText();
      	$self.prepend(
      		$('<option/>').html(placeholderText).val(placeholderText).addClass('placeholder-text-option')
      	);
      	$self.change(function(){
	  		if( $self.val()!=placeholderText){
	  			$self.removeClass('has-placeholder-text');
	  		}else{
	  			setPlaceholderText();
	  		}

      	});

      }else{
      	setPlaceholderText();
	  	$self.focus(function(){
	  		if($self.val()==placeholderText){
	  			$self.val('').removeClass('has-placeholder-text');
	  		}
	  	}).blur(function(){
	  		setPlaceholderText();
	  	});
	  }

    });
  };


}(jQuery));
