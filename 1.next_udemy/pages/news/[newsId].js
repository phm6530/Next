import { useRouter } from 'next/router';

function test(){
    const router = useRouter();
    
    // router.query
    console.log(router.query);
    return(
        <>
            {router.query.newsId}        
        </>    
    )
    
}

export default test;