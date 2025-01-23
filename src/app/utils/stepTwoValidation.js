export const isTwoOneValid = (data) => {
    const { email = '', phoneNumber = '', password = '', confirmPassword = ''} = data;
    
    const errors = {};
    let isValid = true;
  
    if (email.length <= 0) {
      errors.email = "Мэйл хаягаа оруулна уу";
      isValid = false;
    } else if (!/@/.test(email)) {
      errors.email = "Зөв мэйл хаяг оруулна уу";
      isValid = false;
    }
    if (phoneNumber.length <= 0) {
      errors.phoneNumber = "Утасны дугаараа оруулна уу.";
      isValid = false;
    }
     else if (phoneNumber.length !== 8) {
      errors.phoneNumber = "8 оронтой дугаар оруулна уу.";
      isValid = false;  
    }
    if (password.length <= 0) {
      errors.password = "Нууц үгээ оруулна уу";
      isValid = false;
    } else if (password.length !== 6) {
      errors.password = "6 оронтой тоо оруулна уу";
      isValid = false;
    }
    if (confirmPassword.length <= 0) {
      errors.confirmPassword = "Нууц үгээ давтаж оруулна уу"
      isValid = false;
    } else if (password !== confirmPassword) {
      errors.confirmPassword = "Таны оруулсан нууц үг таарахгүй байна."
      isValid = false;
    }
  
    return { isValid, errors };
  };
  