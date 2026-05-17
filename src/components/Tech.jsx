import { BallCanvas } from './canvas'
import { SectionWrapper } from '../hoc'
import { technologies } from '../constants'
import useMediaQuery from '../hooks/useMediaQuery'


const Tech = () => {
  const isMobile = useMediaQuery("(max-width: 768px)");

  return (
    <div className='flex flex-row flex-wrap justify-center gap-10 mb-100'>
      {technologies.map((technology)=>(
        <div className='w-28 h-28 flex items-center justify-center' key={technology.name}>
          {isMobile ? (
            <img
              src={technology.icon}
              alt={technology.name}
              className='h-16 w-16 object-contain'
              loading='lazy'
            />
          ) : (
            <BallCanvas icon={technology.icon} />
          )}
        </div>
      ))}
    </div>
  )
}

export default SectionWrapper(Tech, "");
