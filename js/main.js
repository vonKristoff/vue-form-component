import Vue from 'vue/dist/vue'
import template from './templates/root.html'
import genericForm from './components/generic-form'

window.Bus = new Vue()
const App = new Vue({
    el: "#app",
    template,
    components: { genericForm }
})