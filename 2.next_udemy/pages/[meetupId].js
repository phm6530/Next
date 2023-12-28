import { useRouter } from 'next/router'
import MeetupDetail from '../components/meetups/MeetupDetail';


export default function MeetupId(){

    // Next Router
    const router = useRouter();
    return(
        <> 
            meetupId : 
            <MeetupDetail props={router.query.meetupId}/>
        </>
    )
}