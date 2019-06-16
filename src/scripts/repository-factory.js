import PostsRepository from './repositories/posts'
import { CommentsRepository } from './repositories/comments'
import { MembersRepository } from './repositories/members'

const repositories = {
  posts: PostsRepository,
  comments: CommentsRepository,
  members: MembersRepository,
}

export const RepositoryFactory = {
  get: name => new repositories[name]
}
