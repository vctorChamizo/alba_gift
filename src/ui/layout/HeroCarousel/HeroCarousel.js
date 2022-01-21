import { Box } from "@chakra-ui/react"
import Carousel from "../../dataDisplay/Carousel/Carousel"
import Hero from "../Hero/Hero"

export default function HeroCarousel({ ...props }) {
  return (
    <Box {...props}>
      <Carousel>
        {[
          <Hero
            key={"1"}
            title="Vamos a comenzar una aventura"
            desc="Quiero descubrir el mundo, y lo quiero hacer junto a ti. Conocer nuevos lugares, probar nuevos sabores, disfrutar de de cada atardecer y de cada amanecer, porque aunque el sol sale todos los días, todos los días junto a ti tienen algo inolvidable."
            image={"/images/img_1.jpeg"}
          />,
          <Hero
            key={"2"}
            title="¿Qué país nos tocará conocer?"
            desc="Vivimos tiempos de incertidumbre, pero como siempre solemos decir, los mejores momentos son los que no se programan. Tenemos millones de sitios a los que ir, pero en este viaje podremos elegir entre Islandia, Bélgica o Croacia. El desitno decidirá."
            image={"/images/img_2.jpeg"}
          />,
          <Hero
            key={"3"}
            title="Hasta entonces..."
            desc="y para que la espera no se te haga tan larga, te dejo este pequeño regalo que servirá para inmortalizar nuestra pequeña gran aventura."
            image={"/images/img_3.jpeg"}
          />,
          <Hero
            key={"4"}
            title="Disfrútalo"
            desc="Te quiero, siempre."
            image={"/images/img_4.jpg"}
          />
        ]}
      </Carousel>
    </Box>
  )
}
