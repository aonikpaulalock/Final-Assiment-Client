import React from 'react';
import { useQuery } from 'react-query';
import Loading from '../Shared/Loading';
import ManageRow from './ManageRow';

const ManageProduct = () => {
  const { data: tools, isLoading, refetch } = useQuery('tools', () => fetch('http://localhost:5000/tools')
    .then(res => res.json()));
  if (isLoading) {
    return <Loading />
  }
  return (
    <div className='px-20'>
      <h1 className='text-3xl text-aceent font-bold my-6'>Manage Product</h1>
      <table class="table w-full">

        <thead>
          <tr className='text-center'>
            <th className="font-medium text-accent">Index</th>
            <th className="font-medium text-accent">Avatar</th>
            <th className="font-medium text-accent">Name</th>
            <th className="font-medium text-accent">Manage</th>
          </tr>
        </thead>
        <tbody>

          {
            tools.map((tool, index) => <ManageRow
              key={tool._id}
              index={index}
              tool={tool}
              refetch={refetch}
            >
            </ManageRow>)
          }
        </tbody>
      </table>
    </div>
  );
};

export default ManageProduct;