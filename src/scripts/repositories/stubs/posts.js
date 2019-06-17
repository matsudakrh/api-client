export default class StubPostsRepository {
  get() {
    console.log('Postsのみスタブ化')
    return import('../../../../db/db.json')
  }
}
