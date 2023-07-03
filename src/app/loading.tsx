import Image from 'next/image'

export default function Loading() {
  return (
    <>
      <div className="fixed inset-0 z-50 flex h-full w-full items-center justify-center bg-white bg-opacity-30">
        <Image src="/loading.gif" alt="loading" width={300} height={80} />
      </div>
    </>
  )
}
