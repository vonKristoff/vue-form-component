import template from '../templates/custom-input.html'

export default {
    name: 'custom-input',
    template,
    props: ['value', 'id'],
    data() {
        return {}
    },
    methods: {
        // occurs onBlur event
        update(value) {
            // sanitise // check for error etc
            console.log(value)
            this.$emit('input', value)
        },
        hasError() {
            Bus.$emit('check-for-errors', {
                field: this.id,
                value: this.value
            })
        }
    },
    mounted() {
        console.log(this.value, this.id, this.$refs.field.value)
    }
}