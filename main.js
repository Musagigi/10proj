const App = {
	data() {
		return {
			list: [],
			enterText: '',
			borderStyle: true
		}
	},

	methods: {
		addText() {
			if (this.enterText) this.list.push(this.enterText)
			this.enterText = ''
		},
	},
	watch: {
		wtch() {
			if (this.list.length > 0) {
				return { main__brd_styel: !this.borderStyle }
			}
		}
	}
}

Vue.createApp(App).mount('#app')