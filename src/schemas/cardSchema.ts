import joi from 'joi'

const cardSchema = joi.object({
    tag: joi.string().required()
    .messages({
        'any.required': 'Tag is a required field',
        'string.base': 'Given tag is not valid'
        }
    ),
    number: joi.string().required()
        .messages({
            'any.required': 'Number is a required field',
            'string.base': 'Given number is not valid'
        }
    ),
    owner: joi.string().required()
    .messages({
        'any.required': 'Owner is a required field',
        'string.base': 'Given owner is not valid'
    }
    ),
    securityCode: joi.string().required()
    .messages({
        'any.required': 'Security code is a required field',
        'string.base': 'Given security code is not valid'
    }
    ),
    expirationDate: joi.string().required()
    .messages({
        'any.required': 'Expiration ate is a required field',
        'string.base': 'Given expiration date is not valid'
    }
    ),
    password: joi.string().required()
    .messages({
        'any.required': 'Password is a required field',
        'string.base': 'Given password is not valid'
    }
    ),
    isVirtual: joi.boolean().required()
    .messages({
        'any.required': 'isVirtual is a required field',
        'boolean.base': 'Given isVirtual info is not valid'
    }
    ),
    type: joi.string().valid('credit', 'debit', 'both').required()
    .messages({
        'any.required': 'Card type is a required field',
        'string.base': 'Given card type is not valid',
        'any.only': 'Given card type is not a registered option'
    })

})

export { cardSchema }