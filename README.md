# US_phone_number_validator
Application that validates whether a given phone number is a legitimate US phone number. This was my attempt at the third certification project for the "JavaScript Algorithms and Data Structures Certification" course provided by freecodecamp. As with all other certification projects in this course, I had to write the HTML, CSS, and JavaScript files from scratch, with no hand-holding asides from an outline of the project requirements. Try it out here: https://robmad93.github.io/US_phone_number_validator/

## Functionality
### 1. Phone Number Validation
Valid Formats:
The validator supports various valid formats of US phone numbers, including:
- 1 555-555-5555
- 1 (555) 555-5555
- 5555555555
- 555-555-5555
- (555)555-5555
- 1(555)555-5555
- 1 555 555 5555
- 1 456 789 4444


Invalid Formats:
The validator will flag phone numbers as invalid if they do not follow one of the supported formats. Some examples of invalid numbers:
- 5555555
- 555-5555
- 123**&!!asdf#
- 2 757 622-7382
- 555)-555-5555
- 555-555-5555
- 0 (757) 622-7382
- 27576227382
- 2(757)6227382


### 2. Buttons
Check Button:

When clicked, the Check button validates the phone number input in the user-input field.
If no number is entered, an alert will prompt the user to provide a phone number.


Clear Button:

Clears the results from the results-div element, allowing the user to start fresh.


### 3. Results Display
After the user clicks the Check button, the result is displayed below the input field:
If the number is valid, the message will read: "Valid US number: [number]".
If the number is invalid, the message will read: "Invalid US number: [number]".


### 4. Interactive GIF
The page includes a funny GIF (a monkey with a phone) that is displayed below the phone number input field, just for a bit of humour.


## Screenshot
![phone_validator](https://github.com/user-attachments/assets/43ac4cfc-8498-4105-b9b3-90f99209f491)


## Acknowledgements
A special thanks to freecodecamp.org for the project idea and guidelines.
Also, thanks to giphy.com for the gif used.
