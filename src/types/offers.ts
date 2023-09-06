export type Location = {
  latitude: number;
  longitude: number;
  zoom: number;
};

export type City = {
  name: string;
  location: Location;
};

export type Offers = {
  city: City;
  goods: string[];
  id: string;
  isFavorite: boolean;
  isPremium: boolean;
  location: Location;
  previewImage: string;
  rating: number;
  price: number;
  title: string;
  type: string;
};

export type FavoriteData = {
  id: Offers['id'];
  status: 0 | 1;
};
