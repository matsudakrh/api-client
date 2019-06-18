import axios from 'axios'

const baseDomain = 'http://localhost:3000'
const baseURL = `${baseDomain}`

const client = axios.create({
  baseURL
})

export class BaseRepository {
  static get stub() {
    return false
  }

  constructor() {
    this.result = null
    this.isSuccess = false
    // サーバーが正常ステータスでエラーメッセージを返した時
    this.isError = false
    // エラーをキャッチした時
    this.isFailed = false
    this.responseHandler = this.responseHandler.bind(this)
    this.errorResponseHandler = this.errorResponseHandler.bind(this)
    this.initClient()
  }

  // 別の API クライアントを差し込みたい場合にoverrideします
  initClient() {
    this.$_client = {
      get: (...props) => {
        return client.get(...props).then(this.responseHandler).catch(this.errorResponseHandler)
      },
      post: (...props) => {
        return client.post(...props).then(this.responseHandler).catch(this.errorResponseHandler)
      },
      patch: (...props) => {
        return client.patch(...props).then(this.responseHandler).catch(this.errorResponseHandler)
      },
      put: (...props) => {
        return client.put(...props).then(this.responseHandler).catch(this.errorResponseHandler)
      },
      delete: (...props) => {
        return client.delete(...props).then(this.responseHandler).catch(this.errorResponseHandler)
      },
    }
  }

  responseHandler(res) {
    const { data } = res
    this.result = data
    this.isSuccess = true
    return data
  }

  errorResponseHandler(e) {
    this.isFailed = true
    this.error = e
    return e
  }
}
