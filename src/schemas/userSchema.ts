import joi from 'joi'

const signUpSchema = joi.object({
    email: joi.string().email().required()
        .messages({
            'any.required': 'Email is a required field',
            'string.base': 'Given email is not valid',
            'string.email': 'Given email is not valid'
        }
    ),
    password: joi.string().min(10).required()
        .messages({
            'any.required': 'Password is a required field',
            'string.base': 'Given password is not valid',
            'string.min': 'Passwords must be at least 10 characters long'
        }
    )
})

export { signUpSchema }