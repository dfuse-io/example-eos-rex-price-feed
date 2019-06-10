import gql from "graphql-tag";

export const getRexPoolQuery = gql`
  subscription {
    searchTransactionsForward(
      query: "account:eosio receiver:eosio db.table:rexpool/eosio",
      lowBlockNum: 61500000,
      highBlockNum: 62000000
    ) {
      cursor
      trace {
        id
        block {
          num
          timestamp
        }
        matchingActions {
          dbOps {
            operation
            key {
              code
              table
              scope
            }
            oldData
            newData
          }
        }
      }
    }
  }
`;