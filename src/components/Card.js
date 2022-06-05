import Heading from "./Heading"
import List from "./List"

const Card = (props) => {
    const {heading , list} = props;
     return (
     <div>
        <Heading heading={heading}/>
        <List list={list}/>
     </div>
    );
};

export default Card;