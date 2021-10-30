
export function handle(state, action) {

    if (action.input.function === 'enlist') {
        if (typeof action.input.listingId === 'undefined') {
            throw new ContractError(`PetitionId cant be null`)
        }
        if (state.collections.hasOwnProperty(action.input.listingId)) {
            throw new ContractError(`PetitionId already exists`)
        }
        state.collections[action.input.listingId] = 1
        return { state }
    }

    throw new ContractError('Invalid input')
}
