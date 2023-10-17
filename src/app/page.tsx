import { Hanken_Grotesk } from 'next/font/google'
import Image from 'next/image'
import * as fs from 'fs'

const hanken_grotesk = Hanken_Grotesk({
  weight: ['500', '700', '800'],
  subsets: ['latin'] ,
  variable: '--font-hanken-grotesk',
})

let jsonResultsString = "";

try{
  jsonResultsString = fs.readFileSync('./data.json', 'utf-8');
} catch (err) {
  console.log(err);
}

const resultsData = JSON.parse(jsonResultsString);

export default function Home() {
  return (
    <main className={`${hanken_grotesk.variable} flex justify-center items-center bg-white font-hanken-grotesk md:h-screen`}> 
      <div className='shadow-2xl shadow-blue-200 md:flex-row md:rounded-3xl'>
        <div className='flex flex-col md:flex-row'>
          <section className='flex flex-col items-center p-10 space-y-4 bg-gradient-to-b from-light-slate-blue to-light-royal-blue rounded-b-3xl text-white md:rounded-3xl md:w-[330px]'>
            <div className='text-light-lavender font-bold md:text-xl'>
              Your Result
            </div>
            <div className='flex flex-col justify-center items-center w-36 h-36 p-10 rounded-full bg-gradient-to-b from-violet-blue to-persian-blue md:w-48 md:h-48 m:my-5'>
              <div className='text-6xl font-bold md:text-7xl'>
                76
              </div>
              <div className='text-slate-400 font-bold'>
                of 100
              </div>
            </div>
            <div className='text-2xl font-bold md:text-3xl'>
              Great
            </div>
            <div className='text-center text-light-lavender font-bold'>
              You scored higher than 65% of the people who have taken these tests.
            </div>
          </section>
          <section className='flex flex-col justify-between p-7 space-y-4 md:w-[330px]'>
            <div className='font-bold text-xl text-dark-gray-blue'>
              Summary
            </div>
            <div className='flex justify-between bg-light-red bg-opacity-[0.08] p-4 rounded-lg'>
              <div className='flex space-x-3'>
                <div className='w-5 relative'>
                  <Image
                    src={resultsData[0].icon}
                    alt='reaction icon'
                    layout='fill'
                  />
                </div>
                <div className='text-light-red text-lg font-bold'>
                  {resultsData[0].category}
                </div>
              </div>
              <div className='flex items-center'>
                <div className='font-bold'>
                  {resultsData[0].score}
                </div>
                <div className='text-slate-400'>
                  &nbsp; / 100
                </div>
              </div>
            </div>
            <div className='flex justify-between bg-orangey-yellow bg-opacity-[0.08] p-4 rounded-lg'>
              <div className='flex space-x-3'>
                <div className='w-5 relative'>
                  <Image
                    src={resultsData[1].icon}
                    alt='memory icon'
                    layout='fill'
                  />
                </div>
                <div className='text-orangey-yellow text-lg font-bold'>
                  {resultsData[1].category}
                </div>
              </div>
              <div className='flex items-center'>
                <div className='font-bold'>
                  {resultsData[1].score}
                </div>
                <div className='text-slate-400'>
                  &nbsp; / 100
                </div>
              </div>
            </div>
            <div className='flex justify-between bg-green-teal bg-opacity-[0.08] p-4 rounded-lg'>
              <div className='flex space-x-3'>
                <div className='w-5 relative'>
                  <Image
                    src={resultsData[2].icon}
                    alt='verbal icon'
                    layout='fill'
                  />
                </div>
                <div className='text-green-teal text-lg font-bold'>
                  {resultsData[2].category}
                </div>
              </div>
              <div className='flex items-center'>
                <div className='font-bold'>
                  {resultsData[2].score}
                </div>
                <div className='text-slate-400'>
                  &nbsp; / 100
                </div>
              </div>
            </div>
            <div className='flex justify-between bg-cobalt-blue bg-opacity-[0.08] p-4 rounded-lg'>
              <div className='flex space-x-3'>
                <div className='w-5 relative'>
                  <Image
                    src={resultsData[3].icon}
                    alt='visual icon'
                    layout='fill'
                  />
                </div>
                <div className='text-cobalt-blue text-lg font-bold'>
                  {resultsData[3].category}
                </div>
              </div>
              <div className='flex items-center'>
                <div className='font-bold'>
                  {resultsData[3].score}
                </div>
                <div className='text-slate-400'>
                  &nbsp; / 100
                </div>
              </div>
            </div>
            <button className='text-white text-lg bg-dark-gray-blue rounded-full p-3'>Continue</button>
          </section>
        </div>
      </div>
    </main>
  )
}
