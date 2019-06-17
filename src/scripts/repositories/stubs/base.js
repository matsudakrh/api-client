
export class BaseStubRepositoory {
  stubResponse(promise, status = 200) {
    if (status > 400) {
      return this.stubErrorResponse(status)
    }
    return promise.then(data => ({ data, status, __comment: 'stub response' }))
  }

  stubErrorResponse(status) {
    const err = new Error('stub error response')
    err.status = status
    return Promise.reject(err)
  }
}
