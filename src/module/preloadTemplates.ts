export async function preloadTemplates(): Promise<Handlebars.TemplateDelegate[]> {
  const templatePaths: string[] = [
    'systems/kalymba/templates/attribute-select.hbs',
    'systems/kalymba/templates/item/equipment-sheet.hbs',
    'systems/kalymba/templates/item/skill-sheet.hbs',
  ];

  return loadTemplates(templatePaths);
}
