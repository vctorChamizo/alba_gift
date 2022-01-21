import React from "react"
import ReactToPrint from "react-to-print"

export default function PrintPDF({ element, content }) {
  return <ReactToPrint pageStyle={pageStyle} trigger={element} content={content} />
}

const pageStyle = `
  @page {
    padding: 102px 96px;
  }


  @page title-page {
    display: none;
  }
`
