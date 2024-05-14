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
  text: string;
  type: string;
  flavor: string;
  imageUrl: string;
  language: string;
  multiverseid: number;
};

export type CardsBoosterLegality = {
  format: string;
  legality: string;
};

export type CardBooster = {
  id: string;
  name: string;
  cmc: number;
  type: string;
  types: string[];
  rarity: string;
  set: string;
  setName: string;
  text: string;
  flavor: string;
  artist: string;
  number: string;
  layout: string;
  multiverseid: string;
  imageUrl: string;
  foreignNames: CardBoosterForeignName[];
  printings: string[];
  originalText: string;
  originalType: string;
  legalities: CardsBoosterLegality[];
};
