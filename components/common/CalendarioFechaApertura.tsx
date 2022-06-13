import { useEffect, useState } from 'react'
import { convertToDate, formatMes } from '../../utils'

type Props={
    fechaInicioApertura:string,
    fechaFinApertura:string
}
const days = [...Array(42).keys()]
export default function CalendarioFechaApertura ({ fechaInicioApertura, fechaFinApertura }:Props) {
  const [both, setBoth] = useState(false)
  const [cal, setCal] = useState({
    fechaInicio: {
      day: 0,
      dayWeek: 0
    },
    fechaFin: {
      day: 0,
      dayWeek: 0
    }
  })
  useEffect(() => {
    const firstDate = convertToDate(fechaInicioApertura)
    const secondDate = convertToDate(fechaFinApertura)
    if (firstDate.getMonth() !== secondDate.getMonth()) {
      console.log('meses diferentes ', fechaInicioApertura, fechaFinApertura)
      setBoth(true)
    } else {
      firstDate.setDate(1)
      const getLastDate = () => {
        secondDate.setDate(31)
        if (secondDate.getMonth() === firstDate.getMonth()) return secondDate.getDate()
        secondDate.setFullYear(firstDate.getFullYear())
        secondDate.setMonth(firstDate.getMonth())
        secondDate.setDate(30)
        if (secondDate.getMonth() === firstDate.getMonth()) return secondDate.getDate()
        secondDate.setFullYear(firstDate.getFullYear())
        secondDate.setMonth(firstDate.getMonth())
        secondDate.setDate(29)
        return secondDate.getDate()
      }
      const lastDate = getLastDate()
      setCal({
        ...cal,
        fechaInicio: {
          dayWeek: firstDate.getDay(),
          day: firstDate.getDate()
        },
        fechaFin: {
          dayWeek: secondDate.getDay() - 1,
          day: lastDate
        }
      })
    }
  }, [])
  return (
        <div>
          {both
            ? <div>
              <h1>Fechas de Meses diferentes</h1>
            </div>
            : <div>
            <h1 className='text-center' >{formatMes(convertToDate(fechaInicioApertura).getMonth())}</h1>
            <ul className='grid grid-cols-7 gap-4 px-2' >
              <li className='text-center' >D</li>
              <li className='text-center'>L</li>
              <li className='text-center'>M</li>
              <li className='text-center'>M</li>
              <li className='text-center'>J</li>
              <li className='text-center'>V</li>
              <li className='text-center'>S</li>
            </ul>
            <ul className=' px-2 bg-gray-200 grid grid-cols-7 gap-4' >
            {
              days.map((_day, i) => (
                <li className={` ${convertToDate(fechaFinApertura).getDate() >= i - cal.fechaInicio.day && convertToDate(fechaInicioApertura).getDate() <= i - cal.fechaInicio.dayWeek + 1 ? 'bg-red-200  rounded-full' : ''}  flex justify-center`} key={`calendar-${i}`}>
                  {(cal.fechaFin.day > i - cal.fechaInicio.dayWeek && i - cal.fechaInicio.dayWeek >= 0)
                    ? i - cal.fechaInicio.dayWeek + 1
                    : ''}
                </li>
              ))
            }
            </ul>
          </div>
          }
        </div>
  )
}