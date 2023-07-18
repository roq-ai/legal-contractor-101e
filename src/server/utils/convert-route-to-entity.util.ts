const mapping: Record<string, string> = {
  documents: 'document',
  organizations: 'organization',
  questionnaires: 'questionnaire',
  templates: 'template',
  users: 'user',
};

export function convertRouteToEntityUtil(route: string) {
  return mapping[route] || route;
}
