import React, {useEffect} from 'react'
import { useParams } from 'react-router'
import {db} from '../firebase';
import { doc, getDoc } from "firebase/firestore";

function Redirect() {
    const {id} = useParams();   
    // useEffect( () => {
    //     const fetchURL = async () => {
    //         const citiesRef = collection(db, "data");
    //         const q = query(citiesRef, where("id", "==", id));
    //         const querySnapshot = await getDocs(q);
    //         window.location.replace(querySnapshot.docs[0].data().address);
    //     }
    //     fetchURL();
    // },[])

    useEffect( () => {
        const docRef = doc(db, "data",id );
        // const q = query(citiesRef, where("id", "==", id));
        
        getDoc(docRef).then((snap)=>{
            window.location.replace(snap.data().address);
        });
       
    },[id])
    return (
        <div>
        </div>
    )
}

export default Redirect
