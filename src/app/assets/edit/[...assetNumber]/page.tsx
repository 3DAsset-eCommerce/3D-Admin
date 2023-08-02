import Header from '@/components/Header/Index'
import Body from '@/components/Body'
import TableContainer from '@/components/Table/TableContainer'
import TableItem from '@/components/Table/TableItem'
import FileUploader from '@/components/Input/FileUploader'
import TextInput from '@/components/Input/TextInput'
import Divider from '@/components/Divider'
import ImageUploader from '@/components/Input/ImageUploader'
import Button from '@/components/Button'
import TagsContainer from '@/components/Tag/TagsContainer'
import AssetCategorySelectContainer from '@/components/Select/AssetCategorySelectContainer'
import Layout from '@/components/Layout'

export default function AssetIdPage() {
  const data = {
    assetId: 1,
    assetName: 'Sensual dance_F',
    price: '7200.0',
    fileSize: 5.12,
    fileUrl: 'url',
    creator: 'NationA',
    rating: 4.3,
    reviewCount: 1483,
    wishCount: 8743,
    visitCount: 35477,
    wishlistId: 1,
    tagList: ['tag1', 'tag2', 'tag3'],
  }

  return (
    <Layout>
      <Header title="에셋 수정" required={true} isButton={true} />
      <Body>
        <TableContainer>
          <TableItem title="에셋 첨부" required={true}>
            <FileUploader inputWidth={38.4} inputHeight={4.2} inputValue={data.fileUrl}>
              <p className="absolute -bottom-[3rem] left-0 text-[1.4rem]">
                파일은 fbx 포맷 (최대 10MB)만 업로드 가능합니다.
              </p>
            </FileUploader>
          </TableItem>
          <TableItem title="카테고리" required={true}>
            <AssetCategorySelectContainer />
          </TableItem>
          <TableItem title="에셋명" required={true}>
            <TextInput
              label="name"
              required={true}
              width={58.4}
              placeholder="에셋의 특징을 잘 드러내는 이름을 적어주세요."
              counter={100}
              inputValue={data.assetName}
            />
          </TableItem>
          <TableItem title="판매가격" required={true}>
            <div className="flex w-[19.6rem]">
              <TextInput
                label="price"
                required={true}
                width={24}
                placeholder="숫자만 입력"
                inputValue={data.price}
              />
              <p className="ml-[1.5rem] flex items-center">원</p>
            </div>
          </TableItem>
          <TableItem title="할인" required={false}>
            <div className="flex flex-col">
              <div className="flex w-[50rem]">
                <TextInput
                  label="price"
                  required={false}
                  width={26.5}
                  placeholder="판매가에서"
                  disabled={true}
                />
                <div className="flex h-[4.2rem] w-[3.5rem] items-center justify-center rounded border border-neutral-navy-200 bg-neutral-navy-950 px-[1.1rem] text-[1.4rem]">
                  %
                </div>
                <p className="ml-[1.5rem] flex items-center">할인</p>
              </div>
              <Divider />
              <div>
                <div className="flex pt-[3rem]">
                  <p>최종판매가</p>
                  <p className="ml-[10rem]">
                    <span>{'-'}</span> 원<span className="ml-[1.5rem]">({'-'}원 할인)</span>
                  </p>
                </div>
              </div>
            </div>
          </TableItem>
          <TableItem title="에셋 설명" required={true}>
            <TextInput
              type="textarea"
              label="description"
              required={true}
              width={58.4}
              height={23.7}
              placeholder="에셋의 특징을 적어주세요."
            />
          </TableItem>
          <TableItem title="태그 설정" required={false}>
            <TagsContainer required={false} tagList={data.tagList} />
          </TableItem>
          <Divider />
          <TableItem title="썸네일 이미지" required={true}>
            <ImageUploader type="thumbnail" required={true} width={21.4} height={26.6} id={7} />
            <p className="pt-[2rem]">
              전체 에셋 리스트 페이지에서 보여지는 대표 썸네일 이미지입니다.
              <br />
              권장크기: 214 x 266
              <br />
              jpg, jpeg, gif, png, bmp 형식의 이미지 (최대 10MB)만 등록 가능합니다.
            </p>
          </TableItem>
          <TableItem title="상세 페이지 이미지" required={false}>
            <div className="flex flex-col gap-[2.6rem]">
              <div className="imageContainer flex gap-[2.6rem]">
                <ImageUploader type="detail" required={false} width={21.4} height={15.8} id={8} />
                <ImageUploader type="detail" required={false} width={21.4} height={15.8} id={9} />
                <ImageUploader type="detail" required={false} width={21.4} height={15.8} id={10} />
                <ImageUploader type="detail" required={false} width={21.4} height={15.8} id={11} />
                <ImageUploader type="detail" required={false} width={21.4} height={15.8} id={12} />
              </div>
              <p>
                상세 페이지 최상단에 보여지는 이미지입니다. 최대 5장까지 등록 가능합니다.
                <br />
                권장 크기: 710 x 520
                <br />
                jpg, jpeg, gif, png, bmp 형식의 이미지 (최대 10MB)만 등록 가능합니다.
              </p>
            </div>
          </TableItem>
        </TableContainer>
        <div className="buttonContainer mt-[5rem] flex justify-center gap-[1.6rem]">
          <Button
            type="fail"
            label="edit"
            width={18.1}
            height={5.2}
            backgroundColor="transparent"
            borderColor="#60AFFF"
          >
            취소
          </Button>
          <Button type="success" label="edit" width={18.1} height={5.2}>
            에셋 등록
          </Button>
        </div>
      </Body>
    </Layout>
  )
}
