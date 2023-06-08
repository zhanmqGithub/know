// my-component.js
export default {
	data() {
		return { count: 0 };
	},
	template: `<div>
			<div v-html="vH"></div>
			<button @click="count++">点击+1</button>
	</div>`,
	computed: {
		vH() {
			return 'count is ' + this.count;
		},
	},
};
