import { gql } from "@apollo/client";

export const PLACE_ORDER = gql`
    mutation PlaceOrder($order: OrderInput!) {
        createOrder(order: $order ) {
            result
            success
        }
    }
`