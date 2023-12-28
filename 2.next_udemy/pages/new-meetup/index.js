import NewMeetupForm from '../../components/meetups/NewMeetupForm';
export default function NewMeetup(){

    // 프롭 받기
    const addMeetHandler = (e) =>{
        console.log(e);
    }

    return(
        <>
            <NewMeetupForm onAddMeetup={addMeetHandler}/>
        </>
    )
    
}

