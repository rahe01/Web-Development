export default function Task({name,isDone}){
   
   return(
    <li> Task: {name} {isDone ? 'Finish': 'work'}</li>
   )
    

    
}