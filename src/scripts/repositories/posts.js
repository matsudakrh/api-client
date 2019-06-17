import { BaseRepository } from './base'
import StubPostsRepository from './stubs/posts'

const resoure = '/posts'
export default class PostsRepository extends BaseRepository {
  static get stub() {
    return super.stub || true
  }
  static get getStubRepository() {
    return StubPostsRepository
  }
  get() {
    return this.$_client.get(`${resoure}`)
  }
}
