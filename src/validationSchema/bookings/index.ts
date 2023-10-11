import * as yup from 'yup';

export const bookingValidationSchema = yup.object().shape({
  start_time: yup.date().required(),
  end_time: yup.date().required(),
  booking_status: yup.string().required(),
  total_price: yup.number().integer().required(),
  car_id: yup.string().nullable().required(),
  user_id: yup.string().nullable().required(),
});
