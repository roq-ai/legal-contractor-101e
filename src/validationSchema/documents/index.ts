import * as yup from 'yup';

export const documentValidationSchema = yup.object().shape({
  content: yup.string().required(),
  template_id: yup.string().nullable(),
  questionnaire_id: yup.string().nullable(),
  user_id: yup.string().nullable(),
});
