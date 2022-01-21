import React, { Children, isValidElement, useState } from "react"
import { useKeenSlider } from "keen-slider/react"
import { Flex, Grid, Text } from "@chakra-ui/react"
import PageArrowIcon from "../../icons/PageArrowIcon"

export default function NewsCarousel({
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
      spacing: 24
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
    <Flex position={"relative"} w="100%" {...props}>
      <Flex
        ref={ref}
        p={customPadding || 0}
        overflow={[
          // fixedWidth ? "visible !important" : "hidden !important",
          // fixedWidth ? "visible !important" : "hidden !important",
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
          bottom={["-60px", "-136px"]}
          left={"50%"}
          transform={"translateX(-50%)"}
        >
          <Grid
            templateColumns={"repeat(3, auto)"}
            columnGap={"60px"}
            alignItems={"center"}
          >
            <PageArrowIcon
              opacity={
                Math.ceil(currentSlide / slidesPerPage) + 1 !== 1 ? "1" : "0.3"
              }
              cursor={"pointer"}
              onClick={() => propsRef.current.prev()}
            />
            <Text variant={"p_cta"}>
              {Math.ceil(currentSlide / slidesPerPage) + 1 < 10
                ? `0${Math.ceil(currentSlide / slidesPerPage) + 1}`
                : Math.ceil(currentSlide / slidesPerPage) + 1}{" "}
              /{" "}
              {Math.ceil(
                (propsRef.current.track.details.slides.length * slidesPerPage) /
                  slidesPerPage
              ) < 10
                ? `0${Math.ceil(
                    (propsRef.current.track.details.slides.length * slidesPerPage) /
                      slidesPerPage
                  )}`
                : Math.ceil(
                    (propsRef.current.track.details.slides.length * slidesPerPage) /
                      slidesPerPage
                  )}
            </Text>{" "}
            <PageArrowIcon
              onClick={() => propsRef.current.next()}
              cursor="pointer"
              transform="rotate(-180deg)"
              opacity={
                Math.ceil(currentSlide / slidesPerPage) + 1 !==
                Math.ceil(
                  (propsRef.current.track.details.slides.length * slidesPerPage) /
                    slidesPerPage
                )
                  ? "1"
                  : "0.3"
              }
            />
          </Grid>
        </Flex>
      )}
    </Flex>
  )
}
