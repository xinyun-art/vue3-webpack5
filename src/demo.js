import MidFinger from './assets/picture/400.jpg'
import './assets/styles/styles.scss'
import './assets/styles/common.scss'
import './assets/styles/reset.css'

const body = document.body

// ------img---------------
console.log('MidFinger:', MidFinger)
const img = new Image()
img.src = MidFinger
img.style.width = '100%'
img.style.maxWidth = '375px'
img.style.height = 'auto'

// ------background-image---------------
const backImgEle = document.createElement('div')
backImgEle.classList.add('back-img')

body.appendChild(img)
body.appendChild(backImgEle)

// ------小于8kb icon---------------
const iconEle = document.createElement('div')
iconEle.classList.add('icon')
iconEle.classList.add('mt-10')

body.appendChild(img)
body.appendChild(backImgEle)
body.appendChild(iconEle)

// ------I'm a bad man!---------------
const txtEle = document.createElement('div')
txtEle.classList.add('bad-man')
txtEle.innerHTML = "I'm a bad man!!!"

body.appendChild(img)
body.appendChild(backImgEle)
body.appendChild(iconEle)
body.appendChild(txtEle)

const arrowFnToES5 = () => {
	console.log('arrowFnToES5Test')
}
