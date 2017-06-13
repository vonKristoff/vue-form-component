import template from '../templates/generic-form.html'
import customInput from './custom-input'
import Form from './form'
export default {
    name: 'generic-form',
    template,
    components: { customInput },
    data() {
        return { 
            form: new Form({
                name: 'Bill'
            })
        }
    },
    created(){
        Bus.$on('check-for-errors', fieldset => {
            this.form.hasError(fieldset)
        })
    }
}