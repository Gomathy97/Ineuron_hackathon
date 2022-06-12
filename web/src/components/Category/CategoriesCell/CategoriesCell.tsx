import type { FindCategories } from 'types/graphql'
import type { CellSuccessProps, CellFailureProps } from '@redwoodjs/web'

import { Link, routes } from '@redwoodjs/router'

import Categories from 'src/components/Category/Categories'
import * as GifLoader from 'src/components/Loading/Loading'

export const QUERY = gql`
  query FindCategories {
    categories {
      id
      type
      image_url
    }
  }
`

export const Loading = () => <GifLoader.default />

export const Empty = () => {
  return (
    <div className="rw-text-center">
      {'No categories yet. '}
      <Link
        to={routes.newCategory()}
        className="rw-link"
      >
        {'Create one?'}
      </Link>
    </div>
  )
}

export const Failure = ({ error }: CellFailureProps) => (
  <div className="rw-cell-error">{error.message}</div>
)

export const Success = ({ categories }: CellSuccessProps<FindCategories>) => {
  return <Categories categories={categories} />
}
