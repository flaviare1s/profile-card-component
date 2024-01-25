import './App.css'

export function App() {

  return (
     <div>
        <main>
          <div className="container">
            <div className="card">
              <div className="card-header">
                <div className='image'>
                  <img src="/public/image-victor.jpg" alt="Victor's photo" />
                </div>
                  <h1>Victor Crest <span>26</span></h1>
                  <p>London</p>
              </div>
                <div className='card-main'>
                  <div className='card-main-1'>
                    <p>80K</p>
                    <p>Followers</p>
                  </div>
                  <div className='card-main-1'>
                    <p>803K</p>
                    <p>Likes</p>
                  </div>
                  <div className='card-main-1'>
                    <p>1.4K</p>
                    <p>Photos</p>
                  </div>
                </div>
            </div>
          </div>
        </main>
        <div className='attribution'>
          Challenge by <a href="https://www.frontendmentor.io?ref=challenge">Frontend Mentor</a>. 
          Coded by <a href="https://github.com/flaviare1s">Flávia Reis</a>.
        </div>
    </div>
  )
}

