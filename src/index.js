import crontab from './components/crontab.vue'

const install = function (Vue) {
    Vue.component(crontab.name, crontab)
}

export default crontab