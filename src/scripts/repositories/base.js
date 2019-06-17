import axios from 'axios'

const baseDomain = 'http://localhost:3000'
const baseURL = `${baseDomain}`

const client = axios.create({
  baseURL
})

export default client

export class BaseRepository {
  static get stub() {
    return false
  }

  constructor() {
    this.$_client = client
  }
}
