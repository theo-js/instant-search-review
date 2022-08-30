import type { NextPage } from 'next'
import Head from 'next/head'
import styles from '../styles/Home.module.css'
import { instantMeiliSearch } from '@meilisearch/instant-meilisearch';
import { CustomSearchBox } from './fields/instant-search/search-box';
import { Configure, InstantSearch } from 'react-instantsearch-hooks-web';
import { Hits } from './fields/instant-search/hits';
import { ContactType } from '../types/contact';

const Home: NextPage = () => {
  const searchClient = instantMeiliSearch(
    'http://127.0.0.1:7700',
    '',
    {},
  );

  return (
    <div className={styles.container}>
      <Head>
        <title>Meilisearch client review</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Review de React InstantSearch hooks + instantMeiliSearch
        </h1>

        <InstantSearch
          indexName='contacts-85e679e8-cd32-4372-9e33-303a149875b9'
          searchClient={searchClient}
        >
          <Configure filters={`type=${ContactType.Person}`} /> {/* Only get Contacts of 'Person' type */}
          <CustomSearchBox />
          <Hits />
        </InstantSearch>
      </main>
    </div>
  )
}

export default Home
