import { DocumentInterface } from 'interfaces/document';
import { OrganizationInterface } from 'interfaces/organization';
import { GetQueryInterface } from 'interfaces';

export interface QuestionnaireInterface {
  id?: string;
  questions: string;
  organization_id?: string;
  created_at?: any;
  updated_at?: any;
  document?: DocumentInterface[];
  organization?: OrganizationInterface;
  _count?: {
    document?: number;
  };
}

export interface QuestionnaireGetQueryInterface extends GetQueryInterface {
  id?: string;
  questions?: string;
  organization_id?: string;
}
