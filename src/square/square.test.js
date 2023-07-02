const square = require('./square')

describe('mapArrToStrings', () => {
	let mockValue;
	// Перед каждым тестом
	beforeEach(() => {
		mockValue = Math.random()
		//Добавили в бд
	})
	// Перед всеми тестами 1 раз
	beforeAll(() => {

	})

	test('Корректное значение', () => {
		expect(square(2)).toBe(4);
		expect(square(2)).toBeLessThan(5);
		expect(square(2)).toBeGreaterThan(3);
		expect(square(2)).not.toBeUndefined();

		const spyMathPow = jest.spyOn(Math, 'pow');
		square(2)
		expect(spyMathPow).toBeCalledTimes(1);

	})
	test('Корректное значение', () => {
		
		const spyMathPow = jest.spyOn(Math, 'pow');
		square(1)
		expect(spyMathPow).toBeCalledTimes(1);

	})

	afterEach(() => {
		// Удалили из бд
		jest.clearAllMocks()
	})
	afterAll(() => {
		
	})
})