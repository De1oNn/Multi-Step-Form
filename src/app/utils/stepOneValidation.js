export const isStepOneValid = (data) => {
    const { firstName = '', lastName = '', username = '' } = data;
    
    const errors = {};
    let isValid = true;
  
    if (firstName.length <= 0) {
      errors.firstName = "Нэрээ оруулна уу";
      isValid = false;
    }
    if (lastName.length <= 0) {
      errors.lastName = "Овгоо оруулна уу.";
      isValid = false;
    }
    if (username.length <= 0) {
      errors.username = "Хэрэглэгчийн нэрээ оруулна уу";
      isValid = false;
    }
  
    return { isValid, errors };
  };