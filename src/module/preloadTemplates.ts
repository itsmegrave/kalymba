export async function preloadTemplates(): Promise<Handlebars.TemplateDelegate[]> {
  const templatePaths: string[] = ['systems/kalymba/templates/item/equipment-sheet.hbs'];

  return loadTemplates(templatePaths);
}
