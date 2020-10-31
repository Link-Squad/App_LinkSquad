const VALIDATIONS = {
    name: v => v.length,
    email: v => v.length,
    password: v => v.length
}

const validationsFn = (name) => VALIDATIONS[name];

export default validationsFn