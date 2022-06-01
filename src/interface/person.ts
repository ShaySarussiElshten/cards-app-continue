
export interface Person{
    id: string;
    name:string
    title:string
    role:string
    email:string
    telephone:string
    imageUrl:string
}

export interface setPerson{
    setName:React.Dispatch<React.SetStateAction<string>>
    setTitle:React.Dispatch<React.SetStateAction<string>>
    setEmail:React.Dispatch<React.SetStateAction<string>>
    setImageUrl:React.Dispatch<React.SetStateAction<string>>
    setTelephone:React.Dispatch<React.SetStateAction<string>>
    setRole:React.Dispatch<React.SetStateAction<string>>
}