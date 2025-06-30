import { gql } from "@apollo/client";

export const GET_PRODUCTS = gql`
    query getCategory($name: String!) {
        Category(name: $name) {
            products {
            id,
            name,
            in_stock,
            brand,
            gallery {
              image_url
            },
            attributes {
              id
              items {
                display_value,
                value
                item_id
                type
              }
              type
              name
            }
            price {
              amount
              label
              symbol
            },
        }
        }
    }
`