import Joi from "joi";
import validUrl from 'valid-url';
import validation from "./validation";

//const imageRegex = /.(jpg|jpeg|png|gif)$/i;
const validateURL = (value) => {
  if (validUrl.isWebUri(value)) {
    return value;
  } else {
    return null;
  }
};
const registerSchema = Joi.object({
  firstName: Joi.string().min(2).max(100).required(),
  lastName: Joi.string().min(2).max(100).required(),
  middleName: Joi.string().min(2).max(100).allow(""),
  phone: Joi.string()
    .regex(new RegExp(/0[0-9]{1,2}\-?\s?[0-9]{3}\s?[0-9]{4}/))
    .required(),
  email: Joi.string()
    .email({ tlds: { allow: false } })
    .required(),
  password: Joi.string()
    .pattern(new RegExp("^(?=.*[A-Z])(?=.*[a-z])(?=.*[!@#$%^&*()_+])[a-zA-Z0-9!@#$%^&*()_+]{8,}$"))
    .required(),
  imageUrl: Joi.string().custom(validateURL).allow(""),
  imageAlt: Joi.string().min(0).max(15),
  state: Joi.string().min(0).max(15),
  country: Joi.string().min(2).max(20).required(),
  city: Joi.string().min(2).max(30).required(),
  street: Joi.string().min(2).max(30).required(),
  houseNumber: Joi.number().required(),
  zipCode: Joi.number().min(5).required(),
});

const validateRegisterSchema = (userInput) =>
  validation(registerSchema, userInput);

export default validateRegisterSchema;
