# SDLC
  1. Planning
     * requirements gathering
     * creation of SRC
  2. Design
    * architecture
    * design doc
  3. Development
    * coding
  4. Testing- ID and fix bugs 
    * unit
    * integration
    * system
    * acceptance 
  5. Deployment- release code to production environment
  6. Maintenance 


## Releases 
  1. Alpha- select stakeholders 
    * may contain errors 
    * preview of functioning version 
    * design changes may occur 
  2. Beta- all stakeholders 
    * user testing 
    * meets requirements 
  3. General availability- all users 
    * stable 

## Documentation 
  1. user
  2. system 

## Requirements 
  1. Systems requirement specifications SySRS
  2. Software requirement specification SRS 
    * Purpose and scope statement
    * purpose who will have access to SRS and how they'll use it 
    * scope benefits, goals, objs
    * constraints, assumptions dependencies
    * how product must operate under limitations such as hardware
    * assumptions OS/Hardware
  3. Functional
  4. External- in terms of interaction with other systems such as other hardware, other software, other infrastructure
  5. Non-functional requirements- security, quality standards, safety


## Software Versions
Some can be semantic: 4 parts
1. Part 1- major changes
2. Part 2- Minor changes
3. Part 3- Minor patches or bug fixes
4. Part 4- Build number or built date

Backward compabulity= files from older version working on new version

## Software Testing
* Integrating quality checks throughout
* Team write test cases to test
* Test case contains steps, input, data, expected output
* Written after req are finalized

## Types of Software Testing
1. Functional- black-box, testing functional reqs, manualy or automated tools,
       * tests System Under Test (SUT) i.e. input, output
3. Non-functional
       * Testing for attributes including availablity, scalability, performance, security
       * How does app behave under stress, different OS, disaster recoverey, many users,
         instrucitions inconsistent with expected behaviour
       * How secure is the app
5. Regression
       * Confirm changes don't break app
       * Occurs after fixes such as req change/deffects fix
       * Frequent effects, frequent changes, failed text cases, etc

## Testing Levels
1. Unit- test a module during build phase of SDLC, check for errors before integrating with other modules
2. Integration- test the combination of 2 or more modules, expose bug in interaction of modules
3. System- after integration, in a staging env similar to productino
4. Acceptance- does system satisfy needs of users and other stakeholders

## Formats of documentation
1. Written
2. Video
3. Graphical

## Types of Product Documentation
1. Requirement- by software acrhictect, dev team
3. Desgin
4. Technical- include comments, 
5. QA- all docs pertaining to testing team, tracability matrices
6. User- faq, help guides, installation guides,
7. SOPs- Standard Operation Procedures- flowcharts, heirachal or step by step

## Roles in SE Projects
1. PM/Scrum Master
2. Stakeholder
3. System/Software Architect
4. UX Designer
5. Developer
6. Tester/QA Engineer
7. Site Reliability/Ops Engineer
8. Product Manager/Product Owner
9. Technical writer/info developer

## App Development Tools
1. Version Control- be able to restore earlier versions, merge works of others
2. Libraries- reusable code functions
3. Frameworks- standard way to build and develop e.g. Angular JS, Vue JS, Django

## Other App Dev Tools
* CI/CD
* Build Tools- source code into binary, manage tendencies, organize source code, set compile flags
* Examples of build tools
    - webpack bundler for javascript,
    - Babel,
    - Web Assembly
* Packages- collect all files and bundle them
    - include metadata, instructions, other packages needed
* Package Managers
    - find, install, remove packages
    - Linux- Debian Package Management System, Red Hat Package Manager
    - Windows- Chocolatey
    - Android- Package Manager
    - MacOS- Homebrew, MacPorts
 
## Software Stacks
* Combination of technologies- higher interact with users, lower with system
* Example
    - Python-Django
    - Ruby on Rails
    - ASP-NET
    - LAMP, MEAN, MEVN, MERN
* LAMP- Linux Apache, MySQL, PHP
* MEAN- Mongo DB, Express.js, Angular.js, Node.js   platform agnostic, free, open source all use javascript

## Interpreted and Compiled Languages
* 

    

