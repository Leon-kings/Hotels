import cursol from "../images/img/carousel-1.jpg";
import cursol1 from "../images/img/carousel-1.jpg";
import services from "../images/img/carousel-2.jpg";
import team1 from '../images/img/team-1.jpg'
import team2 from '../images/img/team-2.jpg'
import team3 from '../images/img/team-3.jpg'
import team4 from '../images/img/team-4.jpg'
export const carouselItems = [
  {
    imgSrc: cursol,
    title: "Discover A Brand Luxurious Hotel",
    subtitle: "Luxury Living",
    buttons: [
      { text: "Our Rooms", variant: "contained", color: "primary" },
      { text: "Book A Room", variant: "outlined", color: "inherit" },
    ],
  },
  {
    imgSrc: cursol1,
    title: "Discover A Brand Luxurious Hotel",
    subtitle: "Luxury Living",
    buttons: [
      { text: "Our Rooms", variant: "contained", color: "primary" },
      { text: "Book A Room", variant: "outlined", color: "inherit" },
    ],
  },
  {
    imgSrc: cursol,
    title: "Discover A Brand Luxurious Hotel",
    subtitle: "Luxury Living",
    buttons: [
      { text: "Our Rooms", variant: "contained", color: "primary" },
      { text: "Book A Room", variant: "outlined", color: "inherit" },
    ],
  },
];
export const images = [
  { src: cursol, width: "75%", margin: "25% 0 0 0", delay: 0.1 },
  { src: cursol, width: "100%", delay: 0.3 },
  { src: cursol, width: "50%", align: "right", delay: 0.5 },
  { src: cursol, width: "75%", align: "left", delay: 0.7 },
];

export const initialRooms = [
  {
    id: 1,
    name: "Junior Suite",
    price: 100,
    beds: 3,
    baths: 2,
    description:
      "Erat ipsum justo amet duo et elitr dolor, est duo duo eos lorem sed diam stet diam sed stet lorem.",
    image: cursol,
  },
  {
    id: 2,
    name: "Executive Suite",
    price: 100,
    beds: 3,
    baths: 2,
    description:
      "Erat ipsum justo amet duo et elitr dolor, est duo duo eos lorem sed diam stet diam sed stet lorem.",
    image: services,
  },
  {
    id: 3,
    name: "Super Deluxe",
    price: 100,
    beds: 3,
    baths: 2,
    description:
      "Erat ipsum justo amet duo et elitr dolor, est duo duo eos lorem sed diam stet diam sed stet lorem.",
    image: cursol,
  },
];
export const additionalRooms = [
  {
    id: 4,
    name: "Deluxe Room",
    price: 120,
    beds: 2,
    baths: 1,
    description: "Spacious room with modern amenities and a beautiful view.",
    image: services,
  },
  {
    id: 5,
    name: "Presidential Suite",
    price: 250,
    beds: 4,
    baths: 3,
    description: "Luxurious suite with premium services and exclusive access.",
    image: cursol,
  },
  {
    id: 6,
    name: "Family Room",
    price: 180,
    beds: 4,
    baths: 2,
    description: "Perfect for families with children, featuring extra space.",
    image: services,
  },
];
export const testimonials = [
  {
    id: 1,
    text: "Tempor stet labore dolor clita stet diam amet ipsum dolor duo ipsum rebum stet dolor amet diam stet. Est stet ea lorem amet est kasd kasd et erat magna eos",
    name: "Client Name 1",
    profession: "Profession 1",
    image: cursol,
  },
  {
    id: 2,
    text: "Tempor stet labore dolor clita stet diam amet ipsum dolor duo ipsum rebum stet dolor amet diam stet. Est stet ea lorem amet est kasd kasd et erat magna eos",
    name: "Client Name 2",
    profession: "Profession 2",
    image: services,
  },
  {
    id: 3,
    text: "Tempor stet labore dolor clita stet diam amet ipsum dolor duo ipsum rebum stet dolor amet diam stet. Est stet ea lorem amet est kasd kasd et erat magna eos",
    name: "Client Name 3",
    profession: "Profession 3",
    image: cursol,
  },
];
export const teamMembers = [
  {
    id: 1,
    name: "Aline Jane",
    position: "Head Chief",
    image: team1,
    delay: 0.1,
  },
  {
    id: 2,
    name: "Jane Jackson",
    position: "Manager",
    image: team2,
    delay: 0.3,
  },
  {
    id: 3,
    name: "AX Carler",
    position: "Marketting Officer",
    image: team3,
    delay: 0.5,
  },
  {
    id: 4,
    name: "Horely Potter",
    position: "Chief",
    image: team4,
    delay: 0.7,
  },
];
export const about = [
  {
    id: 1,
    url: team4,
    delay: 0.2,
  },
  {
    id: 2,
    url: team1,
    delay: 0.5,
  },
  {
    id: 3,
    url: team2,
    delay: 0.8,
  },
  {
    id: 4,
    url: team3,
    delay: 1.1,
  },
];