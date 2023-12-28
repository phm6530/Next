import Link from 'next/link';
function NewsPage(){
    return(
      <>
        <h1>NewsPage</h1>

        <ul>

          <li>
            <Link href={'/news/1'}>
              Next.js
            </Link>
          </li>

          <li>
            <Link href={'/news/2'}>
              React.js
            </Link>
          </li>

        </ul>
        
      </>
    )
}

export default NewsPage;