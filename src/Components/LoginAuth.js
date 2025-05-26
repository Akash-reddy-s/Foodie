const validateform = (name, password) => {
    if (!name.trim()) {
      alert("UserName cannot be Empty");
      return false;
    } 
    else if (password.length < 6) {
      alert("Password must be at least 6 characters Long");
      return false;
    }
    
    return true;
  };
  export default validateform;
  