import * as yup from 'yup';

export const questionnaireValidationSchema = yup.object().shape({
  questions: yup.string().required(),
  organization_id: yup.string().nullable(),
});
