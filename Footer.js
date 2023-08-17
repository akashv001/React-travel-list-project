import React from 'react'

function Footer({items}) {

  if (!items.length)
    return (
      <p className='stats'><em>Start adding some items to your list 🚀</em></p>
    )

  const numItems=items.length
  const numPacked=items.filter(item => item.packed).length
  const numPackedPerecnt=Math.round((numPacked/numItems)*100)
  return (
    <footer className='stats'>
      <em>
        {
          numPackedPerecnt===100?
            `You got Everything! Ready to Go! 🚀`
            :
            `You have ${ numItems } items in your list, and you already packed ${ numPacked } (${ numPackedPerecnt }%)`

        }
      </em>
    </footer>
  )
}

export default Footer
