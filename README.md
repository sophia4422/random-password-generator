# Random Password Generator

This challenge was to create a random password generator using Javascript. Click here to see the deployed page:

# The Criteria

- When the 'generate password' button is clicked, the user is presented with a series of prompts
- The length of the password must be at least 8 characters long
- The password cannot exceed 128 characters long
- The user must be prompted to select the password criteria, which includes: lowercase, uppercase, numbers and/or special characters
- At least one character type must be selected
- The generated password must show on the page

# User Story

AS AN employee with access to sensitive data
I WANT to randomly generate a password that meets certain criteria
SO THAT I can create a strong password that provides greater security

# The Final Outcome

When the generate button is clicked, a prompt appears asking the user to define a desired password length.

Entering a value less than 8 or more than 128 characters leads to a new prompt to appear, alerting the user that the limit is 8 - 128.

Next, the series of prompts appear which ask the user if they would like lowercase/uppercase/numbers/special characters in their password. 'OK' accepts the characters, 'Cancel' declines them. Any combination of the character selections work.
If 'Cancel' is selected for every prompt, then a pop-up appears to say 'You must select at least one option'.

When an appropriate length and at least one character type is selected, the generated password shows in the box.

# Technologies used

- HTML, CSS & Javascript (Functions, If/Else statements, For Loops, Prompts/Alerts)

# Areas of Improvement

- If the user does not select any of the character options, then a prompt appears to tell the user that they must pick one option. Nothing happens after this. The user would have to click 'OK' and the 'Generate' button again. I would like to add a 'Try Again' button directly on the prompt.

- If I put in a number that is out of the range, e.g. 5000, then a prompt appears reminding the user to pick between 8 and 128 characters. This prompt has a text box, so the user can add a new number within range. However, if I type 5000 again, the application will then continue to show the prompts for special characters - this should not happen. However, if the user selects the character criteria, a password will not generate.

- If I inputs a number out of the range, just like above, but then add a number within range to the second prompt box, then a password should generate after selecting the character criteria. However, it doesn't. I need to replace this prompt box with an alert and add a button to 'Try Again'.

- If the user types a number figure e.g. 10 - then this 'string' will get converted to a number in the code. However, if they type letters e.g. ten - then the prompt saying 'Password must be at least 8 and under 128 characters lost' appears. This could be confusing to the user, as they will think that 'ten' fits the criteria. The prompt does not specify that the user must type numbers.

# Conclusion

To conclude, this was a very exciting and challenging task. I am looking forward to improving the appearance of this page and the functionality of my code as my skills develop.
