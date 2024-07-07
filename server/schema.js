/* eslint-disable no-undef */
const { GraphQLObjectType, GraphQLString, GraphQLList, GraphQLSchema, GraphQLInt } = require('graphql');
const axios = require('axios');

// Rocket Type
const RocketType = new GraphQLObjectType({
  name: 'Rocket',
  fields: () => ({
    id: { type: GraphQLString },
    name: { type: GraphQLString }
  }),
});

// LaunchPad Type
const LaunchPadType = new GraphQLObjectType({
  name: 'LaunchPad',
  fields: () => ({
    id: { type: GraphQLString },
    name: { type: GraphQLString }
  }),
});

// Links Type
const LinksType = new GraphQLObjectType({
  name: 'Links',
  fields: () => ({
    mission_patch_small: { type: GraphQLString },
  }),
});

// // Launch Type
const LaunchType = new GraphQLObjectType({
  name: 'Launch',
  fields: () => ({
    id: { type: GraphQLString },
    name: { type: GraphQLString },
    links: { type: LinksType },
    date_utc: { type: GraphQLString },
    rocket: {
      type: RocketType,
      resolve(parent) {
        return axios
          .get(`https://api.spacexdata.com/v4/rockets/${parent.rocket}`)
          .then(res => res.data)
          .catch(error => {
            console.error('Error fetching rocket data:', error);
            throw new Error('Failed to fetch rocket data');
          });
      }
    },
    launchpad: {
      type: LaunchPadType,
      resolve(parent) {
        const launchPadId = parent.launchpad;
        return axios
          .get(`https://api.spacexdata.com/v4/launchpads/${launchPadId}`)
          .then(res => res.data)
          .catch(error => {
            console.error('Error fetching launch pad data:', error);
            throw new Error('Failed to fetch launch pad data');
          });
      },
    },
  })
});

// Root Query
const RootQuery = new GraphQLObjectType({
  name: 'RootQueryType',
  fields: {

    launches: {
      type: new GraphQLList(LaunchType),
      args: {
        limit: { type: GraphQLInt }
      },
      resolve: async (parent,  { limit = 6 }) => {
        try {
          const { data } = await axios.post('https://api.spacexdata.com/v4/launches/query', {
            query: {},
            options: { limit }
          });
          return data.docs.map(launch => ({
            id: launch.id,
            name: launch.name,
            date_utc: launch.date_utc,
            rocket: launch.rocket,
            launchpad: launch.launchpad,
            links: {
              mission_patch_small: launch.links.patch.small || ''
            }
          }));
        } catch (error) {
          throw new Error('Failed to fetch launches');
        }
      },
    },
  }
});

module.exports = new GraphQLSchema({
  query: RootQuery
});
