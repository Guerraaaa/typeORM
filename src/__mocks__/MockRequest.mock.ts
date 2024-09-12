import { Params } from 'express-serve-static-core'
import { Request } from 'express'

export const MockRequest = ({params, query}: {params?: Params, query?: Params}): Request => {
    const request = {
        params: params || {},
        query: query || {}
    } as unknown

    return request as Request
}