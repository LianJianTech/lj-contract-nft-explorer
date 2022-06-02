const {ApolloClient, InMemoryCache, gql, HttpLink} = require("@apollo/client");
const fetch = require('cross-fetch');

const getMetaDataList = async () => {
    const client = new ApolloClient({
        link: new HttpLink({
            uri: "https://api.thegraph.com/subgraphs/name/flash-meta/explorer456",
            fetch,
        }),
        cache: new InMemoryCache()
    });
    const data = await client.query({
        query: gql`
        query res {
            metaDatas{
                id
                name
                image
            }
        }`
    });
    const list = data?.data?.metaDatas;
    console.log("getListData:" + list);
    return list;
};

async function main() {
    await getMetaDataList();
}

main()
    .then(() => process.exit(0))
    .catch((error) => {
        console.error(error);
        process.exit(1);
    });