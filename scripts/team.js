/**
	Title: team.js
    Author: Jocelyn Dupuis
    Date: 10/07/2023
    Description: MongoDB Shell Scripts for the team collection
 */


const db = db.getSiblingDB('web420DB');

/** 
Drops teams collection if it exists already
*/
db.teams.drop();

/** 
Initialize teams 1 with players
 */
const team1 = {
    name: 'Buffalo Bills',
    mascot: 'Billy Buffalo',
    players: [
        {
            firstName: 'Josh',
            lastName: 'Allen',
            salary: 28000000
        },
        {
            firstName: 'Stefon',
            lastName: 'Diggs',
            salary: 24415000
        },
        {
            firstName: 'Ed',
            lastName: 'Oliver',
            salary: 16778000
        },
        {
            firstName: 'Von',
            lastName: 'Miller',
            salary: 15000000
        },
        {
            firstName: 'Matt',
            lastName: 'Milano',
            salary: 13620000
        }
    ]
};

/** 
Initialize teams 2 with players
 */
const team2 = {
    name: 'San Francisco 49ers',
    mascot: 'Sourdough Sam',
    players: [
        {
            firstName: 'Nick',
            lastName: 'Bosa',
            salary: 51010000
        },
        {
            firstName: 'Javon',
            lastName: 'Hargrave',
            salary: 25015000
        },
        {
            firstName: 'Trent',
            lastName: 'Williams',
            salary: 20250000
        },
        {
            firstName: 'Arik',
            lastName: 'Armstead',
            salary: 16740000
        },
        {
            firstName: 'Charvarius',
            lastName: 'Ward',
            salary: 14000000
        }
    ]
};

/** 
Initialize teams 3 with players
 */
const team3 = {
    name: 'Philadelphia Eagles',
    mascot: 'Swoop',
    players: [
        {
            firstName: 'Jalen',
            lastName: 'Hurts',
            salary: 24304000
        },
        {
            firstName: 'Lane',
            lastName: 'Reddick',
            salary: 20000000
        },
        {
            firstName: 'Haason',
            lastName: 'Reddick',
            salary: 16500000
        },
        {
            firstName: 'Jordan',
            lastName: 'Mailata',
            salary: 15000000
        },
        {
            firstName: 'Dallas',
            lastName: 'Goedert',
            salary: 14250000
        }
    ]
};

/** 
Initialize teams 4 with players
 */
const team4 = {
    name: 'Las Vegas Raiders',
    mascot: 'Raider Rusher',
    players: [
        {
            firstName: 'Davante',
            lastName: 'Adams',
            salary: 26640000
        },
        {
            firstName: 'Jimmy',
            lastName: 'Garoppolo',
            salary: 24250000
        },
        {
            firstName: 'Maxx',
            lastName: 'Crosby',
            salary: 17927000
        },
        {
            firstName: 'Tyree',
            lastName: 'Wilson',
            salary: 15935816
        },
        {
            firstName: 'Kolton',
            lastName: 'Miller',
            salary: 14275000
        }
    ]
};

/** 
Initialize teams 5 with players
 */
const team5 = {
    name: 'Kansas City Chiefs',
    mascot: 'KC Wolf',
    players: [
        {
            firstName: 'Patrick',
            lastName: 'Mahomes',
            salary: 59350000
        },
        {
            firstName: 'Jawaan',
            lastName: 'Taylor',
            salary: 20000000
        },
        {
            firstName: 'Chris',
            lastName: 'Jones',
            salary: 18416667
        },
        {
            firstName: 'Joe',
            lastName: 'Thuney',
            salary: 15500000
        },
        {
            firstName: 'Travis',
            lastName: 'Kelce',
            salary: 12250000
        }
    ]
};

// Inserts team into collection teams
db.teams.insertOne(team1);
db.teams.insertOne(team2);
db.teams.insertOne(team3);
db.teams.insertOne(team4);
db.teams.insertOne(team5);

// Log success message
print('Database initialized with teams and players data');