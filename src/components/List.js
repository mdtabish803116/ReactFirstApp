import ListItem from "./ListItem"
const List = (props) =>{
    const {list} = props;
     return(
         <ul className = "list">
         {
             list.map((item) =>(
                 <ListItem {...item}/>
             ))
         }

         </ul>
         
     )
}

export default List;