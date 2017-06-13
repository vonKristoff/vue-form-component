export default class {
    constructor(data) {
        for(let field in data) {
            this[field] = data[field]
        }
    }
    getFields() {
        return Object.keys(this)
    }
    hasError(fieldset) {
        console.log(this[fieldset.field])
    }
    submit(url) {
        // currently too strict - working prototype
    }
}