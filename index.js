console.log('Start');

function getUser(id){
    return new Promise((resolve,reject)=> {
        setTimeout(()=>{
            console.log('User with id: '+id)
            resolve({id: id, username:'xyz'})
        },2000)
    })
};

function getRepos(id, username){
    return new Promise((resolve,reject)=> {
        setTimeout(()=>{
            console.log(id, username)
            resolve(['repo1','repo2'])
        },2000)
    })
};

function getCommits(repo){
    return new Promise((resolve,reject)=> {
        setTimeout(()=>{
            console.log(repo)
            resolve(console.log('Commits'))}
        ,2000)
    })
};

getUser(1)
    .then((user)=> getRepos(user.id, user.username))
    .then((repos)=> getCommits(repos[0]))
    .then((commits)=>console.log(commits));

console.log('End');