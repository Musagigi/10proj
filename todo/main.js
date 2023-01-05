const App = {
	data () {
		return {
			list: [],
			enterText: '',
		}
	},
	
	methods: {
		addText() {
			if (this.enterText) this.list.push(this.enterText)
			this.enterText = ''
		},
	}
}

Vue.createApp(App).mount('#app')