export interface PlantCardData {
  name: string;
  description: string;
  price: string;
  image: string;
  width: number;
  height: number;
  imageClassName?: string;
}

export interface TrendingPlantCardData {
  title: string;
  description: string;
  price: string;
  image: string;
  imageAlt: string;
  width: number;
  height: number;
  backgroundImage: string;
  reverseLayout?: boolean;
  imageClassName?: string;
}