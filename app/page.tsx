import LoadingCards from '@/components/card/LoadingCards';
import CategoriesList from '@/components/home/CategoriesList';
import PropertiesContainer from '@/components/home/PropertiesContainer';
import { Suspense } from 'react';

type Props = {
  searchParams: {
    category?: string;
    search?: string;
  };
};

function Page({ searchParams }: Props) {
  return (
    <section>
      <CategoriesList category={searchParams.category} search={searchParams.search} />
      <Suspense fallback={<LoadingCards />}>
        <PropertiesContainer category={searchParams.category} search={searchParams.search} />
      </Suspense>

    </section>
  );
}
export default Page;