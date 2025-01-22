export const isTwoOneValid = (data) => {
    const { email = '', phoneNumber = '', password = '', confirmPassword = ''} = data;
    
    const errors = {};
    let isValid = true;
  
    if (email.length <= 0) {
      errors.email = "Мэйл хаягаа оруулна уу";
      isValid = false;
    }
    if (phoneNumber.length <= 0) {
      errors.phoneNumber = "Утасны дугаараа оруулна уу.";
      isValid = false;
    }
     else if (phoneNumber.length <= 1) {
      errors.phoneNumber = "hello";
    }
    if (password.length <= 0) {
      errors.password = "Нууц үгээ оруулна уу";
      isValid = false;
    }
    if (confirmPassword.length <= 0) {
      errors.confirmPassword = "Нууц үгээ давтаж оруулна уу"
    }
  
    return { isValid, errors };
  };
  