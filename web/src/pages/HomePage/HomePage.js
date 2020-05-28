import { Link, routes } from '@redwoodjs/router'
import BlogLayout from 'src/layouts/BlogLayout'
import BlogPostsCell from 'src/components/BlogPostsCell'

const HomePage = () => {
  return (
    <div>
      <BlogLayout>
        <BlogPostsCell />
      </BlogLayout>
      <Link to={routes.about()}>About Page</Link>
    </div>
  )
}

export default HomePage
