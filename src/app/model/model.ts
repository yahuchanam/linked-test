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
