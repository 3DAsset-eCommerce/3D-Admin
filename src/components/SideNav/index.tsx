import SideNavLogo from './SideNavLogo'
import SideNavListContainer from './SideNavListContainer'
import SideNavListHeader from './SideNavListHeader'
import SideNavListItemsWrapper from './SideNavListItemsWrapper'
import SideNavListItem from './SideNavListItem'
export default function SideNav() {
  return (
    <aside className="min-h-screen min-w-[24rem] border-r border-solid border-transparent-navy-30 bg-bg-1 pb-16 text-mm text-neutral-navy-200">
      <SideNavLogo />
      <SideNavListContainer>
        <SideNavListHeader imgSrc="/icons/settings.svg">에셋관리</SideNavListHeader>
        <SideNavListItemsWrapper>
          <SideNavListItem href="/assets/enroll" imgSrc="/icons/plus.svg">
            에셋 등록
          </SideNavListItem>
          <SideNavListItem href="/assets/search" imgSrc="/icons/search.svg">
            에셋 조회/수정
          </SideNavListItem>
        </SideNavListItemsWrapper>
      </SideNavListContainer>
      <div className="mx-2 my-6 w-auto border-b border-neutral-navy-200"></div>
      <div className="mx-auto w-[20rem] bg-neutral-navy-900 leading-[3.8rem] text-primary-main">
        {/* <Link href="/" className="flex justify-center ">
          Log out
        </Link> */}
      </div>
    </aside>
  )
}
