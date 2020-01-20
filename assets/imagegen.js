var generator = new Vue({
	el: '#generator',
	mounted() {
		this.initialized = true;
	},
	data: {
		initialized: false,
		width: 400,
		height: 300,
		variant: 0,
		grayscale: false,
		generatedUrl: 'https://placeholder.rocks/400/300'
	},
	methods: {
		generateUrl() {
			var returnUrl = 'https://placeholder.rocks/' + this.width;
			if(this.height !== this.width || this.variant) { returnUrl += '/' + this.height; }
			if(this.variant) { returnUrl += '/' + this.variant; }
			if(this.grayscale) { returnUrl += '/g'; }
			this.generatedUrl = returnUrl;
		}
	}
});