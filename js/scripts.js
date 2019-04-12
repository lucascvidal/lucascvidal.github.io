window.onload = function () {

	// Media query event handler
	if (matchMedia) {

		// Media query for medium size screens
		const mq = window.matchMedia("(min-width: 992px)");

		// Listener for media query
		mq.addListener(WidthChange);

		// Initialize listener handler code
		WidthChange(mq);
	}
}

function WidthChange(mq) {

	// Show navbar if media query matches screen size
	if (mq.matches) {

		$('.navbar > div').show();

	} else {

		$('.navbar > div').hide();
	}
}

function showMenu() {

	// Toggle menu
	$('.navbar > div').slideToggle();
}

function showSection(classElement) {

	hideActive();

	$(classElement).slideDown(400, () => {

		// Add active class to element
		$(classElement).addClass("active");
	});
}

function hideActive() {

	// Hide active section on page
	$('.active').slideUp(400, () => {

		// Remove active class from element
		$('.active').removeClass("active");
	});
}