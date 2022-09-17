import { MagnifyingGlassPlus } from 'phosphor-react'

import './styles/main.css'
import LogoImg from './assets/Logo.svg'

function App() {

  return (
    <div className='max-w-[1344px] mx-auto flex flex-col items-center my-20'>
      <img src={LogoImg} />
      <h1 className='text-6xl text-white font-bold mt-20'>
        Seu <span className='bg-nlw-gradient text-transparent bg-clip-text'>duo</span> está aqui.
        </h1>

      <div className='grid grid-cols-6 gap-6 mt-16'>
        <a href="" className='relative rounded-lg'>
          <img src="/game1.png"/>

          <div className='w-full pt-16 pb-4 px-4 bg-game-gradient absolute left-0 right-0 bottom-0'>
            <strong className='font-bold text-white block'>League of Legends</strong>
            <span className='text-zinc-300 text-sm block'>4 anúncios</span>
          </div>

        </a>
        <a href="" className='relative'>
          <img src="/game2.png"/>

          <div className='w-full pt-16 pb-4 px-4 bg-game-gradient absolute left-0 right-0 bottom-0'>
            <strong className='font-bold text-white block'>Dota 2</strong>
            <span className='text-zinc-300 text-sm block'>4 anúncios</span>
          </div>
        </a>
        <a href="" className='relative'>
          <img src="/game3.png"/>

          <div className='w-full pt-16 pb-4 px-4 bg-game-gradient absolute left-0 right-0 bottom-0'>
            <strong className='font-bold text-white block'>Counter Strike</strong>
            <span className='text-zinc-300 text-sm block'>4 anúncios</span>
          </div>
        </a>
        <a href="" className='relative'>
          <img src="/game4.png"/>

          <div className='w-full pt-16 pb-4 px-4 bg-game-gradient absolute left-0 right-0 bottom-0'>
            <strong className='font-bold text-white block'>Apex Legends</strong>
            <span className='text-zinc-300 text-sm block'>4 anúncios</span>
          </div>
        </a>
        <a href="" className='relative'>
          <img src="/game5.png"/>

          <div className='w-full pt-16 pb-4 px-4 bg-game-gradient absolute left-0 right-0 bottom-0'>
            <strong className='font-bold text-white block'>Fortnite</strong>
            <span className='text-zinc-300 text-sm block'>4 anúncios</span>
          </div>
        </a>
        <a href="" className='relative'>
          <img src="/game6.png"/>

          <div className='w-full pt-16 pb-4 px-4 bg-game-gradient absolute left-0 right-0 bottom-0'>
            <strong className='font-bold text-white block'>World WarCraft</strong>
            <span className='text-zinc-300 text-sm block'>4 anúncios</span>
          </div>
        </a>
      </div>

      <div className='pt-1 bg-nlw-gradient self-stretch rounded-lg mt-8 overflow-hidden'>
        <div className='bg-[#2A2634] px-8 py-6 flex justify-between items-center'>
          <div>
            <strong className='text-2xl text-white font-black'>Não encontrou seu duo?</strong>
            <span className='block text-zinc-400 text-sm'>Publique um anúncio para encontrar novos players!</span>
          </div>

          <button className='bg-violet-500 hover:bg-violet-700 text-white py-3 px-4 rounded flex items-center gap-3'>
            <MagnifyingGlassPlus size={24} />
            Publicar anúncio
          </button>
        </div>
      </div>
    </div>
  )
}

export default App
