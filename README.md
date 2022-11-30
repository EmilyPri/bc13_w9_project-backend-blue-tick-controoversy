██████╗░██╗░░░░░██╗░░░██╗███████╗  ████████╗██╗░█████╗░██╗░░██╗
██╔══██╗██║░░░░░██║░░░██║██╔════╝  ╚══██╔══╝██║██╔══██╗██║░██╔╝
██████╦╝██║░░░░░██║░░░██║█████╗░░  ░░░██║░░░██║██║░░╚═╝█████═╝░
██╔══██╗██║░░░░░██║░░░██║██╔══╝░░  ░░░██║░░░██║██║░░██╗██╔═██╗░
██████╦╝███████╗╚██████╔╝███████╗  ░░░██║░░░██║╚█████╔╝██║░╚██╗
╚═════╝░╚══════╝░╚═════╝░╚══════╝  ░░░╚═╝░░░╚═╝░╚════╝░╚═╝░░╚═╝

░█████╗░░█████╗░███╗░░██╗████████╗██████╗░░█████╗░██╗░░░██╗███████╗██████╗░░██████╗██╗░░░██╗
██╔══██╗██╔══██╗████╗░██║╚══██╔══╝██╔══██╗██╔══██╗██║░░░██║██╔════╝██╔══██╗██╔════╝╚██╗░██╔╝
██║░░╚═╝██║░░██║██╔██╗██║░░░██║░░░██████╔╝██║░░██║╚██╗░██╔╝█████╗░░██████╔╝╚█████╗░░╚████╔╝░
██║░░██╗██║░░██║██║╚████║░░░██║░░░██╔══██╗██║░░██║░╚████╔╝░██╔══╝░░██╔══██╗░╚═══██╗░░╚██╔╝░░
╚█████╔╝╚█████╔╝██║░╚███║░░░██║░░░██║░░██║╚█████╔╝░░╚██╔╝░░███████╗██║░░██║██████╔╝░░░██║░░░
░╚════╝░░╚════╝░╚═╝░░╚══╝░░░╚═╝░░░╚═╝░░╚═╝░╚════╝░░░░╚═╝░░░╚══════╝╚═╝░░╚═╝╚═════╝░░░░╚═╝░░░

This is the backend for the "Bootcamper Links Library" app built by Miko, Abdi, Omar and Emily.

It consists of routes, models and a .env file which connects to an external database hosted by a cloud SQL 
database host (we used Elephant SQL).

There are scripts which can be found in the pacakge.json. When implemented, these will repopulate or clear the 
database. Please note that we used PostGres SQL.

Our API contains routes which:
- Search for a topic by week (in the frontend, each route translates to data being displayed on a 'card', 
which is a React component).
- Search for a topic by coding language.
- Post a new card (consisting of information like link to website, week of the course, language and a short
desription.)
- This is the shape of one of our cards:
{
                link_id: expect.any(Number),
                link: expect.any(String),
                title: expect.any(String),
                description: expect.any(String),
                week: expect.any(Number),
                subject: expect.any(String),
                subject_id: expect.any(Number),
                icon: expect.any(String)
             }
- There is also a patch request, which updates the number of 'likes' a card has collected on the frontend.

Our backend also contains and full testing suite, which can be implemented using npm t. 
