import Input from './input.vue'
import Radio from './radio.vue'
import RadioGroup from './radioGroup.vue'

const components = [
	Input,
	Radio,
	RadioGroup
]

const install = function(Vue) {
	components.forEach(item => {
		Vue.component(item.name, item)
	})
}

if(typeof window !== 'undefined' && window.Vue) {
	install(window.Vue)
}

export default {
	install
}