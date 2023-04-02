import { collection, addDoc, getDoc, setDoc,doc, getDocs } from "firebase/firestore";
import { db } from '../../config';

export const getData=async(name)=>{
    const querySnapshot = await getDocs(collection(db, name));
    let data=[]
    querySnapshot.forEach((doc) => {
      console.log(doc.id, " => ", doc.data());
     data.push(doc.data()) ;
      
    });
    console.log(data)
    return data; 
}
