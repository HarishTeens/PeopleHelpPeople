
export function handle(state, action) {

    if (action.input.function === 'donate') {
        if (typeof action.input.donorId === 'undefined') {
            throw new ContractError(`DonorId cant be null`)
        }
        if (typeof action.input.amount === 'undefined') {
            throw new ContractError(`amount cant be null`)
        }

        state.funds.records[action.input.donorId] = action.input.amount
        return { state }
    }
    throw new ContractError('Invalid input')
}
