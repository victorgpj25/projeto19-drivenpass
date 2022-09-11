import joi from 'joi'

const connectionSchema = joi.object({ 
    tag: joi.string().required()
    .messages({
        'any.required': 'Tag is a required field',
        'string.base': 'Given tag is not valid'
        }
    ),
    network: joi.string().required()
        .messages({
            'any.required': 'Network is a required field',
            'string.base': 'Given network is not valid'
        }
    ),
    password: joi.string().required()
        .messages({
            'any.required': 'Password is a required field',
            'string.base': 'Given password is not valid'
        }
    )
})

export { connectionSchema }