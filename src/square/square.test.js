const square = require('./square')

describe('square', () => {
    let mockValue;
    //Вызывается много раз
    beforeEach(() => {
        mockValue = Math.random()
    })
    //1 раз вызывается
    beforeAll(() => {

    })
    test('Корректное значение', () => { 
        expect(square(2)).toBe(4)
        expect(square(2)).toBeLessThan(5)
        expect(square(2)).toBeGreaterThan(3)
        expect(square(2)).not.toBeUndefined()
        const spyMathPow = jest.spyOn(Math, 'pow')
        square(2)
        expect(spyMathPow).toBeCalledTimes(1)
     })
     afterEach(() => {
        jest.clearAllMocks()
     })
     afterAll(() => {})
})