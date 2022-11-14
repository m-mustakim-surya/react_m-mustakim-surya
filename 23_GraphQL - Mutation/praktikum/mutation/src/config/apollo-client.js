import {ApolloClient, InMemoryCache} from '@apollo/client'

const client = new ApolloClient({
    uri: "https://apt-muskrat-31.hasura.app/v1/graphql",
    cache: new InMemoryCache(),
    headers:{
        'x-hasura-admin-secret': "4qRdzkUiB8iPl5r0Awx8K12tCWjVvcxoRF9MM57wjVXRsalylgCQHyRXoVFsPNd7"
    }
})

export default client;