import axios from 'axios'
import { BaseRepository } from './base'

const baseDomain = 'http://localhost:3000/members'
const baseURL = `${baseDomain}`

const client = axios.create({
  baseURL
})

export class MembersRepository extends BaseRepository {
  constructor() {
    super()
    this.$_client = client
  }
  get() {
    return this.$_client.get()
  }
}
