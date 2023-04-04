import { useState } from "react";
import { useLocaleContext } from "@context/Locale";
import { useCart } from "../../hooks/useCart";
import { MealCategory } from "@containers/MealCategory/MealCategory";
import { MealItem } from "@components/MealItem/MealItem";
import { Cart } from "@containers/Cart/Cart";
import { CartButton } from "@components/CartButton/CartButton";
import { AddItemPreview } from "../../containers/AddItemPreview/AddItemPreview";
import imagotypeAvif from "@assets/brand/veranalia_imagotype.avif";
import imagotypeWebp from "@assets/brand/veranalia_imagotype.webp";
import "./MenuPage.scss";

export const MenuPage = () => {
	const {
		es: { foodMenu },
	} = useLocaleContext();
	const {
		cartItems,
		itemCount,
		totalPrice,
		addItem,
		deleteItem,
		itemPreview,
		previewAddItem,
	} = useCart();
	const [currentSection, setCurrentSection] = useState("main");
	const [showCartModal, setShowCartModal] = useState(false);
	const [showItemPreviewModal, setShowItemPreviewModal] = useState(false);

	const changeSection = (section) => {
		setCurrentSection(section);
	};

	const openItemPreviewModal = (item) => {
		previewAddItem(item);
		setShowItemPreviewModal(true);
	};

	const closeModal = (modal) => {
		if (modal === "cart") return setShowCartModal(false);
		if (modal === "addItemPreview") {
			setShowItemPreviewModal(false);
			previewAddItem(null);
			return;
		}
	};

	return (
		<main className="MenuPage">
			<div className="Wrapper">
				<picture className="MenuPage-imagotype MenuPage-imagotype--mobile">
					<source
						srcSet={imagotypeAvif}
						type="image/avif"
						alt="Veranalia Imagotype"
					/>
					<img
						src={imagotypeWebp}
						type="image/webp"
						alt="Veranalia Imagotype"
					/>
				</picture>
				<nav className="MenuPage-nav">
					<ul className="MenuPage-navList">
						{foodMenu.mobileSectionButtons.map(({ id, name, keyname }) => (
							<li
								key={id}
								className={`MenuPage-navItem ${
									currentSection === keyname ? "MenuPage-navItem--active" : ""
								} `}
							>
								<button type="button" onClick={() => changeSection(keyname)}>
									{name}
								</button>
							</li>
						))}
					</ul>
				</nav>
				<div className="MenuPage-sectionDivider">
					<section
						className={`MenuPage-foodSection ${
							currentSection === "main" ? "MenuPage-foodSection--visible" : ""
						}`}
					>
						<picture className="MenuPage-imagotype MenuPage-imagotype--desktop">
							<source
								srcSet={imagotypeAvif}
								type="image/avif"
								alt="Veranalia Imagotype"
							/>
							<img
								src={imagotypeWebp}
								type="image/webp"
								alt="Veranalia Imagotype"
							/>
						</picture>
						{foodMenu.main.map((foodCategory) => (
							<MealCategory
								key={foodCategory.id}
								{...foodCategory}
								renderMealItem={({ key, itemInfo }) => (
									<MealItem
										key={key}
										itemInfo={itemInfo}
										color={foodCategory.color}
										orientation={foodCategory.orientation}
										openModal={(item) => openItemPreviewModal(item)}
									/>
								)}
							/>
						))}
					</section>
					<section
						className={`MenuPage-foodSection ${
							currentSection === "breakfast"
								? "MenuPage-foodSection--visible"
								: ""
						}`}
					>
						<h2 className="MealCategory-title Wrapper">
							{foodMenu.breakfastTitle}
						</h2>
						{foodMenu.breakfast.map((foodCategory) => (
							<MealCategory
								key={foodCategory.id}
								{...foodCategory}
								type="expanded"
								renderMealItem={({ key, itemInfo }) => (
									<MealItem
										key={key}
										itemInfo={itemInfo}
										color={foodCategory.color}
										orientation={foodCategory.orientation}
										openModal={(item) => openItemPreviewModal(item)}
									/>
								)}
							/>
						))}
					</section>
				</div>
				<CartButton
					itemCount={itemCount}
					openModal={() => setShowCartModal(true)}
					text={foodMenu.cartButtonText}
				/>
				{showCartModal && (
					<Cart
						itemCount={itemCount}
						cartItems={cartItems}
						totalPrice={totalPrice}
						deleteItem={deleteItem}
						onClose={() => closeModal("cart")}
					/>
				)}
				{showItemPreviewModal && (
					<AddItemPreview
						itemPreview={itemPreview}
						addItem={addItem}
						onClose={() => closeModal("addItemPreview")}
					/>
				)}
			</div>
		</main>
	);
};
