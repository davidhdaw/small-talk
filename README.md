# small Talk
#### A Turing Mod 3 Group Project from [David Daw](https://github.com/davidhdaw), [Masaki Kleinkopf](https://github.com/masaki-kleinkopf) and [Cyanne Jones](https://github.com/Cyanne-Jones) with the goal of learning a completely new (to us) technology of Vue.js!

After Covid, all of us need a little social help when gathering at a party. Sometimes you can feel uncomfortable, and need a little *boost*. We present *small Talk*! An app to give you a little boost in the form of savable fun facts, jokes and drink recipes! Styled for mobile, this app is ready to give you a helping hand at your next shindig, and in case all else fails, press the "I gotta get out of here!" button to get an excuse generated and a text message ring tone played so it seems like you just got a very important text message that will allow you a very graceful exit from a very awkward party. 

### How to access the application:
#### Go to this [link](https://small-talk-beta.vercel.app/) where the application is deployed on Vercel

#### Or if you prefer to access the code as well as the application follow these *installation instructions*

- Clone down this repository into your local machine
- `cd` into the root directory of the repo
- Run `npm i` in your console to install the dependencies
- Run `npm run dev` in the console to start the sever and access the application from your browser

#### Usage 

Now that you've got access to *small Talk*, feel free to get a new booster by clicking the "Give me a new [category]" buttons, press the star button to save the booster to view later. To view your saved boosters, press the "Saved Party Boosters" button and navigate to the category you're looking for! If you need to get the heck out of that party ASAP, press the "I gotta get out of here!" button and a new excuse will pop up with a ringtone sound to allow you to get out with (hopefully) no questions asked.

#### Testing Instructions
In your terminal, run `npm run cypress` to see that all user flows have been tested and the app is passing all tests!

#### See it in action 

Getting boosters from our api calls.  
![Get random boosters!](/src/assets/smallTalk1.gif "random boosters")  
Saving those boosters for later viewing.  
![Save random boosters!](/src/assets/smallTalk2.gif "save boosters")

#### Technologies used:
- Vue 3
- HTML5 
- CSS3
- Vue Router
- Pinia State Management
- Local Storage
- Proxy server deployed on Heroku
- Fetch API
- Cypress E2E testing
- [Figma](https://www.figma.com/file/5bYEkeECdvBnXR8QLTJzdJ/AwkwardPartyApp?node-id=0%3A1)
- [Trello project boards](https://trello.com/b/gGQtdn9i/stretch-tech)
- Vercel deployment

#### Group Member Reflections:

##### Massaki Kleinkopf:
This was a great project to test our own learning capacity. We had never used Vue before, and our only other framework experience was React using class based components. We decided to use Vue 3, though we were a bit uncertain if we should use Vue 2. We ended up learning the Composition API as this seemed like a really streamlined way of working. Overall, it was eye opening to be able to successfully learn a new framework in a week. There were definitely some differences in syntax, but the most important thing I learned is that front-end frameworks are very similar to each other, and they make it easy to render the UI with reusable components. I feel really confident if I need to learn a new framework such as Angular or Svelte in the future, as I am more comfortable with how front-end frameworks work. Cyanne and David were incredibly helpful to work with, and we leaned on each other with a lot of group coding where we fixed bugs that would have had me stumped for hours.
##### David Daw:
I really enjoyed building out this project using Vue vs React. The architecture of Small Talk really let us focus on the positives aspects of Vue like its simple syntax for attaching handlers and keeping track of state. Even implementing global state using Pinia was a largely painless process. If I were to pick a major downside to Vue it would be the number of different syntax options while Vue is migrating from Vue 2 to Vue 3 (composition vs options api etc). I was really blessed to have smart and flexible partners in Cyanne and Masaki but I can definitely see how the wealth of options available with Vue could be a double edged sword when it comes to project planning.

##### Cyanne Jones:
This project was an absolute blast to work on thanks to David and Masaki being the coolest project partners. I'm so happy with how this turned out, and it was so exciting learning a new technology to implement such a fun idea in. Coming from learning React as my first JS framework, there were many parts of Vue that felt really similar (like component based architecture), but a lot of things that felt brand new (like a single page component). I actually LOVED these single page components, and felt wildly organized having all the component's styling in the same .vue file and the component itself. No more rifling through your CSS folder looking for a component's styling just to make a small edit, close the file and do it all over again 5 inutes later because you need the component's text moved to the left 0.3rem to the right. I learned so much on this project and am so happy to have another framework under my belt. 