import { addDoc, collection, where, query, orderBy, getDocs } from "firebase/firestore"
import {db} from "./firebase"
import { getAuth } from "firebase/auth"

const auth = getAuth()
const taskCol = collection(db, "tasks")

export const addTask = async (
  title: string,
  description: string,
  isComplete: boolean = false
) => {

  const user = auth.currentUser
  if(!user){
    throw new Error("User not found")
  }

  await addDoc(taskCol, {
    title,
    description,
    isComplete,
    createAt: new Date().toISOString(),
    userId: auth.currentUser?.uid
  })
}

export const getMyTask = async () => {
  const user = auth.currentUser
  if(!user) throw Error("User not found")
    const q = query(taskCol, where("userId", "==", user.uid), orderBy("createAt", "desc"))

  const snapshot = await getDocs(q)

  const tasks = snapshot.docs.map((d) => {
    const id = d.id
    const data = d.data()

    return {
      id: id,
      title: data.title as string,
      description: data.description as string,
      isComplete: (data.isComplete as boolean) || false,
      createAt: data.createAt as string,
      userId: auth.currentUser?.uid
    }
  })
}