var menu = new Vue( {
	el : '#menu',
	data : {
		active : false
	},
	methods : {
		makeActive : function( item ) {
			console.log( 'makeActive' );
			console.log( 'makeActive - item[', item, '] old active[', this.active, ']' );

			this.active = item;

			console.log( 'makeActive - item[', item, '] new active[', this.active, ']' );
		}
	}
});