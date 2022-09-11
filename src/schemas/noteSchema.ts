import joi from 'joi'

const noteSchema = joi.object({
    tag: joi.string().max(50).required()
        .messages({
            'any.required': 'Tag is a required field',
            'string.base': 'Given tag is not valid',
            'string.max': 'Tags cannot be longer than 50 characters'
        }
    ),
    note: joi.string().max(1000).required()
        .messages({
            'any.required': 'Note is a required field',
            'string.base': 'Given note is not valid',
            'string.max': 'Notes cannot be longer than 1000 characters'
        }
    )
})

export { noteSchema }