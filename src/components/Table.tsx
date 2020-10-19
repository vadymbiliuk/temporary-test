import React from 'react';
import {useTable} from 'react-table';
import {gql, useQuery} from '@apollo/client'

const USER_QUERY = gql`
  query AllUsers($offset: Int, $limit: Int) {
    allUsers(offset: $offset, limit: $limit) {
      id @client
      name @client
      surname @client
      age @client
      email @client
    }
  }
`;

export type TableProps = {};

const Table: React.FC<TableProps> = () => {
  const {data, loading, error} = useQuery(
    USER_QUERY,
    {
      errorPolicy: 'all',
      variables: {
        offset: 0,
        limit: 10
      },
      fetchPolicy: "cache-and-network"
    }
  );

  console.log(data);

  if (error) return <div>`Error! ${error.message}`</div>;
  if (loading) return <div>'Loading...'</div>;

  return <div>{data}</div>
}

export {Table}
