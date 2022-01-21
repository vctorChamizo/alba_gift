import React, { Children, isValidElement, useState } from "react"
import { useKeenSlider } from "keen-slider/react"

import { Box, Flex } from "@chakra-ui/react"
import CarouselArrowIcon from "../../icons/CarouselArrowIcon"
export default function Carousel({
  children,
  config,
  selector,
  slidesPerPage,
  customPadding,
  fixedWidth,
  ...props
}) {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [loaded, setLoaded] = useState(false)
  const [ref, propsRef] = useKeenSlider({
    initial: 0,
    selector: selector ? `.${selector}` : ".keen-slider__slide",
    mode: "snap",
    slides: {
      spacing: 0
    },
    // slides: { centered:true, perView: 1.1, spacing: 16 },
    slideChanged(slider) {
      setCurrentSlide(slider.track.details.rel)
    },
    created() {
      setLoaded(true)
    },
    ...config
  })

  return (
    <Flex
      position={"relative"}
      direction="column"
      w="100%"
      overflow="hidden"
      {...props}
    >
      <Flex
        ref={ref}
        p={customPadding || 0}
        overflow={[
          fixedWidth ? "visible !important" : "hidden !important",
          fixedWidth ? "visible !important" : "hidden !important",
          "hidden !important",
          "hidden !important"
        ]}
        w={[fixedWidth || "100%", fixedWidth || "100%", "auto", "auto"]}
      >
        {Children.map(children, (child) => {
          if (isValidElement(child)) {
            return {
              ...child,
              props: {
                ...child.props,
                className: selector ? selector : "keen-slider__slide"
              }
            }
          }
          return child
        })}
      </Flex>
      {loaded && propsRef.current && (
        <Flex
          w="100%"
          justify="center"
          position={"absolute"}
          zIndex={1}
          bottom={["32px"]}
          left={"50%"}
          transform={"translateX(-50%)"}
          display={["flex", "none"]}
        >
          {[
            ...Array(
              slidesPerPage
                ? Math.ceil(
                    propsRef.current.track.details.slides.length / slidesPerPage
                  )
                : propsRef.current.track.details.slides.length
            ).keys()
          ].map((idx) => {
            return (
              <Box
                as="span"
                display="block"
                key={idx}
                onClick={() => {
                  propsRef.current?.moveToIdx(idx)
                }}
                cursor={currentSlide === idx ? " default" : "pointer"}
                w="15px"
                h="15px"
                borderRadius="50%"
                bgColor={currentSlide === idx ? "white" : "white"}
                opacity={currentSlide === idx ? "1" : "0.3"}
                ml={idx !== 0 ? "16px" : 0}
              />
            )
          })}
        </Flex>
      )}
      {loaded && propsRef && (
        <Flex
          display={["none", "flex"]}
          position={"absolute"}
          zIndex={1}
          w={"100%"}
          px="40px"
          transform={"translateY(-50%)"}
          top={"50%"}
          justifyContent={"space-between"}
        >
          <CarouselArrowIcon
            color="white"
            onClick={() => propsRef.current.prev()}
            cursor={currentSlide === 0 ? "not-allowed" : "pointer"}
            opacity={currentSlide === 0 ? "0.2" : "1"}
          />
          <CarouselArrowIcon
            transform="rotate(-180deg)"
            color="white"
            onClick={() => propsRef.current.next()}
            cursor={
              currentSlide === propsRef.current.track.details.slides.length - 1
                ? "not-allowed"
                : "pointer"
            }
            opacity={
              currentSlide === propsRef.current.track.details.slides.length - 1
                ? "0.2"
                : "1"
            }
          />
        </Flex>
      )}
    </Flex>
  )
}
