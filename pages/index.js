import Link from 'next/link';
import Date from '../components/date';
import Head from 'next/head';
import utilStyles from '../styles/utils.module.css';
import Layout, {siteTitle} from '../components/layout';
import {getSortedPostsData} from '../lib/posts';

export async function getStaticProps() {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData,
    },
  };
}

export default function Home({allPostsData}) {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>[Tom talks alot about technology and the law...]</p>
        <p>
          (This is just a template sample - you can modify and customize.)
        </p>
      </section>
      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
      <h2 className={utilStyles.headingLg}
      style={{color: 'green'}}
      >Blog</h2>
      <ul className={utilStyles.list}>
        {allPostsData.map(({id, date, title}) => (
          <li className={utilStyles.listItem} key={id}>
            <Link href={`/posts/${id}`}>{title}</Link>
            <br/>
            <small className={utilStyles.lightText}>
            <Date dateString={date} />
            </small>
          </li>
        )
        )}
      </ul>
      </section>
    </Layout>
  );
}
