'use client';
export default function FilterError({error}){
    return(
        <div id='error'>
            <h2>Error Occured</h2>
            <p>{error.messgae}</p>
        </div>
    );
}