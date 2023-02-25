export default Book = ({ title, author}) => {
  return(
   <li>Title:{title} Author:{author}
      <button type="button">Remove</button>
   </li> 
  );
};
