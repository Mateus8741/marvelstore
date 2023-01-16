export interface ComicDTO {
  id: string;
  title: string;
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
