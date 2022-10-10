import { Router, Route, Set } from '@redwoodjs/router'

import PostsLayout from 'src/layouts/PostsLayout'
import BlogLayout from 'src/layouts/BlogLayout'

const Routes = () => {
  return (
    <Router>
      <Set wrap={PostsLayout}>
      <Route path="/admin/posts/new" page={PostNewPostPage} name="newPost" />
        <Route path="/admin/posts/{id:Int}/edit" page={PostEditPostPage} name="editPost" />
        <Route path="/admin/posts/{id:Int}" page={PostPostPage} name="post" />
        <Route path="/admin/posts" page={PostPostsPage} name="posts" />
      </Set>
      <Set wrap={BlogLayout}>
      <Route path="/contact" page={ContactPage} name="contact" />
        <Route path="/about" page={AboutPage} name="about" />
        <Route path="/" page={HomePage} name="home" />
        <Route path="/article/{id:Int}" page={ArticlePage} name="article" />
      </Set>
      <Route notfound page={NotFoundPage} />
    </Router>
  )
}

export default Routes