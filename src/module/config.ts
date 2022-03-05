export const KALYMBA: KalymbaConfig = {
  ASCII: `
======================================
   __ __     __           __
  / //_/__ _/ /_ ____ _  / /  ___ _
 / ,< / _  / / // /  ' \/ _ \/ _  /
/_/|_|\_,_/_/\_, /_/_/_/_.__/\_,_/
            /___/
======================================
`,
  currencyType: {
    salt: 'KALYMBA.CURRENCY.SALT',
    cowrieShell: 'KALYMBA.CURRENCY.COWRIE_SHELL',
    bronzeGana: 'KALYMBA.CURRENCY.BRONZE_GANA',
    silverGana: 'KALYMBA.CURRENCY.SILVER_GANA',
    goldGana: 'KALYMBA.CURRENCY.GOLD_GANA',
  },
  log_prefix: 'kalymba |',
};

export interface KalymbaConfig {
  ASCII: string;
  currencyType: CurrencyType;
  log_prefix: string;
}

export interface CurrencyType {
  salt: string;
  cowrieShell: string;
  bronzeGana: string;
  silverGana: string;
  goldGana: string;
}
