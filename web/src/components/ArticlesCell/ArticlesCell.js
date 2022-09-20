export const QUERY = gql`
  query ArticlesQuery {
    articles : posts {
      id
      title
      body
      createdAt
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>Empty</div>

export const Failure = ({ error }) => (
  <div style={{ color: 'red' }}>Error: {error.message}</div>
)

export const Success = ({ articles }) => {
  return articles.map((article) => (
    <article key={article.id}>
      <h2>{article.title}</h2>
      <div>{article.body}</div>
    </article>
  ))
}
