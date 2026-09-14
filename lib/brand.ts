export const COUNTRIES = [
  { code: "MX", name: "México" },
  { code: "CO", name: "Colombia" },
  { code: "AR", name: "Argentina" },
  { code: "CL", name: "Chile" },
  { code: "PE", name: "Perú" },
  { code: "EC", name: "Ecuador" },
  { code: "CR", name: "Costa Rica" },
  { code: "PA", name: "Panamá" },
  { code: "GT", name: "Guatemala" },
  { code: "UY", name: "Uruguay" },
  { code: "BO", name: "Bolivia" },
  { code: "PY", name: "Paraguay" },
  { code: "DO", name: "República Dominicana" },
  { code: "HN", name: "Honduras" },
  { code: "SV", name: "El Salvador" },
  { code: "NI", name: "Nicaragua" },
  { code: "VE", name: "Venezuela" },
] as const;

export type CountryCode = (typeof COUNTRIES)[number]["code"];

export const STORAGE_KEY = "restia-country";

export const LANDING_IMAGES = {
  hero: {
    src: "/generated/landing/hero.png",
    alt: "Variedad de platos Rest ia — burgers, tacos, pollo, pizza y bowls — sobre mesa casual con espacio libre a la izquierda",
  },
  comboSpread: {
    src: "/generated/landing/combo-spread.png",
    alt: "Combo compartido con burger, tacos, papas y bebidas en mesa de local casual",
  },
  comboSolo: {
    src: "/generated/landing/combo-solo.png",
    alt: "Combo individual con plato principal, papas y bebida sobre mesa casual",
  },
  comboOficina: {
    src: "/generated/landing/combo-oficina.png",
    alt: "Combo de equipo con cuatro platos mixtos listos para compartir en la oficina",
  },
} as const;

export const MENU_CATEGORIES = [
  {
    id: "burgers",
    title: "Burgers",
    description: "Clásicas, dobles y con todo lo que se te ocurra.",
    imageSrc: "/generated/landing/menu-burgers.png",
    imageAlt:
      "Hamburguesa jugosa con queso, tocino y vegetales frescos sobre servilleta kraft",
  },
  {
    id: "tacos",
    title: "Tacos",
    description: "Street flavor de norte a sur, al estilo Rest ia.",
    imageSrc: "/generated/landing/menu-tacos.png",
    imageAlt: "Tres tacos street-style con salsa y cilantro en plato cálido",
  },
  {
    id: "pollo",
    title: "Pollo",
    description: "Crujiente, jugoso y listo para compartir.",
    imageSrc: "/generated/landing/menu-pollo.png",
    imageAlt: "Piezas de pollo crujiente dorado en caja takeaway contemporánea",
  },
  {
    id: "pizza",
    title: "Pizza",
    description: "Porciones generosas para el antojo colectivo.",
    imageSrc: "/generated/landing/menu-pizza.png",
    imageAlt: "Porción de pizza con queso derretido levantada de la pie",
  },
  {
    id: "bowls",
    title: "Bowls",
    description: "Frescos, versátiles y fáciles de personalizar.",
    imageSrc: "/generated/landing/menu-bowls.png",
    imageAlt: "Bowl colorido con vegetales asados, proteína y greens",
  },
  {
    id: "sides",
    title: "Sides & drinks",
    description: "Papas, dips, refrescos y extras que rematan el pedido.",
    imageSrc: "/generated/landing/menu-sides.png",
    imageAlt: "Papas fritas, dips y bebidas frías en flat-lay sobre superficie clara",
  },
] as const;

export const COMBOS = [
  {
    id: "duo",
    title: "Dúo LatAm",
    price: "Desde $9.90",
    description: "Dos favoritos + papas + bebida. Ideal para compartir.",
    imageSrc: LANDING_IMAGES.comboSpread.src,
    imageAlt: LANDING_IMAGES.comboSpread.alt,
  },
  {
    id: "solo",
    title: "Solo mío",
    price: "Desde $6.50",
    description: "Tu plato principal, side y bebida. Rápido y sin drama.",
    imageSrc: LANDING_IMAGES.comboSolo.src,
    imageAlt: LANDING_IMAGES.comboSolo.alt,
  },
  {
    id: "oficina",
    title: "Oficina crew",
    price: "Desde $24",
    description: "Cuatro platos mixtos para el equipo. Pide y listo.",
    imageSrc: LANDING_IMAGES.comboOficina.src,
    imageAlt: LANDING_IMAGES.comboOficina.alt,
  },
] as const;

export const STEPS = [
  {
    n: "01",
    title: "Elige tu país",
    description: "Activamos menú, moneda y cobertura local.",
  },
  {
    n: "02",
    title: "Arma tu antojo",
    description: "Explora categorías, combos y extras.",
  },
  {
    n: "03",
    title: "Pide y disfruta",
    description: "Confirmas, rastreas y comes. Así de simple.",
  },
] as const;
