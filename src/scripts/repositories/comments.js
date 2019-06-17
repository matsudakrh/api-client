import { BaseRepository } from './base'

export class CommentsRepository extends BaseRepository {
  get() {
    return this.$_client.get('/comments').then(res => res.data)
  }
}
