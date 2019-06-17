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
    this.initClient()
  }

  // 別の API クライアントを差し込みたい場合にoverrideします
  initClient() {
    this.$_client = client
  }
}
