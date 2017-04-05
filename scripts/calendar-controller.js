$(document).ready(function() {
  let studyNights = [
    {
      title: 'Study Night',
      start: '2017-04-05'
    },
    {
      title: 'Study Night',
      start: '2017-04-12'
    },
    {
      title: 'Study Night',
      start: '2017-04-19'
    },
    {
      title: 'Study Night (Grilled Cheese)',
      start: '2017-04-26'
    },
    {
      title: 'Study Night',
      start: '2017-05-03'
    },
    {
      title: 'Study Night',
      start: '2017-05-10'
    },
    {
      title: 'Study Night',
      start: '2017-05-17'
    },
    {
      title: 'Study Night',
      start: '2017-05-24'
    },
    {
      title: 'Study Night (Pancakes)',
      start: '2017-05-31'
    }
  ];

  let unplugAndPlays = [
    {
      title: 'Astle',
      start: '2017-04-13'
    },
    {
      title: 'Mary',
      start: '2017-04-20'
    },
    {
      title: 'Jorge',
      start: '2017-04-27'
    },
    {
      title: 'Althouse',
      start: '2017-05-04'
    },
    {
      title: 'Mike',
      start: '2017-05-11'
    },
    {
      title: 'Little',
      start: '2017-05-18'
    },
    {
      title: 'JP',
      start: '2017-05-25'
    }
  ]

  let frexEvents = [
    {
      title: 'Nacho',
      start: '2017-04-14'
    }
  ];

  let mainEvents = [
    {
      title: 'Week 1 Done',
      start: '2017-04-07'
    }
  ];

  let outsideEvents = [
    {
      title: 'Esports Tourney',
      start: '2017-04-15'
    }
  ]

  let allEvents = [];
  allEvents = allEvents.concat(studyNights);
  allEvents = allEvents.concat(unplugAndPlays);
  allEvents = allEvents.concat(frexEvents);
  allEvents = allEvents.concat(mainEvents);
  allEvents = allEvents.concat(outsideEvents);

  $('#calendar').fullCalendar({
    events: allEvents
  });
});
