import Joi from 'joi';

const registerSchema = Joi.object({
  firstName: Joi.string().trim().required().messages({
    'string.empty': 'first name is required',
  }),
  lastName: Joi.string().trim().required().messages({
    'string.empty': 'last name is required',
  }),
  emailOrUsername: Joi.alternatives()
    .try(Joi.string().email({ tlds: false }), Joi.string())
    .messages({
      'alternatives.match':
        'must be valid email address or modile number',
    }),
  password: Joi.string()
    .alphanum()
    .min(6)
    .required()
    .trim()
    .messages({
      'string.empty': 'password is required',
      'string.alphanum': 'password must be a number or alphabet',
      'string.min': 'password must have at least 6 charaters',
    }),
  confirmPassword: Joi.string()
    .valid(Joi.ref('password'))
    .required()
    .trim()
    .messages({
      'any.only': 'password and confirm password did not match',
      'string.empty': 'confirm password is required',
    }),
});

const validateRegister = (input) => {
  const { error } = registerSchema.validate(input, {
    abortEarly: false,
  });

  if (error) {
    // {firstname: 'first name is required', lastName: 'last name is required'}
    const result = error.details.reduce((acc, el) => {
      acc[el.path[0]] = el.message;
      return acc;
    }, {});
    // console.log(result);
    return result;
  }
};

export default validateRegister;
