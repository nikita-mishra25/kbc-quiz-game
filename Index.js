    function initClock()
    {
      updateClock();
      setInterval(updateClock, 1000);
      generateCaptcha();
      document.getElementById('userForm').addEventListener('input', validateForm);
    }

    function updateClock() 
    {
      var now = new Date();
      var hours = now.getHours();
      var minutes = now.getMinutes().toString().padStart(2, '0'); 
      var seconds = now.getSeconds().toString().padStart(2, '0');
      var ampm = hours >= 12 ? 'PM' : 'AM';

      var greeting = document.getElementById('greeting');
      var image = document.getElementById('greetingImage');

      var greetingText = '', imagePath = '';
      if (hours >= 5 && hours < 12)
      {
        greetingText = 'Good Morning'; imagePath = 'image/Good_morning_img.JPG';
      }
      else if (hours >= 12 && hours < 17)
      {
        greetingText = 'Good Afternoon'; imagePath = 'image/After_Noon_img.WEBP';
      }
      else if (hours >= 17 && hours < 20)
      {
        greetingText = 'Good Evening'; imagePath = 'image/evening.JPG';
      }
      else
      
      {
        greetingText = 'Good Night'; imagePath = 'image/good-night image.JPG';
      }
      greeting.textContent = greetingText;
      image.src = imagePath;
      hours = hours % 12 || 12;
      document.getElementById('clock').textContent = hours + ':' + minutes + ':' + seconds + ' ' + ampm;
    }

    function generateCaptcha() 
    {
      var chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
      var captcha = '';
      for (var i = 0; i < 4; i++)
         {
        captcha += chars.charAt(Math.floor(Math.random() * chars.length)); 
      }
      document.getElementById('captchaText').textContent = captcha;
    }

    function showError(field, msg)
    {
      document.getElementById(field + 'Error').textContent = msg;
    }

    function checkPasswordStrength()
    {
      var pass = document.getElementById('password').value;
      var strength = document.getElementById('passStrength');
      var score = 0;
      if (pass.length >= 6) score++; 
      if (/[A-Z]/.test(pass)) score++; 
      if (/[^A-Za-z0-9]/.test(pass)) score++;

      strength.textContent = score === 1 ? 'Poor' : score === 2 ? 'Normal' : score === 3 ? 'Strong' : '';
      strength.style.color = score === 1 ? 'red' : score === 2 ? 'orange' : score === 3 ? 'green' : '';
    }

    function validateForm()
     {
      var name = document.getElementById('name').value.trim();
      var age = parseInt(document.getElementById('age').value);
      var email = document.getElementById('email').value;
      var password = document.getElementById('password').value;
      var mobile = document.getElementById('mobile').value;
      var dob = document.getElementById('dob').value;
      var tob = document.getElementById('tob').value;
      var captchaInput = document.getElementById('captchaInput').value.trim();
      var captchaText = document.getElementById('captchaText').textContent.trim(); 
      var genderChecked = document.querySelector('input[name="gender"]:checked');
      var hobbies = document.querySelectorAll('input[name="hobby"]:checked'); 

      document.getElementById('nameError').textContent = name ? '' : 'Name is required';
      document.getElementById('ageError').textContent = age > 0 ? '' : 'Enter valid age';
      document.getElementById('emailError').textContent = email.includes('@') ? '' : 'Invalid email';
      document.getElementById('mobileError').textContent = /^[0-9]{10}$/.test(mobile) ? '' : '10 digit number only';
      document.getElementById('dobError').textContent = dob ? '' : 'DOB required';
      document.getElementById('tobError').textContent = tob ? '' : 'TOB required';
      document.getElementById('captchaError').textContent = captchaInput === captchaText ? '' : 'Captcha mismatch';
      document.getElementById('genderError').textContent = genderChecked ? '' : 'Select gender';
      document.getElementById('hobbyError').textContent = hobbies.length >= 2 ? '' : 'Select at least 2 hobbies';

      var isValid = name && age > 0 && email.includes('@') && /^[0-9]{10}$/.test(mobile) &&
                    password.length >= 6 && captchaInput === captchaText &&
                    dob && tob && genderChecked && hobbies.length >= 2;

      document.getElementById('submitBtn').disabled = !isValid;
    }

    function handleSubmit()
     {
      alert('Form submitted successfully!');
      window.location.href = 'C:/Users/DELL/Desktop/K_B_C/Index_1.html';
      return false; 
    }
