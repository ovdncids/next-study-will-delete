"use client"
import {useState} from "react"
import {styled, keyframes} from "@stitches/react"

const items = [
  {
    title: "A",
    backgroundColor: "red"
  },
  {
    title: "B",
    backgroundColor: "orange"
  },
  {
    title: "C",
    backgroundColor: "yellow"
  },
  {
    title: "D",
    backgroundColor: "green"
  }
]
const width = 300
const SwiperStyled = styled("div", {
  width: `${width}px`,
  height: "300px",
  borderRadius: "8px",
  border: "3px solid white",
  backgroundColor: "white",
  overflow: "hidden",
  "& > div": {
    display: "flex",
    position: "relative"
  },
  "& > div > div": {
    minWidth: `${width}px`,
    minHeight: "300px"
  }
})

const Swiper = () => {
  const [current, setCurrent] = useState({
    index: 0,
    left: 0,
    direction: null
  })

  let animation
  if (current.direction) {
    animation = keyframes({
      from: {
        left: current.left
      },
      to: {
        // 방향에 따른 계산식: (아이템 크기 + 현재 index) % 아이템 크기 * -넓이
        left: (items.length + current.index) % items.length * -width
      }
    })
  }

  const move = (direction: any) => {
    const calcDirection = direction === "next" ? 1 : -1
    setCurrent({
      // 방향에 따른 계산식: (아이템 크기 + 방향 + 현재 index) % 아이템 크기
      index: (items.length + calcDirection + current.index) % items.length,
      left: current.index * -width,
      direction
    })
  }
  return (
    <>
      <SwiperStyled>
        <div style={{animation: `${animation ? `${animation} 1s forwards` : ""}`}}>
          {items.map((item, index) => (
            <div key={index} style={{backgroundColor: item.backgroundColor}}>{item.title}</div>
          ))}
        </div>
      </SwiperStyled>
      <button onClick={() => move("back")}>Back</button>
      <button onClick={() => move("next")}>Next</button>
    </>
  )
}

export default Swiper
