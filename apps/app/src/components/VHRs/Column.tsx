import { FC } from 'react'

import { Spinner } from '../UI/Spinner'
import { Item } from '.'

interface Props {
  label: string
  data: Item[] | undefined
  isLoading: boolean
}

const Column: FC<Props> = ({ label, data, isLoading }) => {
  return (
    <div className="min-w-[450px] mx-2 h-[550px] bg-[#F9F9F9] dark:bg-[#18004A] rounded-lg mt-10">
      <div className="text-2xl text-[#626262] dark:text-[#E2E2E2] my-5 mx-auto w-fit h-fit">
        {label}
      </div>
      <div className="overflow-y-scroll h-[470px]">
        {data &&
          data.map((value, index) => (
            <div
              key={index}
              className="flex justify-between items-center w-[400px] h-[80px] mx-auto my-2 border-b-[1px] border-[#DDDDDD]"
            >
              <div className="flex justify-between items-center">
                <div className="ml-2 text-[#7E7E7E]">{index + 1}</div>
                <div className="w-10 h-10 bg-[#498ade] mx-4 rounded-full"></div>
                <a href={`/user/${value.handle}`} target="_blank">
                  <div
                    className={`${
                      index == 0
                        ? 'text-[#FFD600]'
                        : index == 1
                        ? 'text-[#CCCCCC]'
                        : index == 2
                        ? 'text-[#8E5E00]'
                        : 'text-[#A3A3A3]'
                    } `}
                  >
                    {value.handle}
                  </div>
                </a>
              </div>
              <div className="text-[#A3A3A3] text-sm">{value.amount} VHRs</div>
            </div>
          ))}
        {isLoading && (
          <div className="flex justify-between items-center w-[400px] h-[80px] mx-auto my-2 border-[#DDDDDD]">
            <Spinner />
          </div>
        )}
      </div>
    </div>
  )
}

export default Column