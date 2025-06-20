import { Transition } from '@headlessui/react'
import { HeartIcon, SparklesIcon } from '@heroicons/react/24/solid'
import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

export default function Home() {
  const [show, setShow] = useState(false)
  const navigate = useNavigate()

  useEffect(() => {
    setShow(true)
  }, [])

  const handleClick = () => {
    navigate('/login')
  }

  return (
    <div className="flex flex-col justify-center items-center h-screen bg-gradient-to-br from-roseFonce to-noirElegant text-roseClair p-4">
      <Transition
        show={show}
        enter="transition-opacity duration-1000"
        enterFrom="opacity-0"
        enterTo="opacity-100"
      >
        <h1 className="text-6xl font-glamour mb-6 text-center flex items-center gap-3">
          <HeartIcon className="w-12 h-12 text-or animate-pulse" />
          Téléphone Rose IA
          <SparklesIcon className="w-10 h-10 text-or animate-bounce" />
        </h1>
      </Transition>

      <p className="text-xl font-elegant mb-8 text-center max-w-lg">
        Entrez dans un univers de séduction et de conversation... <br />
        Notre IA vous attend pour des échanges enflammés. 🔥 <br />
        Service strictement réservé aux adultes (18+).
      </p>

      <button
        onClick={handleClick}
        className="mt-4 px-8 py-4 bg-or text-noirElegant font-bold rounded-full hover:bg-roseClair transition text-xl shadow-lg"
      >
        Se connecter au service
      </button>
    </div>
  )
}
