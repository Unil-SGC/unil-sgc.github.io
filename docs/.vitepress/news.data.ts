import { postsLoader, type Post } from './posts'

declare const data: Post[]
export { data }

export default postsLoader('news')
