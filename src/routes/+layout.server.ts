import type { LayoutServerLoad } from "./$types"

export const load = (() => {
    return {
        stocks: ["TSLA", "AAPL"]
    }
}) satisfies LayoutServerLoad