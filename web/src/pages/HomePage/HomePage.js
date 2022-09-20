import { MetaTags } from '@redwoodjs/web'
import ArticleCell from 'src/components/ArticlesCell'

const HomePage = () => {
  return (
    <>
      <MetaTags title="Home" description="Home page" />
      <>
        <ArticleCell />
      </>
    </>
  )
}

export default HomePage