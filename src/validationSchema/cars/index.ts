import * as yup from 'yup';

export const carValidationSchema = yup.object().shape({
  model: yup.string().required(),
  year: yup.number().integer().required(),
  color: yup.string().required(),
  mileage: yup.number().integer().required(),
  company_id: yup.string().nullable().required(),
  user_id: yup.string().nullable().required(),
});
