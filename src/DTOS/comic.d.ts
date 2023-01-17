export interface ComicDTO {
  id: number;
  title: string;
  description: string;
  prices: {
    price: number
  }
  images: {
    extension: string;
    path: string;
  };
  urls: {
    type: string;
    url: string;
  };
  thumbnail: {
    extension: string;
    path: string;
  };
}
