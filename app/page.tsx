import LoadingCards from '@/components/card/LoadingCards';
import CategoryList from '@/components/home/CategoryList';
import PropertiesContainer from '@/components/home/PropertiesContainer';
import { Suspense } from 'react';

const HomePage = ({
  searchParams,
}: {
  searchParams: { category?: string; search?: string };
}) => {
  // console.log(searchParams);

  return (
    <section>
      <CategoryList
        category={searchParams.category}
        search={searchParams.search}
      />
      <Suspense fallback={<LoadingCards />}>
        <PropertiesContainer
          category={searchParams.category}
          search={searchParams.search}
        />
      </Suspense>
    </section>
  );
};
export default HomePage;
