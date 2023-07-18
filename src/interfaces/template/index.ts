import { DocumentInterface } from 'interfaces/document';
import { OrganizationInterface } from 'interfaces/organization';
import { GetQueryInterface } from 'interfaces';

export interface TemplateInterface {
  id?: string;
  name: string;
  content: string;
  organization_id?: string;
  created_at?: any;
  updated_at?: any;
  document?: DocumentInterface[];
  organization?: OrganizationInterface;
  _count?: {
    document?: number;
  };
}

export interface TemplateGetQueryInterface extends GetQueryInterface {
  id?: string;
  name?: string;
  content?: string;
  organization_id?: string;
}
