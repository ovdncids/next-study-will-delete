import Image from "next/image"
import MoreVertIcon from "@mui/icons-material/MoreVert"

const items = [
  {
    src: "https://www.apple.com/kr/mac/home/bx/images/overview/consider/mac_ease__bvgkz2zdltxy_xlarge.jpg",
    name: "우주복패팅 블랙야크",
    location: "역상1동 • 1분 전",
    price: "20,000원"
  },
  {
    src: "https://www.apple.com/v/mac/home/bx/images/overview/consider/mac_performance__dh5hyac1zf8m_xlarge.jpg",
    name: "지브리 토토로 젓가락",
    location: "역상1동 • 2분 전",
    price: "2,000원"
  },
  {
    src: "https://www.apple.com/kr/mac/home/bx/images/overview/consider/mac_iphone__gh1tblkt6bqm_xlarge.jpg",
    name: "그레이 빅숄더백",
    location: "역상1동 • 3분 전",
    price: "50,000원"
  },
  {
    src: "https://www.apple.com/v/mac/home/bx/images/overview/consider/mac_compatibility__cu59oukz81ci_xlarge.jpg",
    name: "저소음 적축 키보드",
    location: "역상1동 • 4분 전",
    price: "30,000원"
  },
  {
    src: "https://www.apple.com/kr/mac/home/bx/images/overview/consider/mac_ease__bvgkz2zdltxy_xlarge.jpg",
    name: "우주복패팅 블랙야크",
    location: "역상1동 • 1분 전",
    price: "20,000원"
  },
  {
    src: "https://www.apple.com/v/mac/home/bx/images/overview/consider/mac_performance__dh5hyac1zf8m_xlarge.jpg",
    name: "지브리 토토로 젓가락",
    location: "역상1동 • 2분 전",
    price: "2,000원"
  },
  {
    src: "https://www.apple.com/kr/mac/home/bx/images/overview/consider/mac_iphone__gh1tblkt6bqm_xlarge.jpg",
    name: "그레이 빅숄더백",
    location: "역상1동 • 3분 전",
    price: "50,000원"
  },
  {
    src: "https://www.apple.com/v/mac/home/bx/images/overview/consider/mac_compatibility__cu59oukz81ci_xlarge.jpg",
    name: "저소음 적축 키보드",
    location: "역상1동 • 4분 전",
    price: "30,000원"
  }
]

const Carrot = () => {
  return (
    <div className="p-4">
      <ul>
        {items.map((item, index) => (
          <li key={index} className="py-4 border-b border-gray-100 flex">
            <Image
              src={item.src}
              alt={item.name}
              width={0}
              height={0}
              sizes="100vw"
              className="rounded-lg border border-gray-100 w-[30%] aspect-square object-cover"
            />
            <div className="ml-4">
              <h2>{item.name}</h2>
              <small className="text-xs text-gray-400">{item.location}</small>
              <h3 className="font-bold">{item.price}</h3>
            </div>
            <div className="flex-1"></div>
            <span>
              <MoreVertIcon className="text-lg text-gray-400" />
            </span>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Carrot
