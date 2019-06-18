import axios from 'axios'
import { BaseRepository } from './base'

const baseDomain = 'http://localhost:3000/members'
const baseURL = `${baseDomain}`

const client = axios.create({
  baseURL
})

//
// APIクライアントを差し替えるパターン
//
export class MembersRepository extends BaseRepository {
  initClient() {
    this.$_client = client
  }

  get() {
    return this.$_client.get()
  }

  getMember(id) {
    return this.$_client.get(`${id}`)
  }
}
