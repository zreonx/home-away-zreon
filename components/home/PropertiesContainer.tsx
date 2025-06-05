import { fetchProperties } from '@/utils/actions';
import PropertiesList from './PropertiesList';
import EmptyList from './EmptyList';
import type { PropertyCardProps } from '@/utils/types';

async function PropertiesContainer({
  category,
  search,
}: {
  category?: string;
  search?: string;
}) {

  // await new Promise((resolve) => setTimeout(resolve, 5000));
  const properties: PropertyCardProps[] = await fetchProperties({
    category,
    search,
  });

  if (properties.length === 0) {
    return (
      <EmptyList
        heading="No Results."
        message="Try changing or removing some of your filters."
        btnText="Clear Filter"
      />
    );
  }
  return <PropertiesList properties={properties} />
}

export default PropertiesContainer;
