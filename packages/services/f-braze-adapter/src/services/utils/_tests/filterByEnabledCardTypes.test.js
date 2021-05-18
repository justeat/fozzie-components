import filterByEnabledCardTypes from '../filterByEnabledCardTypes';

const mockTypes = [
    'a',
    'b'
];

const mockCards = [
    {
        id: 1,
        type: 'a'
    },
    {
        id: 2,
        type: 'b'
    },
    {
        id: 3,
        type: 'c'
    },
    {
        id: 4
    }
];

describe('filterByEnabledCardTypes', () => {
    it('should filter cards by type key', () => {
        // Act
        const filteredCards = filterByEnabledCardTypes(mockCards, mockTypes);

        // Assert
        expect(filteredCards.length).toEqual(mockCards.length - 1);
    });

    it('should not filter a card if no type key is present', () => {
        // Act
        const filteredCards = filterByEnabledCardTypes(mockCards, mockTypes);

        // Assert
        expect(filteredCards).toEqual(expect.arrayContaining([{ id: 4 }]));
    });

    it('should return all cards if passed enabledCardTypes array is empty', () => {
        // Act
        const filteredCards = filterByEnabledCardTypes(mockCards, []);

        // Assert
        expect(filteredCards.length).toEqual(mockCards.length);
    });
});
