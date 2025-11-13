# CS408 Final Project

**Semester:** Fall 2025  
**Author:** Zachary DiNucci

---

## Project Overview

### Theme
The general theme of this project is to be a Wargaming List builder and photo sharing application, for example Warhammer 40k. However, I hope to be able to make it more game agnostic and be accessable to other smaller games. The theme of the application will be a mix between photo gallery and inventory where users can make a list and then also share the photos of the models in that list. This will likely be in a table on the page which will be updated based on user input from a series of either buttons to select options.

### Purpose
The Purpose of this application is to make the communication of lists easier and nicer looking while also letting people share images of the models they will be bringing. The three current solutions out there have a mixture of shortcomings which this hopes to address. The official Warhammer application doesn't support desktops and is only mobile, along with limiting the user to one list unless they have a subscription. The next best solution is not the best looking and is only really good for 1 game where as my playgroup plays multiple different games. Also, like the official app, it doesn't allow sharing of images. These are all things I hope to allow or fix in this application. 

### Target Audience
The Target Audience for this is myself and my friends who I play Wargames with. We currently have a discord where we can share photo's and lists, however having a central place for these features will allow easier communication of expectations along with just showing off paint jobs and builds you are proud of. This would also help with the problem where the people in my group are split between the 3 different applications for sharing lists and some apps are not as good as others for specifically sharing their list.

---

## Features

### Core Functionality
- **Feature 1:** The User should be able to input their army info within a few fields including, description, rules, and sub rules.  
- **Feature 2:** The users will be able to input their unit info including stats and rules.
- **Feature 3:** The users will be able to build a list using the rules they defined. For example if an army has a unit limit, think max 3 of a specific unit, the application should take that into account
- **Feature 4:** Upload a photo to represent the unit allowing sharing of the paint jobs done.
- **Feature 5:** Share the list they made. This might be done through a link or something similar.

### Data Management
The application will manage the following user-generated data each stored within 4 (Hopefully) tables:
- User generated army rules and unit rules, with army rules and Unit rules being their own tables. 
- A List of Units, each list will either be a part of 1 table or each one will be a table. I Am thinking the first will be better, however, I need to do more research into this.
- Photos of the units. These will likely be stored in its own table

---

## Technical Stack

### Frontend
- **HTML5** - Structure and content
- **CSS3** - Styling and layout
- **JavaScript** - Client-side interactivity and dynamic content

### Backend
- **AWS** - Cloud infrastructure through Boise States access given to us.

---

## Stretch Goals

Once core functionality is complete, the following features would enhance the project:

1. **[Stretch Goal 1]** - The first strech goal will be some kind of login system. Most likely this will be a simple Username/password system since no personal data will/should be saved to this application and so we shouldn't need things like 2FA.
2. **[Stretch Goal 2]** - Additional Army Custimization - Right now my plan for army rules will be a few paragraph fields. However, if I have time I would like to add some more specificity. For example, in many different games you can buy upgrades based on a subfaction. I would love to have something like that. 
3. **[Stretch Goal 3]** - Additional unit Custimization - In Most Wargames units get a pool of weapons they can take and might cost more to take. in the begining I will have this be a simple paragraph field, however I would like to expand that eventually.