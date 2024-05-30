import Head from 'next/head'
import { useRouter } from 'next/router'
import React, { ReactElement } from 'react'
import CardBox from '../components/CardBox'
import LayoutGuest from '../layouts/Guest'
import SectionMain from '../components/Section/Main'
import { gradientBgPurplePink } from '../colors'
import { appTitle } from '../config'
import { useAppDispatch } from '../stores/hooks'
import { setDarkMode } from '../stores/darkModeSlice'

const StyleSelectPage = () => {
  const dispatch = useAppDispatch()

  dispatch(setDarkMode(false))

  const mode = ['sign-in', 'sign-up']

  const router = useRouter()

  const handleStylePick = (e: React.MouseEvent, mode: string) => {
    e.preventDefault()
    if (mode === 'sign-in') {
      router.push('/sign-in');
    } else {
      router.push('/sign-up');
    }
  }

  return (
    <>
      <Head>
        <title>{appTitle}</title>
      </Head>
      <div className={`flex min-h-screen items-center justify-center ${gradientBgPurplePink}`}>
        <SectionMain>
          <h1 className="text-4xl md:text-5xl text-center text-white font-bold mt-12 mb-3 lg:mt-0">
            Hello!
          </h1>

          <div className="grid gap-6 grid-cols-1 lg:grid-cols-2 px-6 max-w-6xl mx-auto">
            {mode.map((item) => (
              <CardBox
                key={item}
                className="cursor-pointer bg-gray-50"
                isHoverable
                onClick={(e) => handleStylePick(e, item)}
              >
                <h1 className="text-xl md:text-2xl font-black capitalize">{item}</h1>
              </CardBox>
            ))}
          </div>
        </SectionMain>
      </div>
    </>
  )
}

StyleSelectPage.getLayout = function getLayout(page: ReactElement) {
  return <LayoutGuest>{page}</LayoutGuest>
}

export default StyleSelectPage
