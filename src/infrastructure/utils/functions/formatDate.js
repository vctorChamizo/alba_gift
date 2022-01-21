import { MONTHS } from "../../constants/months"

export const formatDate = (date) => {
  const d = new Date(date)
  return `${d.getDate()} de ${MONTHS[d.getMonth()]} de ${d.getFullYear()}`
}
