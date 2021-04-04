
function leng(value){
    if (value !== undefined) {
        return value.length;
    }
}

const required = (val) => val && leng(val);
const maxLength = (len) => (val) => !(val) || (leng(val) <= len);
const minLength = (len) => (val) => (val) || (leng(val) >= len);
const isNumber = (val) => !isNaN(Number(val));
const validEmail = (val) => /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(val);

export const validateName = {
    required, minLength: minLength(3), maxLength: maxLength(15)
}

export const validateNumber = {
    required, minLength: minLength(3), maxLength: maxLength(15), isNumber
}

export const validateEmail = {
    required, validEmail
}

export const errorName = {
    required: 'Required, ',
    minLength: 'Must be at least 3 characters',
    maxLength: 'Must be at most 15 characters'
}

export const errorNumber = {
    required: 'Required, ',
    minLength: 'Must be at least 3 numbers',
    maxLength: 'Must be at most 15 numbers',
    isNumber: 'Must contain only numbers'
}

export const errorEmail = {
    required: 'Required, ',
    validEmail: 'Invalid Email Address'
}