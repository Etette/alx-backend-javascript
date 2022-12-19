function getCurrentyear() {
	const date = new Date();
	return date.getFullYear();
}

export default function getBudgetForCurrentYear(income, gdp, capita) {
	const budget = {
		[`income-${getCurrentYear()}`]: income,
		[`gdp-${getCurrentYear()}`]: gdp,
		[`capita-${getCuurentYear()}`]: capita,
	};
	return budget;
}
