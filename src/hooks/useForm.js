import { useState } from 'react';

const emailRegex = /\S+@\S+\.\S+/;

const errorFns = {
	username: value => value.length < 2,
	email: value => !emailRegex.test(value),
	password: value => value.length < 5
};

const useForm = () => {
	const [inputs, setInputs] = useState({});
	const [errors, setErrors] = useState({});

	const handleInput = e => {
		const input = e.target;
		const isInvalid = errorFns[input.name];

		setInputs(prev => {
			return {
				...prev,
				[input.name]: input.value
			};
		});

		setErrors(prev => {
			return {
				...prev,
				[input.name]: isInvalid ? isInvalid(input.value) : false
			};
		});
	};

	const handleSubmit = (event, callback) => {
		event.preventDefault();
		callback();
	};

	return {
		inputs,
		errors,
		handleInput,
		handleSubmit
	};
};

export default useForm;
