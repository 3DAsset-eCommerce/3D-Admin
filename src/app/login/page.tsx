import Login from '@/components/Login'
import Image from 'next/image'

export default function LoginPage() {
  return (
    <section className="h-screen bg-[url('/background/login-bg.svg')] bg-cover bg-center">
      <div className="mx-auto flex flex-col items-end justify-center md:h-screen lg:py-0">
        <div className="rounded-sm mr-[3%] h-auto w-[26%] justify-center bg-black bg-opacity-80 p-8 text-neutral-navy-100">
          <Image src="/logo-title.svg" alt="logo" width={155} height={54} />
          <div className="mt-[46%]">
            <div className="flex flex-col">
              <span className="text-[2.3rem] font-bold ">백오피스 로그인</span>
              <span className="text-xs">제공 받으신 백오피스 계정으로 로그인 해 주세요</span>
            </div>
            <div className="my-5 border-t-2 border-blue-500"></div>
            <Login />
            {/* <div className="mt-6 flex items-center justify-between">
              <a
                href="/signup"
                className="text-primary-600 dark:text-primary-500 text-xs  hover:underline"
              >
                회원가입
              </a>
              <a
                href="/login/change"
                className="ext-primary-600 dark:text-primary-500 text-xs  hover:underline"
              >
                비밀번호 재설정하기
              </a>
            </div> */}
          </div>
        </div>
      </div>{' '}
    </section>
  )
}
