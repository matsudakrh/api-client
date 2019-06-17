import PostsRepository from './repositories/posts'
import { CommentsRepository } from './repositories/comments'
import { MembersRepository } from './repositories/members'

const repositories = {
  posts: PostsRepository,
  comments: CommentsRepository,
  members: MembersRepository,
}

export const RepositoryFactory = {
  get(name) {
    const klass = repositories[name]
    if (klass.stub) {
      return new klass.stubRepository
    }
    return new repositories[name]
  }
}
