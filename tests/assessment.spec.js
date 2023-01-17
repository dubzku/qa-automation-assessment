// @ts-check
const { test, expect } = require('@playwright/test');

const eventbriteOrgId = '1349504162093';

// test for creating a new event within my org in eventbrite 
  test ('should create new event', async ({ request }) => {
    const newEvent = await request.post(`v3/organizations/${eventbriteOrgId}/events/`, {
      data: {
        'event.name.html': 'QA Automation Test Event',
        'event.start.timezone': 'America/Los_Angeles',
        'event.start.utc': '2023-12-01T02:00:00Z',
        'event.end.utc': '2023-12-02T02:00:00Z',
        'event.end.timezone': 'America/Los_Angeles',
        'event.currency': 'USD',
      }
    });
    expect(newEvent.ok()).toBeTruthy();
    expect(newEvent.status()).toBe(200);
  
    let apiResults = await newEvent.json();
    let newEventId = apiResults.id;
  
    // validates that the created event exists, via the event ID
    const createdEvent = await request.get(`v3/events/${newEventId}/`);
    expect(createdEvent.ok()).toBeTruthy();

    // update event description 
    const updateDescription = await request.post(`v3/events/${newEventId}/`, {
      data: {
        'event.description.html': 'Description of QA Automation Test Event',
      }
    });
    expect(updateDescription.ok()).toBeTruthy();

    // validates that the event description has been updated
    expect(await updateDescription.json()).toHaveProperty('description.html', 'Description of QA Automation Test Event');
  
  });

  




