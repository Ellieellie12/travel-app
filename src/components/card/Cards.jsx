import CardItem from "../carditem/CardItem"
import '../card/Cards.css'


function Cards() {
  return (
    <div className='cards'>
      <h1>Check out these EPIC Destinations!</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem 
              src='images/img-9.jpg'
              text='Explor the hidden waterfall deep inside the Amazon jungle'
              label='Adventure'
              path='/services'
              />
            <CardItem 
              src='images/img-2.jpg'
              text='Travel through the Islands of Bali in on a Private Cruise'
              label='Luxury'
              path='/services'
              />
            </ul>
            <ul className='cards__items'>
              <CardItem 
                src='images/img-3.jpg'
                text='Set Sail in the Atlantic Ocean visiting Uncharted Waters'
                label='Mystery'
                path='/services'
              />
              <CardItem 
                src='images/img-4.jpg'
                text='Experience Football on Top of the Himilayan Mountains'
                label='Adventure'
                path='/products'
              />
              <CardItem 
                src='images/img-8.jpg'
                text='Travel through the Islands of Bali in on a Private Cruise'
                label='Luxury'
                path='/sign-up'
              />
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Cards