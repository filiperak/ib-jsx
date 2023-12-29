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

let user1 = {
    username:'jelenaMatejic',
    age: 29,
    blogs: [blog1,blog3],
    logBlogs: function(){
        this.blogs.forEach(elem => console.log(elem.title))
    }
};

let user2 = {
    username:'stefanStanimirovic',
    age:34,
    blogs: [blog2],
    logBlogs: function(){
        this.blogs.forEach(elem => console.log(elem.title))
    }
};

let users = [user1,user2];

//5
let stolajkov = (arr) => {
    arr.forEach(elem => {
        let ukLajkova=0;
        elem.blogs.forEach(blog => {
            ukLajkova += blog.likes;
        });
        if(ukLajkova > 49){
            console.log(elem.username);
        }
    });
}
stolajkov(users);
//6
let sumaLajkova = (arr) => {
    let sum = 0;
    let iter = 0;
    arr.forEach(elem => {
        elem.blogs.forEach(blog => {
           sum+= blog.likes;
           iter++;
        });
    });
    return sum / iter;
}
let nadprosecanBrLajkova = (arr) => {
    let prosek = sumaLajkova(arr)
    arr.forEach(elem => {
        elem.blogs.forEach(blog => {
            if(blog.likes > prosek){
                console.log(blog.title);
            }
        })
    })
}
console.log(sumaLajkova(users));
nadprosecanBrLajkova(users)
//1
let ispod18 = (arr) => {
    arr.forEach(elem => {
        if(elem.age > 18){
            console.log(elem.username);
        }
    });
}
ispod18(users);
//2
let iznad50 = (arr) => {
    arr.forEach(elem => {
        elem.blogs.forEach(blog => {
            if(blog.likes > 50){
                console.log(blog.title);
            }
        })
    })
}
iznad50(users);
let jelena = (arr) => {
    arr.forEach(elem => {
        if(elem.username == 'jelenaMatejic'){
            elem.blogs.forEach(blog =>{ 
                console.log(blog.title)
            });
        }
    })
}
jelena(users)
//5
let zadatak7 = (arr) => {
    let likes= 0;
    let dislikes = 0;
    let br = 0;
    arr.forEach(elem => {
        elem.blogs.forEach(blog => {
            br++;
            likes += blog.likes;
            dislikes += blog.dislikes;
        });
    });
    let avgLikes = likes / br;
    let avgDislikes = dislikes / br;
    arr.forEach(elem => {
        elem.blogs.forEach(blog => {
            if(blog.likes > avgLikes && blog.dislikes < avgDislikes){
                console.log(blog.title);
            }
        });
    });
}
zadatak7(users)