# [Tetrahedron.gay](https:tetrahedron.gay)

Tetrahedron.gay is a mental health group informally continuing and expanding upon the structured partial hospitalization program the Triangle Program.

All functions of Tetrahedron.gay are opt-in and only limited by the efficacy of our mutual aid.  Give your time and attention freely, it will be reciprocated.

### Users, accounts, bots, calendars, emails, admins, passwords:

Passwords are managed by a shared keepass database contained in this g-suite account.  Use the “upload new version” feature in google drive to update this database.   
The Discord account is managed by discord user tetrahedron.gay.  This user is connected to the admin@tetrahedron.gay g-suite user, the password for this user is in the keepass database.
Roles and role menus are managed by the YAGPDB bot.  Sign into this bot using the admin discord account here.
Two Google calendars are controlled by admin@tetarhedron.gay, “Triangle” and “Tetrahedron”.  These may not be useful in the long run, events may be best left to organically form in the Discord group.  Currently events added to the Tetrahedron google calendar will auto populate the server’s Discord Events via Chronicle bot.  Admins can sign in and manage this bot in a similar fashion to YAGPDB.

Current and planned web stack:

The website tetrahedron.gay is written in SvelteKit (Typescript) using the Skeleton UI tailwind component library.  It is currently hosted on Vercel on a free tier under jess’s personal account.  
Jess owns the top level domain, if someone wants to create a transferable account with dreamhost or another registrar (as well as hosting accounts, github org etc) she’d be glad to hand off the whois registration and development-related service accounts to the group.  At some point Jess will want to move to Bun runtime, dockerize the application and host it on Koyeb for simplicity and to get this stuff off her personal accounts.  Login and wakeup service features are planned, Jess will probably use PocketBase and Mailgun for these if she gets around to it.
