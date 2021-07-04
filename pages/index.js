import { PageSeo } from '@/components/SEO'
import siteMetadata from '@/data/siteMetadata'
import Link from '../components/Link'

export default function Home() {
  return (
    <>
      <PageSeo
        title={siteMetadata.title}
        description={siteMetadata.description}
        url={siteMetadata.siteUrl}
      />
      <section
        className="block rounded-lg mb-6"
        style={{
          background: `url('/images/hero.jpg') center center no-repeat`,
          backgroundSize: 'cover',
        }}
      >
        <div
          className="relative left-0 top-0 px-8 pt-20 pb-12 text-white rounded-lg"
          style={{ backdropFilter: 'blur(2px)' }}
        >
          <h1 className="text-3xl font-bold mb-3">{siteMetadata.title}</h1>
          <p className="text-sm">{siteMetadata.description}</p>
        </div>
      </section>
      <section className="block rounded-lg mb-6 p-8 bg-white dark:bg-gray-700">
        <h3 className="font-semibold text-lg mb-3">
          <i className="fas fa-quote-left mr-2"></i>
          코드포코리아는 시빅해킹을 통해 안전하고 신뢰할 수 있는 사회를 만들어 나가고자 합니다.
        </h3>
        <div className="pl-4 border-l-4">
          <p className="mb-2">
            2020년 2월 17명 남짓한 사람들이 코로나19 공공데이터 공동대응을 통해 200여명의
            시빅해커들과 함께 공적마스크 앱을 만든 후에, 지금의 코드포코리아를 결성하였습니다.
          </p>
          <p className="mb-2">
            그리고 이제는 대한민국의 시빅해커 또는 공익데이터 운동을 하는 시민으로서, 기술이 사회에
            기여하도록 주도하는 시민과 여러 기관들의 네트워크로 성장하고 있습니다.
          </p>
          <p>
            엔지니어, 디자이너, 기획자, 기자, 변호사, 시민사회 활동가, 유관 기관 공무원 등 기술로
            사회 문제를 해결하고, 더 나은 사회를 만드는데 관심이 있는 누구나 코드포코리아의 일원으로
            함께할 수 있습니다.
          </p>
        </div>
      </section>
      <section className="block rounded-lg mb-6 p-8 bg-yellow-100 dark:bg-yellow-900">
        <h3 className="font-semibold text-lg mb-3">
          <i className="fas fa-book mr-2"></i> "모두가 함께한 공적마스크 이야기" 읽어보기
        </h3>
        <p>
          2020년, 1년 간의 공적마스크 프로젝트의 이야기를 코드포코리아에서 생생하게 담아냈습니다.
        </p>
        <Link
          href="https://mask.codefor.kr"
          className="py-2 px-3 rounded float-right bg-red-500 font-semibold text-white inline-block"
        >
          모두가 함께한 공적마스크 이야기
          <i className="fas fa-long-arrow-alt-right ml-2"></i>
        </Link>
        <div className="clear-both"></div>
      </section>
    </>
  )
}
