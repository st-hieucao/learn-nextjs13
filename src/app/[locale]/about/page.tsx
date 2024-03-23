import { useTranslations } from 'next-intl'
import React from 'react'

const Page = () => {
  const t = useTranslations();
  return (
    <div>
      <h1>{t('title')}</h1>
    </div>
  )
}

export default Page;
