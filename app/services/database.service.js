import { addDoc, collection, getDocs } from "firebase/firestore"
import { db } from "../../firebase.config"
import projects from '../constants/projects.json'

const testDb = async () => {

  console.log('why is this not running')

  try {
    const dbRef = collection(db, "projects");
    const docs = await getDocs(dbRef);
    return docs;
  } catch (error) {
    console.error(error)
  }
}

const getProjects = async () => {
  try {
    const databaseRef = collection(db, "projects");
    const projects = await getDocs(databaseRef);
    return projects;
  } catch (error) {
    console.error(error)
    return false;
  }
}

export { testDb, getProjects }