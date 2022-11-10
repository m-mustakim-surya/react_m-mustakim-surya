import { gql } from "@apollo/client";

export const GetPassengerById = gql`
query MyQuery($id: Int) {
  query_apollo_graphql(where: { id: { _eq: $id } }) {
    id
    nama
    umur
    jenisKelamin
  }
}
`;
export const GetPassengers = gql`
query MyQuery {
  query_apollo_graphql {
    id
    jenisKelamin
    nama
    umur
  }
}
`;