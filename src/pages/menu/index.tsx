import { useState } from 'react';
import { useLocaleContext } from '@context/Locale';
import { useCart } from '@hooks/useCart';
import Head from 'next/head';
import Image from 'next/image';
import { Cart, AddItemPreview } from '@features/purchase';
import { MealSingle, MealList, CartButton } from '@features/menu';
import imagotype from '@images/brand/veranalia_imagotype.webp';
import styles from './menu.module.scss';

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
					<figure
						className={`${styles['MenuPage-imagotype']} ${styles['MenuPage-imagotype--mobile']}`}
					>
						<Image src={imagotype.src} alt="Veranalia Imagotype" width={250} height={150} />
					</figure>

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
							<figure
								className={`${styles['MenuPage-imagotype']} ${styles['MenuPage-imagotype--desktop']}`}
							>
								<Image src={imagotype.src} alt="Veranalia Imagotype" fill />
							</figure>
							{foodMenu.main.map((category) => (
								<MealList key={category.id} {...category}>
									{(mealData: ShortenedMeal) => (
										<MealList.Item
											key={mealData.id}
											{...mealData}
											style={category.style}
											openModal={(item: ICartItem) => openItemPreviewModal(item)}
										/>
									)}
								</MealList>
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
							{foodMenu.breakfast.map((meal) => (
								<MealSingle
									key={meal.id}
									{...meal}
									openModal={(item: ICartItem) => openItemPreviewModal(item)}
								/>
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
							onClose={closeModal}
						/>
					)}

					{modal === 'itemPreview' && itemPreview && (
						<AddItemPreview item={itemPreview} addItem={addItem} onClose={closeModal} />
					)}
				</div>
			</main>
		</>
	);
};

export default MenuPage;
