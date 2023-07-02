const delay = require('./delay')

describe('getData', () => {
	test('right', async () => {
		const sum = await delay(() => 5 + 5, 1000)
		expect(sum).toBe(10)
	})
})