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
query GetPassengers {
  query_apollo_graphql {
    id
    jenisKelamin
    nama
    umur
  }
}
`;
export const createPassenger = gql`
mutation MyMutation($jenisKelamin: String, $nama: String, $umur: Int) {
  insert_query_apollo_graphql(objects: {nama: $nama, umur: $umur, jenisKelamin: $jenisKelamin}) {
    returning {
      id
      jenisKelamin
      nama
      umur
    }
  }
}
`

export const deletePassengerById = gql`
mutation MyMutation($id: Int) {
  delete_query_apollo_graphql(where: {id: {_eq: $id}}) {
    returning {
      id
      jenisKelamin
      nama
      umur
    }
  }
}
`
export const updatePassengerById = gql`
mutation MyMutation($id: Int, $nama: String, $umur: Int, $jenisKelamin: String) {
  update_query_apollo_graphql(
    where: { id: { _eq: $id } }
    _set: { nama: $nama, umur: $umur, jenisKelamin: $jenisKelamin}
  ) {
    returning {
      id
      nama
      umur
      jenisKelamin
    }
  }
}
`;

export const subscription = gql`
subscription MySubscription {
  query_apollo_graphql {
    id
    jenisKelamin
    nama
    umur
  }
}
`