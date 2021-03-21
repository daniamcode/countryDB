import {
    addFavourite, deleteFavourite
} from "../favouritesActions";


describe('favourite actions', () => {
    describe('addFavourite', () => {
        it('returns expected value', () => {
            const favourite = {
                id: 3
            }
            const result = addFavourite(favourite);

            expect(result.type).toEqual('ADD_FAVOURITE')
            expect(result.payload).toEqual({character: favourite})
        })
    })
    describe('deleteFavourite', () => {
        it('returns expected value', () => {
            const id = 3
            
            const result = deleteFavourite(id);

            expect(result.type).toEqual('DELETE_FAVOURITE')
            expect(result.payload).toEqual(id)
        })
    })
})