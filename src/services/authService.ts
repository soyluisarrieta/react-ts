import axios from '@/lib/axios'
import { Credentials, ProfileAuth, SignupForm } from '@/types/auth'

export const csrfService = async (): Promise<void> => {
  await axios.get('/sanctum/csrf-cookie')
}

export const profileService = async (): Promise<ProfileAuth> => {
  const { data: user } = await axios.get('/api/user')
  const fullName = `${user.name} ${user.last_name}`
  const genderLetter = user.gender === 'female' 
    ? 'a' : (user.gender === 'male' ? 'o' : '@')
  return {
    id: user.id,
    name: user.name,
    lastName: user.last_name,
    fullName: fullName,
    birthdate: user.birthdate,
    gender: user.gender,
    genderLetter: genderLetter,
    phone: user.phone,
    address: user.address,
    avatar: user.avatar,
    email: user.email,
    lastActivity: user.last_activity,
    createdAt: user.created_at,
    updatedAt: user.updated_at,
    active: user.active
  }
}

export const logoutService = async (): Promise<void> => {
  await axios.post('/logout')
}

export const loginService = async (credentials: Credentials): Promise<ProfileAuth> => {
  return await axios.post('/login', credentials)
}

export const signupService = async (userData: SignupForm): Promise<ProfileAuth> => {
  return await axios.post('/register', userData)
}

export const sendResetLinkService = async (email: string): Promise<void> => {
  await axios.post('/forgot-password', email)
}

interface IResetPassword extends Credentials {
  token: string
  passwordConfirmation: string
}

export const resetPasswordService = async (data: IResetPassword): Promise<void> => { 
  const { token, email, password, passwordConfirmation: password_confirmation } = data;
  await axios.post('/reset-password', { token, email, password, password_confirmation });
}
