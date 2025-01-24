import React from 'react'

export const isStepThreeValid = (data) => {
        const { dateBirth, profileImg } = data;
        console.log(profileImg);
        
    
        const errors = {};
        let isValid = true;
    
        if (!dateBirth) {
          errors.dateBirth = "Төрсөн өдрөө оруулна уу";
          isValid = false;
        }
        if (!profileImg) {
          errors.profileImg = "Профайл зурагаа оруулна уу";
          isValid = false;
        }
    
        return { isValid, errors };
      };

