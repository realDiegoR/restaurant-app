interface Props {
	css: { readonly [key: string]: string };
	mealStyle: {
		colorSet: 1 | 2 | 3;
		orientation: 'start' | 'end';
	};
	compName: string;
}

const colorSet = (styles: Props['css'], name: string) => ({
	1: '',
	2: styles[`${name}--yellow`],
	3: styles[`${name}--red`],
});

const orientationSet = (styles: Props['css'], name: string) => ({
	end: '',
	start: styles[`${name}--left`],
});

export const getMealStyle = ({ css, mealStyle, compName }: Props) => {
	const colors = colorSet(css, compName);
	const orientation = orientationSet(css, compName);

	return [colors[mealStyle.colorSet], orientation[mealStyle.orientation]];
};
