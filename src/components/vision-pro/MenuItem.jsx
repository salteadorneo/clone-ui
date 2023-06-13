export default function MenuItem ({ className, image, text }) {
  return (
    <li
      className={`${className} flex items-center gap-4 rounded-[14px] py-3 px-6 opacity-60 text-white hover:opacity-100 hover:bg-white/30 transition-all duration-300 cursor-default`}
    >
      <img src={`/vision-pro/${image}`} alt='' />
      {text}
    </li>
  )
}
