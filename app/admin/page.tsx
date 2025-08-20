import ChartsContainer from '@/components/admin/ChartsContainer';
import { ChartsLoadingContainer, StatesLoadingContainer } from '@/components/admin/Loading';
import StatsContainer from '@/components/admin/StatsContainer';
import { Suspense } from 'react';

function AdminPage() {
  return (
    <>
      <Suspense fallback={<StatesLoadingContainer />}>
        <StatsContainer />
      </Suspense>
      <Suspense fallback={<ChartsLoadingContainer />}>
        <ChartsContainer />
      </Suspense>
    </>
  );
}

export default AdminPage;
