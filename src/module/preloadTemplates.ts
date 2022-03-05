export async function preloadTemplates(): Promise<Handlebars.TemplateDelegate[]> {
  const templatePaths: string[] = [
    // Add paths to "systems/kalymba/templates"
  ];

  return loadTemplates(templatePaths);
}
