import 'babel-polyfill'
import { RepositoryFactory } from './repository-factory'

const PostsRepository = RepositoryFactory.get('posts')
PostsRepository.get().then(console.log)

const CommentsRepository = RepositoryFactory.get('comments')
CommentsRepository.get().then(console.log)

const MembersRepository = RepositoryFactory.get('members')
MembersRepository.get().then(console.log)
