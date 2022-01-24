import React, { useState, useEffect, useRef } from 'react';
import './main.css';
import shortid from 'shortid';
import {db} from '../firebase';
import { doc, getDoc, setDoc} from 'firebase/firestore';
import scissor from '../assests/scissor.png'
import copy from '../assests/copy.png'

function Main() {
    const [url, setUrl] = useState('')
    const [output, setOutput] = useState("urls-94c0f.web.app/")
    const ref = useRef(null)


    const submitHandler = async (e) =>{
        e.preventDefault();
        let unique = false
        let id = null
        while(!unique){
            id = shortid.generate()
            const docRef = doc(db, "data", id)
            // getDoc(docRef).then(
            //     (snap)=>{
            //         if(snap.exists()){
                        
            //         }
            //         else{
            //             const payload = { 
            //                 address: url,
            //                 id: id}
            //             await setDoc(docRef, payload)
            //             unique = true
            //         }
            //     }
            // )

            const snap = await getDoc(docRef)
            if(snap.exists()){      }
            else{
                const payload = { 
                    address: url}
                    // ,
                    // id: id}
                await setDoc(docRef, payload)
                unique = true
            }

        }

        setOutput("urls-94c0f.web.app/" + id )
        ref.current.style.backgroundColor="#102dad"
    }

    const copyHandler = ()=> {
        navigator.clipboard.writeText(output);
        ref.current.style.backgroundColor="green"
        setTimeout(() => {
        ref.current.style.backgroundColor="#102dad" //blue
        }, 3000);
    }

    useEffect(() => {
    }, [url])


    return (
        <div className="form-div">

            <div className="wrapper">
                <h1>URL Shortner</h1>
                <form onSubmit={submitHandler}>
                    <input required placeholder="e.g.  https://www.google.com" type="url" onChange={(e) => setUrl(e.target.value)}/>
                    <button type="submit"><img className='icon' alt='generate' src={scissor} /></button>
                </form>
                <button onClick={copyHandler} ref={ref} className='output'><img className='icon' alt='copy' src={copy} />{output}</button>
                <p>Made By <a href="https://github.com/AnmolChoudhary3">Anmol</a>✌</p>
            </div>
        </div>
    )
}

export default Main


