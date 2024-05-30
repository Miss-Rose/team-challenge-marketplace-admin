import React from 'react'
import { gradientBgPinkRed } from '../../../colors'
import SectionBanner from '.'

const SectionBannerStarOnGitHub = () => {
  return (
    <SectionBanner className={gradientBgPinkRed}>
      <h1 className="text-3xl text-white mb-6">
        Like the project? Please star on <b>GitHub</b> ;-)
      </h1>
    </SectionBanner>
  )
}

export default SectionBannerStarOnGitHub
