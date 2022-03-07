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
  attributes: {
    strength: {
      long: 'KALYMBA.ATTRIBUTES.STRENGTH.LONG',
      short: 'KALYMBA.ATTRIBUTES.STRENGTH.SHORT',
    },
    agility: {
      long: 'KALYMBA.ATTRIBUTES.AGILITY.LONG',
      short: 'KALYMBA.ATTRIBUTES.AGILITY.SHORT',
    },
    stamina: {
      long: 'KALYMBA.ATTRIBUTES.STAMINA.LONG',
      short: 'KALYMBA.ATTRIBUTES.STAMINA.SHORT',
    },
    intellect: {
      long: 'KALYMBA.ATTRIBUTES.INTELLECT.LONG',
      short: 'KALYMBA.ATTRIBUTES.INTELLECT.SHORT',
    },
    ginga: {
      long: 'KALYMBA.ATTRIBUTES.GINGA.LONG',
      short: 'KALYMBA.ATTRIBUTES.GINGA.SHORT',
    },
    ori: {
      long: 'KALYMBA.ATTRIBUTES.ORI.LONG',
      short: 'KALYMBA.ATTRIBUTES.ORI.SHORT',
    },
  },
};

// {
//   long: 'KALYMBA.ATTRIBUTES.STRENGTH.LONG';
//   short: 'KALYMBA.ATTRIBUTES.STRENGTH.SHORT';
// }
export interface KalymbaConfig {
  ASCII: string;
  currencyType: CurrencyType;
  log_prefix: string;
  attributes: Attributes;
}

export interface CurrencyType {
  salt: string;
  cowrieShell: string;
  bronzeGana: string;
  silverGana: string;
  goldGana: string;
}

export interface Attributes {
  strength: {
    long: string;
    short: string;
  };
  agility: {
    long: string;
    short: string;
  };
  stamina: {
    long: string;
    short: string;
  };
  intellect: {
    long: string;
    short: string;
  };
  ginga: {
    long: string;
    short: string;
  };
  ori: {
    long: string;
    short: string;
  };
}
