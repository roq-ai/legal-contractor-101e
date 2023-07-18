import { TemplateInterface } from 'interfaces/template';
import { QuestionnaireInterface } from 'interfaces/questionnaire';
import { UserInterface } from 'interfaces/user';
import { GetQueryInterface } from 'interfaces';

export interface DocumentInterface {
  id?: string;
  content: string;
  template_id?: string;
  questionnaire_id?: string;
  user_id?: string;
  created_at?: any;
  updated_at?: any;

  template?: TemplateInterface;
  questionnaire?: QuestionnaireInterface;
  user?: UserInterface;
  _count?: {};
}

export interface DocumentGetQueryInterface extends GetQueryInterface {
  id?: string;
  content?: string;
  template_id?: string;
  questionnaire_id?: string;
  user_id?: string;
}
