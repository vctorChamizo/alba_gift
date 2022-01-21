import Head from "next/head"

const Meta = ({ title, description }) => (
  <>
    <Head>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta charSet="utf-8" />
      <title>
        {title ||
          "Fundación Eugenio Rodriguez Pascual. Fines, ayudas y publicaciones."}
      </title>
      <meta name="description" content={description || ""} />
      <meta
        property="og:title"
        content={
          title ||
          "Fundación Eugenio Rodriguez Pascual. Fines, ayudas y publicaciones."
        }
      />
      <meta property="og:description" content={description || ""} />
      <meta property="og:type" content="website" />
      <meta property="og:locale" content="es_ES" />
      <meta property="og:site_name" content="Fundación Eugenio Rodriguez Pascual" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta
        name="twitter:title"
        content={
          title ||
          "Fundación Eugenio Rodriguez Pascual. Fines, ayudas y publicaciones."
        }
      />
      <meta name="twitter:description" content={description || ""} />
      <meta
        name="twitter:image"
        content="https://www.fundacioneugeniorodriguezpascual.es/wp-content/uploads/2019/05/certificate.png"
      />
      <link rel="icon" href="/favicon/cropped-favicon-32x32.jpg" sizes="32x32" />
      <link rel="icon" href="/favicon/cropped-favicon-192x192.jpg" sizes="192x192" />
      <link
        rel="apple-touch-icon-precomposed"
        href="/favicon/cropped-favicon-180x180.jpg"
      />
      <meta
        name="msapplication-TileImage"
        content="/favicon/cropped-favicon-270x270.jpg"
      />
    </Head>
    <style jsx global>
      {`
        * {
          box-sizing: border-box;
          -webkit-tap-highlight-color: transparent;
        }

        body {
          background: linear-gradient(0deg, #f2f6f9, #f2f6f9), #ffffff;
          overflow-x: hidden;
          -moz-osx-font-smoothing: grayscale;
          -webkit-font-smoothing: antialiased;
        }
        @font-face {
          font-family: "Satoshi-Black";
          src: url("/fonts/Satoshi/Satoshi-Black.otf") format("opentype");
          font-display: block;
        }

        @font-face {
          font-family: "Satoshi-Bold";
          src: url("/fonts/Satoshi/Satoshi-Bold.otf") format("opentype");
          font-display: block;
        }

        @font-face {
          font-family: "Satoshi-Regular";
          src: url("/fonts/Satoshi/Satoshi-Regular.otf") format("opentype");
          font-display: block;
        }

        @font-face {
          font-family: "Satoshi-Medium";
          src: url("/fonts/Satoshi/Satoshi-Medium.otf") format("opentype");
          font-display: block;
        }
      `}
    </style>
  </>
)

export default Meta
