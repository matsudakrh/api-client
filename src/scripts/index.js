import 'babel-polyfill'
import { RepositoryFactory } from './repository-factory'

const PostsRepository = RepositoryFactory.get('posts')
PostsRepository.get().then(console.log)
PostsRepository.getPost(3).then(console.log)

const CommentsRepository = RepositoryFactory.get('comments')
CommentsRepository.get().then(console.log)
CommentsRepository.getComment(1).then(console.log)
CommentsRepository.getComment(2).then(console.log)

const MembersRepository = RepositoryFactory.get('members')
MembersRepository.get().then(console.log)
MembersRepository.getMember(1).then(console.log)
