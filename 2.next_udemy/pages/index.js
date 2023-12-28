import MeetupList from '../components/meetups/MeetupList';

const DUMMY_CONTENTS = [
  {
    id : 1,
    image : '//i.namu.wiki/i/sZuPJ4DIJnm3dTVUbBsBp3y8-9hwhfL9Tlgk1GN3aedD2-L2nuFZZXBrmdPJRuAeRWAeU-LS-H8tL--172L-cVf2I8kYaZElVfNhzLBIuCNu2FhbEjg2mRXTK1UZ_9o1aSt65hHM_6yBWc5PvghmuA.webp',
    title : '강일리버파크',
    address : '주소 적으세요'
  },
  {
    id : 2,
    image : '//i.namu.wiki/i/W96B6HBZJASsQTEj3jPKE8THN8XAWIEVUTMe5RrA_0O2-fFa1CQ93jEkh-663E5sxoCxQkKc4ashkLdlS1Hz3Ysb7Dx1P7mrso-ljUXpW3lmyZHE6ltcO71O9G4hn6z7AW4eIrQBiFLxH4PF3RpghQ.webp',
    title : '덕풍 쌍용아파트',
    address : '주소 적으세요'
  }
]



function HomePage(props){

  
    return(
      <>
        <MeetupList meetups={props.meetups}/>
      </>
    )
}

// 반드시 getStaticProps로 해야함
export async function getStaticProps(){
  //fetch data from an API
  return {
    props : {
      meetups : DUMMY_CONTENTS
    },
    revalidate : 10
  };
}

export default HomePage;