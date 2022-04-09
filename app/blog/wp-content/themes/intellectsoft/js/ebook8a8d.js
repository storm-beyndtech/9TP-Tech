jQuery(document).ready(function($){
    $('a[href^="#"]').on("click", function(e){
        e.preventDefault();
        var anchor = $(this).attr('href');
        if($(anchor).length>0){
	        $('html, body').stop().animate({
	            scrollTop: $(anchor).offset().top - 60
	        }, 800);
	        $(anchor).find('.form-group:first-child .form-input').focus();
	    }
    });
    
    check_fix_position();
	function check_fix_position(){
	    if(window.matchMedia('(min-width: 651px)').matches) {
	    	var fp = '',
	    		fh = parseInt($('#blf').outerHeight()),
	    		addedpt = parseInt($('.start + .si').css('padding-top')),
	    		footp = parseInt($('footer').offset().top) - parseInt($('.si:last-child').css('padding-bottom'));
	    	if($('#blf').attr('data-top') == undefined){
	    		fp = parseInt($('#blf').offset().top);
	    		$('#blf').attr('data-top', fp);
	    	}else fp = parseInt($('#blf').attr('data-top'));
	    	if(window.pageYOffset>=fp && window.pageYOffset+fh+addedpt<footp){
	    		$('#blf').css({'top':(window.pageYOffset-fp+addedpt)+'px'});
	    	}else if(window.pageYOffset+fh+addedpt>=footp){
	    	}else $('#blf').css({'top':'0px'});
	    }
	}

	$(document).on('scroll', function(){
	    check_fix_position();
	});

	if($('#form-contacts').length > 0){
		// other input
		$(document).on('input','.form-control', function(){
			var input_val = $(this).val().trim(),
                pattern = /^((([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+(\.([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+)*)|((\x22)((((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(([\x01-\x08\x0b\x0c\x0e-\x1f\x7f]|\x21|[\x23-\x5b]|[\x5d-\x7e]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(\\([\x01-\x09\x0b\x0c\x0d-\x7f]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))))*(((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(\x22)))@((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))$/i,
                сyrillic = /[а-яА-ЯёЁ]/g;
			if(input_val != ''){
				if($(this).attr('name')=='email'){
                    if(input_val.search(pattern) == 0 && input_val.search(сyrillic) == -1)
                        $(this).parent('.form-group').removeClass('has-error');
                }else{
                    if(input_val.search(сyrillic) == -1)
                        $(this).parent('.form-group').removeClass('has-error');
                }
			}
		});

		$('#form-contacts .form__submit').click(function(){
			var check = true,
				input_val = '',
				id_fi = '#' + $(this).parents('.fi').attr('id'),
                pattern = /^((([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+(\.([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+)*)|((\x22)((((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(([\x01-\x08\x0b\x0c\x0e-\x1f\x7f]|\x21|[\x23-\x5b]|[\x5d-\x7e]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(\\([\x01-\x09\x0b\x0c\x0d-\x7f]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))))*(((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(\x22)))@((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))$/i,
                сyrillic = /[а-яА-ЯёЁ]/g;
			$(id_fi + ' .req').each(function(indx){
				if($(this).hasClass('form-select')){
					input_val = $(this).val();
					if(input_val == '' || input_val == null ){
	    	  			$(this).parents('.form-group').addClass('has-error');
	    				check = false;
	    			}
				} else {
					input_val = $(this).val().trim();
	                if(input_val != ''){
	    	  			if($(this).attr('name')=='email'){
	    					if(input_val.search(pattern) != 0 || input_val.search(сyrillic) != -1){
	    						$(this).parents('.form-group').addClass('has-error');
	    						check = false;
	    					}
	    				}else{
	                        if(input_val.search(сyrillic) != -1){
	    						$(this).parents('.form-group').addClass('has-error');
	    						check = false;
	    					}
	    				}
	                }else{
	                    $(this).parents('.form-group').addClass('has-error');
	                    check = false;
	                }
	            }
			});
			if($('.has-error').length > 0) check = false;
			if(check){ 
				// Create the new request
				let xhr = new XMLHttpRequest();
				// Request body
				let data = {
                    "submittedAt": new Date().getTime(),
				    "fields": [
				        {
				            "name": "firstname",
				            "value": $(id_fi+' #firstname').val().trim()
				        },{
				            "name": "lastname",
				            "value": $(id_fi+' #lastname').val().trim()
				        },{
				            "name": "email",
				            "value": $(id_fi+' #email').val().trim()
				        },{
				            "name": "phone",
				            "value": $(id_fi+' #phone-number').val().trim()
				        },{
				            "name": "company",
				            "value": $(id_fi+' #company').val().trim()
				        },{
				            "name": "jobtitle",
				            "value": $(id_fi+' #job').val().trim()
				        },{
				            "name": "numemployees",
				            "value": $(id_fi+' #numemployees').val().trim()
				        },{
				            "name": "country",
				            "value": $(id_fi+' #country').val().trim().replace(/\s*\(.*?\)\s*/g, '')
				        }
				    ],
				    "context": {
                        "pageUri": window.location.href,
				        "pageName": document.title
				    }
				}; 
                xhr.open('POST', 'https://api.hsforms.com/submissions/v3/integration/submit/' + $('.form').attr('data-portal') + '/' + $('.form').attr('data-form'));
                xhr.setRequestHeader('Content-Type', 'application/json');
				xhr.onreadystatechange = function () {
				    if (xhr.readyState == 4 && xhr.status == 200) {
						$(id_fi).addClass('send-ok');
				    } else {
				    	$('#form-contacts .contact__error').fadeIn(400);
				    	if (xhr.readyState == 4 && xhr.status == 400) {
					        console.log(JSON.parse(xhr.response).errors); // Returns 400 if the validation failed
					    } else if (xhr.readyState == 4 && xhr.status == 403) {
					        console.log(JSON.parse(xhr.response).errors); // Returns a 403 error if the portal isn't allowed to post submissions.
					    } else if (xhr.readyState == 4 && xhr.status == 404) {
					        console.log(JSON.parse(xhr.response).errors); //Returns a 404 error if the formGuid isn't found
					    }
					}
				};
                //console.log(xhr);
				// Sends the request
				var send = xhr.send(JSON.stringify(data));
			}
			return false;
		});
	}
});