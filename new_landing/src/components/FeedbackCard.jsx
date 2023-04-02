import { quotes } from "../assets";

const FeedbackCard = ({content,name,title,img}) => (

    <div className='flex justify-between flex-col px-10 py-12 rounded-[20px] max-w-[370px] md:mr-10 sm:mr-5 mr-0 my-5 feedback-card'>
      <img src={quotes} alt="double_quotes" className="w-[42px] h-[27px] object-contain"/>
        <p className="font-poppins font-normal text-[18px] leading-[32px] text-white my-10">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos nemo consectetur inventore accusantium illum deserunt tempore possimus voluptates quis maiores. Esse voluptates tempore laboriosam voluptatum porro similique necessitatibus aliquid saepe.</p>
          <div className="flex flex-row">
            <img src={img} alt={name} className="w-[48px] h-[48px] roudend-full"/>
            <div className="flex flex-col ml-4">
              <h4 className="font-poppins font-semibold text-[20px] leading-[32px] text-white">{name}</h4>
              <p className="font-poppins font-normal text[16px] leading-[24px] text-dimWhite">{title}</p>

            </div>

          </div>

    </div>
  )


export default FeedbackCard