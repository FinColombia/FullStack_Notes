# FullStack_Notes

## Overview of DevOps

* 52% of Fortune 500 companies have disappeared since the year 2000
* It's not a matter of if you get disrupted, it's a matter of when.
* Disruption comes from Digitization+ Business Model
* Uber= Payment + Smartphone + GPS >>all individually old technology combined
* The best camera you need is the one you have with you.
* Technology is the enabler of innovation, not the driver.
* DevOps involve unlearning what you've learnt
* DevOps is all about MTTR (Mean Time To Recovery)
* DevOps is not about tools, it is about trust, transparency, and discipline across teams

## Definition of Devops
* It is an overused buzzword
* From inception (2009)- Patrick Debois coined the term Deveopment and Operations, an extension of agile methods aiming to enhance process of software delivery.
* DevOps is a cultural change following recognition that development and operations must work together.
* Delivering software rapidly and continuously
* Involves- automation, application design, culture, programmable platform

## Devops isn't
* A separate team
* Just combining dev and ops
* A set of tools
* Just automation

## Application Evolution
* Delivery- Waterfall> Agile> DevOps
* Architecture- Monoliths> SOA> Microservices
* Infrastructure- Physical Servers> VMS> Containers

## Essential Characteristics of Devops
* Agility= DevOps, Microservices, Containers
  <img width="671.5" height="331" alt="Screenshot 2025-12-06 at 5 01 14 PM" src="https://github.com/user-attachments/assets/5c350c1d-425d-474b-adbb-7b0837c833ee" />
* 3 Dimensions of DevOps- Culture, Methods, Tools
* Changing culture- change way people think (sharing, social coding), change the way they work (small batches and using test-driven and behavior-driven development), the way they are organized and measured (system, method)
* Culture has the biggest impact on DevOps

## Problems with Waterfall
* No provision for changing requirements
* No idea if it works till the end
* Each step ends when the next begins
* Mistakes found later are expensive to fix
* Long time between releases
* Teams working separately unaware of impact on one another
* People further away from the code are expected to run it.

## XP, Agile and Beyond
* XP- extreme programming (1 of the first agile methdos) introduced in 1996 by Kent Beck
* Interactive approach to programming
* Introduced concepts such as pair programming
* Agile manifesto- individuals and interactions over processes and tools, working software over complete doc, responding to change vs following plan
* Agile- self-organizing functional teams
* Planning is adaptive- next 2 weeks and then next 2 weeks
* Agile alone isn't good enough

## Brief History of DevOps
* 2007- Patrick Debois Devs and Ops
* 2008- BoF Agile Infrastructure conference Andrew Shafer
* 2009- John Allspaw of Flickr talked at Velocity 2009 about 10+ deploys per day
* 2009- First DevOpsDays conference Patrick Debois in Ghent Belgium
* 2010- Book title Continuous Delivery by Jez Humble and David Farley
* 2013- Book titled The Pheonix Project lean manufacturing principles
* 2015- State of DevOps Report from DevOps Research and Assessment org- experimental approach to project dev
* 2016- DevOps Handbook- book to read
* 2019- 40 DevOpsDays events in 21 countries 
<img width="661" height="307" alt="Screenshot 2025-12-06 at 5 29 10 PM" src="https://github.com/user-attachments/assets/2f2e94b5-520b-4aa8-8de0-9c22798ecf19" />

## Social Coding Principles
* Open source practice for internal teams
* Repos are public
* Get over "this is my code"
* Controled by a repo owner
* Discuss with the repo owner 
<img width="456" height="313.5" alt="Screenshot 2025-12-06 at 5 38 33 PM" src="https://github.com/user-attachments/assets/65b454b9-0106-42e1-92ce-b1cc3fb49171" />
* Driver typing, navigator observing, thinking about what comes next
* Pair programming- defects found earlier, pair junior with senior for example
* 2 sets of eyes on every line of code- vacation of one person, another person understands

## Git Repo Guidelines
* Create a Repo for every component
* 1 Component per Repo
* New bracnh for every issue
* Don't merge your own pull request
  <img width="560" height="316" alt="Screenshot 2025-12-06 at 5 42 30 PM" src="https://github.com/user-attachments/assets/5fc09076-03af-4ab4-a56f-43ce8ae8e4a0" />
* Working in Small Batches: Goal is to have a first finished product, get feedback
* Features should be completable in 1 week, 1 sprint

## MVP
* Minimum thing you can do to test a value hypothesis
* Not Phase 1 of the product
* MVP is all about what can I learn?
* Decide whether to **pivot** or to **perseveere**
* MVP is an experiment to find value for the customer; this experiment might fail, but learn from it

## TDD- Test Driven Development
* If it's worth building, it's worth testing- Scott Ambler
* Test case drives development, write test cases first
* Testing saves you time
<img width="729" height="616" alt="Screenshot 2025-12-06 at 5 54 40 PM" src="https://github.com/user-attachments/assets/c38b5aa8-ee63-4261-9872-75f6845e2426" />
* Automating all test cases allows you to automate CI/CD pipelines
* Continuous Integration(merge branches), Continuous Delivery(test) and Continuous Deployment(to user)

## Behaviour Driven Development
* Behaviour of system from the user's perspective
* BDD checks you're building the right thing, TDD checks you're building it right
* Gherkin syntax- Given (context), When (action), Then (outcome) And (continuation)
* User story syntax- As a (role), I need (requirements), So that (purpose/business case)
* BDD Example- feature(name), user story, Scenario (Gherkin syntax)
<img width="1155" height="600" alt="Screenshot 2025-12-06 at 6 13 06 PM" src="https://github.com/user-attachments/assets/313c5288-260b-488e-9fd4-b3dcbfcb3350" />
* Taylorism = adoption of command and control, following the industrial revolutino
* 

