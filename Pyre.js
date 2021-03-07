alert('Hello Word');

var mentorProfiles = require('./mentor_profiles.json');
var menteeProfiles = require('./mentee_profiles.json');

var match = Array(mentorProfiles.profiles.length).fill(0);

var mentorId;
var menteeId;
var spec;

for (menteeId = 0;menteeId < menteeProfiles.profiles.length; menteeId++)
{
    for (mentorId = 0;mentorId < mentorProfiles.profiles.length; mentorId++)
    {
        var addPoints = 100;
        for (spec = 0; spec < mentorProfiles.profiles[mentorId].specialization.length; spec++)
        {
            if (menteeProfiles.profiles[menteeId].specialization[spec] == mentorProfiles.profiles[mentorId].specialization[spec])
            {
                match[mentorId] += addPoints;
            }
            addPoints-=20;
        }
    }
}

var mentor1 = match.indexOf(Math.max(match));
alert(mentor1);
