import {getInfo, uzetiSveBrodove} from './service.js'

const body = document.querySelector('body')
const header = document.getElementById('header')
const app = document.querySelector('#app')

getInfo().then(res => {

const par = document.createElement('p')
par.textContent = res.data.name

const par1 = document.createElement('p')
par1.textContent = res.data.founder

const par2 = document.createElement('p')
par2.textContent = res.data.founded

header.append(par,par1,par2)
body.append(header)

})


const Launch = (launch) => {

    const launchContainer = document.createElement('div')
    launchContainer.className = 'launch'


    const div0 = document.createElement('div')
    div0.className = 'inner-div-0'
        const img = document.createElement('img')
        img.src = launch.image
        img.addEventListener('click', () => {
            const link = document.createElement('a')
            link.href = launch.url
        })

    div0.append(img)

    const div1 = document.createElement('div')
    div1.className = 'inner-div-1'
        const span1 = document.createElement('span')
        span1.textContent = launch.ship_name
    div1.appendChild(span1)

    const div2 = document.createElement('div')
    div2.className = 'inner-div-2'
        const span2 = document.createElement('span')
        span2.textContent = launch.ship_type
    div2.appendChild(span2)

    const div3 = document.createElement('div')
    div3.className = 'inner-div-2'
        const span3 = document.createElement('span')
        span3.textContent = launch.active
    div3.appendChild(span3)

    launchContainer.append(div0,div1,div2,div3)
    return launchContainer
}



const LaunchList = (arr) => {
    const launchList = document.createElement('div')
    launchList.className = 'launch-list'

    arr.forEach(launch => {
        launchList.appendChild(Launch(launch))
    })
    add.append(launchList)
    
}

uzetiSveBrodove().then(res => {
    app.appendChild(LaunchList(res))
})
// pokusao sam da uradim koliko sam mogao
