function choice(items){
    let ind=Math.floor((Math.random(0)*(items.length-1)));
    return items[ind];
}
function remove(items, item){
    let result=[];
    for(let i=0; i<items.length; i++){
       if(items[i]!=item){
            result.push(items[i]);
        }
    }
    return result;
}
// function hello(){
//     console.log('Hello!');
// }
// //export default helpful;
export {choice,remove};