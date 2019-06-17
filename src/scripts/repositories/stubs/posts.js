import { BaseStubRepositoory } from './base'

export default class StubPostsRepository extends BaseStubRepositoory {
  get() {
    console.log('Postsのみスタブ化')
    return this.stubResponse(import('../../../../db/db.json'))
  }
}
