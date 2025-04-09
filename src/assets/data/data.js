import cursol from "../images/img/DUF_4113-v-ok-1-1170x780.jpg";
import cursol1 from "../images/img/Blog-6-scaled.webp";
import cursol2 from "../images/img/RESIDENT-EDINBURGH-JUNIOR-SUITE-CASTLE-VIEW-PROMINENT-1400x928.jpg";
// cursol-images
import service from "../images/img/club_one-bedroom_executive-suite.jpg";
// services-images
import team1 from "../images/img/team-1.jpg";
import team2 from "../images/img/team-2.jpg";
import team3 from "../images/img/team-3.jpg";
import team4 from "../images/img/team-4.jpg";
// team-images
import image from "../images/img/room.jpg";
import image1 from "../images/img/65045f093c166fdddb4a94a5_x-65045f0266217.webp";
import image2 from "../images/img/LUMI-KITCHEN.jpg";
import image3 from "../images/img/virunga-1.jpg";
// images
import service1 from "../images/img/1407953244000-177513283.webp";
import service2 from "../images/img/daldtn-omni-dallas-bobs-dinner-1170.jpg";
import service3 from "../images/img/Pick-out-a-theme.jpg";
import service4 from "../images/img/yoga-hotel-monaco-joe-longo-940x540.jpg";
import service5 from "../images/img/942db23a-16c1-441f-a948-baf37c1f3f8f_1078b037.webp";
import service6 from "../images/img/Screenshot-2024-08-02-at-12.32.24.png";
// room
import room1 from "../images/img/room.jpg";
import froom from '../images/img/Open-concept-living-room-TWP0380-CV1hghhEaBBAkX_uv8K9cw-3313dfd39e2b42f5b37f43b8dfa14e08.jpg'

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
    imgSrc: cursol2,
    title: "Discover A Brand Luxurious Hotel",
    subtitle: "Luxury Living",
    buttons: [
      { text: "Our Rooms", variant: "contained", color: "primary" },
      { text: "Book A Room", variant: "outlined", color: "inherit" },
    ],
  },
];
export const images = [
  { src: image, width: "85%", margin: "15% 0 0 0", delay: 0.1 },
  { src: image1, width: "100%", delay: 0.3 },
  { src: image2, width: "70%", align: "right", delay: 0.5 },
  { src: image3, width: "95%", align: "left", delay: 0.7 },
];

export const initialRooms = [
  {
    id: 1,
    name: "Junior Suite",
    price: 90,
    beds: 3,
    baths: 2,
    description:
      "A Junior Suite in a hotel is a room type that offers a larger space than a standard room, typically including a separate sleeping area and a living area, but in a smaller size than a full suite. ",
    image: cursol,
  },
  {
    id: 2,
    name: "Executive Suite",
    price: 100,
    beds: 3,
    baths: 2,
    description:
      "An executive suite in a hotel is a larger, more luxurious room designed for business travelers, often featuring a separate living area, a work desk, and amenities like a mini-bar, and complimentary Wi-Fi. ",
    image: service,
  },
  {
    id: 3,
    name: "Super Deluxe",
    price: 100,
    beds: 3,
    baths: 2,
    description:
      "The room features a private ensuite bathroom with both hot and cold shower options, a cozy sitting area, and a balcony offering stunning views of Kigali city.",
    image: room1,
  },
];
export const additionalRooms = [
  {
    id: 4,
    name: "Deluxe Room",
    price: 120,
    beds: 2,
    baths: 1,
    description: "Deluxe Room: A step up from the standard room, a deluxe room offers more space, upgraded furnishings, and additional amenities. Deluxe rooms often feature better views, larger beds, and more luxurious bathroom fixtures.",
    image: service,
  },
  {
    id: 5,
    name: "Presidential Suite",
    price: 250,
    beds: 2,
    baths: 1,
    description: " a Presidential Suite is the most luxurious and expansive suite, often featuring multiple rooms, private amenities, and designed to accommodate high-profile guests. ",
    image: cursol,
  },
  {
    id: 6,
    name: "Family Room",
    price: 180,
    beds: 2,
    baths: 1,
    description: "A family room is an informal, all-purpose room designed as a recreation center and informal gathering place for family members, often used for activities like watching TV, playing games, or relaxing. ",
    image: froom,
  },
];
export const testimonials = [
  {
    id: 1,
    text: "Hotel Domestique set against the background of the Blue Ridge mountains was a delight! The setting is beautiful, the staff could not be any more pleasant and accommodating and the food was fantastic! We look forward to a return stay soon!",
    name: "Connie R.",
    profession: "Software Engineer",
    image: cursol,
  },
  {
    id: 2,
    text: "The hotel is lovely, the setting is serene and beautiful at the foot of the Blue Ridge Mountains, the staff is professional, friendly, and helpful. The restaurant and bar are exceptional.",
    name: "Deborah B.",
    profession: "Profession of Science",
    image: service,
  },
  {
    id: 3,
    text: "This hotel was amazing! It is beautifully decorated and has very comfortable beds. The restaurant was fantastic. The staff was very friendly and helpful. The pool was perfect. There are so many special little niches to sit in. Would highly recommend it.",
    name: "Salena Z.",
    profession: "Constructor",
    image: cursol,
  },
  {
    id: 4,
    text: "My daughter and I just enjoyed the most wonderful evening together. The pool was so beautiful with the mountains in the background. We thoroughly enjoyed our dinner and breakfast the following morning. We had a wonderful nights rest in the most comfortable beds. Most of all the staff is outstanding. We can't wait to return again with more friends and family.",
    name: "Deborah B.",
    profession: "Profession of Science",
    image: service,
  },
  {
    id: 5,
    text: "I am a wedding photographer based in Charlotte. I shot two weddings here and have one coming up in 2025 and I cant recommend this place enough. This venue is so beautiful! a little taste of Italy in SC and so incredibly close to center city Greenville. Its a photographers dream! 10/10 recommend any bride thinking about getting married here.",
    name: "Avonne Photography",
    profession: "Construction Engineer",
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
    url: service5,
    delay: 0.2,
  },
  {
    id: 2,
    url: froom,
    delay: 0.5,
  },
  {
    id: 3,
    url: service,
    delay: 0.8,
  },
  {
    id: 4,
    url: service3,
    delay: 1.1,
  },
];
export const services = [
  {
    title: "Rooms & Appartment",
    icon: service1,
    description:
      "A standard room is one of the cheapest hotel rooms, and usually includes a double or queen bed. It's usually a rectangular space with a private bathroom, a desk, an armchair or sofa and perhaps a cupboard and dressing table.",
    delay: 0.1,
  },
  {
    title: "Food & Restaurant",
    icon: service2,
    description:
      "/ˈres·tər·ənt, -təˌrɑnt/ a place of business where people can choose a meal to be prepared and served to them at a table, and for which they pay, usually after eating: a Chinese/Italian/Mexican restaurant.",
    delay: 0.2,
  },
  {
    title: "Spa & Fitness",
    icon: service6,
    description:
      "Beauty and Skin Care: Health and fitness spas often provide a wide range of beauty and skin care treatments. These may include facials, body wraps, massages, and manicures/pedicures.",
    delay: 0.3,
  },
  {
    title: "Sports & Gaming",
    icon: service5,
    description:
      "Gamification, or the use of game features and ideas in non-game situations, has found a home in the hospitality sector where it adds elements of engagement, satisfaction and entertainment to the guest experience.",
    delay: 0.4,
  },
  {
    title: "Event & Party",
    icon: service3,
    description:
      "Known for its exclusive 5-star address and flexible meeting and conference rooms, including an 800-seat ballroom and a 500-seat auditorium. Provides a variety of indoor and outdoor event spaces, suitable for both business meetings and weddings, and is centrally located. ",
    delay: 0.5,
  },
  {
    title: "GYM & Yoga",
    icon: service4,
    description:
      "In Remera, Kigali, hotels like The Hut Hotel Rwanda offer state-of-the-art gyms with modern equipment and personal training, while Heaven Rwanda provides a gym with Technogym equipment and yoga sessions. ",
    delay: 0.6,
  },
];
