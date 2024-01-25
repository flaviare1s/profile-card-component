import './App.css'

export function App() {

  return (
     <div>
        <main>
          <div className="container">
            <div className="card">
              <div className='image'>
                <img src="/public/image-victor.jpg" alt="Victor's photo" />
              </div>
              <div className="card-content">
                <h1>Victor Crest <span>26</span></h1>
                <p>London</p>
                <div>
                  <div>
                    80K
                    Followers
                  </div>
                  <div>
                    803K
                    Likes
                  </div>
                  <div>
                    1.4K
                    Photos
                  </div>
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

