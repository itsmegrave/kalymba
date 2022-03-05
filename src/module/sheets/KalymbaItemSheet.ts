/* eslint-disable @typescript-eslint/no-explicit-any */
import { KALYMBA } from '../config';

const lp = KALYMBA.log_prefix;

export default class KalymbaItemSheet extends ItemSheet {
  get template(): string {
    return `systems/kalymba/templates/item/${this.item.data.type}-sheet.hbs`;
  }

  getData(): ItemSheet.Data<DocumentSheetOptions> | Promise<ItemSheet.Data<DocumentSheetOptions>> {
    const baseData: any = super.getData();
    baseData.config = KALYMBA;
    console.log(`${lp} Rendering with following item ctx: `, baseData);

    return baseData;
  }
}
