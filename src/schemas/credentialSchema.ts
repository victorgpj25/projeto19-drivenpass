import joi from 'joi'

const credentialSchema = joi.object({ 
    url: joi.string().uri().required()
    .messages({
        'any.required': 'Url is a required field',
        'string.base': 'Given url is not valid',
        'string.uri': 'Given url is not a valid url'
        }
    ),
    tag: joi.string().required()
    .messages({
        'any.required': 'Tag is a required field',
        'string.base': 'Given tag is not valid'
        }
    ),
    username: joi.string().required()
        .messages({
            'any.required': 'Username is a required field',
            'string.base': 'Given username is not valid'
        }
    ),
    password: joi.string().required()
        .messages({
            'any.required': 'Password is a required field',
            'string.base': 'Given password is not valid'
        }
    )
})

export { credentialSchema }