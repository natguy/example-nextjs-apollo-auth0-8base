import { gql, useQuery, NetworkStatus } from '@apollo/client'
import ErrorMessage from './ErrorMessage'

// Update this with your 8base query
export const ALL_ITEMS_QUERY = gql`
  query allItems($first: Int!, $skip: Int!) {
    itemsList(first: $first, skip: $skip) {
      items {
        name
      }
    }
  }
`

export const allItemsQueryVars = {
  skip: 0,
  first: 30
}

export default function ItemsList() {
  const { loading, error, data, fetchMore, networkStatus } = useQuery(
    ALL_ITEMS_QUERY,
    {
      variables: allItemsQueryVars,
      // Setting this value to true will make the component rerender when
      // the "networkStatus" changes, so we are able to know if it is fetching
      // more data
      notifyOnNetworkStatusChange: true,
    }
  )

  if (error) return <ErrorMessage message="Error loading items." />

  const { itemsList } = data

  // Update for your data
  return (
    <section>
      <h2>Items From 8base</h2>
      <ul>
        {itemsList && stepsList.items.map((item, index) => (
          <li key={item.id}>
            <div>
              <span>{index + 1}. </span>
              {item.name}
            </div>
          </li>
        ))}
      </ul>
      <style jsx>{`
        section {
          padding-bottom: 20px;
        }
        ul {
          margin: 0;
          padding: 0;
        }
        li {
          display: block;
          padding: 4px 0;
          margin-bottom: 8px;
          line-height: 1.3;
        }
      `}</style>
    </section>
  )
}
