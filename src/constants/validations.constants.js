const emailRegex = /\S+@\S+\.\S+/;

const VALIDATIONS = {
    username: value => value.length > 4,
	email: value => emailRegex.test(value),
    password: value => value.length >= 5
}

export default VALIDATIONS