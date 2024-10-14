interface Credentials {
  email: string
  password: string
}

interface User {
  name: string
  lastName: string
  fullName: string
  birthdate?: string
  gender?: 'male' | 'female' | 'other'
  genderLetter?: 'o' | 'a' | '@'
  phone?: string
  address?: string
  avatar?: string
}

interface ProfileAuth extends User {
  id: string
  email: string
  lastActivity?: string
  createdAt: string
  updatedAt: string
  active: boolean
}

interface RegisterForm extends User, Credentials {
  passwordConfirmation: string
}
