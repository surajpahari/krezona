import Image from "next/image"
import { StaticImport } from "next/dist/shared/lib/get-img-props"
import { TimeCard } from "./timeCard"

type BlogInfo = {
  image: StaticImport,
  alt: string,
  description: string,
  title: JSX.Element
}

export const BlogCard = (blogInfo: BlogInfo) => {
  return (
    <>
      <div className="bg-gradient-to-t from-lightblue to-darkblue rounded-xl">
        <div className="flex flex-col">
          <Image
            src={blogInfo.image}
            alt={blogInfo.alt}
          />
        </div>
        <div className="border-2 border-t-0 rounded-b-md border-[rgba(255,255,255,0.07)] ">
          {
            <div className="mx-8 pt-[26px] mb-[42px]">
              <div className="font-light text-2xl leading-8 text-barlow-condensed flex-grow   mb-[20px]">
                {blogInfo.title}
              </div>
              <div className="text-normal  opacity-50 leading-8">
                {blogInfo.description}
              </div>

            </div>
          }
        </div>
      </div>
    </>
  )
}
