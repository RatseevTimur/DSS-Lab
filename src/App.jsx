
function App() {
  let input = 'Hollow World'
  const encode = input => [...input]
    .map((x, i) => [x.charCodeAt(0), i])
    .sort()
    .flatMap(x => x)
    .join('.')
    .match(/./g)
    .flatMap((x, i) => new Array(x == '.' ? 1 : 2 + x * 2).fill((1 + i) % 2))
    .join('')
    .replace(/(([01])\2*)/g, x => `${(+x ? '.' : '-')}${x.length}`)

    const encoded = encode(input)

    const decode = input => input
    .replace(/(\.|\-)(\d+)/g, (i, _i, val) => val == 1 ? '.' : (val - 2) / 2)
    .match(/\d+\.\d+/g)
    .map(x => x.split('.'))
    .sort((a, b) => a[1] - b[1])
    .map(x => String.fromCharCode(x[0]))
    .join('');

    console.log(decode(encoded))

  return (
    <>
      <div className='dialog-container'>
        <div className='dialog'>
          <div className='dialog__header'>
            <div className='dialog__header-title-container'>
              <div className='dialog__header-title'>
                Ссъешь ещё этих мягких французских булок, да выпей чаю
              </div>
              <div className='dialog__header-subtitle'>
                Съешь ещё этих мягких французских булок, да выпей чаю
              </div>
            </div>
            <button className='dialog__header-button'>
              Кнопка закрытия
            </button>
          </div>
          <div className='dialog__content'>
            <div className='dialog__content-block dialog__content-block_left'>
              Left
            </div>
            <div className='dialog__content-block dialog__content-block_right'>
              <div className='content'>
                <span>Top</span>
                <span>Center</span>
                <span>Bottom</span>
              </div>
            </div>
          </div>
          <div className='dialog__footer'>
            Ссъешь ещё этих мягких французских булок, да выпей чаю<br />
            ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789<br />
            Ссъешь ещё этих мягких французских булок, да выпей чаю
          </div>
        </div>
      </div>
    </>
  )
}

export default App
