# README

# Professional Development Tracker
_Professional Development Tracker_ (PDT) is an app to help your staff track their professional development via learning event logs. It is built with an API-only Ruby on Rails back-end and a React.js front-end. The back-end operates with complete autonomy for easy integration with any front-end framework.

## Installation

1. Clone or download the repo: https://github.com/cyantis/prof_dev_tracker_v3

2. In your terminal, navigate to the app's directory and execute:

    $ bundle

to install the Rails dependencies.

3. To create and seed the database, type:

    $ rails db:migrate

    and then, if you wish to make use of some basic learning categories and see what the app looks like when populated with a bit of data:

    $ rails db:seed

4. To setup React, navigate to the `pdt-app` folder inside the top-level directory. Then execute:

    $ npm install

5. _PDT_ is setup to run with Heroku, which requires Yarn. Instructions for installing Yarn can be found here: https://yarnpkg.com/en/

6. Launch a local server from the top-level directory by executing:

    $ heroku local -f Procfile.dev

The _PDT_ site should then open up automatically in a browser, but you can always access it by visiting `http://localhost:3000`in your browser. The back-end JSON data can be accessed via `http://localhost:3001`. These ports can be changed in the `Procfile.dev` file.

To end the server session, type `ctrl-c`.

## Usage

First time users ("employees") will need to create an account by supplying info such as username, password, location, and manager. Returning employees login via their username and password.

Once logged in, the latest learning "events"--organization-wide--will be displayed. From this home page, the employee can:

1. Visit their `Learning Profile`, which includes info about the employee, as well as their learning log. For employees that manage others, they will also see a list of the employees they oversee, including their learning logs.
2. `Log New Learning`, which tracks the title of the learning "event", the date, the type of learning (e.g "conference attendee" or "book"), a description of the employee's learning experience, and a checkbox to indicate whether or not they have shared some of their insights with their team.
3. Edit their profile, which includes the ability change their personal information, update their password, and select a new location and/or manager. Access this feature my clicking on the profile menu in the top-right corner.
4. Explore other employees' learning.

Each employee can create learning "events" and edit or delete these. Whether creating or editing a learning "event", employees always have the opportunity to `Cancel` any additions/changes. Employees also have the ability to comment on their and others' learning events.

Clicking `Logout` from anywhere in the app ends the employee's session.

## For Developers

The JSON feeds for easy API harvesting can be found on these pages:

1. /api/v1/employees
2. /api/v1/employees/:id
3. /api/v1/events
4. /api/v1/events/:id
5. /api/v1/locations
6. /api/v1/comments

## Contributing

Bug reports and pull requests are welcome on GitHub at https://github.com/cyantis/prof_dev_tracker_v3.

## License

The gem is available as open source under the terms of the [MIT License](https://opensource.org/licenses/MIT).
