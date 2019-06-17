import Repository from './base'
import StubPostsRepository from './stubs/posts'

const resoure = '/posts'
export default class PostsRepository {
  static get stub() {
    return super.stub || true
  }
  static get stubRepository() {
    return StubPostsRepository
  }
  get() {
    return Repository.get(`${resoure}`)
  }
}
