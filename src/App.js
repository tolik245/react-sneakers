
function App() {
  return (
    <div className="wrapper clear">
      
      <div className="overlay">
        <div className="drawer">
          <h2 className="mb-30">Корзина</h2>

          <div className="cartItem d-flex align-center mb-30">
            <div style={{backgroundImage: 'url(img/sneakers/1.jpg)'}} className="cartItemImg">
            
            </div>
            
            <div className="mr-20">
              <p className="mb-5">Мужские Кроссовки Nike Blazer Mid Suede</p>
              <b>12 999 руб.</b>
            </div>
            <img className="removeBtn" src="/img/btn-remove.svg" alt="remove" />

            
          </div>

          <div className="cartItem d-flex align-center">
            <div style={{backgroundImage: 'url(img/sneakers/1.jpg)'}} className="cartItemImg">
            
            </div>
            
            <div className="mr-20">
              <p className="mb-5">Мужские Кроссовки Nike Blazer Mid Suede</p>
              <b>12 999 руб.</b>
            </div>
            <img className="removeBtn" src="/img/btn-remove.svg" alt="remove" />

            
          </div>
        </div>
      </div>
      




      <header className="d-flex justify-between align-center p-40">
        <div className="d-flex align-center">
          <img width={40} height={40} src="/img/logo.png" alt="logo" />

        <div>
          <h3 >REACT SNEAKERS</h3>
          <p className="opacity-5">Магазин лучших кроссовок</p>
        </div>
        </div>
        
        <ul className="d-flex ">
          <li className="mr-30">
            <img src="img/cart.svg" alt="cart"/>
            <span>1205 руб.</span>
          </li>
          <li>
            <img src="img/user.svg"alt="user"/>
          </li>
        </ul>
        
      </header>
      <div className="content p-40">
        <div className="d-flex align-center justify-between mb-40">
        <h1>Все кроссовки</h1>
        <div className="search-block d-flex align-center justify-between">
          <img width={14} height={14} src="/img/search.svg" alt="Search" />
          <input type="text" placeholder="Поиск..." />
        </div>
        </div>
        <div className="sneakers d-flex">

        <div className="card">
            <div className="favorite">
              <img src="/img/heart-unliked.svg" alt="heart" />
            </div>
            <img width={133} height={112} src="/img/sneakers/1.jpg" alt="" />
            <h5>Мужские Кроссовки Nike Blazer Mid Suede</h5>
            <div className="d-flex justify-between align-center">
              <div className="d-flex flex-column">
                <span>Цена:</span>
                <b>12 999 р.</b>
              </div>
              <button className="button">
                <img width={11} height={11} src="/img/plus.svg" alt="add" />
              </button>
            </div>
          </div>

          <div className="card">
            <img width={133} height={112} src="/img/sneakers/2.jpg" alt="" />
            <h5>Мужские Кроссовки Nike Blazer Mid Suede</h5>
            <div className="d-flex justify-between align-center">
              <div className="d-flex flex-column">
                <span>Цена:</span>
                <b>12 999 р.</b>
              </div>
              <button className="button">
                <img width={11} height={11} src="/img/plus.svg" alt="add" />
              </button>
            </div>
          </div>

          <div className="card">
            <img width={133} height={112} src="/img/sneakers/3.jpg" alt="" />
            <h5>Мужские Кроссовки Nike Air Max 270</h5>
            <div className="d-flex justify-between align-center">
              <div className="d-flex flex-column">
                <span>Цена:</span>
                <b>8 499 руб. р.</b>
              </div>
              <button className="button">
                <img width={11} height={11} src="/img/plus.svg" alt="add" />
              </button>
            </div>
          </div>

          <div className="card">
            <img width={133} height={112} src="/img/sneakers/4.jpg" alt="" />
            <h5>Кроссовки Puma X Aka Boku Future Rider</h5>
            <div className="d-flex justify-between align-center">
              <div className="d-flex flex-column">
                <span>Цена:</span>
                <b>8 999 руб. р.</b>
              </div>
              <button className="button">
                <img width={11} height={11} src="/img/plus.svg" alt="add" />
              </button>
            </div>
          </div>

        </div>
         
      </div>
    </div>
  );
}

export default App;
