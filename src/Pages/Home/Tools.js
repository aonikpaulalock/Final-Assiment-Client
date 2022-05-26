import React from 'react';
import { useQuery } from 'react-query';
import Loading from '../Shared/Loading';
import ToolsCard from './ToolsCard';

const Tools = () => {
  const { data: tools, isLoading } = useQuery('tools', () => fetch('https://vast-hollows-25888.herokuapp.com/tools')
    .then(res => res.json()));

  if (isLoading) {
    return <Loading />
  }
  return (
    <div className='lg:px-7 md:px-5 px-3 my-10'>
      <h1 className="text-center text-accent font-bold md:text-4xl my-8 sm:text-3xl text-2xl">FEATURE_TOOLS</h1>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 grid-cols-1 gap-6">
        {
          tools?.map(tool => <ToolsCard
            key={tool._id}
            tool={tool}
          >
          </ToolsCard>)
        }
      </div>
    </div>
  );
};

export default Tools;