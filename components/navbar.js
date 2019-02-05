(function() {
	const hamburger = {
		menuToggle: document.querySelector('.menu-toggle'),
		menu: document.querySelector('.menu'),

		showMenu: function(e) {
			e.preventDefault();
			this.menuToggle.classList.toggle('expanded');
			this.menu.classList.toggle('expanded');
		}
	};

	hamburger.menuToggle.addEventListener('click', function(e) { hamburger.showMenu(e); });

}());

