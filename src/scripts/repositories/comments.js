import { BaseRepository } from './base'

export class CommentsRepository extends BaseRepository {
  get() {
    return this.$_client.get('/comments')
  }

  getComment(id) {
    return this.$_client.get(`/comments/${id}`)
  }
}
