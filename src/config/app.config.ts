interface AppConfigInterface {
  ownerRoles: string[];
  customerRoles: string[];
  tenantRoles: string[];
  tenantName: string;
  applicationName: string;
  addOns: string[];
}
export const appConfig: AppConfigInterface = {
  ownerRoles: ['Legal Professional'],
  customerRoles: [],
  tenantRoles: ['Legal Professional', 'Contract Manager'],
  tenantName: 'Organization',
  applicationName: 'Legal Contractor',
  addOns: ['chat', 'file', 'notifications'],
};
