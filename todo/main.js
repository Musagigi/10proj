const App = {
	data () {
		return {
			list: [],
			enterText: '',
		}
	},
	methods: {
		addText() {
			this.list.push(this.enterText)
			this.enterText = ''
		},
	}
}

Vue.createApp(App).mount('#app')