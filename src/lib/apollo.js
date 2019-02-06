import ApolloClient from 'apollo-boost';
import { ApolloProvider } from 'react-apollo';

// import AWS from 'aws-sdk';
// import AWSAppSyncClient, { defaultDataIdFromObject } from 'aws-appsync';
// import { AUTH_TYPE } from 'aws-appsync/lib/link/auth-link';
// import { ApolloProvider } from 'react-apollo';
// import { Rehydrated } from 'aws-appsync-react'; // this needs to also be installed when working with React
// import * as localForage from 'localforage';
//
// import CONFIG from '../data/config';
//
// import { InMemoryCache } from 'apollo-cache-inmemory';
//
// /*
//  * References:
//  * -  https://docs.aws.amazon.com/appsync/latest/devguide/building-a-client * app-node.html
//  * -  https://github.com/awslabs/aws-mobile-appsync-sdk-js
//  */
// const AppSyncConfig = CONFIG.appSync;
//
// // AWSAppSyncClient already uses redux-persist with localStorage
// const cacheOptions = {
//   dataIdFromObject: object => {
//     // eslint-disable-next-line no-underscore-dangle
//     switch (object.__typename) {
//       // Drupal has custom numeric id keys
//       case 'File':
//         return `fid-${object.fid}`;
//       case 'Node':
//         return `nid-${object.nid}`;
//       case 'Term':
//         return `tid-${object.tid}`;
//       case 'History':
//         return `History:nid-${object.nid}`;
//       // Note: no id for Action type (keyed by index)
//       case 'Action':
//         return null;
//       case 'Comment':
//         return `Comment:${object.nid}:${object.datetime}`;
//       default:
//         return defaultDataIdFromObject(object); // fall back to default handling
//     }
//   },
//   cacheRedirects: {
//     Query: {
//       node: (_, args, { getCacheKey }) =>
//         getCacheKey({ __typename: 'Node', nid: args.nid }),
//     },
//   },
// };
//
// const localStore = localForage.createInstance({
//   name: 'MAT/TV',
//   storeName: CONFIG.storeName,
// });
//
// const appSyncClient = new AWSAppSyncClient(
//   {
//     url: AppSyncConfig.graphqlEndpoint,
//     region: AppSyncConfig.region,
//     auth: {
//       type: AUTH_TYPE.AWS_IAM,
//       credentials: () => AWS.config.credentials,
//       // apiKey: AppSyncConfig.apiKey, // needs AUTH_TYPE.API_KEY
//       // jwtToken: async () => token, // Required when you use Cognito UserPools OR OpenID Connect. token object is obtained previously
//     },
//     cacheOptions,
//     // disableOffline: true,
//     offlineConfig: {
//       storage: localStore,
//     },
//   },
//   {
//     connectToDevTools: true,
//     // cache: new InMemoryCache(cacheOptions),
//   },
// );
//
// const getApolloClient = () => appSyncClient;

const apolloClient = new ApolloClient({
  uri: 'https://api.graph.cool/simple/v1/meals',
  credentials: 'include',
});

const getApolloClient = () => apolloClient;

export { ApolloProvider, getApolloClient };
