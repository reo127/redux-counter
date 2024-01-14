# 1) Create counter.css and past the CSS
```css
.btn{
    all: unset;
    cursor: pointer;
    padding: 2px;
    font-size: 100px;
    margin: 0px 20px;
}
.parent{
    display: flex;
    align-items: center;
    justify-content: center;
}
.btn:hover{
    color: crimson;
}
.count{
    font-size: 14rem;
}
```

# 2) Copy Pase the code in App.js
```javaScript
import "./counter.css"

function App() {
  return (
    <div className="">
      <div className='parent'>
        <button className='btn'>+</button>
        <p className='count'>0</p>
        <button className='btn'>-</button>
      </div>
    </div>
  );
}

export default App;
``` 
