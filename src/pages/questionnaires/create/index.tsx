import AppLayout from 'layout/app-layout';
import React, { useState } from 'react';
import {
  FormControl,
  FormLabel,
  Input,
  Button,
  Text,
  Box,
  Spinner,
  FormErrorMessage,
  Switch,
  NumberInputStepper,
  NumberDecrementStepper,
  NumberInputField,
  NumberIncrementStepper,
  NumberInput,
} from '@chakra-ui/react';
import { useFormik, FormikHelpers } from 'formik';
import * as yup from 'yup';
import DatePicker from 'react-datepicker';
import { FiEdit3 } from 'react-icons/fi';
import { useRouter } from 'next/router';
import { createQuestionnaire } from 'apiSdk/questionnaires';
import { Error } from 'components/error';
import { questionnaireValidationSchema } from 'validationSchema/questionnaires';
import { AsyncSelect } from 'components/async-select';
import { ArrayFormField } from 'components/array-form-field';
import { AccessOperationEnum, AccessServiceEnum, requireNextAuth, withAuthorization } from '@roq/nextjs';
import { compose } from 'lib/compose';
import { OrganizationInterface } from 'interfaces/organization';
import { getOrganizations } from 'apiSdk/organizations';
import { QuestionnaireInterface } from 'interfaces/questionnaire';

function QuestionnaireCreatePage() {
  const router = useRouter();
  const [error, setError] = useState(null);

  const handleSubmit = async (values: QuestionnaireInterface, { resetForm }: FormikHelpers<any>) => {
    setError(null);
    try {
      await createQuestionnaire(values);
      resetForm();
      router.push('/questionnaires');
    } catch (error) {
      setError(error);
    }
  };

  const formik = useFormik<QuestionnaireInterface>({
    initialValues: {
      questions: '',
      organization_id: (router.query.organization_id as string) ?? null,
    },
    validationSchema: questionnaireValidationSchema,
    onSubmit: handleSubmit,
    enableReinitialize: true,
    validateOnChange: false,
    validateOnBlur: false,
  });

  return (
    <AppLayout>
      <Box bg="white" p={4} rounded="md" shadow="md">
        <Box mb={4}>
          <Text as="h1" fontSize="2xl" fontWeight="bold">
            Create Questionnaire
          </Text>
        </Box>
        {error && (
          <Box mb={4}>
            <Error error={error} />
          </Box>
        )}
        <form onSubmit={formik.handleSubmit}>
          <FormControl id="questions" mb="4" isInvalid={!!formik.errors?.questions}>
            <FormLabel>Questions</FormLabel>
            <Input type="text" name="questions" value={formik.values?.questions} onChange={formik.handleChange} />
            {formik.errors.questions && <FormErrorMessage>{formik.errors?.questions}</FormErrorMessage>}
          </FormControl>
          <AsyncSelect<OrganizationInterface>
            formik={formik}
            name={'organization_id'}
            label={'Select Organization'}
            placeholder={'Select Organization'}
            fetcher={getOrganizations}
            renderOption={(record) => (
              <option key={record.id} value={record.id}>
                {record?.name}
              </option>
            )}
          />
          <Button isDisabled={formik?.isSubmitting} colorScheme="blue" type="submit" mr="4">
            Submit
          </Button>
        </form>
      </Box>
    </AppLayout>
  );
}

export default compose(
  requireNextAuth({
    redirectTo: '/',
  }),
  withAuthorization({
    service: AccessServiceEnum.PROJECT,
    entity: 'questionnaire',
    operation: AccessOperationEnum.CREATE,
  }),
)(QuestionnaireCreatePage);
