import { createContext, useContext } from "react";
import { v4 as uuidv4 } from "uuid";
import pataconAvif from "@assets/ui/patacon.avif";
import pataconWebp from "@assets/ui/patacon.webp";

const localesData = {
	es: {
		navBar: {
			navLinks: [
				{ id: uuidv4(), text: "home", path: "/" },
				{ id: uuidv4(), text: "ver menú", onlyMobile: true, path: "/menu" },
				{ id: uuidv4(), text: "quienes somos", path: "/who-are-we" },
				{ id: uuidv4(), text: "lo más popular", path: "/most-popular" },
				{ id: uuidv4(), text: "ubicación", path: "/location" },
				{ id: uuidv4(), text: "horario", path: "/schedule" },
				{ id: uuidv4(), text: "testimonios", path: "/testimonies" },
			],
			callToAction: "Ver Menú",
		},
		whoAreWe: {
			title: "¿Quiénes Somos?",
			salesPitchSentences: [
				{
					id: uuidv4(),
					text: "Déjese sorprender por el sabor auténtico de Venezuela en cada bocado en nuestro restaurante de hamburguesas y frituras.",
				},
				{
					id: uuidv4(),
					text: "Ofrecemos una amplia variedad de opciones de hamburguesas con ingredientes frescos y frituras caseras preparadas con recetas tradicionales venezolanas",
				},
				{
					id: uuidv4(),
					text: "¡Ven y experimenta la verdadera comida venezolana hoy mismo!",
				},
			],
			callToAction: "Ver Menú",
		},
		mostPopular: {
			title: "Lo más popular",
			promotionText: "¡Promoción!",
			items: [
				{
					id: uuidv4(),
					isPromotion: true,
					title: "Patacón",
					price: 10,
					description:
						"Platano frito, carne mechada, queso blanco, aguacate, ajo, salsa.",
					img: {
						src: {
							avif: pataconAvif,
							webp: pataconWebp,
						},
						alt: "Patacón de Veranalia",
					},
					callToAction: "añadir a la compra",
				},
			],
		},
		whereAreWe: {
			title: "¿dónde nos situamos?",
			locations: [
				{
					id: uuidv4(),
					name: "Duluth",
					place: "3099 Breckinridge Blvd, Duluth, GA 30096",
					phoneNumber: "(XXX) XXX XXXX",
					coordinates: {
						alt: "",
						lat: "",
					},
				},
			],
		},
		schedule: {
			title: "Nuestro Horario",
			days: [
				{
					id: uuidv4(),
					name: "lunes",
					openingHours: "8:00 AM - 9:00 PM",
					dayId: 1,
				},
				{
					id: uuidv4(),
					name: "martes",
					openingHours: "8:00 AM - 9:00 PM",
					dayId: 2,
				},
				{
					id: uuidv4(),
					name: "miércoles",
					openingHours: "8:00 AM - 9:00 PM",
					dayId: 3,
				},
				{
					id: uuidv4(),
					name: "jueves",
					openingHours: "8:00 AM - 9:00 PM",
					dayId: 4,
				},
				{
					id: uuidv4(),
					name: "viernes",
					openingHours: "8:00 AM - 9:00 PM",
					dayId: 5,
				},
				{
					id: uuidv4(),
					name: "sábado",
					openingHours: "8:00 AM - 11:30 PM",
					dayId: 6,
				},
				{
					id: uuidv4(),
					name: "domingo",
					openingHours: "8:00 AM - 11:30 PM",
					dayId: 0,
				},
			],
		},
		footer: {
			followUs: {
				title: "Síguenos",
				icons: [
					{
						id: uuidv4(),
						name: "facebook",
					},
					{
						id: uuidv4(),
						name: "instagram",
					},
				],
			},
			rateUs: {
				title: "Califícanos",
				icons: [
					{
						id: uuidv4(),
						name: "google",
					},
				],
			},
			lovelyNote: "Desarrolado por realdiegor",
		},
		testimonies: {
			title: "Testimonios de nuestros clientes",
		},
		foodMenu: {
			mobileSectionButtons: [
				{
					id: uuidv4(),
					name: "Principal",
				},
				{
					id: uuidv4(),
					name: "Desayuno",
				},
			],
			categories: {
				appetizers: {
					title: "Entradas",
					seeImageText: "Ver Imagen",
					meals: [
						{
							id: uuidv4(),
							text: "Servicio de tequeños - 6 unidades",
							price: 6.99,
						},
						{
							id: uuidv4(),
							text: "Servicio de empanadas de carne o pollo - 6 unidades",
							price: 6.99,
						},
						{
							id: uuidv4(),
							text: "Servicio de mandocas con nata y queso - 2 unidades",
							price: 7.99,
						},
						{
							id: uuidv4(),
							text: "Papitas fritas",
							price: 3.99,
						},
					],
				},
				children: {
					title: "menú infantil",
					seeImageText: "Ver Imagen",
					meals: [
						{
							id: uuidv4(),
							text: "Nuggets de pollo con papas fritas",
							price: 6.99,
						},
						{
							id: uuidv4(),
							text: "Mini hamburguesa con papas fritas",
							price: 8.99,
						},
					],
				},
				extras: {
					title: "Extras",
					seeImageText: "Ver Imagen",
					meals: [
						{
							id: uuidv4(),
							text: "Queso frito",
							price: 2.99,
						},
						{
							id: uuidv4(),
							text: "Queso de mano",
							price: 2.99,
						},
						{
							id: uuidv4(),
							text: "Carne de hamburguesa",
							price: 2.5,
						},
						{
							id: uuidv4(),
							text: "Arepa soltera",
							price: 1.5,
						},
						{
							id: uuidv4(),
							text: "Pollo, carne, chuleta o pernil",
							price: 2.5,
						},
						{
							id: uuidv4(),
							text: "Lomito",
							price: 4.0,
						},
					],
				},
				drinks: {
					title: "Bebidas",
					seeImageText: "Ver Imagen",
					meals: [
						{
							id: uuidv4(),
							text: "Coke, Diet Coke, Fanta o Sprite",
							price: 1.99,
						},
						{
							id: uuidv4(),
							text: "Fresskolita, Malta o Nestea",
							price: 2.5,
						},
						{
							id: uuidv4(),
							text: "Coke, Diet Coke, Fanta o Sprite",
							price: 1.99,
						},
					],
				},
				breakfast: {
					title: "Desayuno",
					seeImageText: "Ver Imagen",
					meals: [
						{
							id: uuidv4(),
							title: "Empanadas",
							text: "Elaboradas con harina de maíz rellenos: carne, molida, jamón y queso, solo queso o pollo",
							price: 2.99,
						},
						{
							id: uuidv4(),
							title: "tequeños",
							text: "Elaborados con harina de trigo, rellenos de queso",
							price: 2.5,
						},
						{
							id: uuidv4(),
							title: "Pastelitos",
							text: "Elaborados con harina de trigo. Rellenos: carne molida, jamón y queso, solo queso, pollo o pizza",
							price: 2.99,
						},
						{
							id: uuidv4(),
							title: "mandocas",
							text: "Elaboradas con harina de maíz, plátano, queso y panela",
							price: 2.5,
							backgroundColor: "yellow",
						},
						{
							id: uuidv4(),
							title: "tequeyoyo",
							text: "Hecho con harina de trigo, relleno de plátano, queso y jamón",
							price: 3.5,
						},
						{
							id: uuidv4(),
							title: "papitas de yuca",
							text: "Una bola hecha de yuca rellena con queso",
							price: 2.5,
						},
						{
							id: uuidv4(),
							title: "Arepa",
							text: "Hecha con harina de maíz. Rellenos: Carne mechada, pollo esmechado, jamón y queso, solo queso, pollo o huevos",
							price: 9.99,
							backgroundColor: "red",
						},
						{
							id: uuidv4(),
							title: "desayuno criollo",
							text: "Hecha con harina de maíz. Rellenos: Carne mechada, pollo esmechado, jamón y queso, solo queso, pollo o huevos",
							price: 2.99,
							backgroundColor: "red",
						},
					],
				},
			},
			cartButtonText: "Ver Carrito",
		},
		cart: {
			title: "Carrito",
			callToAction: "Hacer Pedido",
			goBack: "Seguir Comprando",
		},
	},
};

export const LocaleContext = createContext();

export const Locale = ({ children }) => {
	return (
		<LocaleContext.Provider value={localesData}>
			{children}
		</LocaleContext.Provider>
	);
};

export const useLocaleContext = () => {
	return useContext(LocaleContext);
};
