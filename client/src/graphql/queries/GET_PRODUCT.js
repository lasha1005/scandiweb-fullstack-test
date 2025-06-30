import { gql } from "@apollo/client";

export const GET_PRODUCT = gql`
    query GetProduct($id: ID!) {
         Product(id: $id) {
            id
            name
            brand
            description
            in_stock
            category
            gallery {
              image_url
            } 
            price {
                amount
                symbol
                label
            } 
            attributes {
                id 
                name 
                type 
                items {
                    display_value
                    item_id
                    value 
                    type
                }
            }
        }
    }
`