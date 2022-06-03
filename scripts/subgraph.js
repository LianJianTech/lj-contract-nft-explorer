const { ApolloClient, InMemoryCache, gql, HttpLink } = require("@apollo/client");
const fetch = require('cross-fetch');

const getMetaDataList = async () => {
    const client = new ApolloClient({
        link: new HttpLink({
            uri: "https://api.thegraph.com/subgraphs/name/flash-meta/explorer666",
            fetch,
        }),
        cache: new InMemoryCache()
    });
    const resp = await client.query({
        query: gql`
        query res {
            myTransfers{
                id
                from
                to
                tokenId
            }
        }`
    });
    const dataList = resp?.data?.myTransfers;
    console.log("getMetaDataList resp:", resp);
    console.log("getMetaDataList dataList:", dataList);
    return dataList;
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