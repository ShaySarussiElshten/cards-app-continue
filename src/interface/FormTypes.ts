export type seterStateType = {
    setName: React.Dispatch<React.SetStateAction<string>>
    setTitle: React.Dispatch<React.SetStateAction<string>>
    setEmail: React.Dispatch<React.SetStateAction<string>>,
    setImageUrl: React.Dispatch<React.SetStateAction<string>>,
    setTelephone: React.Dispatch<React.SetStateAction<string>>,
    setRole: React.Dispatch<React.SetStateAction<string>>
}

export type geterStateType = {
    name: string
    title:string
    email:string
    imageUrl:string,
    telephone:string,
    role:string
}

export type isTouchedValuesType = {
    emailIsTouched:boolean,
    nameIsTouched:boolean
    titleIsTouched:boolean
}

export type isValidValuesType = {
    emailIsValid:boolean,
    nameIsValid:boolean,
    titleIsValid:boolean
}

export type errorMessageValuesType = {
    emailErrorMessage: JSX.Element[],
    nameErrorMessage:JSX.Element[]
    titleErrorMessage:JSX.Element[]
}