import { BaseStubRepositoory } from './base'

export default class StubPostsRepository extends BaseStubRepositoory {
  get() {
    console.log('Postsのみスタブ化')
    return this.stubResponse(import('../../../../db/db.json'))
  }

  getPost(id) {
    return import('../../../../db/db.json').then(data => {
      const post = data.posts.find(ps => ps.id === id)
      if (!post) {
        return this.stubResponse('', 404)
      }
      return this.stubResponse(Promise.resolve(post))
    })
  }
}
