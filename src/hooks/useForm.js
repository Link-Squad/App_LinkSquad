import { useEffect, useState } from 'react';
import VALIDATIONS from '../constants/validations.constants';

const useForm = () => {
	const [inputs, setInputs] = useState({});
	const [errors, setErrors] = useState({});
	const [isFormValid, setIsFormValid] = useState('false')

	const handleInput = e => {
		const input = e.target;
		const isValid = VALIDATIONS[input.name];

		setInputs(prev => {
			return {
				...prev,
				[input.name]: input.value
			};
		});

		setErrors(prev => {
			return {
				...prev,
				[input.name]: isValid ? !isValid(input.value) : false
			};
		});
	};

	useEffect(() => {
		const errorsArr = Object.values(errors)

		const areErrors = errorsArr.some(err => err)
		const isTouch = errorsArr.length > 1

		setIsFormValid(isTouch && !areErrors)
	}, [errors])	

	const handleSubmit = (event, callback) => {
		event.preventDefault();
		callback();
	};

	return {
		inputs,
		errors,
		handleInput,
		handleSubmit,
		isFormValid
	};
};

export default useForm;
