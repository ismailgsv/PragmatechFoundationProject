// let a=1

// while(a<100){
//     console.log(a);
//     a++
// }


// for(let a=1;a<200;a++){
//     if(a%3==0){
//         console.log(a);
//     }
// }

// let squad04=['Ulvi','Senan','Ulker']

// for(let i=0;i<3;i++){
//     console.log(squad04[i]);
// }

// let adlar=['Elcan','Punhan','Ulker']
// let soyadlar=['Aliyev','Mammadov','Quliyeva']
// let yas=[15,25,30]

// for(let i=0;i<3;i++){
//     if(soyadlar[i]=='Quliyeva'){
//         console.log(adlar[i])
//         console.log(soyadlar[i])
//         console.log(yas[i])
//     }
// }

// let telebeler=[
//     ['Elcan','Aliyev',15],
//     ['Punhan','Mammadov',25],
//     ['Ulker','Quliyeva',30]
// ]

// for(let i=0;i<3;i++){
//     if(telebeler[i][0]=='Ulker'){
//         console.log(telebeler[i][0]);
//         console.log(telebeler[i][1]);
//         console.log(telebeler[i][2]);
//     }
// }

// let telebe01={
//     ad:'Ferid',
//     soyad:'Kerimli',
//     yas:16,
//     email: 'fkerimli@memmedova.ru'
// }

// let telebe02={
//     ad:'Ulker',
//     soyad:'Memmedova',
//     yas:23,
//     email: 'ulker@memmedova.ru'
// }

// telebeler=[telebe01,telebe02]

// class Telebe{

//     constructor(_ad,_soyad,_yas){
//         this.Ad=_ad
//         this.Soyad=_soyad
//         this.Yas=_yas
//     }

//     melumatlar(){
//         console.log(this.Ad+' / '+this.Soyad);
//     }

//     Yetkinlikyasi(){
//         if(this.Yas<25){
//             console.log('Bextivi bir daha sina');
//         }else{
//             console.log('Tebrikler');
//         }
//     }
// }

// let telebe=new Telebe('Samir','Mammadov',30)
// let telebe2=new Telebe('Ulker','Memmedov',20)


// let telebe=[
//     new Telebe('Samir','Mammadov',30),
//     telebe2=new Telebe('Ulker','Memmedov',20)
// ]

// For(i=0;i<telebe.length;i++){}



// let users=[]

// class User{
//     constructor(_ad,_soyad){
//         this.Ad=_ad
//         this.Soyad=_soyad
//     }

//     showUsersData(){
//         console.log(`${this.Ad} | ${this.Soyad}`);
//     }
// }

// function melumatlariAl(){
//     let Ad=prompt('Adinizi daxil edin')
//     let Soyad=prompt('Soyadinizi daxil edin')
//     return [Ad,Soyad]
// }

// function obyektYarat(){
//     let istifadeciMelumatlari=melumatlariAl()
//     user=new User(istifadeciMelumatlari[0],istifadeciMelumatlari[1])

//     return user;
// }

// function siyahiyaElaveEt(){
//     users.push(obyektYarat())
//     return users;
// }

// function melumatlariEkranaCapet(){
//     siyahiyaElaveEt()
//     for(let i=0;i<users.length;i++){
//         users[i].showUsersData()
//     }
// }

// melumatlariEkranaCapet()

// ededler=[1,3,4,90,23,890,12,30,4,3,67,21]

// let ikireqemlileriSay=0
// for(let i=0;i<ededler.length;i++){
//     if(String(ededler[i]).length==2){
//         ikireqemlileriSay++
//     }
// }
// console.log(ikireqemlileriSay);

// let bgColors=['red','green','blue','yellow','purple','orange']
// let contents=[
//     'xeber1',
//     'xeber2',
//     'xeber3',
//     'xeber4',
//     'xeber5',
//     'xeber6'
// ]
// let blogItems=document.getElementsByClassName('blog-item')

// for(let i=0;i<blogItems.length;i++){
//     blogItems[i].style.background=bgColors[i]
//     blogItems[i].innerHTML=contents[i]
// }


// let container=document.createElement('div')
// container.className='container'

// for(let rowCount=0;rowCount<2;rowCount++){
//     let row=document.createElement('div')
//     row.className='row'
//     for(let colCount=0;colCount<3;colCount++){
//         let col=document.createElement('div')
//         col.className='col-4'

//         let blogItems=document.createElement('div')
//         blogItems.className='blog-item'
//         col.appendChild(blogItems)
//         row.appendChild(col)
//     }
//     container.appendChild(row)
// }

// document.querySelector('#blog').appendChild(container)

let images=['img/1.jpeg','img/2.jpeg','img/3.jpg','img/4.jpg','img/5.jpg','img/6.jpg','img/7.jpg','img/8.jpeg','img/1.jpeg']
let rowContent=''

for(i=0;i<images.length;i++){
    let colContent=`
                <div class="col-4">
                    <div class="box" onclick='showBigImage(this)'>
                        <img src=${images[i]} alt="">
                    </div>
                </div>
`
    rowContent+=colContent
}
document.querySelector('.row').innerHTML=rowContent

function showBigImage(element){
    let imgURL=element.querySelector('img').getAttribute('src')
    let overlayContent=`
        <div class="overlay" onclick='closeImage()'>
        
            <img src=${imgURL} alt="">
        </div>
        
    `
    
    document.querySelector('.row').innerHTML=rowContent+overlayContent
}

function closeImage(){
    document.querySelector('.row').removeChild(document.querySelector('.overlay'))
}