export interface User {
  first_name: string;
  last_name: string;
  avatar: string;
}

export interface ImageData {
  id: string;
  author: string;
  width: number;
  height: number;
  url: string;
  download_url: string;
}
