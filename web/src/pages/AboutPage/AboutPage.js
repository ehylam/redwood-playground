import { Link, routes } from '@redwoodjs/router'
import BlogLayout from 'src/layouts/BlogLayout'

const AboutPage = () => {
  return (
    <div>
      <BlogLayout>
        <h1>My About Page!</h1>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quam fugiat
          id, unde officia suscipit repudiandae natus ex est minus esse magni
          illo, nemo magnam, temporibus cumque sapiente illum dolore?
          Laudantium!
        </p>
      </BlogLayout>
    </div>
  )
}

export default AboutPage
