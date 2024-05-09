import LoginDuck from '@/../public/svgs/loginDuck.svg'
import LoginForm from '@/containers/login/LoginForm'
import SocialForm from '@/containers/login/SocialForm'
import { poppins } from '@/styles/fonts'
import { redirect } from 'next/navigation'
import { getServerSession } from 'next-auth'

export default async function Login() {
  const session = await getServerSession()

  if (session) {
    return redirect('/')
  }

  return (
    <>
      <div
        className={`${poppins.className} h-16 font-bold text-3xl leading-[30px] text-center text-[#032426] mx-14 mt-28`}
      >
        Glad to meet you again!
      </div>
      <LoginForm />
      <SocialForm />
      <div className="flex justify-center items-center my-14">
        <LoginDuck />
      </div>
    </>
  )
}