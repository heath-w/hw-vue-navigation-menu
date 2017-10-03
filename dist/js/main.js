var menu = new Vue( {
	el : '#menu',
	data : {
		homeActive : false,
		projectsActive : false,
		servicesActive : false,
		contactActive : false,
		message : 'Please click a menu item'
	},
	methods : {
		makeActive : function( item ) {
			console.log( 'makeActive' );
			console.log( 'makeActive - item[', item, ']' );

			// Remove active class from the previous anchor
			this.homeActive = false;
			this.projectsActive = false;
			this.servicesActive = false;
			this.contactActive = false;

			// Add active class to the select anchor (item)
			switch( item ) {
				case 'home':
					// console.log( 'switch homeMenu' );
					this.homeActive = true;
					break;
				case 'projects':
					// console.log( 'switch projectsMenu' );
					this.projects = true;
					break;
				case 'servicesMenu':
					// console.log( 'switch homeMenu' );
					this.services = true;
					break;
				case 'contactMenu':
					// console.log( 'switch homeMenu' );
					this.contact = true;
					break;			

			}

			// Change the text of message
			this.message = 'You chose ' + label;
		}
	}
});