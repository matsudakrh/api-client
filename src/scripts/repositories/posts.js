import Repository from './base'

const resoure = '/posts'
export default class PostsRepository {
  get() {
    return Repository.get(`${resoure}`)
  }
}
