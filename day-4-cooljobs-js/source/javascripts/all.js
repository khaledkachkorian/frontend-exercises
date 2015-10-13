$('#post-job').click(function () {

	var signupBoxMarkup = $('#signup_box').html();

	$('body').append('<div class="modalBg"></div>');
	$('body').append('<div class="modalBox">' + signupBoxMarkup +'</div>');
});

var closeModal = function () {
	$('.modalBg').remove();
	$('.modalBox').remove();
};

var getTodayDate = function () {
 	var today = new Date();

    var dd = today.getDate();
    var mm = today.getMonth() + 1;

    return mm + ',' + dd;
};

$(document).on('click', '#closeModal', closeModal);
$(document).on('click', '.modalBg', closeModal);

$(document).on('submit', '.modalForm', function (e) {

	var formData = $(this).serializeArray();

	var companyName = formData[2].value,
		title = formData[3].value;

	$('.jobs ul').prepend(
		'<li><a href="#"><span class="company">' + companyName +'</span>' +
		'<span class="title">' + title +'</span>' +
		'<span class="date">' + getTodayDate() + '</span></a></li>'
	);

	closeModal();

	e.preventDefault();
	return false;
});