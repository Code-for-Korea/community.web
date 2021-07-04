import GoogleAnalyticsHOC from '@/components/GoogleAnalyticsHOC'
import LayoutWrapper from '@/components/LayoutWrapper'
import MDXComponents from '@/components/MDXComponents'
import { SEO } from '@/components/SEO'
import '@/css/tailwind.css'
import { MDXProvider } from '@mdx-js/react'
import { DefaultSeo } from 'next-seo'
import { ThemeProvider } from 'next-themes'
import Head from 'next/head'

export default function App({ Component, pageProps }) {
  return (
    <ThemeProvider attribute="class">
      <MDXProvider components={MDXComponents}>
        <Head>
          <meta content="width=device-width, initial-scale=1" name="viewport" />
        </Head>
        <GoogleAnalyticsHOC />
        <DefaultSeo {...SEO} />
        <LayoutWrapper>
          <Component {...pageProps} />
        </LayoutWrapper>
      </MDXProvider>
    </ThemeProvider>
  )
}
