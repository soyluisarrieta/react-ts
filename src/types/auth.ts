export interface Credentials {
  email: string
  password: string
}

export interface User {
  name: string
  lastName: string
  birthdate?: string
  gender?: 'male' | 'female' | 'other'
  genderLetter?: 'o' | 'a' | '@'
  phone?: string
  address?: string
  avatar?: string
}

export interface ProfileAuth extends User {
  id: string
  fullName: string
  email: string
  lastActivity?: string
  createdAt: string
  updatedAt: string
  active: boolean
}

export interface SignupForm extends User, Credentials {
  passwordConfirmation: string
}
