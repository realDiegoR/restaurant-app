import { useState } from 'react';
import { useLocaleContext } from '@context/Locale';
import { useCart } from '@hooks/useCart';
import { MealCategory } from '@components/MealCategory/MealCategory';
import { MealItem } from '@components/MealItem/MealItem';
import { Cart } from '@components/Cart/Cart';
import { CartButton } from '@components/CartButton/CartButton';
import { AddItemPreview } from '@components/AddItemPreview/AddItemPreview';
import imagotypeAvif from '@images/brand/veranalia_imagotype.avif';
import imagotypeWebp from '@images/brand/veranalia_imagotype.webp';
import styles from './MenuPage.module.scss';
import Head from 'next/head';

type Modal = 'itemPreview' | 'cart' | null;

const MenuPage = () => {
	const {
		es: { foodMenu },
	} = useLocaleContext();
	const { cartItems, itemCount, totalPrice, addItem, deleteItem, itemPreview, addPreviewItem } =
		useCart();
	const [currentSection, setCurrentSection] = useState('main');
	const [modal, setModal] = useState<Modal>(null);

	const changeSection = (section: string) => {
		setCurrentSection(section);
	};

	const openItemPreviewModal = (item: ICartItem) => {
		addPreviewItem(item);
		setModal('itemPreview');
	};

	const closeModal = () => {
		setModal(null);
	};

	return (
		<>
			<Head>
				<title>Menu | Veranalia</title>
			</Head>
			<main className={styles['MenuPage']}>
				<div className={styles['Wrapper']}>
					<picture
						className={`${styles['MenuPage-imagotype']} ${styles['MenuPage-imagotype--mobile']}`}
					>
						<source srcSet={imagotypeAvif.src} type="image/avif" />
						<img src={imagotypeWebp.src} alt="Veranalia Imagotype" />
					</picture>
					<nav className={styles['MenuPage-nav']}>
						<ul className={styles['MenuPage-navList']}>
							{foodMenu.mobileSectionButtons.map(({ id, name, keyname }) => (
								<li
									key={id}
									className={`${styles['MenuPage-navItem']}} ${
										currentSection === keyname ? styles['MenuPage-navItem--active'] : ''
									}`}
								>
									<button type="button" onClick={() => changeSection(keyname)}>
										{name}
									</button>
								</li>
							))}
						</ul>
					</nav>
					<div className={styles['MenuPage-sectionDivider']}>
						<section
							className={`${styles['MenuPage-foodSection']} ${
								currentSection === 'main' ? styles['MenuPage-foodSection--visible'] : ''
							}`}
						>
							<picture
								className={`${styles['MenuPage-imagotype']} ${styles['MenuPage-imagotype--desktop']}`}
							>
								<source srcSet={imagotypeAvif.src} type="image/avif" />
								<img src={imagotypeWebp.src} alt="Veranalia Imagotype" />
							</picture>
							{foodMenu.main.map((foodCategory) => (
								<MealCategory key={foodCategory.id} type="normal" {...foodCategory}>
									{(key, mealData: IMealItem) => (
										<MealItem
											key={key}
											{...mealData}
											color={foodCategory.color}
											orientation={foodCategory.orientation}
											openModal={(item: ICartItem) => openItemPreviewModal(item)}
										/>
									)}
								</MealCategory>
							))}
						</section>
						<section
							className={`${styles['MenuPage-foodSection']} ${
								currentSection === 'breakfast' ? styles['MenuPage-foodSection--visible'] : ''
							}`}
						>
							<h2 className={`${styles['MenuPage-title']} ${styles['Wrapper']}`}>
								{foodMenu.breakfastTitle}
							</h2>
							{foodMenu.breakfast.map((foodCategory) => (
								<MealCategory key={foodCategory.id} {...foodCategory} type="expanded">
									{(key, mealData) => (
										<MealItem
											key={key}
											{...mealData}
											color={foodCategory.color}
											orientation={foodCategory.orientation}
											openModal={(item: ICartItem) => openItemPreviewModal(item)}
										/>
									)}
								</MealCategory>
							))}
						</section>
					</div>
					<CartButton
						itemCount={itemCount}
						openModal={() => setModal('cart')}
						text={foodMenu.cartButtonText}
					/>
					{modal === 'cart' && (
						<Cart
							itemCount={itemCount}
							cartItems={cartItems}
							totalPrice={totalPrice}
							deleteItem={deleteItem}
							onClose={() => closeModal()}
						/>
					)}
					{modal === 'itemPreview' && itemPreview && (
						<AddItemPreview item={itemPreview} addItem={addItem} onClose={() => closeModal()} />
					)}
				</div>
			</main>
		</>
	);
};

export default MenuPage;
