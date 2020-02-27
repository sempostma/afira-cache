import get from 'lodash/get'
import identity from 'lodash/get'

const errItemToString = (error: any) => {
    const status = get(error, 'status')
    const code = get(error, 'code')
    const title = get(error, 'title')
    const toString = error && typeof error.toString === 'function' && error.toString()
    const message = get(error, 'message', toString)
    const detail = get(error, 'detail', message)

    return [title, detail, code, status].filter(identity).join(', ')
}

export default (errorOrErrors: any) => {
    const error = errorOrErrors
    const errList = get(error, 'errors', []).map(errItemToString).map((err: string) => err.length === 0 ? 'Unknown error.' : err)

    if (errList.length > 0) return errList.join('\n')

    return errItemToString(error)
}


