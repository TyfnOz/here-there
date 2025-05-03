import LoadingCards from '@/components/card/LoadingCards';
import CategoriesList from '@/components/home/CategoriesList';
import PropertiesContainer from '@/components/home/PropertiesContainer';
import { Suspense, use } from 'react';

type SearchParams = Promise<{ category: string, search: string} >

function HomePage(props: { searchParams:SearchParams}) {
  const searchParams = use(props.searchParams);
  return (
    <section>
      <CategoriesList category={searchParams.category} search={searchParams.search} />
      <Suspense fallback={<LoadingCards />}>
        <PropertiesContainer category={searchParams.category} search={searchParams.search} />
      </Suspense>

    </section>
  );
}
export default HomePage;