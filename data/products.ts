import { SECTION_BACKGROUNDS } from "../lib/constants";
import type { PlantCardData, TrendingPlantCardData } from "../types/products";

export const topSellingPlants: PlantCardData[] = [
	{
		name: "Aglaonema plant",
		description:
			"The Aglaonema plant, commonly known as Chinese Evergreen known for its attractive foliage and ease of care.",
		price: "300",
		image: "/images/plants/rose1.png",
		width: 330,
		height: 320,
		imageClassName: "-mt-24",
	},
	{
		name: "Plantain Lilies",
		description:
			"Hostas are primarily grown for their lush, decorative leaves, which come in a wide variety of shapes and sizes.",
		price: "380",
		image: "/images/plants/rose3.png",
		width: 360,
		height: 320,
		imageClassName: "-mt-24",
	},
	{
		name: "Cactus",
		description: "It is known for their ability to thrive in arid environments, cactus spines are produced from specialized structures called areoles",
		price: "259",
		image: "/images/plants/cactus.png",
		width: 390,
		height: 320,
		imageClassName: "-mt-6",
	},
	{
		name: "Swiss Cheese Plant",
		description:
			"It is a popular tropical houseplant known for its distinctive, perforated leaves.",
		price: "400",
		image: "/images/plants/rose6.png",
		width: 350,
		height: 320,
		imageClassName: "-mt-25",
	},
	{
		name: "Sansevieria Plant",
		description:
			"It is a popular indoor plant admired for its striking appearance and low-maintenance nature.",
		price: "450",
		image: "/images/plants/rose4.png",
		width: 350,
		height: 320,
		imageClassName: "-mt-24",
	},
	{
		name: "Agave Plant",
		description:
			"The Agave plant is a genus of succulent plants known for their striking rosette of thick, fleshy leaves and architectural forms.",
		price: "359",
		image: "/images/plants/rose5.png",
		width: 390,
		height: 320,
		imageClassName: "-mt-12",
	},
];

export const trendingPlants: TrendingPlantCardData[] = [
	{
		title: "For Your Desks Decorations",
		description:
			"I recently added a beautiful desk decoration plant to my workspace, and it has made such a positive difference! The greenery adds a touch of nature and serenity.",
		price: "599",
		image: "/images/plants/rose3.png",
		imageAlt: "Desk decoration plant",
		width: 600,
		height: 500,
		backgroundImage: SECTION_BACKGROUNDS.trendingCardOne,
		imageClassName: "lg:-mt-24",
	},
	{
		title: "For Your Desks Decorations",
		description:
			"The greenery adds a touch of nature and serenity to my desk, making it feel more inviting and calming.",
		price: "399",
		image: "/images/plants/rose2.png",
		imageAlt: "Desk decoration plant",
		width: 600,
		height: 500,
		backgroundImage: SECTION_BACKGROUNDS.trendingCardTwo,
		reverseLayout: true,
		imageClassName: "lg:-mt-24",
	},
];

export const slides = [
  {
    image: "/images/plants/rose1.png",
    width: 600,
    height: 600,
    imageClassName: "-translate-y-24",

    title: "We Have Small And Best O2 Plants Collection's",

    description1:
      'Oxygen-producing plants, often referred to as "O2 plants," are those that release oxygen into the atmosphere through the process of photosynthesis.',

    description2:
      "Many plants can help filter out pollutants and toxins from the air such as formaldehyde, benzene and trichloroethylene. This makes the air cleaner and healthier to breathe.",
  },

 {
    image: "/images/plants/rose1.png",
    width: 600,
    height: 600,
    imageClassName: "-translate-y-24",

    title: "We Have Small And Best O2 Plants Collection's",

    description1:
      'Oxygen-producing plants, often referred to as "O2 plants," are those that release oxygen into the atmosphere through the process of photosynthesis.',

    description2:
      "Many plants can help filter out pollutants and toxins from the air such as formaldehyde, benzene and trichloroethylene. This makes the air cleaner and healthier to breathe.",
  },

  {
    image: "/images/plants/rose1.png",
    width: 600,
    height: 600,
    imageClassName: "-translate-y-24",

    title: "We Have Small And Best O2 Plants Collection's",

    description1:
      'Oxygen-producing plants, often referred to as "O2 plants," are those that release oxygen into the atmosphere through the process of photosynthesis.',

    description2:
      "Many plants can help filter out pollutants and toxins from the air such as formaldehyde, benzene and trichloroethylene. This makes the air cleaner and healthier to breathe.",
  },
  {
    image: "/images/plants/rose1.png",
    width: 600,
    height: 600,
    imageClassName: "-translate-y-24",

    title: "We Have Small And Best O2 Plants Collection's",

    description1:
      'Oxygen-producing plants, often referred to as "O2 plants," are those that release oxygen into the atmosphere through the process of photosynthesis.',

    description2:
      "Many plants can help filter out pollutants and toxins from the air such as formaldehyde, benzene and trichloroethylene. This makes the air cleaner and healthier to breathe.",
  }
];

export const plants = [
  {
    name: "Aglaonema Plant",
    type: "Indoor Plant",
    image: "/images/plants/rose1.png",
  },
  {
    name: "Aglaonema Plant",
    type: "Indoor Plant",
    image: "/images/plants/rose1.png",
  },
  {
    name: "Aglaonema Plant",
    type: "Indoor Plant",
    image: "/images/plants/rose1.png",
  },

];