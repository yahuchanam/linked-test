export type Collections = {
  name: string;
  block: string;
  releaseDate: string;
};

export type CollectionFilter = {
  block: string | null;
  name?: string | null;
};

export type CollectionPayload = {
  sets: CollectionSetPayload[];
};

export type CardRarity = 'rare' | 'mythic rare' | 'uncommon' | 'common';

export type CardRarityArray = (CardRarity | CardRarity[])[];

export type CollectionSetPayload = {
  code: string;
  name: string;
  type: string;
  booster: CardRarityArray;
  releaseDate: string;
  block: string;
  onlineOnly: boolean;
};

export type CollectionSet = Omit<CollectionSetPayload, 'releaseDate'> & {
  releaseDate: Date;
};

export type BoosterPayload = {
  cards: CardBooster[];
};

export type CardBoosterForeignName = {
  name: string;
  text?: string;
  type: string;
  flavor?: string | null;
  imageUrl: string;
  language: string;
  multiverseid: number;
};

export type CardRuling = {
  date: string;
  text: string;
};

export type CardsBoosterLegality = {
  format: string;
  legality: string;
};

export type CardBooster = {
  id: string;
  name: string;
  cmc: number;
  manaCost?: string;
  colorIdentity: string[] | string;
  colors: string[];
  subtypes: string[];
  type: string;
  types: string[];
  rarity: string;
  power: string;
  toughness: string;
  set: string;
  setName: string;
  text?: string | null;
  flavor?: string | null;
  artist: string;
  number: string;
  layout: string;
  multiverseid: string;
  imageUrl: string;
  foreignNames: CardBoosterForeignName[];
  printings: string[];
  originalText?: string;
  originalType: string;
  legalities: CardsBoosterLegality[];
  rulings?: CardRuling[];
};
