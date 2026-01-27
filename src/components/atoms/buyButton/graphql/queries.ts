import { gql } from "@faststore/core/api";

// @ts-ignore
export const GET_CHECKOUT = gql(`
  query GetCheckout {
    getCheckout {
      orderFormId
      salesChannel
      loggedIn
      items {
        id
      }
    }
  }
`);

// @ts-ignore
export const GET_GUTENDEX = gql(`
  query GetGutendex {
    getGutendexBooks {
      count
      next
      previous
    }
  }
`);