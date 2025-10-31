import React from 'react'

const Button = () => {
  return (
     <div className='flex flex-wrap justify-center cursor-pointer md:justify-start gap-4 mt-6'>
                <a className='px-5 py-3 h-13 border border-zinc-900 rounded-full font-medium hover:bg-zinc-900 hover:text-white transition-colors'>Download CV 

                    <i class="fa-solid fa-download text-xl text-zinc-900 hover:text-zinc-50 transition-colors ml-2"></i>

                </a>
                <a className='px-5 py-2 h-13 text-zinc-900 rounded-full font-medium cursor-pointer transition-colors'>scroll down
                    <i class="fa-solid fa-angles-down text-2xl text-zinc-900  ml-2 animate-bounce"></i>

                </a>
                
            </div>
  )
}

export default Button