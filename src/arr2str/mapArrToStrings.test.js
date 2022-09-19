const mapArrToStrings = require('./mapArrToStrings')

describe('mapArrToStrings', () => {
    test('Корректное значение', () => { 
        expect(mapArrToStrings([1, 2, 3])).toEqual(['1', '2', '3'])
     })
     test('Смешанные значения', () => { 
        expect(mapArrToStrings([1, 2, 3, null, undefined, '2'])).toEqual(['1', '2', '3'])
     })
     test('Пустое значение', () => { 
        expect(mapArrToStrings([])).toEqual([])
     })
     test('Отрицательное значение', () => { 
        expect(mapArrToStrings([1, 2, 3])).not.toEqual([1, 2, 3, 4])
     })
})