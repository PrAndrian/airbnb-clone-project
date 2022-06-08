// import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import Header from '../components/Header';
import Banner from '../components/Banner';
import SmallCard from '../components/SmallCard';
import MediumCard from '../components/MediumCard';
import LargeCard from '../components/LargeCard';
import Footer from '../components/Footer';

// const Home: NextPage = ({exploreData}) => {
  export default function Home({exploreData, cardData}){
  return (
    <div className="">
      <Head>
        <title>Princy Airbnd</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header/>
      <Banner/>

      <main className='max-w-7xl mx-auto px-8 sm:px-16'>
        <section className="pt-6">
          <h2 className='text-4xl font-semibold pd-5'>Explore Nearby</h2>
        </section>

        {/* pull some data form API server */}
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'>
          {exploreData?.map(({img,location,distance}) =>(
            <SmallCard 
              key={img}
              img={img} 
              location={location} 
              distance={distance}
            />
          ))}
        </div>

        <section>
            <h2 className='text-4xl font-semibold py-8'>Live Anywhere</h2>
            <div className='flex space-x-3 overflow-x-auto scrollbar-hide p-3 -ml-3'>
              {cardData?.map(({img,title}) => (
                <MediumCard 
                  key={img}
                  img={img} 
                  title={title}
                />
                ))}
           </div>
        </section>

        <LargeCard
          img = "https://a0.muscache.com/im/pictures/2da67c1c-0c61-4629-8798-1d4de1ac9291.jpg?im_w=1440"
          title='The Greatest Outdoors'
          description="WishLists curated by Airbnb"
          buttonText="Get Inspired"
        />
      </main>
      <Footer />
    </div>

  )
}

export async function getStaticProps() {
  const exploreData = await fetch('https://jsonkeeper.com/b/4G1G').
  then (
    (res) => res.json()
  );  

  const cardData = await fetch('https://jsonkeeper.com/b/VHHT').
  then (
    (res)=> res.json()
  );

    return{
      props : {
        exploreData,
        cardData
      }
    }
}
