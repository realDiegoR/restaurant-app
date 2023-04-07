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
					place: "645 S Cobb Pkway SE, Duluth, GA 30096",
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
			breakfastTitle: "Desayuno",
			mobileSectionButtons: [
				{
					id: uuidv4(),
					name: "Principal",
					keyname: "main",
				},
				{
					id: uuidv4(),
					name: "Desayuno",
					keyname: "breakfast",
				},
			],
			main: [
				{
					id: uuidv4(),
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
				{
					id: uuidv4(),
					title: "menú infantil",
					seeImageText: "Ver Imagen",
					color: "yellow",
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
				{
					id: uuidv4(),
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
				{
					id: uuidv4(),
					title: "Bebidas",
					seeImageText: "Ver Imagen",
					orientation: "left",
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
			],
			breakfast: [
				{
					id: uuidv4(),
					title: "Empanadas",
					meals: [
						{
							id: uuidv4(),
							text: "Elaboradas con harina de maíz rellenos: carne, molida, jamón y queso, solo queso o pollo",
							price: 2.99,
						},
					],
				},
				{
					id: uuidv4(),
					title: "tequeños",
					orientation: "left",
					meals: [
						{
							id: uuidv4(),
							text: "Elaborados con harina de trigo, rellenos de queso",
							price: 2.5,
						},
					],
				},
				{
					id: uuidv4(),
					title: "Pastelitos",
					meals: [
						{
							id: uuidv4(),
							text: "Elaborados con harina de trigo. Rellenos: carne molida, jamón y queso, solo queso, pollo o pizza",
							price: 2.99,
						},
					],
				},
				{
					id: uuidv4(),
					title: "mandocas",
					color: "yellow",
					orientation: "left",
					meals: [
						{
							id: uuidv4(),
							text: "Elaboradas con harina de maíz, plátano, queso y panela",
							price: 2.5,
						},
					],
				},
				{
					id: uuidv4(),
					title: "tequeyoyo",
					orientation: "left",
					meals: [
						{
							id: uuidv4(),
							text: "Hecho con harina de trigo, relleno de plátano, queso y jamón",
							price: 3.5,
						},
					],
				},
				{
					id: uuidv4(),
					title: "papitas de yuca",
					meals: [
						{
							id: uuidv4(),
							text: "Una bola hecha de yuca rellena con queso",
							price: 2.5,
						},
					],
				},
				{
					id: uuidv4(),
					title: "Arepa",
					color: "red",
					meals: [
						{
							id: uuidv4(),
							text: "Hecha con harina de maíz. Rellenos: Carne mechada, pollo esmechado, jamón y queso, solo queso, pollo o huevos",
							price: 9.99,
						},
					],
				},
				{
					id: uuidv4(),
					title: "desayuno criollo",
					color: "red",
					orientation: "left",
					meals: [
						{
							id: uuidv4(),
							text: "Hecha con harina de maíz. Rellenos: Carne mechada, pollo esmechado, jamón y queso, solo queso, pollo o huevos",
							price: 2.99,
						},
					],
				},
			],
			cartButtonText: "Ver Carrito",
		},
		cart: {
			title: "Carrito",
			callToAction: "Hacer Pedido",
			goBack: "Seguir Comprando",
		},
		addItemPreview: {
			title: "Cuantos quieres agregar al carrito?",
			success: "Agregado con éxito",
			callToAction: "Agregar",
			cancel: "Cancelar",
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
