let blog1 = {
    title: 'If naredba grananja!',
    likes: 50,
    dislikes: 21
};
let blog2 = {
    title:'while petlja',
    likes:25,
    dislikes: 36,
};
let blog3 = {
    title: 'for petlja',
    likes: 100,
    dislikes:12
};

let arrBlogs = [blog1,blog2,blog3];
console.log(arrBlogs[2]);
console.log(arrBlogs[1]['title']);
console.log(arrBlogs[1].title);

arrBlogs[1].title = "While ciklus"  //menjanje vrednosti objekta
//ispis naslova svih naslova iz niza
for(let i = 0; i <arrBlogs.length; i++){
    console.log(arrBlogs[i].title);
}

arrBlogs.forEach(obj => console.log(obj.title , obj.likes));

//1
let sumLikes = (arr) => {
    let sum = 0;
    arr.forEach(obj => {
        sum += obj.likes;
    });
    return sum;
};
console.log(sumLikes(arrBlogs));
//2
let avgLikes = (arr) => {
    let s = sumLikes(arr);
    return s / arr.length;
}
console.log(avgLikes(arrBlogs));
//3
let visePozitivnih = (arr) => {
    arr.forEach(obj => {
        if(obj.likes > obj.dislikes){
            console.log(obj.title);
        }
    });
}
visePozitivnih(arrBlogs)
//4
let zadatak4 = (arr) => {
    arr.forEach(obj => {
        if(obj.likes >= (obj.dislikes * 2)){
            console.log(obj.title);
        }
    });
}
zadatak4(arrBlogs);
//5
let zad5 =(arr) => {
    arr.forEach(obj => {
        if(obj.title.endsWith('!')){
            console.log(obj.title);
        }
    })
}
zad5(arrBlogs)
//
let zad51 = (arr) => {
    arr.forEach(obj => {
        if(obj.title[obj.title.length -1]== "!"){
            console.log(obj.title);
        }
    })
}
zad51(arrBlogs)
//6