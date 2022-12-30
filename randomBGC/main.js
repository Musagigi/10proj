const App = {
	data () {
		return {
			bgColor: 'background-color: rgb(0, 0, 0)',
		}
	},
	methods: {
		randomColor() {
			const rbgArr = []
			for (let i = 3; i--;) {
				rbgArr.push(Math.floor(Math.random() * 256))
			}
			this.bgColor = `background-color: rgb(${rbgArr})`
			// console.log(rbgArr);
		}
	}
}
Vue.createApp(App).mount('#app')