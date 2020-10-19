import data from '../data.json';

export const resolvers = {
  User: {
    allUsers: (offset: number, limit: number) => data
  }
}
