import { Genre, Platform, Publisher } from "./index";

export default interface Game {
  id: number;
  slug: string;
  name: string;
  genres: Genre[];
  publishers: Publisher[];
  description_raw: string;
  background_image: string;
  parent_platforms: { platform: Platform }[];
  metacritic: number;
  rating_top: number;
}
