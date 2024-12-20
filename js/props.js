import { AlignText } from "https://cdn.jsdelivr.net/npm/spin-wheel@4.3.2/src/constants.js";

export const props = [
  {
    name: "Workout",
    radius: 0.84,
    itemLabelRadius: 0.93,
    itemLabelRadiusMax: 0.35,
    itemLabelRotation: 180,
    itemLabelAlign: AlignText.left,
    itemLabelColors: ["#fff"],
    itemLabelBaselineOffset: -0.07,
    itemLabelFont: "Amatic SC",
    itemLabelFontSizeMax: 55,
    itemBackgroundColors: [
      "#ffc93c",
      "#66bfbf",
      "#a2d5f2",
      "#515070",
      "#43658b",
      "#ed6663",
      "#d54062",
    ],
    rotationSpeedMax: 500,
    rotationResistance: -100,
    lineWidth: 1,
    lineColor: "#fff",
    image: "./img/example-0-image.svg",
    overlayImage: "./img/example-0-overlay.svg",
    items: [
      {
        label: "Olivier",
      },
      {
        label: "Clément",
      },
      {
        label: "Juliette",
      },
      {
        label: "Maxime",
      },
    ],
  },

  {
    name: "Takeaway",
    radius: 0.89,
    pointerAngle: 90,
    itemLabelRadius: 0.92,
    itemLabelRadiusMax: 0.37,
    itemLabelRotation: 0,
    itemLabelAlign: AlignText.right,
    itemLabelColors: ["#000"],
    itemLabelBaselineOffset: -0.06,
    itemLabelFont: "Rubik",
    itemBackgroundColors: ["#fbf8c4", "#e4f1aa", "#c0d26e", "#9cd26e"],
    rotationSpeedMax: 700,
    rotationResistance: -110,
    lineWidth: 0,
    overlayImage: "./img/example-1-overlay.svg",
    borderWidth: 0,
    items: [
      {
        label: "Olivier",
      },
      {
        label: "Jean",
      },
      {
        label: "Clément",
      },
      {
        label: "Marcel",
      },
      {
        label: "Paul",
      },
      {
        label: "Juliette",
      },
    ],
  },

  {
    name: "Movies",
    radius: 0.88,
    itemLabelRadius: 0.92,
    itemLabelRadiusMax: 0.4,
    itemLabelRotation: 0,
    itemLabelAlign: AlignText.right,
    itemLabelBaselineOffset: -0.13,
    itemLabelFont: "Pragati Narrow",
    itemBackgroundColors: ["#c7160c", "#fff"],
    itemLabelColors: ["#fff", "#000"],
    rotationSpeedMax: 700,
    rotationResistance: -70,
    lineWidth: 0,
    overlayImage: "./img/example-2-overlay.svg",
    items: [
      {
        label: "Action",
      },
      {
        label: "Horror",
      },
      {
        label: "Science Fict.",
      },
      {
        label: "Comedy",
      },
      {
        label: "Romance",
      },
      {
        label: "Thriller",
      },
      {
        label: "Western",
      },
      {
        label: "Indie",
      },
      {
        label: "Crime",
      },
      {
        label: "Documentary",
      },
      {
        label: "Drama",
      },
      {
        label: "Musical",
      },
      {
        label: "Mystery",
      },
      {
        label: "War",
      },
      {
        label: "Sports",
      },
      {
        label: "Fantasy",
      },
    ],
  },

  {
    name: "Money",
    radius: 0.88,
    itemLabelRadius: 0.93,
    itemLabelRotation: 180,
    itemLabelAlign: AlignText.left,
    itemLabelColors: ["#000"],
    itemLabelBaselineOffset: -0.06,
    itemLabelFont: "Arial",
    itemLabelFontSizeMax: 22,
    lineWidth: 1,
    lineColor: "#000",
    overlayImage: "./img/example-3-overlay.svg",
    items: [
      {
        label: "$ 50",
      },
      {
        label: "$ 200",
      },
      {
        label: "$ 1000",
        weight: 0.6,
        backgroundColor: "#f23925",
        labelColor: "#fff",
      },
      {
        label: "$ 100",
      },
      {
        label: "$ 200",
      },
      {
        label: "$ 500",
        weight: 0.8,
        backgroundColor: "#b1ddff",
      },
      {
        label: "$ 100",
      },
      {
        label: "$ 50",
      },
      {
        label: "$ 5000",
        weight: 0.4,
        backgroundColor: "#000",
        labelColor: "#fff",
      },
      {
        label: "$ 50",
      },
      {
        label: "$ 200",
      },
      {
        label: "$ 500",
        weight: 0.8,
        backgroundColor: "#b1ddff",
      },
      {
        label: "$ 100",
      },
      {
        label: "$ 200",
      },
      {
        label: "$ 1000",
        weight: 0.6,
        backgroundColor: "#f23925",
        labelColor: "#fff",
      },
      {
        label: "$ 100",
      },
      {
        label: "$ 50",
      },
      {
        label: "$ 500",
        weight: 0.8,
        backgroundColor: "#b1ddff",
      },
    ],
  },

  {
    name: "King of Nerds",
    itemLabelRadius: 0.92,
    itemLabelRadiusMax: 0.3,
    itemLabelColors: ["hsl(0, 0%, 20%)"],
    itemLabelFont: "Gloria Hallelujah",
    itemLabelBaselineOffset: -0.2,
    rotationSpeedMax: 400,
    rotationResistance: -100,
    image: "./img/example-4-image.svg",
    lineWidth: 0,
    items: [
      {
        label: "SHELDON",
        weight: 2.9,
      },
      {
        label: "PENNY",
      },
      {
        label: "LEONARD",
      },
      {
        label: "HOWARD",
      },
      {
        label: "BERNADETTE",
      },
      {
        label: "RAJ",
      },
      {
        label: "AMY",
      },
    ],
  },

  {
    name: "Rock Paper Scissors",
    itemBackgroundColors: ["hsl(310, 100%, 95%)"],
    lineColor: "hsl(350, 20%, 40%)",
    lineWidth: 2,
    borderColor: "hsl(350, 20%, 40%)",
    borderWidth: 4,
    items: [
      {
        image: "./img/example-5-item-0.svg",
        imageRadius: 0.6,
        imageScale: 1.2,
      },
      {
        image: "./img/example-5-item-1.svg",
        imageRadius: 0.6,
        imageScale: 1.2,
      },
      {
        image: "./img/example-5-item-2.svg",
        imageRadius: 0.6,
        imageScale: 1.2,
      },
      {
        image: "./img/example-5-item-3.svg",
        imageRadius: 0.6,
        imageScale: 1.2,
      },
      {
        image: "./img/example-5-item-4.svg",
        imageRadius: 0.6,
        imageScale: 1.2,
      },
    ],
  },

  {
    name: "Basic",
    items: [
      {
        label: "one",
      },
      {
        label: "two",
      },
      {
        label: "three",
      },
    ],
  },
];
