export default function BallItem ({ className, icon, text, shadow }) {
  return (
    <div
      className='group text-xl text-white cursor-default drop-shadow animate-fade-in-scale'
    >
      <div
        className={`${className} grid place-content-center w-32 h-32 rounded-full bg-gradient-to-t ${shadow} mb-2 group-hover:scale-110 transition-all duration-300`}
      >
        {icon}
      </div>
      {text}
    </div>
  )
}
