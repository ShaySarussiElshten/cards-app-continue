import {Person} from "./person"

export default interface AppContext {
    setPersons:React.Dispatch<React.SetStateAction<Person[]>>
    persons:Person[]
}
